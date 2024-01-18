<!-- VideoPlayer.svelte -->
<script lang="ts">
	import VideoPlayer from 'svelte-video-player';
	export let videoSource: string;
	export let poster: string;
	export let label: string;
</script>

<div class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px">
	<VideoPlayer width="500" height="500" {poster} source={videoSource} />
	<p class="text-[var(--tertiary-text)] font-300">{label}</p>
</div>

<style>
	/* Add any styling if needed */
</style>
