<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import LetsWork from '$lib/components/LetWork/LetsWork.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon, isEmail } from '$lib/params';
	import { PRO_SKILLS } from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { onMount } from 'svelte';
	const { description, lastName, links, name, title, skills } = HOME;

	let currentSectionIndex = 0,
		currentScrollY = 0;
	let currentSlide = 0;
	const slides = [
		'https://via.placeholder.com/800x400/FF5733/ffffff',
		'https://via.placeholder.com/800x400/33FF57/ffffff',
		'https://via.placeholder.com/800x400/5733FF/ffffff'
	];

	const nextSlide = () => {
		currentSlide = (currentSlide + 1) % slides.length;
	};

	const prevSlide = () => {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	};
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div class="main-Container">
	<div
		class="col self-center md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px slides"
		id={`section0`}
	>
		<div class="md:flex-1 gap-10px">
			<h5 class="text-[var(--tertiary-text)]  text-center md:text-left text-[1em] font-extralight">
				Hi, my name is
			</h5>
			<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
			<h4 class="text-[var(--tertiary-text)]  text-center md:text-left text-[1em] font-extralight">
				{description}
			</h4>
			<h2
				class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.5em] font-extralight"
			>
				Fullstack Developer | Javascript | React | Node
			</h2>
			<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
				{#each links as link}
					<a
						class="decoration-none"
						href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							icon={getPlatfromIcon(link.platform)}
							color={'var(--accent-text)'}
							size={'20px'}
						/>
					</a>
				{/each}
			</div>
		</div>
		<Carrousel items={skills ?? PRO_SKILLS} />
	</div>

	<div
		class="col self-center md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px slides"
		id={`section1`}
	>
		<div class="flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12 major_div">
			<MainTitle>About Me</MainTitle>
			<div class="main_div">
				<img src={'MyImage.jpg'} />
				<div>
					<h1>hello world !!!</h1>
					<p>
						I'm not your typical designer glued to an artboard. Instead, I dive into stylesheets,
						tweak fonts, and ponder layouts with a smile (~_^). My goal? Crafting smooth user
						experiences that are both functional and trendy.
					</p>
					<br />
					<p>
						In the JavaScript world, I've got the tools to build snappy, resilient applications.
						Whether collaborating or going solo, I focus on performance and scalability. Simply put,
						I make tech work, and I make it look good!
					</p>
				</div>
			</div>
		</div>
	</div>

	<div
		class="md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px slides"
		style="
		display: flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		"
		id={`section2`}
	>
		<!-- <div class="flex-1 col justify-between gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12 major_div"> -->
		<MainTitle>Testimonial</MainTitle>
		<div class="carousel">
			<div class="carousel_item" style={`transform: translateX(${-currentSlide * 100}%)`}>
				<div class="testimonial-item text-center">
					<div class="position-relative mb-5">
						<img
							class="img-fluid rounded-circle border border-secondary p-2 mx-auto"
							src="testimonial-1.jpg"
							alt=""
						/>
						<div class="testimonial-icon">
							<i class="fa fa-quote-left text-primary" />
						</div>
					</div>
					<p class="fs-5 fst-italic">
						Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.
						At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
					</p>
					<hr class="w-25 mx-auto" />
					<h5>Client Name</h5>
					<span>Profession</span>
				</div>
			</div>
			<div class="carousel_item" style={`transform: translateX(${-currentSlide * 100}%)`}>
				<div class="testimonial-item text-center">
					<div class="position-relative mb-5">
						<img
							class="img-fluid rounded-circle border border-secondary p-2 mx-auto"
							src="testimonial-1.jpg"
							alt=""
						/>
						<div class="testimonial-icon">
							<i class="fa fa-quote-left text-primary" />
						</div>
					</div>
					<p class="fs-5 fst-italic">
						Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.
						At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
					</p>
					<hr class="w-25 mx-auto" />
					<h5>Client Name</h5>
					<span>Profession</span>
				</div>
			</div>
			<div class="carousel_item" style={`transform: translateX(${-currentSlide * 100}%)`}>
				<div class="testimonial-item text-center">
					<div class="position-relative mb-5">
						<img
							class="img-fluid rounded-circle border border-secondary p-2 mx-auto"
							src="testimonial-1.jpg"
							alt=""
						/>
						<div class="testimonial-icon">
							<i class="fa fa-quote-left text-primary" />
						</div>
					</div>
					<p class="fs-5 fst-italic">
						Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.
						At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
					</p>
					<hr class="w-25 mx-auto" />
					<h5>Client Name</h5>
					<span>Profession</span>
				</div>
			</div>

			<button on:click={prevSlide} class="arrow prev">&#10094;</button>
			<button on:click={nextSlide} class="arrow next">&#10095;</button>
		</div>
		<!-- </div> -->
	</div>

	<div
		class="col self-center md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px slides"
		id={`section3`}
	>
		<LetsWork />
	</div>
</div>

<style lang="scss">
	.carousel {
		position: relative;
		overflow: hidden;
		// max-width: 100%;
		width: fit-content;
		// margin: auto;
		margin-top: 50px;
		display: flex;
		flex-direction: row;
		// padding: 0px 20px;
	}

	.carousel_item {
		// height: 200px;
		min-width: 100% !important;
		transition: transform 0.5s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		// margin: 40px;

		img {
			height: 100px;
			width: 100px;
			border-radius: 50%;
		}
	}

	.arrow {
		position: absolute;
		top: 20%;
		transform: translateY(-50%);
		cursor: pointer;
		font-size: 24px;
		padding: 10px;
		border: none;
		outline: none;
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}
	/*** Testimonial ***/

	.major_div {
		@media (max-width: 768px) {
			justify-content: center;
			align-items: center;

			// grid-template-columns: repeat(1, 1fr);
		}
	}
	.main_div {
		display: flex;
		gap: 50px;
		align-items: center;

		@media (max-width: 768px) {
			justify-content: center;
			align-items: center;
			flex-direction: column;
			// grid-template-columns: repeat(1, 1fr);
			gap: 10px;
		}
		img {
			// height: 400px;
			width: 350px;
			border-radius: 2%;
			@media (max-width: 768px) {
				// display: none;
				width: 200px;
			}
			@media (max-width: 390px) {
				width: 150px;
			}
		}
	}
	.main-Container {
		height: calc(100vh - 45px);
		// width: 100vw;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		overflow-x: hidden;
		// display: flex;
		// flex-direction: column;
		// align-self: center;
		// justify-content: center;
	}
	.main-Container::-webkit-scrollbar {
		display: none;
	}
	.slides {
		height: 100vh;
		width: fit-content;
		// justify-content: center;
		// align-items: center;
		scroll-snap-align: start;
	}
</style>
