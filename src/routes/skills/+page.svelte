<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { base } from '$app/paths';
	import { PROSKILLS, INTERSKILLS, BEGGINERSKILLS, OTHERSKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const { items: pro_skills } = PROSKILLS;

	// let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		// if (isBlank(query)) {
		// 	result = items;
		// }

		// result = items.filter((it) => it.name.toLowerCase().includes(query));
	};
	// const title = 'Proficient Skills';
</script>

<SearchPage title="Proficient Skills" on:search={onSearch}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each pro_skills as skill (skill.slug)}
			<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
			>
				<h3 class="text-[var(--tertiary-text)]">{skill.name}</h3>
				<span style="margin-top:5px" class="text-[var(--tertiary-text)]">{skill.years} years</span>
			</Card>
		{/each}
	</div>
	<!-- {/if} -->
</SearchPage>

<SearchPage title="Intermediate Skills" on:search={onSearch}>
	<!-- {#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else} -->
	<!-- <h4 style="text-align: center;">( used in previous projects but never mastered it )</h4> -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each INTERSKILLS.items as skill (skill.slug)}
			<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
			>
				<h3 class="text-[var(--tertiary-text)]">{skill.name}</h3>
				<!-- <h5 class="text-[var(--tertiary-text)]">{skill.years} years</h5> -->
			</Card>
		{/each}
	</div>
	<!-- {/if} -->
</SearchPage>

<SearchPage title="Beginners Skills" on:search={onSearch}>
	<!-- <h4 style="text-align: center;">( just started learning )</h4> -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each BEGGINERSKILLS.items as skill (skill.slug)}
			<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
			>
				<h3 class="text-[var(--tertiary-text)]">{skill.name}</h3>
			</Card>
		{/each}
	</div>
	<!-- {/if} -->
</SearchPage>
<SearchPage title="Known Dependencies" on:search={onSearch}>
	<!-- <h4 style="text-align: center;">( just started learning )</h4> -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each OTHERSKILLS.items as skill (skill.slug)}
			<Card
				classes={['cursor-pointer decoration-none']}
				tiltDegree={1}
				bgImg={getAssetURL(skill.logo)}
				color={skill.color}
			>
				<h3 class="text-[var(--tertiary-text)]">{skill.name}</h3>
			</Card>
		{/each}
	</div>
	<!-- {/if} -->
</SearchPage>
