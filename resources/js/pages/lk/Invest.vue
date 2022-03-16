<template>
	<div class="row">
		<div class="col-12">
			<div class="cabinet__wrap">
				<div class="cabinet__body_full cabinet__body">
					<div class="row">
						<div class="col-12 col-lg-3 col-md-6"  v-for="i in 4" :key="i">
							<div class="crypto">
								<div class="crypto__head">
									<div class="row">
										<div class="col-12 col-md-5">
											<div class="crypto__time">{{$t('cabinet.i.week')}}</div>
											<div class="crypto__status">{{$t('cabinet.i.staking')}}</div>
										</div>
										<div class="col-12 col-md-7 pt-2 pt-md-0">
											<div class="crypto__pers text-md-end">1.3% {{$t('cabinet.i.day')}}<br/>
												+ {{$t('cabinet.i.bonus')}} 1%</div>
										</div>
									</div>
								</div>
								<div class="crypto__item">
									<label class="auth__label">{{$t('cabinet.i.sell')}}</label>
									<div class="auth__item">
										<select name="" id="">
											<option value="">BTC - 0.013212</option>
											<option value="">BTC - 0.013212</option>
											<option value="">BTC - 0.013212</option>
											<option value="">BTC - 0.013212</option>
											<option value="">BTC - 0.013212</option>
										</select>
									</div>
								</div>
								<div class="crypto__item">
									<label class="auth__label">{{$t('cabinet.i.enter')}}</label>
									<div class="auth__item">
										<div class="row">
											<div class="col-8">
												<div class="auth__relative">
													<input type="text" placeholder="0,0000">
													<div class="auth__absolute">BTC</div>
												</div>
											</div>
											<div class="col-4">
												<button class="button button_cabinet button_max">MAX</button>
											</div>
										</div>
									</div>
								</div>
								<div class="crypto__item">
									<label class="auth__label">{{$t('cabinet.i.profit')}}:</label>
									<div class="auth__item">
										<div class="row">
											<div class="col-8">
												<div class="crypto__desc">+ 0.000000 BTC</div>
											</div>
											<div class="col-4">
												<div class="crypto__result text-end">≈ 0.00$</div>
											</div>
										</div>
									</div>
								</div>
								<div class="crypto__item">
									<label class="auth__label">{{$t('cabinet.i.total')}}:</label>
									<div class="auth__item">
										<div class="row">
											<div class="col-8">
												<div class="crypto__desc">+ 0.000000 BTC</div>
											</div>
											<div class="col-4">
												<div class="crypto__result text-end">≈ 0.00$</div>
											</div>
										</div>
									</div>
								</div>
								<div class="crypto__item crypto__item_button">
									<button class="button button_cabinet button_green">+ {{$t('cabinet.i.stake')}}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="cabinet__body" style="padding-top: 0">
					<div class="row">
						<div class="col-12">

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12">
			<div class="cabinet__wrap">
				<div class="cabinet__head">
					<div class="cabinet__title">
						{{ $t('cabinet.important') }}
					</div>
				</div>
				<div class="cabinet__body cabinet__body_full">
					<div class="row">
						<div class="col-12">
							<ul class="cabinet__list">
								<li>
									{{$t('cabinet.w.list_first')}}
								</li>
								<li>
									{{$t('cabinet.w.list_second')}}
								</li>
								<li>
									{{$t('cabinet.w.list_third')}}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Invest",
}
</script>

<style scoped lang="scss">
.crypto {
	padding: 30px;
	&__head {
		border: 2px solid rgba(239, 93, 168, 1);
		border-radius: 12px;
		padding: 8px 16px;
	}
	&__time {
		font-size: 16px;
		color: #fff;
		font-weight: 500;
		text-transform: uppercase;
	}
	&__status {
		font-size: 14px;
		color: #818F98;
		font-weight: normal;
	}
	&__pers {
		font-size: 15px;
		color: #fff;

	}
	&__item {
		padding-top: 10px;
		&_button {
			padding-top: 20px;
		}
	}
	&__desc {
		color: #fff;
		font-weight: normal;
		font-size: 15px;
	}
	&__result {
		font-weight: normal;
		font-size: 15px;
		color: #4FE2C3;
		opacity: .5;
	}
}
</style>
