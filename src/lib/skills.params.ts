import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export const PRO_SKILLS = [
	s({
		slug: 'html',
		color: '#f16529',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		years: '3.5'
	}),
	s({
		slug: 'css',
		color: '#2965f1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.CSS,
		name: 'CSS',
		years: '3.5'
	}),
	s({
		slug: 'js',
		color: '#f0db4f',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		years: '3.5'
	}),
	s({
		slug: 'ts',
		color: '#3178c6',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		years: '3.5'
	}),
	s({
		slug: 'git',
		color: '#3E77BF',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Git,
		name: 'Git & GitHub',
		years: '3.5'
	}),
	s({
		slug: 'reactjs',
		color: '#61dafb',
		logo: Assets.ReactJs,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		name: 'React Js',
		years: '3'
	}),
	s({
		slug: 'nextjs',
		color: '#0056e0',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.NextJs,
		name: 'Next Js',
		years: '3'
	}),
	s({
		slug: 'redux',
		color: '#764abc',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Redux,
		name: 'Redux ,RTK, RTK Query',
		years: '3.5'
	}),
	s({
		slug: 'boostrap',
		color: '#7952b3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		years: '3.5'
	}),
	s({
		slug: 'mui',
		color: '#00b0ff',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.MUI,
		name: 'Material UI',
		years: '3'
	}),
	s({
		slug: 'tailwind',
		color: '#07b6d5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		years: '2'
	}),
	s({
		slug: 'expressJs',
		color: '#828282',
		description: svelte,
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		years: '2.5'
	}),
	s({
		slug: 'nodejs',
		color: '#68bc4a',
		description: svelte,
		logo: Assets.NodeJs,
		name: 'NodeJs',
		years: '2.5'
	}),
	s({
		slug: 'monodb',
		color: '#00ed64',
		description: svelte,
		logo: Assets.MongoDB,
		name: 'Mongo DB, Mongoose',
		years: '2.5'
	}),
	s({
		slug: 'sequelize',
		color: '#03afef',
		description: svelte,
		logo: Assets.Sequelize,
		name: 'Sequelize',
		years: '2.5'
	}),
	s({
		slug: 'ec2',
		color: '#f58536',
		description: svelte,
		logo: Assets.Ec2,
		name: 'Aws Ec2',
		years: '2'
	}),
	s({
		slug: 's3',
		color: '#468c28',
		description: svelte,
		logo: Assets.S3,
		name: 'Aw S3',
		years: '2'
	})
];
export const INTER_SKILLS = [
	s({
		slug: 'firebase',
		color: '#ffcb29',
		description: svelte,
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'nginx',
		color: '#009900',
		description: svelte,
		logo: Assets.Nginx,
		name: 'Nginx'
	}),
	s({
		slug: 'electron',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Electron,
		name: 'Electron'
	}),
	s({
		slug: 'multer',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Multer,
		name: 'Multer'
	}),
	s({
		slug: 'aws-sdk',
		color: '#ee472a',
		description: svelte,
		logo: Assets.AWSSDK,
		name: 'AWS-SDK'
	}),
	s({
		slug: 'jwt',
		color: '#d63aff',
		description: svelte,
		logo: Assets.JWT,
		name: 'JSON Web Token'
	}),
	s({
		slug: 'stripe',
		color: '#6773e6',
		description: svelte,
		logo: Assets.Stripe,
		name: 'Stripe'
	}),
	s({
		slug: 'razorpay',
		color: '#3395ff',
		description: svelte,
		logo: Assets.Razorpay,
		name: 'Razorpay'
	}),
	s({
		slug: 'fast ui',
		color: '#ba3e6b',
		description: svelte,
		logo: Assets.Fast,
		name: 'Fast ui'
	}),
	s({
		slug: 'styled-components',
		color: '#efd48f',
		description: svelte,
		logo: Assets.SC,
		name: 'Styled Components'
	}),
	s({
		slug: 'ngrok',
		color: '#e73e3e',
		description: svelte,
		logo: Assets.Ngrok,
		name: 'Ngrok'
	}),
	s({
		slug: 'php',
		color: '#787cb4',
		description: svelte,
		logo: Assets.Php,
		name: 'PHP'
	}),
	s({
		slug: 'postgresql ',
		color: '#396c94',
		description: svelte,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL '
	}),
	s({
		slug: 'aws rds',
		color: '#6773e6',
		description: svelte,
		logo: Assets.Awsrds,
		name: 'Aws RDS'
	}),
	s({
		slug: 'nestjs',
		color: '#e0234e',
		description: svelte,
		logo: Assets.NestJs,
		name: 'NestJs'
	}),
	s({
		slug: 'typeorm',
		color: '#ffab00',
		description: svelte,
		logo: Assets.Typeorm,
		name: 'Typeorm'
	}),
	s({
		slug: 'svelte',
		color: '#ff4408',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'd3',
		color: '#f6814c',
		description: svelte,
		logo: Assets.D3,
		name: 'D3'
	}),
	s({
		slug: 'socket.io',
		color: '#fff',
		description: svelte,
		logo: Assets.socket,
		name: 'Socket.IO'
	}),
	s({
		slug: 'capacitor',
		color: '#001b39',
		description: svelte,
		logo: Assets.Capacitor,
		name: 'Capacitor'
	}),
	s({
		slug: 'agora',
		color: '#089cfd',
		description: svelte,
		logo: Assets.Agora,
		name: 'Agora'
	})
];

