<script setup>
import { ref } from 'vue'

const activeComponent = ref('Головна')
const changeComponent = component => {
	activeComponent.value = component
}
const { t: translate } = useI18n()
const statusSend = {
	ok: translate('contacts.ok'),
	error: translate('contacts.error'),
	field: translate('contacts.field'),
}

// console.log(menu[0].name)
</script>

<template>
	<div class="wrapper">
		<Header @changeComponent="changeComponent" :statusSend="statusSend" />
		<main class="main">
			<Transition name="anime" mode="out-in">
				<div class="main__container" :key="activeComponent">
					<Home
						v-if="['Головна', 'Home', 'Główna'].includes(activeComponent)"
					/>
					<Portfolio
						v-if="
							['Проекти', 'Portfolio', 'Projekty'].includes(activeComponent)
						"
					/>
					<AboutMe
						v-if="['Про Мене', 'About Me', 'O mnie'].includes(activeComponent)"
					/>
				</div>
			</Transition>
		</main>
		<Footer />
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
