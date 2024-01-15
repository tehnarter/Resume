<script setup>
import { ref } from 'vue'
const activeComponent = ref('Home')
const changeComponent = component => {
	activeComponent.value = component
}

// Затримка з'явлення Home компонента на 5 секунд
</script>

<template>
	<div class="wrapper">
		<Header logo="RESUME" @changeComponent="changeComponent" />
		<main class="main">
			<div class="main__container">
				<Home
					v-if="activeComponent === 'Home'"
					title="Hello,my name is Igor.I'm Front-end web developer"
					steak="HTML5 SCSS JAVA SCRIPT VUE3 NUXT3 GIT WORDPRRES STRAPI NGINX GULP VITE
			GSAP LINUX PHP"
				/>

				<Portfolio v-if="activeComponent === 'Portfolio'" />
				<AboutMe v-if="activeComponent === 'About Me'" />
			</div>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Privacy policy" />
	</div>
</template>
<style scoped></style>
