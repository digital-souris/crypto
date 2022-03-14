<template>
	<div class="crypto">
		<div class="crypto__top">
			<div class="row">
				<div class="col-2">
					<div class="crypto__image">
						<img :src="'/img/crypto/' +crypto.symbol.toLowerCase()+ '.png'" :alt="crypto.symbol">
					</div>
				</div>
				<div class="col-6">
					<div class="crypto__name">{{crypto.name}}</div>
					<div class="crypto__date">{{getDate(crypto.last_updated)}}</div>
				</div>
				<div class="col-4">
					<div class="crypto__button">
						<router-link :to="'/trading-item?course=' + crypto.symbol" class="button button_small button_buy">{{$t('button.buy')}}</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="crypto__bottom">
			<div class="crypto__price text-center">
				${{crypto.quote['USD'].price.toFixed(5)}}
			</div>
			<div class="crypto__change text-center" :class=" crypto.quote['USD'].percent_change_1h > 0 ? 'crypto__change_true' : 'crypto__change_false'">
				{{crypto.quote['USD'].percent_change_1h.toFixed(2)}} %
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	name: "SlideItem",
	props: ['crypto'],
	methods: {
		getDate(date) {
			moment.locale(this.$i18n.locale)
			return moment(date).add(-1, 'minute').fromNow()
		}
	}
}
</script>

<style scoped lang="scss">
	.crypto {
		padding: 20px;
		&__name {
			font-style: normal;
			font-weight: 500;
			font-size: 15px;
			color: #031F31;
		}
		&__date {
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			color: #818F98;
		}
		&__image {
			img {
				max-width: 44px;
				width: 100%;
			}
		}
		&__bottom {
			padding-top: 14px;
		}
		&__price {
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			white-space: nowrap;
			color: #031F31;
		}
		&__change {
			padding: 4px;
			border-radius: 20px;
			max-width: 110px;
			margin: 5px auto 0;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			color: #818F98;
			&_true {
				background: rgba(87, 238, 93, 0.25);
			}
			&_false {
				background: rgba(red, .25);
			}
		}
	}
</style>
