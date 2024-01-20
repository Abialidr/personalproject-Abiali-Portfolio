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
			{ to: ' https://www.myspotsaver.com/', label: 'Website' }
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
		slug: 'Wedcell',
		color: '#b6044f',
		description: [
			`The Wedcell project was initiated from scratch, representing a comprehensive platform within the wedding industry. My primary focus was on the frontend development using Next JS. Leveraging a stack that included technologies such as React, Redux Toolkit, RTK Query, Axios, React Slick, Material-UI (Mui), Styled-components Lottie-web, Chart.js, Capacitor, Lidojs, Ant Design (AntD), Bootstrap, Socket.io, Tawk.to, Yup, TypeScript, JavaScript, HTML, and CSS.`,
			`Wedcell served as the central hub connecting vendors, administrators, and users. Its core objective was to cater to individuals planning to get married by offering them a platform to discover the best vendors, venues, and products at competitive prices. Additionally, the platform provided tools to streamline the wedding process, including features like guest lists, online invitations, task management, and more.`,
			`Undertaking the project independently, I developed a versatile event planning platform. Key features include venue/vendor showcases, a chat app for user/vendor communication, an e-commerce site with integrated payments and delivery services, a Canva-like card editor linked to WhatsApp, and planning tools. Additionally, I utilized Capacitor to create a mobile app, extending accessibility. The platform also features a blog section for wedding-related content.`,
			'My experience working on the Wedcell project was highly positive. The client, led by Shanteshwar Dixit (CEO), provided clear and precise instructions, facilitating a smooth development process. The scale of the project allowed me to demonstrate my capabilities in managing and implementing diverse functionalities, contributing significantly to the success of the platform.			'
		],

		shortDescription:
			'Led Wedcell project from scratch, focusing on Next JS frontend. Integrated diverse tech stack. Platform connects vendors, users, streamlining wedding planning. Developed independently: venue showcases, chat app, e-commerce with payments, Canva-like card editor, WhatsApp integration. Positive experience with precise guidance from CEO Shanteshwar Dixit. Demonstrated versatility, contributing to platform success.			',
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: ' https://wedcell.com/', label: 'Website' },
			{
				to: `https://play.google.com/store/apps/details?id=wedcell.com&pcampaignid=web_share`,
				label: 'Mobile App'
			}
		],
		logo: '/Project/wedcell/logo.png',
		name: 'Wedcell',
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
		slug: 'Wedcell-Admin',
		color: '#b6044f',
		description: [
			`The Wedcell-Admin project was developed from scratch, and I played a pivotal role in crafting the frontend using Next.js. Employing a tech stack that included React, Redux Toolkit, Axios, React Slick, Material-UI (mui), Styled-components, Next.js, Lottie-web, Chart.js, Lido.js, Ant Design (antd), Moment.js, Socket.io, and Yup, I ensured a robust and feature-rich user interface.`,
			`Wedcell-Admin served as the administrative hub for the main website, Wedcell.com. It efficiently managed various administrative and designer tasks. The project encompassed functionalities such as a messaging app, payment gateway integration, and a review management system. Additionally, the designer module allowed the creation of new design cards integrated into the invitation side of Wedcell.com. The overarching goal was to streamline and enhance administrative and design processes.`,
			`As a front-end developer, my primary responsibility was to transform Figma designs into functional and aesthetically pleasing frontend layouts. I integrated numerous APIs using Axios and implemented complex functions. Regular meetings with the client and the provision of frequent progress reports were part of my routine. I was the driving force behind building all functionalities from the ground up. These functionalities included admin control over users, vendors, venue owners, and product owners, along with the ability to add new blogs, engage in direct chat with clients and vendors, and access and maintain discipline within all chats. Furthermore, the admin had control over all products and a designer tool to create new cards for the main website.`,
			`My experience with this project was exceptionally positive. The client's precise communication about tasks facilitated timely completion, contributing to a smooth development process. Working on Wedcell-Admin allowed me to hone my skills, tackle challenging functionalities, and collaborate effectively with the client to achieve their vision for the platform.`
		],

		shortDescription: `Led development of Wedcell-Admin using Next.js, React, Redux Toolkit, and a diverse tech stack. Enhanced Wedcell.com's admin capabilities with features like messaging, payment integration, and a designer module. Translated Figma designs, integrated APIs, and ensured robust functionality. Positive experience, collaborating effectively with the client for a streamlined and feature-rich platform.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://admin.wedcell.com/', label: 'Website' }
		],
		logo: '/Project/wedcelladmin/logo.png',
		name: 'Wedcell-Admin ',
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
		slug: 'Wedcell-Vendors',
		color: '#b6044f',
		description: [
			`The Wedcell-Vendors website, developed for Wedcell PVT LTD, was a project that focused on enhancing the vendor side of the main website, Wedcell.com. My role primarily involved working on the frontend using Next.js and implementing various technologies such as React, Redux Toolkit, Axios, React Slick, MUI, Styled-components, Next.js, Lottie-web, Chart.js, and more. It's important to note that the project was built from scratch`,
			`The primary objective of the Wedcell-Vendors website was to serve as the vendor-side platform for Wedcell.com. This section of the project handled accounts for vendors, venue owners, and product owners. Notable features included a messaging app, payment gateway integration, Delhivery system for logistics, review management system, and an overall vendors management system. The project aimed to streamline and optimize the vendor-related processes on the Wedcell platform, contributing to a seamless experience for users and enhancing the efficiency of vendor management.`,
			`As a front-end developer in the project, I played a pivotal role in bringing the designs from Figma to life. My responsibilities extended to integrating various APIs using Axios, developing complex functions, and ensuring the smooth execution of the frontend. From creating UI components to handling API integrations and complex functionalities, my work encompassed the entire spectrum of front-end development. Regular client meetings were also part of my routine, where I provided updates and reports on the project's progress. Essentially, I took charge of building the entire functionality from scratch, contributing significantly to the success of the project. In addition to my front-end development role, I successfully extended the project's reach by creating a mobile app using Capacitor. This initiative enhanced the platform's accessibility, allowing users to engage seamlessly through a dedicated mobile application.`,
			`My experience with the Wedcell-Vendors project was exceptionally positive. The client, Shanteshwar Dixit (CEO), provided clear and precise task descriptions, facilitating efficient and timely completion of assignments. This clarity in communication contributed to a smooth workflow and a successful project outcome. Overall, my time working on this project was enriching, allowing me to apply my skills and contribute meaningfully to the development of a crucial aspect of the Wedcell platform.`
		],

		shortDescription: `I led the frontend development of Wedcell-Vendors, a Next.js project, enhancing Wedcell.com. My role included API integration, complex functionalities, and client meetings. Built from scratch, it streamlined vendor processes, integrating features like messaging, payment gateways, and logistics. Shanteshwar Dixit's clear instructions facilitated a positive experience, contributing to the project's success.`,
		links: [
			// { to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' },
			{ to: 'https://vendors.wedcell.com/', label: 'Website' },
			{
				to: 'https://play.google.com/store/apps/details?id=vendors.wedcell.com&pcampaignid=web_share',
				label: 'Mobile App'
			}
		],
		logo: '/Project/wedcellVendors/logo.png',
		name: 'Wedcell-Vendors ',
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
		type: 'vendor Management | Scatch',
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
	}
];

export default MY_PROJECTS;
