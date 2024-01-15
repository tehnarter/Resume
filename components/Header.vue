<script setup>
import { ref } from 'vue'
const isClicked = ref(false)
const toggleClass = () => {
	isClicked.value = !isClicked.value
}
const emit = defineEmits()

const toggleComponent = name => {
	isClicked.value = false
	emit('changeComponent', name)
}
const defaultMenu = [
	{ name: 'Home' },
	{ name: 'Portfolio' },

	{ name: 'About Me' },
	{ name: 'Contacts' },
	{
		name: 'EN',
		dropdown: [
			{ name: 'UA', path: '/ua' },
			{ name: 'PL', path: '/pl' },
		],
	},
]
defineProps({
	logo: String,
	menu: Array,
})
</script>

<template>
	<header class="header">
		<div class="header__container">
			<div class="header__menu">
				<div class="logo">{{ logo }}</div>
				<nav class="nav">
					<ul class="nav__item">
						<li
							v-for="nav in menu || defaultMenu"
							:key="nav.name"
							class="nav__link"
						>
							<div v-if="!nav.dropdown" @click="toggleComponent(nav.name)">
								{{ nav.name }}
							</div>
							<div v-else @click="toggleClass">
								{{ nav.name }}
								<ul
									:class="{ column: isClicked }"
									@click="toggleClass"
									v-if="nav.dropdown"
									class="nav__long"
								>
									<li v-for="dd in nav.dropdown" :key="dd.name">
										<NuxtLink :to="dd.path">
											{{ dd.name }}
										</NuxtLink>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
