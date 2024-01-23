import { MY_PROJECTS, TEST_PROJECTS } from '$lib/projects.params';

export function load({ params }: { params: Record<string, string> }) {
	const arr = TEST_PROJECTS.map((val) => val.slug);
	if (params.slug) {
		let project;
		if (arr.includes(params.slug)) {
			project = TEST_PROJECTS.find((item) => {
				return item.slug === params.slug;
			});
		} else {
			project = MY_PROJECTS.find((item) => {
				return item.slug === params.slug;
			});
		}

		return { project };
	}
}
