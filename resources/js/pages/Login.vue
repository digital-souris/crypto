<template>
	<div class="section section_first">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="auth">
						<div class="auth__wrapper">
							<div class="auth__head">
								<div class="auth__title">
									{{ $t('authPage.' + $route.name + '.title') }}
								</div>
							</div>
							<div class="auth__body">
								<form autocomplete="off" @submit.prevent="sendForm">
									<div class="auth__item" v-for="(item, index) in form[$route.name]" :key="index">
										<input :type="item.type" v-model="item.value" :name="item.name" :placeholder="$t('authPage.form.' + item.name)">
										<div class="auth__error" v-if="errors && errors[item.name]">{{errors[item.name][0]}}</div>
									</div>
									<div class="auth__button">
										<button class="button button_green button_auth">{{$t('authPage.button.' + $route.name)}}</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	name: "Login",
	data() {
		return {
			form: {
				Login: [
					{
						name: 'email',
						value: '',
						type: 'email'
					},
					{
						name: 'password',
						value: '',
						type: 'password'
					}
				],
				Register: [
					{
						name: 'email',
						value: '',
						type: 'email'
					},
					{
						name: 'password',
						value: '',
						type: 'password'
					},
					{
						name: 'password_confirmation',
						value: '',
						type: 'password'
					}
				]
			},
			errors: null
		}
	},
	methods: {
		sendForm() {
			this.errors = null
			let data = {}
			for (let item of this.form[this.$route.name]) {
				data[item.name] = item.value
			}
			if (this.$route.name === 'Register') {
				this.axios.post('/auth/register', data)
					.then(() => {
						this.$router.push('/login')
					})
					.catch(e => {
						this.errors = e.response.data.errors
					})
			}
			else if(this.$route.name === 'Login') {
				this.axios.post('/auth/login', data)
					.then(resp => {
						localStorage.setItem('token', resp.data.access_token)
						localStorage.setItem('tokenTime', moment().add(resp.data.expires_in, 'second').format('TTl'))
						this.axios.defaults.headers.common = {'Authorization': `bearer ${resp.data.access_token}`}
						this.$store.commit('changeUser', resp.data.user)
						this.$router.push('/')
					})
					.catch(e => {
							this.$notify({
								type: 'error',
								text: this.$t('notify.login')
							})
					})
			}
		}
	}
}
</script>

<style scoped>

</style>
