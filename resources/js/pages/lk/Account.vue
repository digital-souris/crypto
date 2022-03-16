<template>
	<div class="row">
		<div class="col-12 col-md-6">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{$t('cabinet.profile')}}
					</div>
				</div>
				<div class="cabinet__body">
					<div class="row d-flex align-items-center">
						<div class="col-4 col-md-2">
							<div class="cabinet__avatar">
								<div class="cabinet__avatar">
									<img :src="$store.getters.getUser.avatar || '/img/no-avatar.png'" :alt="$store.getters.getUser.email">
								</div>
							</div>
						</div>
						<div class="col-8 col-md-10">
							<div class="cabinet__title">
								Kompozitum
							</div>
							<div class="cabinet__desc">
								{{$t('cabinet.max_size')}}
							</div>
						</div>
					</div>
					<div class="row  pt-3">
						<div class="col-12 col-md-8">
							<div class="auth__item">
								<input type="text" :placeholder="$t('cabinet.input_upload')">
							</div>
						</div>
						<div class="col-12 col-md-4 pt-2 pt-md-0">
							<button class="button button_green button_cabinet">{{$t('cabinet.upload')}}</button>
						</div>
					</div>
					<div class="row pt-2">
						<div class="col-12">
							<button class="button button_green button_cabinet">{{$t('cabinet.save')}}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{$t('cabinet.change_password')}}
					</div>
				</div>
				<div class="cabinet__body">
					<div class="row">
						<div class="col-12">
							<div class="auth__item">
								<input type="password" :placeholder="$t('cabinet.password')">
							</div>
							<div class="auth__item">
								<input type="password" :placeholder="$t('cabinet.password_compare')">
							</div>
						</div>
					</div>
					<div class="row pt-4">
						<div class="col-12">
							<button class="button button_green button_cabinet">{{$t('cabinet.save')}}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-12">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{$t('cabinet.personal_information')}}
					</div>
				</div>
				<div class="cabinet__body">
					<form class="row">
						<div class="col-12 col-md-6 pb-3" :key="index" v-for="(item, index) in form">
							<div class="auth__item">
								<div class="auth__label">{{$t('cabinet.personal.' + item.name)}}</div>
								<input :type="item.type" v-if="item.inputType === 'input'" >
							</div>
						</div>
						<div class="col-12">
							<button class="button button_green button_cabinet">{{$t('cabinet.save')}}</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Account",
	data() {
		return {
			form: [
				{
					name: 'name',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'phone',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'first_name',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'email',
					type: 'email',
					inputType: 'input'
				},
				{
					name: 'birth',
					type: 'date',
					inputType: 'input'
				},
				{
					name: 'present_address',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'address',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'city',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'code',
					type: 'text',
					inputType: 'input'
				},
				{
					name: 'county',
					type: 'text',
					inputType: 'input'
				},
			]
		}
	}
}
</script>

<style scoped lang="scss">
	.cabinet {
		&__avatar {
			border-radius: 10em;
			overflow: hidden;
			img {
				max-width: 100%;
				vertical-align: top;
			}
		}
	}
</style>
