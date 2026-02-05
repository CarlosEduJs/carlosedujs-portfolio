type RepoLanguage = {
	name: string;
	color: string;
};

type Repo = {
	name: string;
	description: string | null;
	stars: number;
	url: string;
	language: RepoLanguage | null;
	stack?: RepoLanguage[];
};

export type { Repo, RepoLanguage };
