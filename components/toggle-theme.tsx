"use client";

import {
	AirplayLineIcon,
	Moon02Icon,
	SunIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ToggleTheme() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() =>
				setTheme(
					theme === "light" ? "dark" : theme === "dark" ? "system" : "light",
				)
			}
		>
			{theme === "light" ? (
				<HugeiconsIcon icon={SunIcon} size={20} />
			) : theme === "dark" ? (
				<HugeiconsIcon icon={Moon02Icon} size={20} />
			) : (
				<HugeiconsIcon icon={AirplayLineIcon} size={20} />
			)}
		</Button>
	);
}
