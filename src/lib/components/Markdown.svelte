<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	export let content: string[] | string;

	// onMount(() => {
	// 	marked.use(gfmHeadingId());
	// 	marked.use(mangle());

	// 	const sanitizer = createSanitizer(window);

	// 	if (window) {
	// 		const parsed = marked.parse(content);

	// 		container.innerHTML = sanitizer.sanitize(parsed);

	// 		Prism.highlightAllUnder(container);
	// 	}
	// });
</script>

{#each content as item}
	<div class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px">
		<div class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px">
			<p class="text-[var(--tertiary-text)] font-300">{item}</p>
		</div>
	</div>
	<br />
{/each}
