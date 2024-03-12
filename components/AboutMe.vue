<script setup>
const defaulMessage = [
	{ title: 'You', content: 'Привіт. Розкажи щось про себе' },
	{
		title: 'Me',
		content: `Я початківець у сфері фронтенд розробки з глибоким інтересом до
						веб-технологій і бажанням вивчати нові речі.Мої навички включають
						роботу з HTML, CSS і JavaScript, Зараз я активно вивчаю Vue.js 3 та
						Nuxt.js 3, а також цікавлюсь можливостями бекенду, такими як Strapi,
						PHP та Nginx. Хоча мої знання в цих областях поки що поверхневі, я
						готовий вдосконалювати їх, працюючи над проектами та навчаючись на
						практиці. Крім того, я маю досвід у використанні збірників, таких як
						Gulp та Vite, для автоматизації рутинних завдань у веб-розробці.`,
	},
	{ title: 'You', content: 'Що ще тебе цікавить?' },
	{
		title: 'Me',
		content: `Також я використовую бібліотеки, такі як GSAP, для створення
						анімацій та покращення користувацького досвіду.Маю базове розуміння
						принципів роботи веб-сайтів та бажання розвиватися в цій галузі. Я
						дуже мотивований та швидко навчаюсь, готовий вкладати час і зусилля
						для досягнення своїх цілей у фронтенд розробці.`,
	},
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
	{ title: 'You', content: 'Ok' },
]

defineProps({
	message: Array,
})
</script>

<template>
	<section class="about">
		<div class="about__border">
			<div class="about__message message">
				<div
					v-for="(block, index) in message || defaulMessage"
					:key="index"
					:class="index % 2 === 0 ? 'message__you' : 'message__me'"
					:style="{ 'animation-delay': `${index * 5 + 2}s` }"
				>
					<h2 class="message__title">{{ block.title }}</h2>
					<p
						v-if="index % 2 === 0"
						ref="content"
						class="message__text animated-content"
					>
						{{ block.content }}
					</p>
					<p class="message__text" v-else>{{ block.content }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped></style>
