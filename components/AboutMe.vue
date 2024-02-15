<script setup>
defineProps({
	text: String,
})
</script>

<template>
	<section class="about">
		<div class="about__border">
			<div class="about__message message">
				<div class="message__you">
					<h5 class="message title">You</h5>
					<p class="message__text">Привіт. Розкажи щось про себе</p>
				</div>
				<div class="message__me">
					<h5 class="message title">Me</h5>
					<p class="message__text">
						Я початківець у сфері фронтенд розробки з глибоким інтересом до
						веб-технологій і бажанням вивчати нові речі.Мої навички включають
						роботу з HTML, CSS і JavaScript, Зараз я активно вивчаю Vue.js 3 та
						Nuxt.js 3, а також цікавлюсь можливостями бекенду, такими як Strapi,
						PHP та Nginx. Хоча мої знання в цих областях поки що поверхневі, я
						готовий вдосконалювати їх, працюючи над проектами та навчаючись на
						практиці. Крім того, я маю досвід у використанні збірників, таких як
						Gulp та Vite, для автоматизації рутинних завдань у веб-розробці.
					</p>
				</div>
				<div class="message__you">
					<h5 class="message title">You</h5>
					<p class="message__text">Що ще тебе цікавить?</p>
				</div>
				<div class="message__me">
					<h5 class="message title">Me</h5>
					<p class="message__text">
						Також я використовую бібліотеки, такі як GSAP, для створення
						анімацій та покращення користувацького досвіду.Маю базове розуміння
						принципів роботи веб-сайтів та бажання розвиватися в цій галузі. Я
						дуже мотивований та швидко навчаюсь, готовий вкладати час і зусилля
						для досягнення своїх цілей у фронтенд розробці."
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped></style>
