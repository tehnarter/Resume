// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts

export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/styles/style.scss'],
	modules: ['nuxt-swiper'],
	swiper: {
		// Swiper options
		//----------------------
		prefix: 'Swiper',
		styleLang: 'css',

		modules: ['autoplay', 'navigation', 'pagination', 'effect-cube'],
	},
})
