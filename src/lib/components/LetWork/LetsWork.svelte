<script>
	import Icon from '../Icon/Icon.svelte';
	import { HOME, getPlatfromIcon, isEmail } from '$lib/params';
	import MainTitle from '../MainTitle/MainTitle.svelte';
	const { links } = HOME;
</script>

<div class="container-xxl pb-5" id="contact">
	<div class="container py-5">
		<div class="row g-5 mb-2 ">
			<MainTitle>Let's Work Together</MainTitle>
		</div>
		<!-- <div class="col-lg-6 text-lg-end">
				<a class="btn btn-primary py-3 px-5" href="">Say Hello</a>
			</div> -->
		<!-- </div> -->
		<div class="row g-5">
			<div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
				<!-- <p class="mb-2">My office:</p>
				<h3 class="fw-bold"></h3> -->
				<hr class="w-100" />
				<p class="mb-2">Call me:</p>
				<h3 class="fw-bold">+91 82009 95014</h3>
				<hr class="w-100" />
				<p class="mb-2">Mail me:</p>
				<h3 class="fw-bold">abialidctr@gmail.com</h3>
				<hr class="w-100" />
				<p class="mb-2">Follow me:</p>
				<div
					class="justify-center md:justify-start p-y-15px p-x-0px "
					style="flex-direction: row !important;gap:10px;"
				>
					{#each links as link}
						<a
							style="text-decoration: none; padding-right:10px;"
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
			<div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
				<form>
					<div class="row g-3">
						<div class="col-md-6">
							<label for="name" class="p-b-0px">Your Name</label>
							<!-- <div class="form-floating"> -->
							<input style="margin-bottom: 10px;" type="text" class="form-control" id="name" />
							<!-- </div> -->
						</div>
						<div class="col-md-6">
							<label for="email" class="p-b-0px">Your Email</label>
							<!-- <div class="form-floating"> -->
							<label for="subject" style="margin-bottom: 10px;" class="p-b-0px">Subject</label>
							<input style="margin-bottom: 10px;" type="email" class="form-control" id="email" />
							<!-- </div> -->
						</div>
						<div class="col-12">
							<!-- <div class="form-floating"> -->
							<label for="subject" class="p-b-0px">Subject</label>
							<input
								style="margin-bottom: 10px;"
								type="text"
								class="form-control p-b-10px"
								id="subject"
							/>
							<!-- </div> -->
						</div>
						<div class="col-12">
							<!-- <div class="form-floating"> -->
							<label for="message" class="p-b-0px">Message</label>
							<textarea
								class="form-control"
								id="message"
								style="height: 100px; margin-bottom: 20px;"
							/>
							<!-- </div> -->
						</div>
						<div class="col-12">
							<button class="btn btn-secondary py-3 px-5" type="submit">Send Message</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../../../css/bootstrap.min.css';
</style>
