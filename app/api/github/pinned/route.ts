import { NextResponse } from "next/server";
import type { RepoLanguage } from "@/types/repo";

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
	const token = process.env.GITHUB_TOKEN;
	const username = process.env.GITHUB_USERNAME;

	if (!token || !username) {
		return NextResponse.json(
			{ error: "GitHub config missing" },
			{ status: 500 },
		);
	}

	const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              url
              primaryLanguage {
                name
                color
              }
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `;

	const response = await fetch(GITHUB_API, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query }),
		next: { revalidate: 60 * 60 },
	});

	if (!response.ok) {
		return NextResponse.json(
			{ error: "Failed to fetch pinned repos" },
			{ status: 500 },
		);
	}

	const json = await response.json();

	const repos = json.data.user.pinnedItems.nodes.map((repo: any) => ({
		name: repo.name,
		description: repo.description,
		stars: repo.stargazerCount,
		url: repo.url,
		language: repo.primaryLanguage as RepoLanguage,
		stack: repo.languages?.nodes || [],
	}));

	return NextResponse.json(repos);
}
