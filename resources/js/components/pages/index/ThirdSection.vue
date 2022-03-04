<template>
	<div class="section section_padding section_grey">
		<div class="container">
			<div class="row">
				<div class="col-12" style="overflow-x:auto;">
					<table class="table table-responsive table-borderless">
						<thead>
						<tr>
							<th>{{$t('table.name')}}</th>
							<th>{{$t('table.ticker')}}</th>
							<th>{{$t('table.price')}}</th>
							<th>{{$t('table.dynamics')}}</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="crypto in $store.getters.getCrypto"  :key="crypto.id">
							<td>
								<img v-lazy="'/img/crypto/' +crypto.symbol+ '.png'" :alt="crypto.symbol">
								<span>{{crypto.name}}</span>
							</td>
							<td>{{crypto.symbol}}</td>
							<td>
								${{crypto.quote['USD'].price.toFixed(5)}}
							</td>
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
	name: "ThirdSection"
}
</script>

<style scoped lang="scss">
	.table {
		th {
			color: #818F98;
			font-size: 15px;
			padding-bottom: 10px;
			font-weight: 400;
		}
		td {
			font-size: 15px;
			color: #031F31;
			background-color: #fff;
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
				background-color: #F8F9FE;
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
