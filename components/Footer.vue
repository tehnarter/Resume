<script setup>
defineProps({
	fTittle: String,
	polisy: String,
})
</script>

<template>
	<footer class="footer">
		<div class="footer__container">
			<div>
				{{ fTittle }}
			</div>
			<div>{{ polisy }}</div>
		</div>
	</footer>
</template>
