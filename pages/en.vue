<script setup>
import { ref } from 'vue'
const activeComponent = ref('Home')
const changeComponent = component => {
	activeComponent.value = component
}
const statusSendEn = {
	ok: 'Send!',
	error: 'Oops!',
	field: ' Please fill in all fields',
}
const headerMenuListEN = [
	{ name: 'Home' },
	{ name: 'Portfolio' },

	{ name: 'About Me' },
	{ name: 'Contacts' },
	{
		name: 'EN',
		dropdown: [
			{ name: 'UA', path: '/' },
			{ name: 'PL', path: '/pl' },
		],
	},
]
const messageEn = [
	{ title: 'You', content: 'Hello' },
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
</script>

<template>
	<div class="wrapper">
		<Header
			:menu="headerMenuListEN"
			logo="/resume.svg"
			send="SEND"
			emailPlaceholder="Email"
			namePlaceholder="Name"
			messagePlaceholder="Message"
			:statusSend="statusSendEn"
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
					<AboutMe v-if="activeComponent === 'About Me'" :message="messageEn" />
				</div>
			</Transition>
		</main>
		<Footer fTittle="Portfolio ™ & © 2024" polisy="Privacy policy" />
	</div>
</template>
<style></style>
