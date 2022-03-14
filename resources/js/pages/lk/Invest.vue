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
											<div class="crypto__time">1 week</div>
											<div class="crypto__status">Staking</div>
										</div>
										<div class="col-12 col-md-7 pt-2 pt-md-0">
											<div class="crypto__pers text-md-end">1.3% per Day<br/>
												+ Bonus 1%</div>
										</div>
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
}
</style>
