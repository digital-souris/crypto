<template>
	<div class="section section_padding section_first">
		<div class="container-fluid" >
			<div class="row">
				<div class="col-12" style="overflow-x:auto;">
					<table class="table table-responsive table-borderless" style="margin-top: 40px">
						<thead>
						<tr>
							<th>{{$t('table.name')}}</th>
							<th>{{$t('table.mtk_cap')}}</th>
							<th>{{$t('table.ticker')}}</th>
							<th>{{$t('table.price')}}</th>
							<th>{{$t('table.trade_vol')}}</th>
							<th>{{$t('table.dynamics')}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="crypto in $store.getters.getCryptoFull"  :key="crypto.id">
							<td>
								<router-link :to="'/trading-item?course=' + crypto.symbol">
									<img v-lazy="'/img/crypto/' +crypto.symbol.toLowerCase()+ '.png'" :alt="crypto.symbol">
									<span>{{crypto.name}}</span>
								</router-link>
							</td>
							<td>{{crypto.quote['USD'].market_cap}}</td>
							<td>{{crypto.symbol}}</td>
							<td>
								${{crypto.quote['USD'].price.toFixed(5)}}
							</td>
							<td>{{crypto.cmc_rank}}</td>
							<td>
								<div class="crypto__change text-center" :class=" crypto.quote['USD'].percent_change_1h > 0 ? 'crypto__change_true' : 'crypto__change_false'">
									{{crypto.quote['USD'].percent_change_1h.toFixed(2)}} %
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "TradingList"
}
</script>

<style scoped lang="scss">
.table {
	a {
		text-decoration: none;
		color: #4FE2C3;
	}
	th {
		color: #818F98;
		font-size: 15px;
		padding-bottom: 10px;
		font-weight: 400;
	}
	td {
		font-size: 15px;
		color: #B7C2C9;
		//background-color: #fff;
		padding-bottom: 20px;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 10px;
			width: 100%;
		}
	}
	img {
		max-width: 42px;
		vertical-align: middle;
	}
	span {
		vertical-align: middle;
		margin-left: 12px;
	}
}
.crypto {
	&__change {
		padding: 4px;
		border-radius: 8px;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		border: 1px solid;
		&_true {
			border-color: #4FE2C3;
			color: #4FE2C3;
		}
		&_false {
			border-color: red;
			color: red;
		}
	}
}
</style>
