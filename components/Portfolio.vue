<script setup>
import { ref } from 'vue'
const slides = [
	{
		id: 1,
		imageSrc: '/food.jpg',
		description: 'VUE3  SCSS G-SAP VITE',
		path: 'https://project-1.resume-cv.pp.ua',
	},
	{
		id: 2,
		imageSrc: '/polar.jpg',
		description: 'GULP SCSS JS WORDPRESS PHP',
		path: 'https://project-2.resume-cv.pp.ua',
	},
	{
		id: 3,
		imageSrc: '/travel.jpg',
		description: 'GULP SCSS JS ',
		path: 'https://project-3.resume-cv.pp.ua',
	},

	{
		id: 4,
		imageSrc: '/car.jpg',
		description: 'GULP SCSS JS',
		path: 'https://project-4.resume-cv.pp.ua',
	},
	{
		id: 5,
		imageSrc: '/cafe.jpg',
		description: 'HTML CSS JS ',
		path: 'https://project-5.resume-cv.pp.ua',
	},
	{
		id: 6,
		imageSrc: '/rest.jpg',
		description: 'HTML CSS',
		path: 'https://project-6.resume-cv.pp.ua',
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
			:modules="[
				SwiperAutoplay,
				SwiperPagination,
				SwiperNavigation,
				SwiperEffectFade,
			]"
			:slides-per-view="1"
			:speed="3000"
			:autoHeight="true"
			:parallax="true"
			:autoplay="{ delay: 5000, disableOnInteraction: true }"
			:pagination="{ clickable: true }"
			effect="fade"
			:fadeEffect="{
				crossFade: true,
			}"
			:navigation="{
				prevEl: '.custom-swiper-button-prev',
				nextEl: '.custom-swiper-button-next',
			}"
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
			<div
				class="custom-swiper-button-prev custom-swiper-button swiper-button-disabled"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100">
					<g class="custom-swiper-svg-wrap">
						<g class="custom-swiper-svg-circle-wrap">
							<circle cx="42" cy="42" r="40"></circle>
						</g>
						<path
							class="custom-swiper-svg-arrow"
							d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
						></path>
						<path class="custom-swiper-svg-line" d="M80,0H0"></path>
					</g>
				</svg>
			</div>
			<div
				class="custom-swiper-button-next custom-swiper-button swiper-button-disabled"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100">
					<g class="custom-swiper-svg-wrap">
						<g class="custom-swiper-svg-circle-wrap">
							<circle cx="42" cy="42" r="40"></circle>
						</g>
						<path
							class="custom-swiper-svg-arrow"
							d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
						></path>
						<path class="custom-swiper-svg-line" d="M80,0H0"></path>
					</g>
				</svg>
			</div>
		</Swiper>
		<p class="slide-description">{{ currentSlideDescription }}</p>
	</section>
</template>

<style scoped>
.portfolio {
	margin-top: 50px;
}

.swiper {
	position: relative;
}

.slider-img {
	width: 100%;
	border-radius: 10px;
}
.slide-description {
	margin-top: 30px;
	text-align: center;
	font-family: RobotoBoldItalic;
	font-size: 20px;
	color: #8b8c8d;
}
.custom-swiper-button-prev {
	left: 2%;
}
.custom-swiper-button {
	transition: 0.5s;
	outline: none;
	position: absolute;
	width: 10%;
	z-index: 10;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	&:not(.swiper-button-disabled):hover .custom-swiper-svg-circle-wrap {
		transform: scale(1.1);
	}
	&:not(.swiper-button-disabled):hover circle {
		stroke-dasharray: 4px;
		stroke-dashoffset: 4px;
		opacity: 1;
	}
	&:not(.swiper-button-disabled):hover .custom-swiper-svg-arrow {
		transform: rotateY(180deg) translate(-40px, 36.1px) scale(1.75);
	}
	&:not(.swiper-button-disabled):hover .custom-swiper-svg-line {
		transform: translate(35px, 42px) scaleX(0.5);
	}
	& svg {
		transition: 0.5s;
	}
}
.custom-swiper-svg-wrap {
	transform: translateY(7px);
	transform-origin: 80px 0px 0px;
}
.custom-swiper-svg-circle-wrap {
	transition: 0.5s;
	transform-origin: -20px 40px;
	opacity: 1;
	& circle {
		transition: 0.5s;
		stroke-width: 5px;
		stroke: #007aff;
		fill: none;
		stroke-dasharray: 3;
		stroke-dashoffset: 500;
		opacity: 1;
		transform-origin: 0px 0px 0px;
	}
}
.custom-swiper-svg-arrow {
	transition: 0.5s;
	fill: #007aff;
	transform: rotateY(180deg) translate(-55px, 36.1px) scale(1.75);
}
.custom-swiper-svg-line {
	transition: 0.5s;
	stroke: #007aff;
	stroke-width: 3;
	transform: translate(50px, 42px);
}
.custom-swiper-button-next {
	right: 2%;
	.custom-swiper-svg-wrap {
		transform: translateY(7px) rotateY(180deg);
	}
}
.swiper-button-disabled {
	opacity: 0.2;
	cursor: default;
}
</style>
