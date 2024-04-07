<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
const isMounted = ref(false)
const isLoaded = ref(false)
const animateIn = () => {
	gsap.fromTo('.home__title', { opacity: 0 }, { duration: 5, x: 0, opacity: 1 })
	gsap.fromTo('.home__text', { y: -2000 }, { duration: 3, y: 0, opacity: 1 })
	gsap.fromTo(
		'.home__steak img',
		{ x: 2000 },
		{ duration: 3, x: 0, stagger: 0.3 }
	)
}
const animateOut = () => {
	gsap.to('.home__name', { duration: 3, x: -2000 })
	gsap.to('.home__steak img', { duration: 3, x: 2000 })
}
onMounted(() => {
	// Анімація при появі компонента
	animateIn()

	// Позначте, що компонент вже відображено
	isMounted.value = true
	isLoaded.value = true
})

onBeforeUnmount(() => {
	// Анімація перед зникненням компонента
	if (isMounted.value) {
		animateOut()
	}
})
</script>

<template>
	<section class="home" :class="{ loaded: isLoaded }">
		<div class="home__name">
			<h1 class="home__title">
				{{ $t('home-title') }}
			</h1>

			<p class="home__text">
				{{ $t('home-text') }}
			</p>
		</div>
		<div class="home__steak">
			<img class="home__steak-1" src="/html.svg" alt="html" />
			<img class="home__steak-2" src="/css.svg" alt="css" />
			<img class="home__steak-3" src="/sass.svg" alt="sass" />
			<img class="home__steak-4" src="/js.svg" alt="js" />
			<img class="home__steak-5" src="/vue.svg" alt="vue" />
			<img class="home__steak-6" src="/nuxt.svg" alt="nuxt" />
			<img class="home__steak-7" src="/git.svg" alt="git" />
			<img class="home__steak-8" src="/gsap.svg" alt="gsap" />
			<img class="home__steak-9" src="/gulp.svg" alt="gulp" />
			<img class="home__steak-10" src="/vite.svg" alt="vite" />
			<img class="home__steak-11" src="/strapi.svg" alt="strapi" />
			<img class="home__steak-12" src="/wp.svg" alt="wp" />
			<img class="home__steak-13" src="/nginx.svg" alt="nginx" />
			<img class="home__steak-14" src="/php.svg" alt="php" />
			<img class="home__steak-15" src="/lubuntu.svg" alt="lubuntu" />
		</div>
	</section>
</template>
<style lang="scss" scoped></style>
