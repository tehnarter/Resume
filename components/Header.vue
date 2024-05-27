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
const { t: translate } = useI18n()
const menu = [
	{ name: translate("menu[0]['name']") },
	{ name: translate("menu[1]['name']") },
	{ name: translate("menu[2]['name']") },
	{ name: translate("menu[3]['name']") },
	{
		name: translate("menu[4]['name']"),
		dropdown: [
			{
				name: translate("menu[4]['dropdown'][0]['name']"),
				path: translate("menu[4]['dropdown'][0]['path']"),
			},
			{
				name: translate("menu[4]['dropdown'][1]['name']"),
				path: translate("menu[4]['dropdown'][1]['path']"),
			},
		],
	},
]

const isContacts = index => {
	return index === 3
}
defineProps({
	statusSend: Object,
})
const isClickedBurger = ref(false)
const activeBurger = () => {
	isClickedBurger.value = !isClickedBurger.value
}
const closeBurger = () => {
	isClickedBurger.value = false
}
</script>

<template>
	<header class="header">
		<div class="header__container">
			<div class="header__menu">
				<div class="logo" :data-tooltip="$t('logo-tooltip')">
					<img src="/resume.svg" alt="logo" />
				</div>
				<Burger :class="{ active: isClickedBurger }" @click="activeBurger" />

				<nav
					class="nav"
					:class="{ active: isClickedBurger }"
					@click="closeBurger"
				>
					<ul class="nav__item">
						<li v-for="(nav, index) in menu" :key="nav.name" class="nav__link">
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
						</li>
					</ul>
				</nav>
				<div v-for="(nav, index) in menu" :key="nav.name" class="long">
					<div
						class="long__link"
						@click="toggleClass"
						v-if="index === menu.length - 1"
					>
						{{ nav.name }}
						<ul
							:class="{ column: isClicked }"
							@click="toggleClass"
							v-if="nav.dropdown"
							class="long__item"
						>
							<li v-for="dd in nav.dropdown" :key="dd.name">
								<NuxtLink :to="dd.path">
									{{ dd.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Contacts
				:class="{ modal: isClickedModal }"
				@closeModalClick="removeClass"
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
