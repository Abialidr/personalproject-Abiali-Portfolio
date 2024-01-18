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
		name: 'Reux ,RTK, RTK Query',
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
		slug: 'tailwin',
		color: '#07b6d5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		years: '2'
	}),
	s({
		slug: 'ExpressJs',
		color: '#828282',
		description: svelte,
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		years: '2.5'
	}),
	s({
		slug: 'NodeJs',
		color: '#68bc4a',
		description: svelte,
		logo: Assets.NodeJs,
		name: 'NodeJs',
		years: '2.5'
	}),
	s({
		slug: 'Mongo DB',
		color: '#00ed64',
		description: svelte,
		logo: Assets.MongoDB,
		name: 'Mongo DB',
		years: '2.5'
	}),
	s({
		slug: 'Sequelize',
		color: '#03afef',
		description: svelte,
		logo: Assets.Sequelize,
		name: 'Sequelize',
		years: '2.5'
	}),
	s({
		slug: 'Ec2',
		color: '#f58536',
		description: svelte,
		logo: Assets.Ec2,
		name: 'Aws Ec2',
		years: '2'
	}),
	s({
		slug: 'S3',
		color: '#468c28',
		description: svelte,
		logo: Assets.S3,
		name: 'Aw S3',
		years: '2'
	})
];
export const INTER_SKILLS = [
	s({
		slug: 'Firebase',
		color: '#ffcb29',
		description: svelte,
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'Nginx',
		color: '#009900',
		description: svelte,
		logo: Assets.Nginx,
		name: 'Nginx'
	}),
	s({
		slug: 'Electron',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Electron,
		name: 'Electron'
	}),
	s({
		slug: 'Multer',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Multer,
		name: 'Multer'
	}),
	s({
		slug: 'JSON web token',
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
		name: 'Styledd Components'
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
		slug: 'Svelte',
		color: '#ff4408',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	})
];
export const BEGGINER_SKILLS = [
	s({
		slug: 'React Native',
		color: '#61dafb',
		description: svelte,
		logo: Assets.ReactJs,
		name: 'React Native'
	})
];

const All_Skills = [
	s({
		slug: 'React Native',
		color: '#61dafb',
		description: svelte,
		logo: Assets.ReactJs,
		name: 'React Native'
	}),
	s({
		slug: 'Firebase',
		color: '#ffcb29',
		description: svelte,
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'Nginx',
		color: '#009900',
		description: svelte,
		logo: Assets.Nginx,
		name: 'Nginx'
	}),
	s({
		slug: 'Electron',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Electron,
		name: 'Electron'
	}),
	s({
		slug: 'Multer',
		color: '#9feaf9',
		description: svelte,
		logo: Assets.Multer,
		name: 'Multer'
	}),
	s({
		slug: 'JSON web token',
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
		name: 'Styledd Components'
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
		slug: 'Svelte',
		color: '#ff4408',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
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
		name: 'Reux ,RTK, RTK Query',
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
		slug: 'tailwin',
		color: '#07b6d5',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		years: '2'
	}),
	s({
		slug: 'ExpressJs',
		color: '#828282',
		description: svelte,
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		years: '2.5'
	}),
	s({
		slug: 'NodeJs',
		color: '#68bc4a',
		description: svelte,
		logo: Assets.NodeJs,
		name: 'NodeJs',
		years: '2.5'
	}),
	s({
		slug: 'Mongo DB',
		color: '#00ed64',
		description: svelte,
		logo: Assets.MongoDB,
		name: 'Mongo DB',
		years: '2.5'
	}),
	s({
		slug: 'Sequelize',
		color: '#03afef',
		description: svelte,
		logo: Assets.Sequelize,
		name: 'Sequelize',
		years: '2.5'
	}),
	s({
		slug: 'Ec2',
		color: '#f58536',
		description: svelte,
		logo: Assets.Ec2,
		name: 'Aws Ec2',
		years: '2'
	}),
	s({
		slug: 'S3',
		color: '#468c28',
		description: svelte,
		logo: Assets.S3,
		name: 'Aw S3',
		years: '2'
	})
];
export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	All_Skills.filter((it) => slugs.includes(it.slug));
