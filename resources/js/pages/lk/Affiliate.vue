<template>
	<div class="row">
		<div class="col-12">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{ $t('cabinet.affiliate_program') }}
					</div>
				</div>
				<div class="cabinet__body">
					<div class="row">
						<div class="col-12 col-md-6">
							<div class="crypto__title">
								{{ $t('cabinet.affiliate_link') }}
							</div>
							<div class="crypto__desc">
								{{ $t('cabinet.affiliate_desc') }}
							</div>
						</div>
						<div class="col-12 col-md-6 pt-2 pt-md-0">
							<label for="" class="auth__label">{{ $t('cabinet.share_link') }}</label>
							<div class="auth__item">
								<div class="row">
									<div class="col-12 col-md-8">
										<input type="text" placeholder="Enter promo-code"
											   value="3LkptVfuQN7ZHUAmciBw1bXcaqrpvMZ9gp">
									</div>
									<div class="col-12 col-md-4">
										<button class="button button_green button_cabinet">{{ $t('cabinet.copy') }}
										</button>
									</div>
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
								{{ $t('cabinet.affiliate_status') }}
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
											{{ $t('cabinet.table.' + item) }}
										</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>{{ $t('cabinet.table.invites') }}</td>
										<td>0 {{ $t('cabinet.table.user') }}</td>
										<td>0 {{ $t('cabinet.table.user') }}</td>
									</tr>
									<tr>
										<td>{{ $t('cabinet.table.total') }}</td>
										<td>0 BTC</td>
										<td>0 BTC</td>
									</tr>
									<tr>
										<td>{{ $t('cabinet.table.free') }}</td>
										<td>0 BTC</td>
										<td>0 BTC</td>
									</tr>
									<tr>
										<td>{{ $t('cabinet.table.level') }}</td>
										<td>25%</td>
										<td>25%</td>
									</tr>
									<tr>
										<td>{{ $t('cabinet.table.payouts') }}<br/><small>{{ $t('cabinet.table.listed') }}</small></td>
										<td><span>0.000 BTC</span></td>
										<td><span>0.000 BTC</span></td>
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
	name: "Affiliate",
	data() {
		return {
			orderName: ['index', 'total', 'previous_day'],
		}
	},
}
</script>

<style scoped lang="scss">
.crypto {
	&__title {
		font-size: 15px;
		color: #ffff;
	}

	&__desc {
		font-size: 15px;
		color: #818F98;
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
		span {
			color: #4FE2C3;
			font-size: 17px;
		}
	}
}
</style>
