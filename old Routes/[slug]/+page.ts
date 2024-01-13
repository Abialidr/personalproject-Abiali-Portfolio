import { PRO_SKILLS } from '$lib/skills.params';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = PRO_SKILLS.find((item) => {
			return item.slug === params.slug;
		});

		return { skill };
	}
}
