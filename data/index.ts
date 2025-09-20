export type Project = {
	title: string
	description: string
	links: {
		visit: string
		source: string
	}
}

export const projects = [
	{
		title: '@trenaryja/ui',
		description: `A collection of reusable UI components for my projects. There's no real system or pattern in place, just a hodge-podge of random components/ideas that I've come up with. If it inspires you, or you somehow find any of it useful, then hell yeah please tell me about it!`,
		links: {
			visit: 'https://ui.trenary.dev',
			source: 'https://github.com/trenaryja/ui',
		},
	},
	{
		title: 'Trenary.love',
		description:
			'This is the website we used for our wedding! We went completely digital, with no paper invites, and managed all the invites, notifications, and updates through this site.',
		links: {
			visit: 'https://trenary.love',
			source: 'https://github.com/trenaryja/wedding-site',
		},
	},
	{
		title: 'Percent Calculator',
		description:
			'This is a simple web app that I built for my wife to use at work, because she hates trying to figure out percentages using a regular calculator.',
		links: {
			visit: 'https://perfectpercent.vercel.app',
			source: 'https://github.com/trenaryja/percent-calculator',
		},
	},
	{
		title: 'Mathgasm',
		description: `A fun and simple chart creator to quickly draw a graph/chart without having to enter complex formulas or dummy data as you would in excel or a robust charting solution. Quickly show a downward trend for something like "My Enthusiasm for the game of Monopoly as I play" (it's a downward trend). Export and share your mathgasms with your friends!`,
		links: {
			visit: 'https://mathgasm.netlify.app',
			source: 'https://github.com/trenaryja/mathgasm',
		},
	},
	{
		title: 'Noise Visualizer',
		description:
			'Create different colors/frequencies of noise, and plot the frequencies of the noise in a frequency bar graph using svg. This app was created as an exploration of the browser-native Web Audio API',
		links: {
			visit: 'https://noise-visualizer.netlify.app',
			source: 'https://github.com/trenaryja/noise-generator',
		},
	},
	{
		title: 'How Long Since?',
		description: `A GatsbyJS Single Page React Application that tells you "how long since", based on the entered moment in time. Inspired by that question you always ask when you're with friends in a bar. Yes, I know, it's supposed to be "How long has it been since". But that's a mouthful.`,
		links: {
			visit: 'https://howlongsince.netlify.app',
			source: 'https://github.com/trenaryja/howlongsince',
		},
	},
	{
		title: 'Map Printer',
		description:
			'A tool for creating high-resolution printable maps by stitching together Mapbox tiles. Built to generate very large PNG files suitable for posters or physical prints, it allows you to select an area, combine tiles seamlessly, and export your custom map at print-quality resolution.',
		links: {
			visit: 'https://bigmap.netlify.app',
			source: 'https://github.com/trenaryja/map-printer',
		},
	},
	{
		title: 'Portfolio',
		description:
			"You're looking at it! If you'd like to check out the code that drives this site, click the Source button below and have a look around!",
		links: {
			visit: 'https://trenary.dev',
			source: 'https://github.com/trenaryja/portfolio',
		},
	},
] as const satisfies Project[]
