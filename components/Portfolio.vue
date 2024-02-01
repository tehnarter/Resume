<script setup>
import { ref } from 'vue'
const slides = [
	{
		id: 1,
		imageSrc: '/food.jpg',
		description: 'HTML',
		path: 'https://google.com',
	},
	{
		id: 2,
		imageSrc: '/travel.jpg',
		description: 'SCSS 2',
		path: 'https://google.com',
	},
	{
		id: 3,
		imageSrc: '/car.jpg',
		description: 'NUXT 3',
		path: 'https://google.com',
	},
	{
		id: 4,
		imageSrc: '/rest.jpg',
		description: 'VUE 3',
		path: 'https://google.com',
	},
	{
		id: 5,
		imageSrc: '/cafe.jpg',
		description: 'VITE',
		path: 'https://google.com',
	},
]
const currentSlideDescription = ref(slides[0].description)

const onSlideChange = swiper => {
	// Оновлюємо текстовий опис поточного слайда при зміні
	currentSlideDescription.value = slides[swiper.realIndex].description
}
</script>

<template>
	<section class="portfolio">
		<Swiper
			class="my-swiper"
			:modules="[
				SwiperAutoplay,
				SwiperPagination,
				SwiperNavigation,
				SwiperEffectCube,
			]"
			:slides-per-view="1"
			:loop="true"
			:autoplay="{ delay: 5000, disableOnInteraction: true }"
			:pagination="{ clickable: true }"
			effect="cube"
			:cubeEffect="{
				shadow: true,
				shadowOffset: 20,
				shadowScale: 0.8,
				slideShadows: true,
			}"
			navigation
			@slideChange="onSlideChange"
		>
			<SwiperSlide v-for="slide in slides" :key="slide.id">
				<a
					class="slider-path"
					:href="slide.path"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						class="slider-img"
						:src="slide.imageSrc"
						:alt="slide.description"
					/>
				</a>
			</SwiperSlide>
		</Swiper>
		<p class="slide-description">{{ currentSlideDescription }}</p>
	</section>
</template>

<style scoped>
.portfolio {
	margin-top: 50px;
}
.my-swiper {
	/* width: 70%;
	height: 500px; */
}
.swiper-pagination {
}
.swiper-slider {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.slider-path {
	width: 80%;

	display: block;
	margin: auto;
}
.slider-img {
	width: 100%;

	display: block;
	margin: auto;
}
.slide-description {
	margin-top: 30px;
	text-align: center;
	color: #fff;
}
</style>
