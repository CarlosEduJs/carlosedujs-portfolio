"use client";

import {
	AllBookmarkFreeIcons,
	Loading03FreeIcons,
	Star,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { useRepos } from "@/hooks/useRepos";
import type { Repo } from "@/types/repo";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ContentProjects() {
	const { repos, loading } = useRepos();
	const [tab, setTab] = useState("all");

	if (loading)
		return (
			<HugeiconsIcon
				icon={Loading03FreeIcons}
				size={24}
				className="animate-spin"
			/>
		);

	const filteredRepos = filterReposByTab(repos, tab);

	return (
		<Tabs value={tab} onValueChange={setTab} className="w-full">
			<TabsList variant="line" className="mb-4">
				<TabsTrigger value="all">
					<HugeiconsIcon icon={AllBookmarkFreeIcons} size={16} /> All
				</TabsTrigger>
				<TabsTrigger value="typescript">
					<BiLogoTypescript size={16} /> Typescript
				</TabsTrigger>
				<TabsTrigger value="go">
					<FaGolang size={16} /> Golang
				</TabsTrigger>
			</TabsList>

			<TabsContent value={tab}>
				<div className="grid gap-4 sm:grid-cols-2">
					{filteredRepos.map((repo) => (
						<Card key={repo.name}>
							<CardHeader>
								<CardTitle>{repo.name}</CardTitle>
								<CardDescription>{repo.description}</CardDescription>
							</CardHeader>

							<CardContent>
								{repo.stack && repo.stack.length > 0 && (
									<div className="flex flex-wrap gap-2 mb-2">
										{repo.stack.map((lang, idx) => (
											<span
												key={lang.name + idx}
												className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-muted"
											>
												<span
													style={{
														backgroundColor: lang.color,
														width: 10,
														height: 10,
														borderRadius: "50%",
														display: "inline-block",
													}}
												/>
												{lang.name}
											</span>
										))}
									</div>
								)}
							</CardContent>

							<CardFooter className="flex justify-between py-1">
								<div className="flex items-center gap-2">
									<HugeiconsIcon icon={Star} size={16} fill="#FFEA00" />
									<p>{repo.stars} stars</p>
								</div>

								<Link href={repo.url} target="_blank" rel="noopener noreferrer">
									<Button variant={"default"} size={"sm"}>
										View Repo
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
}

function filterReposByTab(repos: Repo[], tab: string) {
	if (tab === "all") return repos;

	return repos.filter((repo) => repo.language?.name.toLowerCase() === tab);
}
