<template>
	<div class="row">
		<div class="col-12 col-lg-6">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="row">
						<div class="col-2">
							<div class="cabinet__avatar">
								<img :src="$store.getters.getUser.avatar || '/img/no-avatar.png'" :alt="$store.getters.getUser.email">
							</div>
						</div>
						<div class="col-6">
							<div class="cabinet__title">
								{{$t('cabinet.kompozitum')}}
							</div>
							<div class="cabinet__desc">
								<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20 2.5C20 1.4 19.1 0.5 18 0.5H2C0.9 0.5 0 1.4 0 2.5V14.5C0 15.6 0.9 16.5 2 16.5H18C19.1 16.5 20 15.6 20 14.5V2.5ZM18 2.5L10 7.49L2 2.5H18ZM18 14.5H2V4.5L10 9.5L18 4.5V14.5Z" fill="#4FE2C3"/>
								</svg>
								<span>{{$store.getters.getUser.email}}</span>
							</div>
						</div>
						<div class="col-4">
							<div class="cabinet__title text-end">
								{{$t('cabinet.total_log')}}
							</div>
							<div class="cabinet__desc">9 Time (Today 1 Times)</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body">
					<div class="cabinet__title">
						{{$t('cabinet.use_bonus_promo_code')}}
					</div>
					<form class="row">
						<div class="col-8 auth__item">
							<input type="text" placeholder="Enter promo-code">
						</div>
						<div class="col-4">
							<button class="button button_green button_cabinet">{{$t('cabinet.activate')}}</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="col-12 col-lg-6">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="row">
						<div class="col-12">
							<div class="cabinet__title">
								{{$t('cabinet.available_balance')}}
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body">
					<div class="cabinet__title">
						{{$t('cabinet.use_bonus_promo_code')}}
					</div>
					<form class="row">
						<div class="col-8 auth__item">
							<input type="text" placeholder="Enter promo-code">
						</div>
						<div class="col-4">
							<button class="button button_green button_cabinet">{{$t('cabinet.activate')}}</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: "Overview"
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
