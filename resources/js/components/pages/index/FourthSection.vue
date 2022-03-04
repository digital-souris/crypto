<template>
	<div class="section section_relative section_padding section_background"
		 style="background-image: url(/img/background.jpg);">
		<vue-particles color="#dedede" class="info__particles"></vue-particles>
		<div class="info__wrapper">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2 class="title title_center title_second title_white">{{ $t('title.third') }}</h2>
						<div class="title__line"></div>
					</div>
					<div class="col-12">
						<div class="row">
							<div class="col-12 col-lg-6" v-for="i in 6" :key="i">
								<div class="item">
									<div class="row">
										<div class="col-3">
											<div class="item__image">
												<img :src="'/img/fourt/' + (i - 1) + '.png'" :alt="$t('fourth.' +(i - 1) + '.title')">
											</div>
										</div>
										<div class="col-9">
											<div class="item__title">{{$t('fourth.' +(i - 1) + '.title')}}</div>
											<div class="item__desc">{{$t('fourth.' +(i - 1) + '.desc')}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12">
						<div class="item__button">
							<router-link to="/register" class="button button_green">
								{{$t('auth.start')}}
								<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.5 8C20.05 8 19.24 9.44 19.57 10.51L16.02 14.07C15.72 13.98 15.28 13.98 14.98 14.07L12.43 11.52C12.77 10.45 11.96 9 10.5 9C9.05 9 8.23 10.44 8.57 11.52L4.01 16.07C2.94 15.74 1.5 16.55 1.5 18C1.5 19.1 2.4 20 3.5 20C4.95 20 5.76 18.56 5.43 17.49L9.98 12.93C10.28 13.02 10.72 13.02 11.02 12.93L13.57 15.48C13.23 16.55 14.04 18 15.5 18C16.95 18 17.77 16.56 17.43 15.48L20.99 11.93C22.06 12.26 23.5 11.45 23.5 10C23.5 8.9 22.6 8 21.5 8Z" fill="white"/>
									<path d="M15.5 9L16.44 6.93L18.5 6L16.44 5.07L15.5 3L14.58 5.07L12.5 6L14.58 6.93L15.5 9Z" fill="white"/>
									<path d="M4 11L4.5 9L6.5 8.5L4.5 8L4 6L3.5 8L1.5 8.5L3.5 9L4 11Z" fill="white"/>
								</svg>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FourthSection",
	data() {
		return {
			items: []
		}
	}
}
</script>

<style scoped lang="scss">
.info {
	&__particles {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	&__wrapper {
		position: relative;
		z-index: 3;
	}
}
.item {
	padding-bottom: 74px;
	&__title {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		color: #FFFFFF;
	}
	&__desc {
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		color: #A1ACB3;
		padding-top: 10px;
	}
	&__image {
		img {
			vertical-align: top;
			max-width: 100%;
		}
	}
	&__button {
		max-width: 270px;
		margin: 0 auto;
	}
}
</style>
