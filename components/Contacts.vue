<script setup>
import { ref } from 'vue'
const emit = defineEmits()
const closeModal = () => {
	// Емітимо подію для додавання класу в батьківському компоненті
	emit('closeModalClick')
}

const formData = ref({
	name: '',
	email: '',
	message: '',
})

defineProps({
	statusSend: Object,
})
const status = ref('')
const isFormSubmitted = ref(false)

const handleSubmit = async statusSend => {
	if (isFormSubmitted.value) return
	if (
		!formData.value.name ||
		!formData.value.email ||
		!formData.value.message
	) {
		status.value = statusSend.field
		return
	}
	try {
		const response = await fetch('https://formspree.io/f/xleqjpvo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData.value),
		})
		if (response.ok) {
			status.value = statusSend.ok
			formData.value.name = ''
			formData.value.email = ''
			formData.value.message = ''
			// Затримка на 20 секунд для відображення повідомлення "Send!"
			setTimeout(() => {
				status.value = ''
			}, 3000)
			isFormSubmitted.value = true
		} else {
			const data = await response.json()
			if (data.errors) {
				status.value = data.errors.map(error => error.message).join(', ')
			} else {
				status.value = statusSend.error
			}
		}
	} catch (error) {
		status.value = statusSend.error
	}
}
</script>

<template>
	<section class="contacts">
		<div class="contacts__modal">
			<img
				@click="closeModal"
				class="contacts__close"
				src="/close.svg"
				width="20"
				alt=""
			/>
			<div class="contacts__row">
				<div class="contacts__icon">
					<a
						class="contacts__messenger"
						href="https://www.messenger.com/t/100004789512275"
						target="_blank"
						><img src="/messenger.svg" alt="Messenger" width="30"
					/></a>
					<a
						class="contacts__telegram"
						href="https://t.me/tehnarter"
						target="_blank"
						><img src="/telegram.svg" alt="Telegram" width="30"
					/></a>
					<a
						class="contacts__discord"
						href="https://discordapp.com/users/1079056722473271427/"
						target="_blank"
						><img src="/discord.svg" alt="discord" width="30"
					/></a>
					<a
						class="contacts__github"
						href="https://github.com/tehnarter"
						target="_blank"
						><img src="/github.svg" alt="github" width="30"
					/></a>
				</div>

				<form class="contacts__form" @submit.prevent="handleSubmit">
					<input
						class="contacts__name"
						name="name"
						type="text"
						autocomplete="on"
						:placeholder="$t('contacts.name')"
						v-model="formData.name"
						required
					/>
					<input
						class="contacts__email"
						name="email"
						type="email"
						autocomplete="on"
						:placeholder="$t('contacts.email')"
						v-model="formData.email"
						required
					/>
					<textarea
						class="contacts__text"
						type="text"
						name="message"
						:placeholder="$t('contacts.text')"
						maxlength="500"
						v-model="formData.message"
						required
					></textarea>
					<p class="contacts__status" v-if="status">{{ status }}</p>
					<button
						class="contacts__send"
						type="button"
						@click="handleSubmit(statusSend)"
						:disabled="isFormSubmitted"
					>
						{{ $t('contacts.send') }}
					</button>
				</form>
			</div>
		</div>
	</section>
</template>
<style scoped lang="scss">
@import '../assets/styles/style';
.contacts {
	display: none;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(255, 255, 255, 0.1);

	// .contacts__modal

	&__modal {
		margin: 70px auto;
		padding-bottom: 50px;
		// width: 40%;
		@include adaptiveValue('width', 500, 350);
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 30px;
		border-radius: 10px;
		background: linear-gradient(
			to right,
			rgba(109, 125, 149, 1) 0%,
			rgba(55, 60, 80, 0.75) 100%
		);
	}

	// .contacts__close

	&__close {
		align-self: end;
		margin: 10px 10px;
		cursor: pointer;
	}

	// .contacts__row

	&__row {
		width: 100%;
		display: flex;
		justify-content: center;
		column-gap: 20px;
	}

	// .contacts__phone
	&__icon {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		flex: 0 1 15%;
		row-gap: 20px;
	}
	&__messenger :hover {
		width: 35px;
	}

	// .contacts__facebook

	&__telegram :hover {
		width: 35px;
	}

	// .contacts__telegram

	&__discord :hover {
		width: 35px;
	}
	&__github :hover {
		width: 35px;
	}

	// .contacts__mail
	&__form {
		padding: 10px 20px;
		border-radius: 10px;
		background-color: rgb(66, 54, 224);
		display: flex;
		flex-direction: column;
		flex: 0 1 60%;
		row-gap: 20px;
	}
	&__name {
		border-radius: 2px;
		&:focus {
			box-shadow: 0px 0px 5px 1px #ffffff;
		}
	}

	&__email {
		border-radius: 2px;
		&:focus {
			box-shadow: 0px 0px 5px 1px #ffffff;
		}
	}
	&__text {
		border-radius: 2px;
		height: 100px;
		&:focus {
			box-shadow: 0px 0px 5px 1px #ffffff;
		}
	}

	&__send {
		padding: 5px 20px;
		border-radius: 5px;
		font-family: LatoBold;
		background-color: rgb(238, 110, 110);
		align-self: center;
		&:hover:not(:disabled) {
			box-shadow: 0px 0px 5px 1px #ffffff;
		}
		&:disabled {
			opacity: 0.5;
			cursor: default;
		}
	}
	&__status {
		align-self: center;
		color: rgb(255, 0, 0);
		font-weight: 700;
	}
}
.contacts.close {
	display: none;
}
.contacts.modal {
	display: block;
}
</style>
