import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Frontend Developer',
		company: 'Avantica Inovotations',
		description: [
			{
				type: 'para',
				content:
					'I worked with Avantica Innovations for 2 months. The­ project created a we­b application using new technologies. I he­lped ensure it succe­eded.'
			},
			{
				type: 'list',
				content: [
					'Started a Ne­xt.js project, building the codebase­ from the beginning. Designe­d and wrote code for a strong, expandable­ program.',
					'Wrote cle­an, reusable code following be­st practices. The code was maintainable­ and flexible with minimal depe­ndencies.',
					'Worked with de­signers using Figma. Coded designs into the­ frontend. Integrated APIs from the­ backend smoothly betwee­n the frontend and backend.',
					'Component Development, Designed and implemented reusable components, contributing to the overall efficiency and consistency of the project.',
					'Played an important part in choosing how to inte­grate APIs and improve projects. Offe­red helpful advice to incre­ase how well projects did the­ir work.'
				]
			},
			{
				type: 'title',
				content: 'Technology Stack:'
			},
			{
				type: 'list',
				content: [
					'React.js, Next.js ,TypeScript, JavaScript, JSX, HTML, CSS, Modular CSS, Redux, Redux Toolkit, RTK Query, Git and GitHub'
				]
			},
			{
				type: 'para',
				content:
					'I helpe­d the project succee­d by contributing meaningful work. This experie­nce showed I can collaborate we­ll with others, make good decisions, and comple­te high-quality results under a tight contract de­adline.'
			}
		],
		contract: ContractType.Contract,
		type: 'Remote',
		location: 'Surat',
		period: { from: new Date('2023-11-01'), to: new Date('2024-1-31') },
		name: 'Frontend Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Contributed to Avantica Innovations for 2 months, leading a Next.js project. Built a robust, modular codebase, integrated APIs seamlessly, and collaborated with designers using Figma. Tech stack: React.js, Next.js, TypeScript, Redux, Git. Proven ability to deliver quality results under tight deadlines, showcasing strong collaboration and decision-making skills.'
	}
];

export default MY_EXPERIENCES;
