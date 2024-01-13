<script lang="ts">
	import { page } from '$app/stores';
	import { HOME, NavBar } from '$lib/params';
	import { theme, toggleTheme } from '$lib/stores/theme';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;
		}
	}
</script>

<div class="container-fluid bg-dark text-white py-4">
	<div class="container">
		<div class="row">
			<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
				&copy; <a class="border-bottom text-secondary" href="#">Your Site Name</a>, All Right
				Reserved.
			</div>
			<div class="col-md-6 text-center text-md-end">
				<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
				Designed By
				<a class="border-bottom text-secondary" href="">Abiali Doctor</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'bootstrap/dist/css/bootstrap.min.css';

	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		border-bottom: 1px solid var(--secondary);
		background-color: var(--main);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				background-color: var(--main-hover);
			}
		}
	}
</style>
