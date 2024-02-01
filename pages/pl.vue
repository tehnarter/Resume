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
			:menu="headerMenuLisPl"
			@changeComponent="changeComponent"
		/>
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Home'"
						title="Witam, nazywam się Igor. Jestem programistą Front-end"
					/>
					<Portfolio v-if="activeComponent === 'Portfolio'" />
					<AboutMe v-if="activeComponent === 'About Me'" />
				</div>
			</Transition>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Polityka prywatności" />
	</div>
</template>
<style scoped></style>
