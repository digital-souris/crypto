<template>
	<div class="section section_padding section_grey">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-4 d-flex flex-column justify-content-between text-center" v-for="i in 3"
					 :key="i">
					<div class="item__image">
						<img :src="'/img/8th/' + (i - 1) + '.png'" :alt="$t('eighth.' + (i - 1)+ '.title')">
					</div>
					<div class="item__number">{{ $t('eighth.' + (i - 1) + '.number') }}</div>
					<div class="item__title">{{ $t('eighth.' + (i - 1) + '.title') }}</div>
					<div class="item__desc">{{ $t('eighth.' + (i - 1) + '.desc') }}</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "EighthSection",
}
</script>

<style scoped lang="scss">
.item {
	padding-top: 30px;
	&__image {
		margin-top: 30px;
		min-height: 96px;
		img {
			max-width: 100%;
			vertical-align: top;
		}
	}
	&__number {
		font-weight: 900;
		font-size: 39px;
		background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
		-webkit-background-clip: text;
		padding-top: 20px;
		-webkit-text-fill-color: transparent;
	}
	&__title {
		padding-top: 10px;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		color: #031F31;
	}
	&__desc {
		padding-top: 10px;
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		color: #818F98;
	}
}
</style>
