<script setup>
import { ref } from 'vue'
const activeComponent = ref('Home')
const changeComponent = component => {
	activeComponent.value = component
}
</script>

<template>
	<div class="wrapper">
		<Header logo="RESUME" @changeComponent="changeComponent" />
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Home'"
						title="Hello,my name is Igor.I'm Front-end web developer Hello,my name is Igor.I'm Front-end web developer Hello,my name is Igor.I'm Front-end web developer  "
					/>
					<Portfolio v-if="activeComponent === 'Portfolio'" />
					<AboutMe v-if="activeComponent === 'About Me'" />
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
