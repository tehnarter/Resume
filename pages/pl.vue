<script setup>
import { ref } from 'vue'
const activeComponent = ref('Home')
const changeComponent = component => {
	activeComponent.value = component
}

const headerMenuLisPl = [
	{ name: 'Home' },
	{ name: 'Portfolio' },

	{ name: 'About Me' },
	{ name: 'Contacts' },
	{
		name: 'PL',
		dropdown: [
			{ name: 'UA', path: '/ua' },
			{ name: 'EN', path: '/' },
		],
	},
]
</script>

<template>
	<div class="wrapper">
		<Header
			logo="CV"
			@changeComponent="changeComponent"
			:menu="headerMenuLisPl"
		/>
		<main class="main">
			<div class="main__container">
				<Home
					v-if="activeComponent === 'Home'"
					title="Witam, nazywam się Igor. Jestem programistą Front-end"
					steak="HTML5 SCSS JAVA SCRIPT VUE3 NUXT3 GIT WORDPRRES STRAPI NGINX GULP VITE
			GSAP LINUX PHP"
				/>
				<Portfolio v-if="activeComponent === 'Portfolio'" />
				<AboutMe v-if="activeComponent === 'About Me'" />
			</div>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Polityka prywatności" />
	</div>
</template>
<style scoped></style>
