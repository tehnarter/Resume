<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
const isMounted = ref(false)

defineProps({
	title: String,
})

onMounted(() => {
	// Анімація при появі компонента
	gsap.from('.home__name', { duration: 3, opacity: 1, x: -1000 })
	gsap.from('.home__steak-1', { duration: 3, opacity: 1, x: 1000 })
	gsap.from('.home__steak-2', { duration: 3, opacity: 1, x: 1500 })
	gsap.from('.home__steak-3', { duration: 4, opacity: 1, x: 2000 })
	gsap.from('.home__steak-4', { duration: 4, opacity: 1, x: 2500 })
	gsap.from('.home__steak-5', { duration: 5, opacity: 1, x: 3000 })
	gsap.from('.home__steak-6', { duration: 5, opacity: 1, x: 3500 })
	gsap.from('.home__steak-7', { duration: 6, opacity: 1, x: 4000 })
	gsap.from('.home__steak-8', { duration: 6, opacity: 1, x: 4500 })
	gsap.from('.home__steak-9', { duration: 7, opacity: 1, x: 5000 })
	gsap.from('.home__steak-10', { duration: 7, opacity: 1, x: 5500 })
	gsap.from('.home__steak-11', { duration: 8, opacity: 1, x: 6000 })
	gsap.from('.home__steak-12', { duration: 8, opacity: 1, x: 6500 })
	gsap.from('.home__steak-13', { duration: 9, opacity: 1, x: 7000 })
	gsap.from('.home__steak-14', { duration: 9, opacity: 1, x: 7500 })
	// }
	// Позначте, що компонент вже відображено
	isMounted.value = true
})

onBeforeUnmount(() => {
	// Анімація перед зникненням компонента
	// if (isMounted.value) {
	gsap.to('.home__name', { duration: 3, opacity: 0, x: -1000 })
	gsap.to('.home__steak', { duration: 3, opacity: 0, x: 1000 })

	// }
})
</script>

<template>
	<section class="home">
		<h1 class="home__name">
			{{ title }}
		</h1>
		<span class="home__steak-1">HTML5</span>
		<span class="home__steak-2">SCSS</span>
		<span class="home__steak-3">JAVA SCRIPT</span>
		<span class="home__steak-4">VUE3</span>
		<span class="home__steak-5">NUXT3</span>
		<span class="home__steak-6">GIT</span>
		<span class="home__steak-7">WORDPRRES</span>
		<span class="home__steak-8"> STRAPI</span>
		<span class="home__steak-9">NGINX</span>
		<span class="home__steak-10">GULP</span>
		<span class="home__steak-11">VITE</span>
		<span class="home__steak-12">GSAP</span>
		<span class="home__steak-13"> LINUX</span>
		<span class="home__steak-14"> PHP</span>
	</section>
</template>
