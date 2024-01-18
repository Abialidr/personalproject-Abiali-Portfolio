import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import { PRO_SKILLS, INTER_SKILLS, BEGGINER_SKILLS, OTHER_SKILLS } from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';
import { isBlank } from '@riadh-adrani/utils';

export const TITLE_SUFFIX = 'Abiali Doctor';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	console.log(`🚀 ~ file: params.ts:29 ~ getPlatfromIcon ~ platform:`, platform);
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		case Platform.Upwork:
			return Icons.Upwork;
		case Platform.Whatsapp:
			return Icons.Whatsapp;
		case Platform.Instagram:
			return Icons.Instagram;
		case Platform.Skype:
			return Icons.Skype;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Abiali',
	lastName: 'Doctor',
	description:
		'I am a versatile developer with 3.5 years of experience in JavaScript, specializing in both front-end and back-end development. My expertise extends to creating dynamic and interactive web applications, ensuring robust and efficient solutions.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/Abialidr' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/abiali-doctor/'
		},
		// {
		// 	platform: Platform.Twitter,
		// 	link: 'https://twitter.com/'
		// },
		// {
		// 	platform: Platform.StackOverflow,
		// 	link: 'https://stackoverflow.com/'
		// },
		{
			platform: Platform.Email,
			link: 'abialidctr@gmail.com'
		},
		{
			platform: Platform.Upwork,
			link: 'https://www.upwork.com/freelancers/~0117095824471d455e'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/abiali.doctorr'
		},
		{
			platform: Platform.Whatsapp,
			link: ' https://wa.me/message/AUNZI5IL5UMDA1 '
		},
		{
			platform: Platform.Instagram,
			link: 'https://www.instagram.com/abiali_doctorr/'
		},
		{
			platform: Platform.Skype,
			link: 'https://join.skype.com/invite/e57rB4F68UvR'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const PROSKILLS: SkillsPageParams = {
	title: 'Skills',
	items: PRO_SKILLS
};
export const INTERSKILLS: SkillsPageParams = {
	title: 'Skills',
	items: INTER_SKILLS
};

export const BEGGINERSKILLS: SkillsPageParams = {
	title: 'Skills',
	items: BEGGINER_SKILLS
};
export const OTHERSKILLS: SkillsPageParams = {
	title: 'Skills',
	items: OTHER_SKILLS
};
export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};

export const isEmail = (email: string): boolean => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return !isBlank(email) && reg.test(email);
};
