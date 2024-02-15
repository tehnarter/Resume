<script setup>
defineProps({
	fTittle: String,
	polisy: String,
})
</script>

<template>
	<footer class="footer">
		<div class="footer__container footer-row">
			<div class="footer__title">
				{{ fTittle }}
			</div>
			<div class="footer__polisy">{{ polisy }}</div>
		</div>
	</footer>
</template>
