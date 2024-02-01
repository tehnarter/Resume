<script setup>
import { ref, defineEmits } from 'vue'
const isClicked = ref(false)
const toggleClass = () => {
	isClicked.value = !isClicked.value
}

const emit = defineEmits()
const isClickedModal = ref(false)
const toggleModal = () => {
	isClickedModal.value = true
}

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
const isContacts = index => {
	return index === 3
}
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
							v-for="(nav, index) in menu || defaultMenu"
							:key="nav.name"
							class="nav__link"
						>
							<div
								class="nav__link-item"
								v-if="!nav.dropdown !== isContacts(index)"
								@click="toggleComponent(nav.name)"
							>
								{{ nav.name }}
							</div>

							<div
								class="nav__link-item"
								v-else-if="!nav.dropdown && isContacts(index)"
								@click="toggleModal"
							>
								{{ nav.name }}
							</div>
							<div class="nav__link-item" v-else @click="toggleClass">
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
			<Contacts class="contacts" :class="{ modal: isClickedModal }" />
		</div>
	</header>
</template>
<style>
/* .modal {
	display: none;
} */
</style>
