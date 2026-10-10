import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://nba-api-ts.riccardo.lol",
	integrations: [
		starlight({
			title: "nba-api-ts",
			description:
				"Typed TypeScript client for the NBA stats and live data APIs. 138 stats endpoints, 4 live endpoints, zero dependencies.",
			logo: { src: "./src/assets/logo.svg" },
			favicon: "/favicon.svg",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/gek0z/nba-api-ts",
				},
			],
			editLink: {
				baseUrl: "https://github.com/gek0z/nba-api-ts/edit/main/site/",
			},
			customCss: ["./src/styles/custom.css"],
			sidebar: [
				{
					label: "Start here",
					items: ["index", "getting-started"],
				},
				{
					label: "Guides",
					items: [
						"guides/akamai",
						"guides/configuration",
						"guides/live-data",
						"guides/responses",
						"guides/parameters",
						"guides/errors",
					],
				},
				{
					label: "Live endpoints",
					collapsed: true,
					items: [{ autogenerate: { directory: "endpoints/live" } }],
				},
				{
					label: "Stats endpoints",
					items: [
						"endpoints",
						{
							label: "Box scores",
							collapsed: true,
							items: [
								{ autogenerate: { directory: "endpoints/stats/box-scores" } },
							],
						},
						{
							label: "Games and schedule",
							collapsed: true,
							items: [{ autogenerate: { directory: "endpoints/stats/games" } }],
						},
						{
							label: "Players",
							collapsed: true,
							items: [
								{ autogenerate: { directory: "endpoints/stats/players" } },
							],
						},
						{
							label: "Teams",
							collapsed: true,
							items: [{ autogenerate: { directory: "endpoints/stats/teams" } }],
						},
						{
							label: "League dashboards",
							collapsed: true,
							items: [
								{ autogenerate: { directory: "endpoints/stats/league" } },
							],
						},
						{
							label: "Leaders",
							collapsed: true,
							items: [
								{ autogenerate: { directory: "endpoints/stats/leaders" } },
							],
						},
						{
							label: "Draft",
							collapsed: true,
							items: [{ autogenerate: { directory: "endpoints/stats/draft" } }],
						},
						{
							label: "Shots",
							collapsed: true,
							items: [{ autogenerate: { directory: "endpoints/stats/shots" } }],
						},
						{
							label: "Video",
							collapsed: true,
							items: [{ autogenerate: { directory: "endpoints/stats/video" } }],
						},
					],
				},
			],
		}),
	],
});
