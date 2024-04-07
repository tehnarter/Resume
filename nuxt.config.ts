// https://nuxt.com/docs/api/configuration/nuxt-config

// nuxt.config.ts

export default defineNuxtConfig({
	app: {
		head: {
			title: 'Resume',
		},
	},
	ssr: false,
	devtools: { enabled: false },
	css: ['~/assets/styles/style.scss'],
	modules: ['nuxt-swiper', '@nuxtjs/i18n'],
	i18n: {
		langDir: 'locales',
		strategy: 'prefix_except_default',

		locales: [
			{
				code: 'ua',
				iso: 'ua-UA',
				name: 'Ukraine',
				file: 'ua.json',
			},
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'pl',
				iso: 'pl-PL',
				name: 'Poland',
				file: 'pl.json',
			},
		],
		defaultLocale: 'ua',
		vueI18n: "fallbackLocale: 'ua'",
	},
	swiper: {
		// Swiper options
		//--------------------
		prefix: 'Swiper',
		styleLang: 'css',

		modules: [
			'autoplay',
			'navigation',
			'pagination',
			'effect-fade',
			'parallax',
		],
	},
})
