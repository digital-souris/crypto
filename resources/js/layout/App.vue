<template>
  <div class="page">
      <main-header></main-header>
      <router-view></router-view>
	  <main-footer></main-footer>
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

<style scoped>

</style>
