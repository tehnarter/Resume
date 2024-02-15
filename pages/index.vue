<script setup>
import { ref } from 'vue'
const activeComponent = ref('Home')
const changeComponent = component => {
	activeComponent.value = component
}
</script>

<template>
	<div class="wrapper">
		<Header
			logo="/resume.svg"
			send="SEND"
			emailPlaceholder="Email"
			namePlaceholder="Name"
			messagePlaceholder="Message"
			statusSend="Send!"
			@changeComponent="changeComponent"
		/>
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Home'"
						title="Front-end Developer"
						text="Hello, my name is Igor. I'm  Front-end VUE developer who is eager to grow in the field of web technologies. Currently, I am seeking an opportunity to start my career in the IT industry and gain practical experience in real projects. I am excited about the opportunity to join your team and contribute to your projects!"
					/>
					<Portfolio v-if="activeComponent === 'Portfolio'" />
					<AboutMe
						v-if="activeComponent === 'About Me'"
						text="I am a beginner in the field of frontend development with a deep interest in web technologies and a desire to learn new things. My skills include working with HTML, CSS, and JavaScript. Currently, I am actively studying Vue.js 3 and Nuxt.js 3, and I am also interested in backend opportunities such as Strapi, PHP, and Nginx. Although my knowledge in these areas is currently superficial, I am ready to improve them by working on projects and learning through practice. Additionally, I have experience using build tools like Gulp and Vite for automating routine tasks in web development. I also utilize libraries such as GSAP to create animations and enhance the user experience. I have a basic understanding of how websites work and a desire to grow in this field. I am highly motivated and a fast learner, willing to invest time and effort to achieve my goals in frontend development."
					/>
				</div>
			</Transition>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Privacy policy" />
	</div>
</template>
<style>
.anime-enter-active,
.anime-leave-active {
	transition: opacity 2s ease;
}

.anime-enter-from,
.anime-leave-to {
	opacity: 0;
}
</style>
