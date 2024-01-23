import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Frontend And Backend Developement',
		description:
			'My primary source of education in this subject comes from it. I have learned everything primarily through offical technological documentation, YouTube, and other resources like Udemy and blog websites',
		location: 'Surat',
		logo: Assets.Unknown,
		name: '',
		organization: 'Self Education ',
		period: { from: new Date(2021, 4, 1) },
		shortDescription:
			'My primary source of education in this subject comes from it. I have learned everything primarily through offical technological documentation, YouTube, and other resources like Udemy and blog websites',
		slug: 'dummy-education-item',
		subjects: []
	},
	{
		degree: 'Bachelor of Computer Application | Software Developement',
		description:
			'My primary source of education in this subject comes from it. I have learned everything primarily through offical technological documentation, YouTube, and other resources like Udemy and blog websites',
		location: 'Surat',
		logo: Assets.Unknown,
		name: 'Abiali',
		organization: 'Veer Narmad South GujaratUniversity',
		period: { from: new Date(2018, 4, 1), to: new Date(2021, 3, 31) },
		shortDescription:
			'My primary source of education in this subject comes from it. I have learned everything primarily through offical technological documentation, YouTube, and other resources like Udemy and blog websites',
		slug: 'dummy-education-item-2',
		subjects: []
	},
	{
		degree: 'Higher Secondary School Certificate',
		description: 'My primary source of education in this subject comes from',
		location: 'Surat',
		logo: Assets.Unknown,
		name: 'Abiali',
		organization: 'P R Khatiwala Vidya Sankul',
		period: { from: new Date(2016, 4, 1), to: new Date(2018, 3, 31) },
		shortDescription: 'My primary source of education in this subject comes from',
		slug: 'dummy-education-item-3',
		subjects: []
	},
	{
		degree: 'Secondary School Certificate',
		description: 'My primary source of education in this subject comes from',
		location: 'Surat',
		logo: Assets.Unknown,
		name: 'Abiali',
		organization: 'Madresha Tayyebyah Boys HIgh School',
		period: { from: new Date(2015, 4, 1), to: new Date(2016, 3, 31) },
		shortDescription: 'My primary source of education in this subject comes from',
		slug: 'dummy-education-item-4',
		subjects: []
	}
];
