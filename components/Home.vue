<script setup>
import { ref, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
const isMounted = ref(false)

defineProps({
	title: String,
	steak: String,
})
</script>

<template>
	<section class="home">
		<h1 class="home__name">
			{{ title }}
		</h1>
		<p class="home__steak">
			{{ steak }}
		</p>
	</section>
</template>
