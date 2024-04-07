<script setup>
const { t: translate } = useI18n()
const message = [
	{
		title: translate("messages[0]['title']"),
		content: translate("messages[0]['content']"),
	},
	{
		title: translate("messages[1]['title']"),
		content: translate("messages[1]['content']"),
	},
	{
		title: translate("messages[2]['title']"),
		content: translate("messages[2]['content']"),
	},
	{
		title: translate("messages[3]['title']"),
		content: translate("messages[3]['content']"),
	},

	{
		title: translate("messages[5]['title']"),
		content: translate("messages[5]['content']"),
	},
	{
		title: translate("messages[6]['title']"),
		content: translate("messages[6]['content']"),
	},
	{
		title: translate("messages[7]['title']"),
		content: translate("messages[7]['content']"),
	},
]

console.log(message)
</script>

<template>
	<section class="about">
		<div class="about__border">
			<div class="about__message message">
				<h3>{{ message['title'] }}</h3>
				<div
					v-for="(block, index) in message"
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
