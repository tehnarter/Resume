<script setup>
const emit = defineEmits()
// Емітимо подію для додавання класу в батьківському компоненті
const openPolicy = () => {
	emit('openPolicyClick')
}
</script>

<template>
	<footer class="footer">
		<div class="footer__container footer-row">
			<div class="footer__title">
				{{ $t('footer-title') }}
			</div>
			<div class="footer__policy" @click="openPolicy">
				{{ $t('footer-policy') }}
			</div>
		</div>
	</footer>
</template>
