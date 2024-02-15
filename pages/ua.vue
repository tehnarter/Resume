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
			logo="/cv.svg"
			@changeComponent="changeComponent"
			:menu="headerMenuListUA"
			send="НАДІСЛАТИ"
			emailPlaceholder="Емейл"
			namePlaceholder="Ім'я"
			messagePlaceholder="Повідомлення"
			statusSend="Надіслано!"
		/>
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Головна'"
						title="Front-end Developer"
						text="Привіт, мене звати Ігор. Я Front-end VUE розробник, що прагне розвиватися у сфері веб-технологій. Зараз я шукаю можливість почати свою кар'єру в IT-галузі та набути практичного досвіду у реальних проектах.З нетерпінням чекаю можливості приєднатися до вашої команди та внести свій внесок у ваші проекти!"
					/>
					<Portfolio v-if="activeComponent === 'Проекти'" />
					<AboutMe
						v-if="activeComponent === 'Про'"
						text="Я початківець у сфері фронтенд розробки з глибоким інтересом до
				веб-технологій і бажанням вивчати нові речі. Мої навички включають
				роботу з HTML, CSS і JavaScript, Зараз я активно вивчаю Vue.js 3 та
				Nuxt.js 3, а також цікавлюсь можливостями бекенду, такими як Strapi, PHP
				та Nginx. Хоча мої знання в цих областях поки що поверхневі, я готовий
				вдосконалювати їх, працюючи над проектами та навчаючись на практиці.
				Крім того, я маю досвід у використанні збірників, таких як Gulp та Vite,
				для автоматизації рутинних завдань у веб-розробці. Також я використовую
				бібліотеки, такі як GSAP, для створення анімацій та покращення
				користувацького досвіду.Маю базове розуміння принципів роботи веб-сайтів
				та бажання розвиватися в цій галузі. Я дуже мотивований та швидко
				навчаюсь, готовий вкладати час і зусилля для досягнення своїх цілей у
				фронтенд розробці."
					/>
				</div>
			</Transition>
		</main>
		<Footer fTittle="Портфоліо ™ & © 2024" polisy="Політика приватності" />
	</div>
</template>
<style scoped></style>
