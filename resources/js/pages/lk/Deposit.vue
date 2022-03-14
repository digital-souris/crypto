<template>
	<div class="row">
		<div class="col-12">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{ $t('cabinet.wallet_deposit_address') }}
					</div>
				</div>
				<div class="cabinet__body cabinet__body_full">
					<div class="crypto d-flex align-items-center justify-content-around" style="overflow: auto">
						<div class="crypto__item d-flex align-items-center justify-content-center"
							 v-for="(item, index) in crypto" :key="index"
							 :class="item.symbol === active ? 'active' : ''"
							@click="active = item.symbol"
						>
							<div class="crypto__image">
								<img :src="'/img/crypto/' + item.symbol.toLowerCase() + '.png'" :alt="item.symbol">
							</div>
							<div class="crypto__text">{{ item.name }}</div>
						</div>
					</div>
					<div class="crypto__content" v-for="(item, index) in crypto" :key="index">
						<div class="cabinet__body" v-if="item.symbol === active">
							<div class="row">
								<div class="col-12 col-md-2">
									<div class="crypto__qr">
										<img src="/img/qr.png" alt="qr">
									</div>
								</div>
								<div class="col-12 col-md-10">
									<form class="row">
										<div class="col-12 col-md-8 auth__item">
											<input type="text" placeholder="Enter promo-code" v-model="token">
										</div>
										<div class="col-12 col-md-4">
											<button class="button button_green button_cabinet">{{$t('cabinet.copy')}}</button>
										</div>
									</form>
									<div class="row">
										<ul class="cabinet__list">
											<li>{{$t('cabinet.list.coin')}}</li>
											<li>{{$t('cabinet.list.send')}}</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Deposit",
	data() {
		return {
			active: 'BTC',
			token: '3LkptVfuQN7ZHUAmciBw1bXcaqrpvMZ9gp',
			crypto: [
				{
					symbol: 'BTC',
					name: 'Bitcoin'
				},
				{
					symbol: 'ETH',
					name: 'Ethereum'
				},
				{
					symbol: 'USDT',
					name: 'USDT'
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">
.crypto {
	&__item {
		width: 100%;
		height: 52px;
		background: #031F31;
		border: 1px solid #041D2E;
		cursor: pointer;

		&.active {
			background: #041D2E;
			border-top-color: #4FE2C3;
		}
	}

	&__image {
		padding-right: 8px;

		img {
			vertical-align: middle;
			max-width: 24px;
		}
	}

	&__text {
		text-transform: uppercase;
		color: #fff;
		font-size: 18px;
		font-weight: 500;
	}
	&__qr {
		img {
			max-width: 100%;
		}
	}
}
</style>
