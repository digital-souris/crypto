<template>
	<div class="row">
		<div class="col-12 col-lg-6">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="row">
						<div class="col-12 col-md-2">
							<div class="cabinet__avatar">
								<img :src="$store.getters.getUser.avatar || '/img/no-avatar.png'" :alt="$store.getters.getUser.email">
							</div>
						</div>
						<div class="col-12 col-md-6 pt-3 pt-md-0">
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
						<div class="col-12 col-md-4 pt-3 pt-md-0">
							<div class="cabinet__title text-md-end">
								{{$t('cabinet.total_log')}}
							</div>
							<div class="cabinet__desc text-md-end">9 Time (Today 1 Times)</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body">
					<div class="cabinet__title">
						{{$t('cabinet.use_bonus_promo_code')}}
					</div>
					<form class="row">
						<div class="col-12 col-md-8 auth__item">
							<input type="text" placeholder="Enter promo-code">
						</div>
						<div class="col-12 col-md-4">
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
					<div class="row">
						<div class="col-6 col-md-4"  v-for="(item, index) in balance" :key="index">
							<div class="balance">
								<div class="row">
									<div class="col-4">
										<div class="balance__image">
											<img :src="'/img/crypto/' + item.symbol.toLowerCase() + '.png'" :alt="item.symbol">
										</div>
									</div>
									<div class="col-8">
										<div class="balance__count">{{item.count}}</div>
										<div class="balance__symbol">{{item.symbol.toUpperCase()}}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body">

					<div class="row">
						<div class="col-12 col-md-4">
							<div class="balance__total">
								<span class="cabinet__desc">{{$t('cabinet.total_equity')}}</span>
								<br>
								<b class="cabinet__title">{{getTotalCount.toFixed(4)}} USD</b>
							</div>
						</div>
						<div class="col-12 col-md-8">
							<div class="row">
								<div class="col-12 col-md-6">
									<router-link to="lk/deposit" class="button button_green button_cabinet">
										{{$t('lkMenu.deposit')}}
									</router-link>
								</div>
								<div class="col-12 col-md-6 pt-2 pt-md-0" >
									<router-link to="lk/withdraw" class="button button_red button_cabinet">
										{{$t('lkMenu.withdraw')}}
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="row">
						<div class="col-12">
							<div class="cabinet__title">
								{{$t('cabinet.transactions_history')}}
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body cabinet__body_full">

					<div class="row">
						<div class="col-12">
							<div class="table-responsive">
								<table class="table ">
									<thead>
									<tr>
										<th v-for="(item, key) in orderName" :key="key">
											{{$t('cabinet.table.' + item)}}
										</th>
									</tr>
									</thead>
									<tbody>
									<tr v-for="(item, index) in orders" :key="index">
										<td v-for="(val, key, i) in item" :key="i">{{val}}</td>
									</tr>
									</tbody>
								</table>
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
	name: "Overview",
	data() {
		return {
			balance: [
				{
					symbol: 'BTC',
					count: 0.013212,
				},
				{
					symbol: 'ETH',
					count: 0.013212,
				},
				{
					symbol: 'USDT',
					count: 0.013212,
				}
			],
			orderName: ['id', 'time', 'type', 'amount', 'status', 'balance'],
			orders: [
				{
					id: 1,
					time: '2021-12-06 18:57:20',
					type: 'Promo-code',
					amount: '0.012 BTC',
					status: 'Completed',
					balance: '0.012 BTC'
				},
				{
					id: 2,
					time: '2021-12-06 18:57:20',
					type: 'Promo-code',
					amount: '0.012 BTC',
					status: 'Completed',
					balance: '0.012 BTC'
				}
			]
		}
	},
	computed: {
		getTotalCount() {
			let balance = 0
			const items = this.$store.getters.getCryptoFull
			for(let item of items) {
				const find = _.find(this.balance, val => val.symbol.toUpperCase() === item.symbol)
				if (find) {
					balance+=find.count*item.quote['USD'].price
				}
			}
			return balance
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
	.balance {
		padding-bottom: 15px;
		&__image {
			img {
				max-width: 100%;
				vertical-align: top;
			}
		}
		&__count {
			font-size: 18px;
			color: #fff;
			font-weight: normal;
		}
		&__symbol {
			font-size: 15px;
			color: #818F98;
			font-weight: normal;
		}
		&__total {
			b {
				display: inline-block;
				padding-top: 4px;

			}
		}
	}
	.table {
		border: none;
		margin-bottom: 0;
		th {
			text-transform: uppercase;
			font-size: 15px;
			color: #818F98;
			font-weight: normal;
			border: none;
			box-shadow: none;
			background: #041D2E;
			padding-top: 12px;
			padding-bottom: 12px;
			padding-left: 20px;
			padding-right: 20px;
		}
		tbody {
			border: none;
		}
		td {
			background: #031F31;
			box-shadow: none;
			border: none;
			color: #B7C2C9;
			font-size: 17px;
			font-weight: normal;
			padding: 20px;
		}
	}
</style>
