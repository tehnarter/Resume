<script setup>
import { ref } from 'vue'
const isClicked = ref(false)
const toggleClass = () => {
	isClicked.value = !isClicked.value
}
const isClickedModal = ref(false)
const toggleModal = () => {
	isClickedModal.value = true
}
// Додаємо клас при кліку в батьківському компоненті

const removeClass = () => {
	isClickedModal.value = false
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
const isContacts = index => {
	return index === 3
}
defineProps({
	logo: String,
	menu: Array,
	send: String,
	emailPlaceholder: String,
	namePlaceholder: String,
	messagePlaceholder: String,
	statusSend: String,
})
</script>

<template>
	<header class="header">
		<div class="header__container">
			<div class="header__menu">
				<img class="logo" :src="logo" alt="logo" />

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
			<Contacts
				:class="{ modal: isClickedModal }"
				@closeModalClick="removeClass"
				:send="send"
				:emailPlaceholder="emailPlaceholder"
				:namePlaceholder="namePlaceholder"
				:messagePlaceholder="messagePlaceholder"
				:statusSend="statusSend"
			/>
		</div>
	</header>
</template>
<style>
/* .modal {
	display: none;
} */
</style>
