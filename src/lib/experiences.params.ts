import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Mid-Senior Full-Stack Developer',
		company: 'Avantica Inovotations',
		description: [
			{
				type: 'para',
				content:
					'I worked with Avantica Innovations for 2 months. The­ project created a we­b application using new technologies. I he­lped ensure it succe­eded.'
			},
			{
				type: 'title',
				content: 'Responsibilities:'
			},
			{
				type: 'title2',
				content: 'Front-End Development:'
			},
			{
				type: 'list',
				content: [
					'Developed reusable and clean code with minimal dependencies in a Next.js project.',
					'Translated designs from Figma into functional components, ensuring a seamless user experience.',
					'Integrated APIs from the backend and crafted reusable components for efficient development'
				]
			},
			{
				type: 'title2',
				content: 'Collaborative Decision-Making:'
			},
			{
				type: 'list',
				content: [
					'Contributed to decision-making processes regarding API integration strategies and project optimization.',
					'Shared experiences as a developer to guide the team towards optimal solutions.'
				]
			},
			{
				type: 'title2',
				content: 'Back-End Development:'
			},
			{
				type: 'list',
				content: [
					'Integrated the database with the backend, creating models, routes, and controllers for a suitable REST API.',
					'Implemented S3 bucket integration using multer-s3 for efficient file handling. Optimized APIs to enhance overall system performance.'
				]
			},
			{
				type: 'title',
				content: 'Technology Stack:'
			},
			{
				type: 'list',
				content: [
					'Front-End: React.js, Next.js, TypeScript, JavaScript, JSX, HTML, CSS, Modular CSS, Redux, Redux Toolkit, RTK Query, GitHub.',
					`Back-end: Node.js, Express, MongoDB.`,
					`Additional Tools: Multer-S3, CORS, JWT, etc.`
				]
			},
			{
				type: 'title',
				content: 'Achievements:'
			},
			{
				type: 'list',
				content: [
					'Successfully contributed to the completion of the project within the stipulated timeframe.',
					`Ensured high code quality and maintainability through the use of best practices`,
					`Collaborated effectively with cross-functional teams to drive successful project outcomes.`
				]
			},
			{
				type: 'para',
				content:
					'This experience at Avantica Innovations honed my skills in rapid development, collaborative decision-making, and the application of a diverse tech stack in a real-world project environment. The experience has further solidified my capabilities as a Mid Senior Full Stack Developer, ready to take on new challenges and contribute effectively to dynamic development projects.'
			}
		],
		contract: ContractType.Contract,
		type: 'Remote',
		location: 'Surat',
		period: { from: new Date('2023-11-01'), to: new Date('2024-1-31') },
		name: 'Full-Stack Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Contributed to Avantica Innovations for 2 months, leading a Next.js project. Built a robust, modular codebase, integrated APIs seamlessly, and collaborated with designers using Figma. Tech stack: React.js, Next.js, TypeScript, Redux, Git. Proven ability to deliver quality results under tight deadlines, showcasing strong collaboration and decision-making skills.'
	},
	{
		slug: 'Senior Full-Stack Developer',
		company: 'Wedcell',
		description: [
			{
				type: 'para',
				content:
					'As a pivotal member of the Wedcell team, I undertook a challenging 6-month contract as a Frontend and Backend Developer, contributing significantly to the development of websites and applications catering to the wedding industry.'
			},
			{
				type: 'title',
				content: 'Key Contributions::'
			},
			{
				type: 'list',
				content: [
					'Frontend Development: Translated Figma design concepts into captivating frontend interfaces, meticulously implementing HTML, CSS, and JavaScript to ensure pixel-perfect designs and a seamless user experience.',
					'Functionality Integration: Enhanced user interactivity and responsiveness by incorporating essential functionalities into the designs.',
					'API Integration: Seamlessly connected frontend and backend components through API integration, facilitating smooth data flow and real-time interactions.',
					'Backend Services: Developed robust backend services and APIs responsible for data storage, user authentication, and application logic.',
					'Database Management: Oversaw database management, ensuring data integrity, and optimizing database performance.',
					`Third-Party API Integration: Successfully integrated third-party APIs, including S3, Razorpay, and WhatsApp, expanding application capabilities and enhancing user convenience.`,
					'Hosting and QA Testing: Managed daily hosting on EC2 instances for quality assurance testing, ensuring optimal performance and reliability.',
					'Server Management: Deployed new servers on EC2 instances for testing purposes and seamlessly incorporated them into the load balancer for efficient resource utilization.',
					'Collaboration: Engaged in daily meetings with the CEO to discuss project progress, future development strategies, and the implementation of new features.'
				]
			},
			{
				type: 'title',
				content: 'Contract-Based Dynamic Experience'
			},
			{
				type: 'para',
				content:
					'This 6-month contract equipped me with the agility and adaptability required in dynamic project environments. It not only sharpened my technical skills but also honed my ability to collaborate effectively within a team setting. My commitment to delivering high-quality web solutions tailored to the unique requirements of the wedding industry was consistently reinforced throughout this contract.'
			}
		],
		contract: ContractType.Contract,
		type: 'Remote',
		location: 'Surat',
		period: { from: new Date('2023-05-01'), to: new Date('2023-10-31') },
		name: 'Senior Full-Stack Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'As a pivotal member of the Wedcell team, I excelled in a 6-month contract as a Frontend and Backend Developer, translating design concepts into seamless interfaces, integrating functionalities, managing databases, and facilitating API connections. I demonstrated adaptability in dynamic project environments, collaborating closely with the CEO for project progress and feature implementation.'
	},
	{
		slug: 'Junior Full Stack Developer',
		company: 'Globalia Soft',
		description: [
			{
				type: 'para',
				content: `As a Web Developer at Globalia Soft, I played a pivotal role in the company's service-oriented approach to web development. Working in a dynamic environment with numerous clients and diverse projects, my responsibilities included:`
			},
			{
				type: 'list',
				content: [
					`Adapted to Clients: Quickly understood and met each client's unique needs by learning and applying specific technologies relevant to their projects.`,
					`Designed Frontends: Created visually appealing, user-friendly website designs that provided seamless and engaging user experiences.`,
					`Enhanced Functionality: Added new features to websites, improving existing ones to make websites more useful.`,
					`Met with Clients: Actively engaged with clients to gather project requirements, provide updates, and address concerns for successful project outcomes`,
					`Integrated APIs: Seamlessly integrated various APIs into web applications, enhancing functionality and data exchange.`,
					`Developed Backends: Built robust APIs to support website operations, including database design and server-side scripting.`,
					`Handled Cloud Hosting (AWS): Deployed and managed web applications on Amazon Web Services (AWS), ensuring optimal performance, security, and scalability.`
				]
			},
			{
				type: 'para',
				content: `My time at Globalia Soft enhanced my ability to blend technical expertise with adaptability, efficiently meeting client needs. I'm committed to delivering quality work on time and quickly learning new skills, making me an asset in web development.`
			}
		],
		contract: ContractType.FullTime,
		type: 'On-Site',
		location: 'Surat',
		period: { from: new Date('2022-08-01'), to: new Date('2023-04-31') },
		name: 'Junior Full Stack Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'As a Web Developer at Globalia Soft, I excelled in adapting to diverse client needs, designing visually appealing frontends, enhancing website functionality, and seamlessly integrating APIs. My proactive client engagement and backend development skills, including cloud hosting on AWS, reflect my commitment to delivering quality web solutions. My time at Globalia Soft has strengthened my versatility and proficiency in web development, making me an invaluable asset to project success.'
	},
	{
		slug: 'Intern and Junior Developer',
		company: 'Lucky IT Services',
		description: [
			{
				type: 'list',
				content: [
					`Lucky IT Services: Specializing in web development, excelling on freelancing platforms, and delivering diverse projects.`,
					`As a Frontend Web Developer Intern at DigitalWeb Solutions, I immersed myself in the world of web development, gaining hands-on experience in HTML, CSS, JavaScript, React.js, and other frontend technologies. My primary role was to transform design concepts from Figma into fully functional websites, focusing on aesthetics, responsiveness, and user interactivity.`,
					`Throughout the internship, I achieved the following`,
					`Mastered Fundamentals: I solidified my knowledge of HTML and CSS for structuring and styling web content. I also honed my JavaScript skills to create interactive web elements.`,
					`React.js Proficiency: I contributed to the development of web applications using React.js, enhancing user experiences through dynamic components.`,
					`Design-to-Code Workflow: Collaborating closely with the design team, I converted Figma design mockups into pixel-perfect web pages, ensuring fidelity to the original vision.`,
					`Responsive Design: I developed expertise in creating responsive web designs, guaranteeing optimal user experiences across various devices.`,
					`Problem Solving: I acquired problem-solving skills to troubleshoot issues and find efficient solutions for high-quality web applications.`
				]
			}
		],
		contract: ContractType.FullTime,
		type: 'On-Site',
		location: 'Surat',
		period: { from: new Date('2020-08-01'), to: new Date('2022-07-31') },
		name: 'Intern and Junior Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'At Lucky IT Services, as a Junior Web Developer Intern, I immersed myself in web development, mastering HTML, CSS, and JavaScript. Proficient in React.js, I contributed to dynamic web applications, seamlessly translating Figma designs into pixel-perfect, responsive pages. My problem-solving skills ensured high-quality applications, reflecting a commitment to excellence in the world of web development.'
	}
];

export default MY_EXPERIENCES;