export const OTHER_SKILLS = [
	s({
		slug: 'slick carousel',
		color: '#cb3837',
		description: svelte,
		logo: Assets.NPM,
		name: 'Slick Carousel'
	}),
	s({
		slug: 'ant design',
		color: '#cb3837',
		description: svelte,
		logo: Assets.Antd,
		name: 'Ant Design'
	}),
	s({
		slug: 'axios',
		color: '#0a99e0',
		description: svelte,
		logo: Assets.Axios,
		name: 'Axios'
	}),
	s({
		slug: 'react slick',
		color: '#cb3837',
		description: svelte,
		logo: Assets.NPM,
		name: 'React Slick'
	}),
	s({
		slug: 'tawk.to',
		color: '#81c784',
		description: svelte,
		logo: Assets.Tawkto,
		name: 'Tawk.to'
	}),
	s({
		slug: 'web vitals',
		color: '#1fb6ff',
		description: svelte,
		logo: Assets.Webvitals,
		name: 'Web Vitals'
	}),
	s({
		slug: 'yup',
		color: '#cb3837',
		description: svelte,
		logo: Assets.NPM,
		name: 'Yup'
	}),
	s({
		slug: 'sass',
		color: '#cf649a',
		description: svelte,
		logo: Assets.Sass1,
		name: 'Sass'
	}),
	s({
		slug: 'next-redux-wrapper',
		color: '#0056e0',
		description: svelte,
		logo: Assets.NextJs,
		name: 'Next-Redux-Wrapper'
	}),
	s({
		slug: 'lottie-web',
		color: '#00deb2',
		description: svelte,
		logo: Assets.Lottie,
		name: 'Lottie-Web'
	}),
	s({
		slug: 'chart.js',
		color: '#fe819d',
		description: svelte,
		logo: Assets.ChartJs,
		name: 'Chart.js'
	}),
	s({
		slug: 'lidojs',
		color: '#fff',
		description: svelte,
		logo: Assets.Lidojs,
		name: 'Lidojs'
	}),
	s({
		slug: 'vercel',
		color: '#A08E8E',
		description: svelte,
		logo: Assets.Vercel,
		name: 'Vercel'
	}),
	s({
		slug: 'moment',
		color: '#529990',
		description: svelte,
		logo: Assets.Moment,
		name: 'Moment'
	}),
	s({
		slug: 'react-toastify',
		description: svelte,
		color: '#61dafb',
		logo: Assets.ReactJs,
		name: 'React-Toastify'
	}),
	s({
		slug: 'formik',
		color: '#0c58ce',
		description: svelte,
		logo: Assets.Formik,
		name: 'Formik'
	}),
	s({
		slug: 'winston',
		color: '#cb3837',
		description: svelte,
		logo: Assets.NPM,
		name: 'Winston'
	}),
	s({
		slug: 'cors',
		color: '#cb3837',
		description: svelte,
		logo: Assets.NPM,
		name: 'Cors'
	}),
	s({
		slug: 'nodemon',
		color: '#76d04b',
		description: svelte,
		logo: Assets.NodeMon,
		name: 'Nodemon'
	})
];
export const BEGGINER_SKILLS = [
	s({
		slug: 'react native',
		color: '#61dafb',
		description: svelte,
		logo: Assets.ReactJs,
		name: 'React Native'
	})
];
const All_Skills = [...BEGGINER_SKILLS, ...PRO_SKILLS, ...INTER_SKILLS, ...OTHER_SKILLS];
export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	All_Skills.filter((it) => slugs.includes(it.slug));
