<template>
	<div class="section section_first">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
					<VueTradingView :options="options" v-if="showTrading" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import VueTradingView from 'vue-trading-view';
export default {
	name: "Trading",
	data() {
		return {
			showTrading: true,
			options: {
				"width": '100%',
				"height": 610,
				// "symbol": "BINANCE:BTCUSD",
				"interval": "1",
				"timezone": "Europe/Moscow",
				"theme": "dark",
				"style": "1",
				"locale": "ru",
				"toolbar_bg": "#f1f3f6",
				"enable_publishing": false,
				"hide_side_toolbar": false,
				"calendar": true,
			}
		}
	},
	computed: {
		getLocale() {
			return this.$i18n.locale
		},
		getCourse() {
			return this.$route.query.course
		}
	},
	mounted() {

		this.options.locale = this.$i18n.locale
		console.log(this.getCourse)
		this.showTrading = false

		setTimeout(() => {
			this.options.symbol = "BINANCE:"+this.getCourse+"USD"
			this.showTrading = true
		}, 10)
	},
	watch: {
		getLocale() {
			this.options.locale  = this.$i18n.locale
			this.showTrading = false
			setTimeout(() => this.showTrading = true, 10)
		},
		getCourse() {
			this.options.symbol = "BINANCE:"+this.getCourse+"USD"
		}
	},
	components: {
		VueTradingView,
	}
}
</script>

<style scoped>

</style>
