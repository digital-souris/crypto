<template>
	<section class="section section_padding section_grey">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2 class="title title_second title_second title_dark title_center">{{$t('title.fourth')}}</h2>
					<div class="title__desc title_center">{{$t('title.fourth_desc')}}</div>
					<div class="title__line"></div>
				</div>
				<div class="col-12">
					<div class="row">
						<div class="col-12 col-lg-4 text-center" v-for="i in 3" :key="i">
							<div class="item__top">{{$t('fiveth.' + (i -1) + '.top')}}</div>
							<div class="item__big">{{$t('fiveth.' + (i -1) + '.big')}}</div>
							<div class="item__desc">{{$t('fiveth.' + (i -1) + '.desc')}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "FivethSection"
}
</script>

<style scoped lang="scss">
	.item {
		&__top {
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			color: #031F31;
			padding-bottom: 10px;
		}
		&__big {
			font-style: normal;
			font-weight: 900;
			font-size: 90px;
			background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
			-webkit-background-clip: text;
			line-height: 1;
			-webkit-text-fill-color: transparent;
		}
		&__desc {
			font-style: normal;
			font-weight: normal;
			font-size: 15px;
			line-height: 18px;
			color: #818F98;
			padding-top: 10px;
		}
	}
</style>
