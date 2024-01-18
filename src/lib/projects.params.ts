import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Neforia',
		color: '#ca1481',
		description: [
			`Neforia, a website I developed during my tenure at Globalia Soft, was built from scratch. My focus on this project was primarily on the frontend using React JS, complemented by a minimal backend implemented on Firebase. The technology stack included React, Material-UI (Mui), Slick Carousel, Styled-Components, and Firebase.`,
			`Neforia served as a compact portfolio website for a digital marketing company of the same name. The website aimed to showcase the latest trends and highlight the company's past projects. The motto was centered around providing visitors with a glimpse into Neforia's expertise and recent achievements.`,
			`In my role as a frontend developer, I was tasked with translating Figma designs into responsive and visually appealing frontend elements. Additionally, I undertook the creation of a backend using Firestore, incorporating two distinct models: one for tracking current trends and the other for showcasing the company's portfolio. My responsibilities extended to ensuring seamless integration between the frontend and backend components of the project.`,
			`My experience with the Neforia project was exceptionally positive. The client's requirements were specific and straightforward, aligning with the company's goal of delivering a concise portfolio website. The collaborative efforts, along with the simplicity of the project, allowed for its completion in less than two weeks. This efficient timeline contributed to a smooth development process and a successful project outcome.`
		],

		shortDescription:
			'Developed Neforia at Lucky IT Services—frontend focus with React JS, Firebase backend. A sleek portfolio for a digital marketing firm, showcasing trends and projects. Translated Figma designs, built Firestore backend, ensured seamless integration. Completed in <2 weeks, a positive, efficient experience.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://neforia.com/', label: 'Website' }
		],
		logo: '/Project/Neforia/logo.jpg',
		name: 'Neforia',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('reactjs', 'mui','firebase','js','html','css','styled-components'),
		type: 'Portfolio Template | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/Neforia/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/Neforia/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/Neforia/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/Neforia/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/Neforia/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/Neforia/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/Neforia/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/Neforia/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/Neforia/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/Neforia/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/Neforia/10.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/Neforia/2.webm',
				thumbnail: '/Project/Neforia/5.jpeg'
			},
			{
				label: 'video 2',
				src: '/Project/Neforia/1.webm',
				thumbnail: '/Project/Neforia/11.jpeg'
			}
		]
	}
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export default MY_PROJECTS;
