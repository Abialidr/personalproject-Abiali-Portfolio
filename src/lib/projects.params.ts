import { getSkills } from './skills.params';
import type { Project } from './types';
export const TEST_PROJECTS: Array<Project> = [
	{
		slug: 'Audio-player-Component',
		color: '#cccccc',
		description: [
			`A sleek custom audio player that seamlessly blends style with functionality. With an intuitive interface and crystal-clear sound quality, this player puts you in control of your music experience. Create personalized playlists, navigate effortlessly, and enjoy your favorite tracks in a visually striking design. Elevate your auditory journey with this innovative and user-friendly audio player – where form meets function for an unparalleled listening experience.`
		],

		shortDescription:
			'Introducing our test project: a sleek custom audio player that seamlessly blends style with functionality. With an intuitive interface and crystal-clear sound quality, this player puts you in control of your music experience. Create personalized playlists, navigate effortlessly, and enjoy your favorite tracks in a visually striking design. Elevate your auditory journey with this innovative and user-friendly audio player – where form meets function for an unparalleled listening experience.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/Audio-player-Component-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/Audio-player-Component-test-task', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Audio-player-Component',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('reactjs', 'js', 'html', 'css'),
		type: 'Audio Player',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/audio/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/audio/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/audio/1.webm',
				thumbnail: '/Project/audio/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/audio/2.webm',
				thumbnail: '/Project/audio/thum2.png'
			}
		]
	},
	{
		slug: 'Avantica-Inovation',
		color: '#cccccc',
		description: [
			`Introducing Avantika Enovation – a rapid, design-focused test task aimed at crafting a cutting-edge component in record time. This project embodies efficiency and innovation, challenging the boundaries of design while adhering to a swift timeline. As a design component, Avantika Enovation promises to deliver a seamless blend of aesthetics and functionality, showcasing your ability to create impactful solutions with speed and precision. Embrace the challenge, and let your design prowess shine in this dynamic and time-sensitive exploration of Avantika Enovation.`
		],

		shortDescription:
			'A rapid, design-focused test task aimed at crafting a cutting-edge component in record time. This project embodies efficiency and innovation, challenging the boundaries of design while adhering to a swift timeline. As a design component, Avantika Enovation promises to deliver a seamless blend of aesthetics and functionality, showcasing your ability to create impactful solutions with speed and precision. Embrace the challenge, and let your design prowess shine in this dynamic and time-sensitive exploration of Avantika Enovation.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/avantica-inovation-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/avantica-inovation-test-task', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Avantica-Inovation',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('reactjs', 'js', 'html', 'css', 'nextjs'),
		type: 'Design',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/avantika/1.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/avantika/1.webm',
				thumbnail: '/Project/avantika/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/avantika/2.webm',
				thumbnail: '/Project/avantika/thum2.png'
			}
		]
	},
	{
		slug: 'BubbleChart-in-D3',
		color: '#cccccc',
		description: [
			`Explore the fascinating world of languages with our interactive learning tool—a responsive bubble chart created using HTML, CSS, and D3. This engaging chart displays data on language distribution among 220 individuals, represented by dynamically moving bubbles. Hover over any bubble to see it inflate for enhanced visibility, and take control by dragging and rearranging bubbles. Watch as bubbles interact, pushing each other when they touch, offering a unique and visually immersive way to grasp language demographics`
		],

		shortDescription:
			'Explore the fascinating world of languages with our interactive learning tool—a responsive bubble chart created using HTML, CSS, and D3. This engaging chart displays data on language distribution among 220 individuals, represented by dynamically moving bubbles. Hover over any bubble to see it inflate for enhanced visibility, and take control by dragging and rearranging bubbles. Watch as bubbles interact, pushing each other when they touch, offering a unique and visually immersive way to grasp language demographics',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/BubbleChart-in-D3-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/BubbleChart-in-D3-test-task', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'BubbleChart-in-D3',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Complicated Logic Bubbles',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/bubble/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/bubble/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/bubble/1.webm',
				thumbnail: '/Project/bubble/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/bubble/2.webm',
				thumbnail: '/Project/bubble/thum2.png'
			}
		]
	},
	{
		slug: 'Family-Tree-Creator',
		color: '#cccccc',
		description: [
			`Successfully conquering the intricate family tree problem, I navigated a complex array of objects, each representing a family member with detailed attributes such as ID, name, gender, children, and parents. The challenge extended beyond conventional family structures—requiring me to identify legitimate parent-child relationships and ensure gender accuracy within parent pairs.`,
			`In this task, a member's children were defined by an array of IDs, which could include both legitimate and bogus IDs. My solution meticulously sifted through the complexities, validating parent-child connections and disallowing illegitimate family structures. Moreover, I handled the nuanced scenario where two parents of the same gender would be flagged as bogus, maintaining the integrity of the family tree.`,
			`The true challenge emerged in the dynamic nature of the array, capable of accommodating numerous family members with distinct family structures. My algorithm efficiently identified and separated these families accurately, demonstrating my proficiency in handling intricate problems.`,
			`This successful solution serves as a testament to my analytical prowess and coding acumen. By showcasing this family tree problem in my portfolio, I highlight my ability to tackle complex tasks within defined timeframes and convey my readiness to handle similar challenges with ease. Explore the intricacies of family tree problem-solving in my portfolio, a testament to my capabilities in algorithmic thinking and coding proficiency.`
		],

		shortDescription:
			'Mastered the family tree problem—a complex array of objects, validating parent-child connections, ensuring gender accuracy, and identifying and separating diverse families accurately. My solution showcases efficient problem-solving and readiness for intricate challenges. ',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/Family-Tree-creator-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/Family-Tree-creator-test-task', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Family-Tree-Creator',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills(
			'js',
			'html',
			'css',
			'styled-components',
			'reactjs',
			'ts',
			'web vitals',
			'yup'
		),
		type: 'Complex Family Tree Creator',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/familyTree/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/familyTree/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/familyTree/1.webm',
				thumbnail: '/Project/familyTree/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/familyTree/2.webm',
				thumbnail: '/Project/familyTree/thum2.png'
			}
		]
	},
	{
		slug: 'JethiTech-Solutions',
		color: '#cccccc',
		description: [
			`Embark on the design journey with JethiSolution – a captivating test task focused on crafting an engaging homepage. Dive into creativity as you integrate a stylish header that sets the tone for an immersive user experience. The challenge extends to incorporating a dynamic carousel, adding a touch of dynamism to the visual narrative. This design-based task invites you to showcase your flair for aesthetics and user-centric design, all while adhering to a keen sense of style and efficiency. Unleash your design prowess and create a homepage that not only catches the eye but also captivates the user from the moment they arrive.`
		],

		shortDescription:
			'Embark on the design journey with JethiSolution – a captivating test task focused on crafting an engaging homepage. Dive into creativity as you integrate a stylish header that sets the tone for an immersive user experience. The challenge extends to incorporating a dynamic carousel, adding a touch of dynamism to the visual narrative. This design-based task invites you to showcase your flair for aesthetics and user-centric design, all while adhering to a keen sense of style and efficiency. Unleash your design prowess and create a homepage that not only catches the eye but also captivates the user from the moment they arrive.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/JethiTech-Solutions-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/JethiTech-Solutions-test-task', label: 'GitHub' },
			{
				to: 'https://www.figma.com/file/pkoF5hO01DNXGrf5yqo5tE/TestTask-For-job-1?type=design&t=09NalaEgV7QQAAqV-6',
				label: 'Reference'
			}
		],
		logo: '/logos/no-img.svg',
		name: 'JethiTech-Solutions',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills(
			'js',
			'html',
			'css',
			'reactjs',
			'mui',
			'moment',
			'slick carousel',
			'react slick',
			'styled-components',
			'web vitals'
		),
		type: 'Design',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/jethi/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/jethi/2.png'
			},
			{
				label: 'screen 3',
				src: '/Project/jethi/3.png'
			},
			{
				label: 'screen 4',
				src: '/Project/jethi/4.png'
			},
			{
				label: 'screen 5',
				src: '/Project/jethi/5.png'
			},
			{
				label: 'screen 6',
				src: '/Project/jethi/6.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/jethi/1.webm',
				thumbnail: '/Project/jethi/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/jethi/2.webm',
				thumbnail: '/Project/jethi/thum2.png'
			}
		]
	},
	{
		slug: 'Panchatattva',
		color: '#cccccc',
		description: [
			`
		Welcome to the Panchatatva design challenge – a test task that merges creativity with precision in the health field. Your mission: replicate a meticulously crafted Figma design, ensuring a seamless translation to a web page. The challenge doesn't stop there; Panchatatva demands your expertise in handling numerous position:absolute cases, vital for maintaining the intricate design layout.`,
			`Dive into the realm of health-centric aesthetics as you bring the Figma vision to life. Navigate through the intricacies of position:absolute with finesse, creating carousels that not only align with the design but enhance the overall user experience. This design-based task in the health sector beckons your artistic prowess and technical acumen – an opportunity to craft a digital space that mirrors precision, style, and the essence of well-being.`
		],

		shortDescription: `Welcome to the Panchatatva design challenge – a test task that merges creativity with precision in the health field. Your mission: replicate a meticulously crafted Figma design, ensuring a seamless translation to a web page. The challenge doesn't stop there; Panchatatva demands your expertise in handling numerous position:absolute cases, vital for maintaining the intricate design layout.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/panchatattva-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/panchatattva-test-task', label: 'GitHub' },
			{
				to: 'https://www.figma.com/file/2p9GWSjkFmBzhmQkRIYNW0/Panchatattva-(Copy)?type=design&t=09NalaEgV7QQAAqV-6',
				label: 'Refernce'
			}
		],
		logo: '/logos/no-img.svg',
		name: 'Panchatattva',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('js', 'html', 'css', 'reactjs', 'nextjs', 'mui', 'react slick'),
		type: 'Design',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/panch/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/panch/2.png'
			},
			{
				label: 'screen 3',
				src: '/Project/panch/3.png'
			},
			{
				label: 'screen 4',
				src: '/Project/panch/4.png'
			},
			{
				label: 'screen 5',
				src: '/Project/panch/5.png'
			},
			{
				label: 'screen 6',
				src: '/Project/panch/6.png'
			},
			{
				label: 'screen 7',
				src: '/Project/panch/7.png'
			},
			{
				label: 'screen 8',
				src: '/Project/panch/8.png'
			},
			{
				label: 'screen 9',
				src: '/Project/panch/9.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/panch/1.webm',
				thumbnail: '/Project/panch/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/panch/2.webm',
				thumbnail: '/Project/panch/thum2.png'
			}
		]
	},
	{
		slug: 'Water Tank',
		color: '#cccccc',
		description: [
			`
Embark on a coding journey through the water tank problem—an intriguing task that showcases my problem-solving skills. Picture a row of blocks where each number signifies its height. The challenge? Calculate the water trapped between these blocks. I successfully navigated through this puzzle, considering nuances like zero-height blocks and varying adjacent heights. Check out my solution to witness how I skillfully tackled this problem, demonstrating my ability to handle complex coding challenges. This accomplishment reflects my analytical thinking and coding proficiency. Explore the adventure of problem-solving with my successful water tank problem solution.`
		],

		shortDescription:
			'Embark on a coding journey through the water tank problem—an intriguing task that showcases my problem-solving skills. Picture a row of blocks where each number signifies its height. The challenge? Calculate the water trapped between these blocks. I successfully navigated through this puzzle, considering nuances like zero-height blocks and varying adjacent heights. Check out my solution to witness how I skillfully tackled this problem, demonstrating my ability to handle complex coding challenges. This accomplishment reflects my analytical thinking and coding proficiency. Explore the adventure of problem-solving with my successful water tank problem solution.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/The-water-tank-problem-test-task/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/The-water-tank-problem-test-task', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Water Tank',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Water Tank Problem',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/water/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/water/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/water/1.webm',
				thumbnail: '/Project/water/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/water/2.webm',
				thumbnail: '/Project/water/thum2.png'
			}
		]
	},
	{
		slug: 'Art MemoryGame',
		color: '#cccccc',
		description: [
			`
		Embark on a captivating journey of artistic exploration with our Art Memory Game—an engaging and visually stimulating learning task designed to enhance your memory skills through the world of art. Immerse yourself in a delightful game of cards adorned with masterpieces from renowned artists and iconic art movements. As you flip each card, challenge your memory to match pairs of paintings, sculptures, or artistic elements, creating a harmonious connection between the visual arts and cognitive development. Whether you're a seasoned art enthusiast or a novice, this game offers a unique opportunity to discover and appreciate the beauty of diverse artistic expressions while honing your memory prowess. Unleash your creativity and sharpen your mind as you play, making learning an enjoyable and aesthetically enriching experience.`
		],

		shortDescription: `
		An engaging and visually stimulating learning task designed to enhance your memory skills through the world of art. Immerse yourself in a delightful game of cards adorned with masterpieces from renowned artists and iconic art movements. As you flip each card, challenge your memory to match pairs of paintings, sculptures, or artistic elements, creating a harmonious connection between the visual arts and cognitive development. Whether you're a seasoned art enthusiast or a novice, this game offers a unique opportunity to discover and appreciate the beauty of diverse artistic expressions while honing your memory prowess. Unleash your creativity and sharpen your mind as you play, making learning an enjoyable and aesthetically enriching experience.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/artMemoryGame-learning/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/artMemoryGame-learning', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Art MemoryGame',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('js', 'html', 'css', 'reactjs'),
		type: 'Memory Game',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/memory/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/memory/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/memory/1.webm',
				thumbnail: '/Project/memory/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/memory/2.webm',
				thumbnail: '/Project/memory/thum2.png'
			}
		]
	},
	{
		slug: 'calc',
		color: '#cccccc',
		description: [
			`Calc is more than just a calculator; it's a design-forward learning companion that marries sleek aesthetics with powerful functionality. The user-friendly interface ensures a smooth experience, allowing users to navigate through various mathematical concepts effortlessly. Its modern design is not just visually appealing but also contributes to a distraction-free environment, fostering a focused learning atmosphere.`
		],

		shortDescription: `Introducing Calc, an elegantly designed calculator that seamlessly blends form and function. With its intuitive interface, it's the perfect tool for students and professionals alike, making complex calculations a breeze.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://abialidr.github.io/calc-learn/', label: 'Website' },
			{ to: 'https://github.com/Abialidr/calc-learn', label: 'GitHub' }
		],
		logo: '/logos/no-img.svg',
		name: 'Calc',
		period: {
			from: new Date('2022-10-01'),
			to: new Date('2022-10-15')
		},
		skills: getSkills('js', 'html', 'css', 'reactjs'),
		type: 'Calculator',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/calc/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/calc/2.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/calc/1.webm',
				thumbnail: '/Project/calc/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/calc/2.webm',
				thumbnail: '/Project/calc/thum2.png'
			}
		]
	}
];

export const MY_PROJECTS: Array<Project> = [
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
		skills: getSkills('reactjs', 'mui', 'firebase', 'js', 'html', 'css', 'styled-components'),
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
	},
	{
		slug: 'Niu_Sa_fe',
		color: '#79c255',
		description: [
			`I played a crucial role in the development of the Niusafe website during my tenure at Globalia-Soft. Although the project was not initiated from scratch, I took charge of the frontend development using React.js. The technology stack involved in building the website included React, Redux Toolkit, RTK Query, Ant Design (antd), Axios, React Slick, Material-UI (mui), tawk.to-react, Slick Carousel, Web Vitals, Yup among others.`,
			`Niusafe served as an employee-focused platform designed for marketing purposes. The primary objective was to empower employees to easily access and share posts from Niu_Safe across various social media platforms, such as Instagram, Facebook, and Twitter. The website facilitated the reposting or retweeting of Niu_Safe's content on the employees' personal accounts, contributing to a more effective and widespread marketing strategy.`,
			`As the front-end developer for Niusafe, my responsibilities included translating designs from Figma into functional and aesthetically pleasing frontend interfaces. I extensively utilized RTK Query to integrate various APIs seamlessly. Additionally, I implemented complex functions to enhance user experience. Regular engagement with both clients and the testing team was a crucial aspect of my role, involving participation in meetings and providing timely reports. My contributions were integral to the successful execution of the project.			`,
			`My experience with the Niusafe project was exceptionally positive. Despite joining the project midway, the client and testing team provided clear and precise task details, enabling me to seamlessly integrate into the development process. The collaborative environment fostered effective communication, ensuring that tasks were completed on time and contributing to an overall rewarding experience.			`
		],

		shortDescription:
			'Key role in Niusafe site development at Globalia-Soft using React.js. Empowered employee-focused marketing with a tech stack including React, Redux Toolkit, and more. Translated Figma designs, integrated APIs seamlessly, and enhanced user experience. Positive experience in a collaborative environment.',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			// { to: 'https://neforia.com/', label: 'Website' }
		],
		logo: '/Project/Niu/logo.png',
		name: 'Niu_Sa_fe',
		period: {
			from: new Date('2023-01-01'),
			to: new Date('2023-04-31')
		},
		skills: getSkills(
			'reactjs',
			'redux',
			'axios',
			'react slick',
			'mui',
			'slick carousel',
			'web vitals',
			'ant design',
			'tawk.to',
			'yup'
		),
		type: 'Marketing Website | On Going',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/Niu/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/Niu/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/Niu/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/Niu/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/Niu/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/Niu/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/Niu/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/Niu/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/Niu/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/Niu/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/Niu/10.jpeg'
			},
			{
				label: 'screen 11',
				src: '/Project/Niu/11.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/Niu/1.mp4',
				thumbnail: '/Project/Niu/12.png'
			},
			{
				label: 'video 2',
				src: '/Project/Niu/2.mp4',
				thumbnail: '/Project/Niu/13.png'
			}
		]
	},
	{
		slug: 'Spotsaver',
		color: '#1665c0',
		description: [
			`The Spotsaver website, originally initiated by another company, was an endeavor I undertook during my tenure with Globalia-Soft. While not developed from scratch, I played a pivotal role in its evolution, focusing on the frontend using React JS. Employing a stack that included technologies such as React, Redux Toolkit, RTK Query, Ant Design (Antd), Axios, React Slick, Material-UI (Mui), Tawkto-React, Slick Carousel, Styled-Components, Sass, React Webcam, React Google Login, React Facebook Login, Next-Redux-Wrapper, Next.js, Lottie-Web, Google-Map-React, Chart.js, and more, I aimed to enhance the website's functionality and user interface.
			`,
			`The primary objective of Spotsaver was to streamline the reservation process, emphasizing time efficiency for users looking to secure spots at various locations. The website comprised four main sections:
			- Visitor Side: Users could easily book slots for personal or group use, cancel or complete their bookings.
			- System Admin: The central account with overarching control over the website.
			- Brand Manager: Empowered to manage brand-specific details, including adding or deleting stores.
			- Security Auditor: Responsible for scanning QR codes generated by the app to complete reservations, ensuring security protocols`,
			`As a front-end developer at Globalia-Soft, I took charge of crafting the frontend designs based on Figma prototypes. My role extended beyond UI development, involving the integration of numerous APIs using RTK Query. I undertook the creation of intricate functions and collaborated closely with clients and testing teams. Additionally, I conducted regular meetings and provided timely reports to ensure smooth project progression.
			`,
			`My experience with the Spotsaver project was highly positive. Despite joining the project midway, the client and testing teams were remarkably communicative, providing precise task details. This facilitated efficient task completion and contributed to an overall successful project experience.
			`,
			'The Spotsaver website is accessible for exploration at [https://www.myspotsaver.com/](https://www.myspotsaver.com/). Feel free to visit the site to witness firsthand the result of collaborative efforts in enhancing the reservation process and optimizing user experience.			'
		],

		shortDescription:
			'Revamped Spotsaver website at Globalia-Soft, focusing on React JS frontend. Enhanced reservation process with React, Redux Toolkit, and various tech. Streamlined UI, integrated APIs, and collaborated closely for success. ',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://www.myspotsaver.com/', label: 'Website' }
		],
		logo: '/Project/spotsaver/logo.jpg',
		name: 'Spotsaver',
		period: {
			from: new Date('2022-07-01'),
			to: new Date('2022-12-31')
		},
		skills: getSkills(
			'reactjs',
			'redux',
			'ant design',
			'axios',
			'react slick',
			'mui',
			'tawk.to',
			'slick carousel',
			'styled-components',
			'sass',
			'next-redux-wrapper',
			'nextjs',
			'lottie-web',
			'chart.js'
		),
		type: 'Business Website | On Going',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/spotsaver/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/spotsaver/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/spotsaver/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/spotsaver/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/spotsaver/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/spotsaver/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/spotsaver/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/spotsaver/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/spotsaver/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/spotsaver/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/spotsaver/10.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/spotsaver/1.mp4',
				thumbnail: '/Project/spotsaver/11.png'
			},
			{
				label: 'video 2',
				src: '/Project/spotsaver/2.webm',
				thumbnail: '/Project/spotsaver/12.png'
			}
		]
	},
	{
		slug: 'Wedfield',
		color: '#b6044f',
		description: [
			`The Wedfield project was initiated from scratch, representing a comprehensive platform within the wedding industry. My primary focus was on the frontend development using Next JS. Leveraging a stack that included technologies such as React, Redux Toolkit, RTK Query, Axios, React Slick, Material-UI (Mui), Styled-components Lottie-web, Chart.js, Capacitor, Lidojs, Ant Design (AntD), Bootstrap, Socket.io, Tawk.to, Yup, TypeScript, JavaScript, HTML, and CSS.`,
			`Wedfield served as the central hub connecting vendors, administrators, and users. Its core objective was to cater to individuals planning to get married by offering them a platform to discover the best vendors, venues, and products at competitive prices. Additionally, the platform provided tools to streamline the wedding process, including features like guest lists, online invitations, task management, and more.`,
			`Undertaking the project independently, I developed a versatile event planning platform. Key features include venue/vendor showcases, a chat app for user/vendor communication, an e-commerce site with integrated payments and delivery services, a Canva-like card editor linked to WhatsApp, and planning tools. Additionally, I utilized Capacitor to create a mobile app, extending accessibility. The platform also features a blog section for wedding-related content.`,
			'My experience working on the Wedfield project was highly positive. The client, led by Shanteshwar Dixit (CEO), provided clear and precise instructions, facilitating a smooth development process. The scale of the project allowed me to demonstrate my capabilities in managing and implementing diverse functionalities, contributing significantly to the success of the platform.			'
		],

		shortDescription:
			'Led Wedfield project from scratch, focusing on Next JS frontend. Integrated diverse tech stack. Platform connects vendors, users, streamlining wedding planning. Developed independently: venue showcases, chat app, e-commerce with payments, Canva-like card editor, WhatsApp integration. Positive experience with precise guidance from CEO Shanteshwar Dixit. Demonstrated versatility, contributing to platform success.			',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://wedfield.com/', label: 'Website' },
			{
				to: `https://play.google.com/store/apps/details?id=com.wedding.wedfield&pcampaignid=web_share`,
				label: 'Android App'
			},{
				to: `https://apps.apple.com/in/app/wedfield-wedding-marketplace/id6736426335`,
				label: 'Ios App'
			}
		],
		logo: '/Project/wedcell/logo.png',
		name: 'Wedfield',
		period: {
			from: new Date('2023-05-01'),
			to: new Date('2023-10-31')
		},
		skills: getSkills(
			'reactjs',
			'redux',
			'ant design',
			'axios',
			'react slick',
			'mui',
			'tawk.to',
			'slick carousel',
			'styled-components',
			'nextjs',
			'lottie-web',
			'chart.js',
			'js',
			'html',
			'css',
			'ant design',
			'tawk.to',
			'yup',
			'capacitor',
			'boostrap',
			'socket.io',
			'ts',
			'lidojs'
		),
		type: 'Buisness website | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/wedcell/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/wedcell/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcell/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcell/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/wedcell/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/wedcell/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/wedcell/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/wedcell/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/wedcell/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/wedcell/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/wedcell/10.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/wedcell/1.webm',
				thumbnail: '/Project/wedcell/11.png'
			},
			{
				label: 'video 2',
				src: '/Project/wedcell/2.webm',
				thumbnail: '/Project/wedcell/12.png'
			}
		]
	},
	{
		slug: 'Wedfield-Admin',
		color: '#b6044f',
		description: [
			`The Wedfield-Admin project was developed from scratch, and I played a pivotal role in crafting the frontend using Next.js. Employing a tech stack that included React, Redux Toolkit, Axios, React Slick, Material-UI (mui), Styled-components, Next.js, Lottie-web, Chart.js, Lido.js, Ant Design (antd), Moment.js, Socket.io, and Yup, I ensured a robust and feature-rich user interface.`,
			`Wedfield-Admin served as the administrative hub for the main website, Wedfield.com. It efficiently managed various administrative and designer tasks. The project encompassed functionalities such as a messaging app, payment gateway integration, and a review management system. Additionally, the designer module allowed the creation of new design cards integrated into the invitation side of Wedfield.com. The overarching goal was to streamline and enhance administrative and design processes.`,
			`As a front-end developer, my primary responsibility was to transform Figma designs into functional and aesthetically pleasing frontend layouts. I integrated numerous APIs using Axios and implemented complex functions. Regular meetings with the client and the provision of frequent progress reports were part of my routine. I was the driving force behind building all functionalities from the ground up. These functionalities included admin control over users, vendors, venue owners, and product owners, along with the ability to add new blogs, engage in direct chat with clients and vendors, and access and maintain discipline within all chats. Furthermore, the admin had control over all products and a designer tool to create new cards for the main website.`,
			`My experience with this project was exceptionally positive. The client's precise communication about tasks facilitated timely completion, contributing to a smooth development process. Working on Wedfield-Admin allowed me to hone my skills, tackle challenging functionalities, and collaborate effectively with the client to achieve their vision for the platform.`
		],

		shortDescription: `Led development of Wedfield-Admin using Next.js, React, Redux Toolkit, and a diverse tech stack. Enhanced Wedfield.com's admin capabilities with features like messaging, payment integration, and a designer module. Translated Figma designs, integrated APIs, and ensured robust functionality. Positive experience, collaborating effectively with the client for a streamlined and feature-rich platform.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://admin.wedfield.com/', label: 'Website' }
		],
		logo: '/Project/wedcelladmin/logo.png',
		name: 'Wedfield-Admin ',
		period: {
			from: new Date('2023-05-01'),
			to: new Date('2023-10-31')
		},
		skills: getSkills(
			'reactjs',
			'redux',
			'ant design',
			'axios',
			'react slick',
			'mui',
			'tawk.to',
			'slick carousel',
			'styled-components',
			'nextjs',
			'lottie-web',
			'chart.js',
			'ant design',
			'yup',
			'socket.io',
			'moment',
			'lidojs'
		),
		type: 'Admin website | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/wedcelladmin/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/wedcelladmin/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcelladmin/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcelladmin/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/wedcelladmin/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/wedcelladmin/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/wedcelladmin/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/wedcelladmin/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/wedcelladmin/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/wedcelladmin/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/wedcelladmin/10.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/wedcelladmin/1.webm',
				thumbnail: '/Project/wedcelladmin/11.png'
			},
			{
				label: 'video 2',
				src: '/Project/wedcelladmin/2.webm',
				thumbnail: '/Project/wedcelladmin/12.png'
			}
		]
	},
	{
		slug: 'Wedfield-Vendors',
		color: '#b6044f',
		description: [
			`The Wedfield-Vendors website, developed for Wedfield PVT LTD, was a project that focused on enhancing the vendor side of the main website, Wedfield.com. My role primarily involved working on the frontend using Next.js and implementing various technologies such as React, Redux Toolkit, Axios, React Slick, MUI, Styled-components, Next.js, Lottie-web, Chart.js, and more. It's important to note that the project was built from scratch`,
			`The primary objective of the Wedfield-Vendors website was to serve as the vendor-side platform for Wedfield.com. This section of the project handled accounts for vendors, venue owners, and product owners. Notable features included a messaging app, payment gateway integration, Delhivery system for logistics, review management system, and an overall vendors management system. The project aimed to streamline and optimize the vendor-related processes on the Wedfield platform, contributing to a seamless experience for users and enhancing the efficiency of vendor management.`,
			`As a front-end developer in the project, I played a pivotal role in bringing the designs from Figma to life. My responsibilities extended to integrating various APIs using Axios, developing complex functions, and ensuring the smooth execution of the frontend. From creating UI components to handling API integrations and complex functionalities, my work encompassed the entire spectrum of front-end development. Regular client meetings were also part of my routine, where I provided updates and reports on the project's progress. Essentially, I took charge of building the entire functionality from scratch, contributing significantly to the success of the project. In addition to my front-end development role, I successfully extended the project's reach by creating a mobile app using Capacitor. This initiative enhanced the platform's accessibility, allowing users to engage seamlessly through a dedicated mobile application.`,
			`My experience with the Wedfield-Vendors project was exceptionally positive. The client, Shanteshwar Dixit (CEO), provided clear and precise task descriptions, facilitating efficient and timely completion of assignments. This clarity in communication contributed to a smooth workflow and a successful project outcome. Overall, my time working on this project was enriching, allowing me to apply my skills and contribute meaningfully to the development of a crucial aspect of the Wedfield platform.`
		],

		shortDescription: `I led the frontend development of Wedfield-Vendors, a Next.js project, enhancing Wedfield.com. My role included API integration, complex functionalities, and client meetings. Built from scratch, it streamlined vendor processes, integrating features like messaging, payment gateways, and logistics. Shanteshwar Dixit's clear instructions facilitated a positive experience, contributing to the project's success.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://vendors.wedfield.com/', label: 'Website' },
			{
				to: 'https://play.google.com/store/apps/details?id=com.business.wedfield',
				label: 'Android App'
			},{
				to: 'https://apps.apple.com/in/app/wedfield-business/id6736427192',
				label: 'Ios App'
			}
		],
		logo: '/Project/wedcellVendors/logo.png',
		name: 'Wedfield-Vendors ',
		period: {
			from: new Date('2023-05-01'),
			to: new Date('2023-10-31')
		},
		skills: getSkills(
			'reactjs',
			'redux',
			'axios',
			'react slick',
			'mui',
			'styled-components',
			'nextjs',
			'lottie-web',
			'chart.js'
		),
		type: 'vendor Management | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/wedcellVendors/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/wedcellVendors/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcellVendors/1.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wedcellVendors/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/wedcellVendors/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/wedcellVendors/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/wedcellVendors/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/wedcellVendors/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/wedcellVendors/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/wedcellVendors/9.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/wedcellVendors/1.webm',
				thumbnail: '/Project/wedcellVendors/10.png'
			},
			{
				label: 'video 2',
				src: '/Project/wedcellVendors/2.webm',
				thumbnail: '/Project/wedcellVendors/11.png'
			}
		]
	},
	{
		slug: 'Wedfield-Backend',
		color: '#b6044f',
		description: [
			`The Wedfield website, developed from scratch, stands as a testament to my proficiency in backend development using Express.js and Node.js. Employing a robust tech stack, including Axios, Bcrypt, JWT, CORS, Multer, S3, WhatsApp API, Delhivery, Razorpay, MongoDB, Mongoose, and Socket.io, I ensured the website's seamless functionality and enhanced user experience.`,
			`Wedfield, the platform for which I crafted the backend, was designed to be a comprehensive solution for users seeking the best vendors, venues, products, and services related to weddings. The project aimed to streamline the process of wedding planning, offering a one-stop-shop for users to discover and engage with various wedding-related services and products.`,
			`As a dedicated backend developer at Wedfield Pvt Ltd, I spearheaded the creation of diverse APIs aligned with user workflows. My responsibilities encompassed the entire backend ecosystem, including the development of middleware, controllers, routes, and models to establish RESTful APIs. Additionally, I optimized these APIs for optimal performance. The integration of S3 for image storage on AWS buckets and the implementation of Socket.io for real-time communication were key aspects of my contributions, ensuring a seamless and interactive user experience.`,
			`My experience with the Wedfield project was exceptionally positive. Clear and precise communication from the client facilitated the timely completion of tasks, contributing to a smooth development process.`
		],

		shortDescription: `Crafted Wedfield backend with Express.js & Node.js, utilizing a robust tech stack. Streamlined wedding planning, creating APIs, optimizing performance, and ensuring seamless user experiences. Positive client communication led to a smooth development process.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
		],
		logo: '/Project/wedcell/logo.png',
		name: 'Wedfield-Backend',
		period: {
			from: new Date('2023-05-01'),
			to: new Date('2023-10-31')
		},
		skills: getSkills(
			'expressJs',
			'nodejs',
			'axios',
			'jwt',
			'cors',
			'multer',
			's3',
			'razorpay',
			'monodb',
			'socket.io'
		),
		type: 'Backend | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/wback/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/wback/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/wback/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/wback/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/wback/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/wback/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/wback/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/wback/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/wback/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/wback/10.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/wback/1.webm',
				thumbnail: '/Project/wback/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/wback/2.webm',
				thumbnail: '/Project/wback/thum2.png'
			}
		]
	},
	{
		slug: 'ZanaduHealth',
		color: '#25d266',
		description: [
			`Engaged in an ongoing project, I played a key role in the frontend development using Next.js with TypeScript, RTK Query, Agora, Sass, and Chart.js for the ZanaduHealth website at Avantika Pvt. Ltd.`,
			`ZanaduHealth, a frontend initiative, aimed to connect users with health coaches. The platform featured a dedicated section for coaches, providing video session options to enhance user engagement.`,
			`As a frontend developer at Avantika Pvt. Ltd., my focus was on crafting an impeccable frontend design. I delved into researching and implementing video session integration using Agora, ensuring a seamless experience. My responsibility extended to creating a flexible design that met the client's expectations.`,
			`My involvement with ZanaduHealth was marked by a highly positive experience. Clear communication from the client streamlined task completion, fostering a smooth development process. This project allowed me to refine my skills, navigate intricate functionalities, and collaborate effectively with the client, translating their vision into a functional and aesthetically pleasing platform.`
		],

		shortDescription: `Contributed to ZanaduHealth frontend at Avantika Pvt. Ltd. with Next.js, TypeScript, and Agora. Enhanced user experience, integrating video sessions seamlessly. Positive collaboration with the client ensured successful project delivery.`,
		links: [
			{ to: 'https://app.zanaduhealth.com/', label: 'Website' },
			{
				to: 'https://www.figma.com/file/QcXAfudMPZlQaW9LZ8O0i7/Zanadu-ECA-Design-(Copy)?type=design&t=1c3ZFpwJl0RxHf2l-6',
				label: 'Reference'
			}
		],
		logo: '/Project/zanadu/logo.png',
		name: 'ZanaduHealth',
		period: {
			from: new Date('2023-11-01'),
			to: new Date('2023-12-31')
		},
		skills: getSkills(
			'reactjs',
			'ts',
			'nextjs',
			'redux',
			'agora',
			'web vitals',
			'sass',
			'next-redux-wrapper',
			'react-toastify',
			'chart.js'
		),
		type: 'Health Website | On Going',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/zanadu/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/zanadu/2.png'
			},
			{
				label: 'screen 3',
				src: '/Project/zanadu/3.png'
			},
			{
				label: 'screen 4',
				src: '/Project/zanadu/4.png'
			},
			{
				label: 'screen 5',
				src: '/Project/zanadu/5.png'
			},
			{
				label: 'screen 6',
				src: '/Project/zanadu/6.png'
			},
			{
				label: 'screen 7',
				src: '/Project/zanadu/7.png'
			},
			{
				label: 'screen 8',
				src: '/Project/zanadu/8.png'
			},
			{
				label: 'screen 9',
				src: '/Project/zanadu/9.png'
			},
			{
				label: 'screen 10',
				src: '/Project/zanadu/10.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/zanadu/1.webm',
				thumbnail: '/Project/zanadu/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/zanadu/2.webm',
				thumbnail: '/Project/zanadu/thum2.png'
			}
		]
	},
	{
		slug: 'Zanadu-Backend',
		color: '#25d266',
		description: [
			`This project, initiated from the ground up, involved the development of the backend for the Zandu Health website. Leveraging the power of Express.js and Node.js, I implemented a robust and scalable backend infrastructure. The technology stack included essential tools such as Agora for video communication, Axios for HTTP requests, Bcrypt for security, JWT for authentication, CORS for cross-origin resource sharing, Multer for handling file uploads, Winston for logging, and S3 for seamless integration with AWS for image storage.`,
			`Zandu Health, the website for which this backend was crafted, had a clear objective: to provide enterprises with a platform to monitor and enhance the well-being of their employees. The project aimed to facilitate this by offering video call services connecting employees with yoga gurus. The overarching goal was to enable enterprises to invest in the health and fitness of their workforce, creating a healthier and more productive workplace.`,
			`As a backend developer at Avantica Innovations, my primary responsibility was to design and implement various APIs in accordance with the user flow. This involved creating middleware, controllers, routes, and models to establish RESTful APIs. Additionally, I focused on optimizing these APIs for superior performance. An integral part of my role included working with AWS S3 to securely store and manage images in the cloud.`,
			`My experience working on the Zandu Health project was highly rewarding. Collaborating within a dynamic team of four, alongside skilled individuals like my team leader Parth and Neeraj, proved to be invaluable. Their expertise in both backend and frontend development greatly contributed to overcoming challenging tasks. The collaborative environment fostered continuous learning, allowing me to expand my skill set and deliver high-quality results.`
		],

		shortDescription: `Led backend development for Zandu Health using Express.js/Node.js. Integrated Agora, Axios, Bcrypt, JWT, CORS, Multer, Winston, and S3 for seamless AWS image storage. Empowered enterprises to prioritize employee well-being via video calls with yoga gurus. Optimized RESTful APIs for peak performance. Enriching experience in a collaborative team at Avantica Innovations, enhancing skills alongside Parth and Neeraj.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
		],
		logo: '/Project/zanadu/logo.png',
		name: 'Zanadu-Backend',
		period: {
			from: new Date('2023-11-01'),
			to: new Date('2023-12-31')
		},
		skills: getSkills(
			'expressJs',
			'nodejs',
			'axios',
			'jwt',
			'cors',
			'multer',
			's3',
			'razorpay',
			'monodb',
			'socket.io'
		),
		type: 'Backend | On Going',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/zbackend/1.jpeg'
			},
			{
				label: 'screen 2',
				src: '/Project/zbackend/2.jpeg'
			},
			{
				label: 'screen 3',
				src: '/Project/zbackend/3.jpeg'
			},
			{
				label: 'screen 4',
				src: '/Project/zbackend/4.jpeg'
			},
			{
				label: 'screen 5',
				src: '/Project/zbackend/5.jpeg'
			},
			{
				label: 'screen 6',
				src: '/Project/zbackend/6.jpeg'
			},
			{
				label: 'screen 7',
				src: '/Project/zbackend/7.jpeg'
			},
			{
				label: 'screen 8',
				src: '/Project/zbackend/8.jpeg'
			},
			{
				label: 'screen 9',
				src: '/Project/zbackend/9.jpeg'
			},
			{
				label: 'screen 10',
				src: '/Project/zbackend/10.jpeg'
			},
			{
				label: 'screen 11',
				src: '/Project/zbackend/11.jpeg'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/zbackend/1.webm',
				thumbnail: '/Project/zbackend/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/zbackend/2.webm',
				thumbnail: '/Project/zbackend/thum2.png'
			}
		]
	},
	{
		slug: 'WedCell-Institute',
		color: '#bd2864',
		description: [
			`Built from scratch, the Wedfield-Institute website's frontend featured technologies like React.js, Next.js, Sass, Slick Carousel, HTML, CSS, and JS for a comprehensive and engaging user experience`,
			`Focused on the frontend, the project served as an informative website for Wedfield Institute, providing a platform to showcase relevant information and offerings.`,
			`As a dedicated Frontend Developer, my primary objective was to create a visually striking and flawless design for the Wedfield-Institute website, ensuring it met the client's expectations.`,
			`My journey with the Wedfield-Institute project was exceptionally positive. Clear communication from the client facilitated efficient task completion, fostering a smooth development process. Working on this project allowed me to refine my skills, address complex functionalities, and collaborate effectively with the client to bring their vision for the platform to life.`
		],

		shortDescription: `Crafted Wedfield-Institute's frontend with precision using React, Next.js, Sass, and more. Positive collaboration with the client ensured a flawless, informative website, showcasing expertise in design and development.`,
		links: [
			{ to: 'https://www.wedcellinstitute.com/', label: 'Website' },
			{
				to: 'https://www.figma.com/file/jIq9k2W9PkgqfkxjzgZW3i/Wedfield-final?type=design&t=1c3ZFpwJl0RxHf2l-6',
				label: 'Reference'
			}
		],
		logo: '/Project/institute/logo.png',
		name: 'WedCell-Institute',
		period: {
			from: new Date('2023-01-01'),
			to: new Date('2023-01-10')
		},
		skills: getSkills(
			'reactjs',
			'nextjs',
			'sass',
			'slick carousel',
			'react slick',
			'html',
			'css',
			'js'
		),
		type: 'Info Website | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/institute/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/institute/2.png'
			},
			{
				label: 'screen 3',
				src: '/Project/institute/3.png'
			},
			{
				label: 'screen 4',
				src: '/Project/institute/4.png'
			},
			{
				label: 'screen 5',
				src: '/Project/institute/5.png'
			},
			{
				label: 'screen 6',
				src: '/Project/institute/6.png'
			},
			{
				label: 'screen 7',
				src: '/Project/institute/7.png'
			},
			{
				label: 'screen 8',
				src: '/Project/institute/8.png'
			},
			{
				label: 'screen 9',
				src: '/Project/institute/9.png'
			},
			{
				label: 'screen 10',
				src: '/Project/institute/10.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/institute/1.webm',
				thumbnail: '/Project/institute/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/institute/2.webm',
				thumbnail: '/Project/institute/thum2.png'
			}
		]
	},
	{
		slug: 'Dharamveer Foundation',
		color: '#337ab7',
		description: [
			`Initiated from scratch, the Dharamveer-Foundation website's frontend was meticulously crafted using React.js, Next.js, Sass, HTML, CSS, and JavaScript, ensuring a robust and engaging user interface.`,
			`As a frontend website, it served the dual purpose of being an informative platform and a donation collection site for Dharamveer Foundation, embodying the mission to inform and inspire donations.`,
			`In my role as a Frontend Developer, I focused on creating a visually stunning design for Dharamveer-Foundation. Additionally, I integrated payment collection APIs, contributing to a seamless user experience in supporting the foundation's cause.`,
			`My experience with the Dharamveer-Foundation project was remarkably positive. Clear communication from the client facilitated efficient task completion, ensuring a smooth development process. Working on this project allowed me to refine my skills, address complex functionalities, and collaborate effectively with the client to bring their vision for the platform to fruition.`
		],

		shortDescription: `Crafted Dharamveer-Foundation's frontend with React, Next.js, Sass, HTML, CSS, and JS. Integrated donation APIs, ensuring a seamless, visually stunning platform. Positive collaboration and precise client communication facilitated a smooth development process.`,
		links: [
			{ to: 'https://www.dharmveerfoundation.com/', label: 'Website' },
			{
				to: 'https://www.figma.com/file/HSsAwbPB7jpXXxT6po5GXk/Dharmaveer-Foundation-(Copy)?type=design&t=1c3ZFpwJl0RxHf2l-6',
				label: 'Reference'
			}
		],
		logo: '/Project/dharamveer/logo.png',
		name: 'Dharamveer Foundation',
		period: {
			from: new Date('2023-01-11'),
			to: new Date('2023-01-22')
		},
		skills: getSkills('reactjs', 'nextjs', 'sass', 'html', 'css', 'js'),
		type: 'Info Website | Scratch',
		screenshots: [
			{
				label: 'screen 1',
				src: '/Project/dharamveer/1.png'
			},
			{
				label: 'screen 2',
				src: '/Project/dharamveer/2.png'
			},
			{
				label: 'screen 3',
				src: '/Project/dharamveer/3.png'
			},
			{
				label: 'screen 4',
				src: '/Project/dharamveer/4.png'
			},
			{
				label: 'screen 5',
				src: '/Project/dharamveer/5.png'
			},
			{
				label: 'screen 6',
				src: '/Project/dharamveer/6.png'
			},
			{
				label: 'screen 7',
				src: '/Project/dharamveer/7.png'
			},
			{
				label: 'screen 8',
				src: '/Project/dharamveer/8.png'
			},
			{
				label: 'screen 9',
				src: '/Project/dharamveer/9.png'
			},
			{
				label: 'screen 10',
				src: '/Project/dharamveer/10.png'
			}
		],
		video: [
			{
				label: 'video 1',
				src: '/Project/dharamveer/1.webm',
				thumbnail: '/Project/dharamveer/thum1.png'
			},
			{
				label: 'video 2',
				src: '/Project/dharamveer/2.webm',
				thumbnail: '/Project/dharamveer/thum2.png'
			}
		]
	}
];
