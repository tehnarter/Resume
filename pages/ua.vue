<script setup>
import { ref } from 'vue'
const activeComponent = ref('Головна')
const changeComponent = component => {
	activeComponent.value = component
}
const headerMenuListUA = [
	{ name: 'Головна' },
	{ name: 'Проекти' },

	{ name: 'Про' },
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
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Головна'"
						title="Привіт, мене звати Ігор. Я веб-розробник Front-end"
					/>
					<Portfolio v-if="activeComponent === 'Проекти'" />
					<AboutMe v-if="activeComponent === 'Про'" />
				</div>
			</Transition>
		</main>
		<Footer fTittle="Портфоліо ™ & © 2024" polisy="Політика приватності" />
	</div>
</template>
<style scoped></style>
