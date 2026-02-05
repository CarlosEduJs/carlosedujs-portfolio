import { useEffect, useState } from "react";
import type { Repo } from "@/types/repo";

export function useRepos() {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchRepos() {
			try {
				const res = await fetch("/api/github/pinned");
				if (!res.ok) throw new Error();

				const data = await res.json();
				setRepos(data);
			} catch {
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchRepos();
	}, []);

	return { repos, loading, error };
}
