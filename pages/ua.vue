<script setup>
import { ref } from 'vue'
const activeComponent = ref('Головна')
const changeComponent = component => {
	activeComponent.value = component
}
let headerMenuListUA = [
	{ name: 'Головна' },
	{ name: 'Проекти' },

	{ name: 'Про ' },
	{ name: 'Контакти' },
	{
		name: 'UA',
		dropdown: [
			{ name: 'EN', path: '/' },
			{ name: 'PL', path: '/pl' },
		],
	},
]
</script>

<template>
	<div class="wrapper">
		<Header
			logo="Резюме"
			@changeComponent="changeComponent"
			:menu="headerMenuListUA"
		/>
		<main class="main">
			<div class="main__container">
				<Home
					v-if="activeComponent === 'Головна'"
					title="Привіт, мене звати Ігор. Я веб-розробник Front-end"
					steak="HTML5 SCSS JAVA SCRIPT VUE3 NUXT3 GIT WORDPRRES STRAPI NGINX GULP VITE
			GSAP LINUX PHP"
				/>

				<Portfolio v-if="activeComponent === 'Проекти'" />
				<AboutMe v-if="activeComponent === 'Про'" />
			</div>
		</main>
		<Footer fTittle="Портфоліо ™ & © 2024" polisy="Політика приватності" />
	</div>
</template>
<style scoped></style>
