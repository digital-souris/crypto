<template>
  <div class="page">
	  <div class="page__content">
		  <main-header></main-header>
		  <router-view></router-view>
	  </div>
	  <div class="page__footer">
		  <main-footer></main-footer>
	  </div>
	  <notifications position="bottom right"/>
  </div>
</template>

<script>
import MainHeader from "../components/layout/MainHeader";
import JsCookie from 'js-cookie'
import MainFooter from "../components/layout/MainFooter";

export default {

    name: "App",
    components: {MainFooter, MainHeader},
    mounted() {
        if (JsCookie.get('lang')) {
            this.$i18n.locale = JsCookie.get('lang')
        }
		this.$store.dispatch('loadCrypto')
    }
}
</script>

<style scoped lang="scss">
	.page {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		&__content {
			flex: 1 0 auto;
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #032033;
		}
		&__footer {
			flex: 0 0 auto;
		}
	}
</style>
