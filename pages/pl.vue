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
			{ name: 'UA', path: '/' },
			{ name: 'EN', path: '/en' },
		],
	},
]
const messagePl = [
	{ title: 'You', content: 'Приві' },
	{
		title: 'Me',
		content: `Я початківець `,
	},
	{ title: 'You', content: 'Що ще тебе цікавить?' },
	{
		title: 'Me',
		content: `Також`,
	},
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
]
const statusSendPl = {
	ok: 'Wysłano!',
	error: 'Oops!',
	field: ' Proszę wypełnić wszystkie pola',
}
</script>

<template>
	<div class="wrapper">
		<Header
			logo="/cv.svg"
			:menu="headerMenuLisPl"
			send="WYŚLIJ"
			emailPlaceholder="E-mail"
			namePlaceholder="Imię"
			messagePlaceholder="Wiadomość"
			@changeComponent="changeComponent"
			:statusSend="statusSendPl"
		/>
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="activeComponent === 'Home'"
						title="Front-end Developer"
						text="Witam, nazywam się Igor. Jestem programistą Front-end VUE, który pragnie rozwijać się w dziedzinie technologii internetowych. W tej chwili szukam okazji do rozpoczęcia mojej kariery w branży IT i zdobycia praktycznego doświadczenia w rzeczywistych projektach. Nie mogę się doczekać możliwości dołączenia do waszego zespołu i wniesienia wkładu w wasze projekty!"
					/>
					<Portfolio v-if="activeComponent === 'Portfolio'" />
					<AboutMe v-if="activeComponent === 'About Me'" :message="messagePl" />
				</div>
			</Transition>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Polityka prywatności" />
	</div>
</template>
<style scoped></style>
