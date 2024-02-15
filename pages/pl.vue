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
			logo="/cv.svg"
			:menu="headerMenuLisPl"
			send="WYŚLIJ"
			emailPlaceholder="E-mail"
			namePlaceholder="Imię"
			messagePlaceholder="Wiadomość"
			@changeComponent="changeComponent"
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
					<AboutMe
						v-if="activeComponent === 'About Me'"
						text=" Jestem
					początkującym w dziedzinie front-end developmentu z głębokim
					zainteresowaniem technologiami internetowymi i chęcią nauki nowych
					rzeczy. Moje umiejętności obejmują pracę z HTML, CSS i JavaScript.
					Obecnie aktywnie uczę się Vue.js 3 i Nuxt.js 3, a także interesuję się
					możliwościami backendu, takimi jak Strapi, PHP i Nginx. Chociaż moja
					wiedza w tych obszarach jest obecnie powierzchowna, jestem gotowy ją
					rozwijać, pracując nad projektami i ucząc się poprzez praktykę.
					Dodatkowo, mam doświadczenie w korzystaniu z narzędzi do budowy,
					takich jak Gulp i Vite, do automatyzacji rutynowych zadań w tworzeniu
					stron internetowych. Wykorzystuję również biblioteki, takie jak GSAP,
					do tworzenia animacji i poprawy doświadczenia użytkownika. Mam
					podstawową wiedzę na temat działania stron internetowych i chęć
					rozwoju w tej dziedzinie. Jestem bardzo zmotywowany i szybko się uczę,
					gotowy poświęcić czas i wysiłek, aby osiągnąć swoje cele w rozwoju
					front-endu."
					/>
				</div>
			</Transition>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Polityka prywatności" />
	</div>
</template>
<style scoped></style>
