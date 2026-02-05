import { HomeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContentProjects } from "@/components/content-projects";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Carlos Edu Js - Software Developer Portfolio",
	description:
		"Software enthusiast building projects with Go, JavaScript, TypeScript, React and more. Explore my portfolio and open source contributions.",
	keywords: [
		"Carlos Eduardo",
		"carlosedujs",
		"software developer",
		"frontend developer",
		"backend developer",
		"Go",
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"portfolio",
		"open source",
	],
	authors: [{ name: "Carlos Eduardo", url: "https://github.com/carlosedujs" }],
	creator: "Carlos Edu Js",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://carlosedujs-portfolio.vercel.app/",
		title: "Carlos Edu Js - Software Developer Portfolio",
		description:
			"Software enthusiast building projects with Go, JavaScript, TypeScript, React and more.",
		siteName: "Carlos Edu Js Portfolio",
		images: [
			{
				url: "/avatar.jpeg",
				width: 800,
				height: 800,
				alt: "Carlos Edu Js",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Carlos Edu Js - Software Developer Portfolio",
		description:
			"Software enthusiast building projects with Go, JavaScript, TypeScript, React and more.",
		creator: "@carlosedujs",
		images: ["/avatar.jpeg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const socialLinks = [
	{ name: "GitHub", url: "https://github.com/carlosedujs", icon: <FaGithub /> },
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/carlosedujs",
		icon: <FaLinkedin />,
	},
	{
		name: "Twitter",
		url: "https://twitter.com/carlosedujs",
		icon: <FaXTwitter />,
	},
];

export default function Page() {
	return (
		<div className="w-full max-w-7xl min-h-screen mx-auto flex flex-col gap-12 md:gap-6 py-4 px-4 md:py-8 md:px-6">
			<header className="flex items-center justify-between gap-12 md:gap-4">
				<HugeiconsIcon icon={HomeIcon} size={24} />
				<div className="flex items-center gap-2">
					<Link href="https://github.com/carlosedujs">
						<Button variant={"default"} size={"sm"}>
							Go To Me Github
							<FaGithub />
						</Button>
					</Link>
					<ToggleTheme />
				</div>
			</header>
			<div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
				<aside className="w-full lg:w-96 flex flex-col gap-12 md:gap-6">
					<div className="flex flex-col gap-0.5">
						<Image
							src="/avatar.jpeg"
							alt="avatar"
							width={32}
							height={32}
							className="rounded-full"
						/>
						<h2 className="text-lg font-medium">Carlos Edu Js</h2>
						<h3 className="text-sm font-medium text-muted-foreground">
							@carlosedujs
						</h3>
					</div>
					<hr />
					<div className="flex flex-col gap-2">
						<h2 className="text-lg font-medium">about me</h2>
						<p className="text-justify">
							Hello, my name is Carlos Eduardo. Thank you for visiting. I'm a
							software enthusiast who doesn't care much about labels, frontend,
							backend, low-level or high-level. If it involves building things,
							I'm in. Here you will find projects using Go, JavaScript,
							TypeScript, React and more. Currently, I'm attending university,
							but my first steps started long before that - curiosity,
							experimentation and code have been part of my life since
							childhood.
						</p>
					</div>
					<hr />
					<div className="flex flex-col gap-2">
						<h2 className="text-lg font-medium">links</h2>
						<div className="flex flex-col gap-1">
							{socialLinks.map((link) => (
								<Link
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										variant={"link"}
										size={"sm"}
										className="justify-start gap-2 pl-0"
									>
										{link.icon}
										<span>{link.name}</span>
									</Button>
								</Link>
							))}
						</div>
					</div>
				</aside>

				<ContentProjects />
			</div>
		</div>
	);
}
