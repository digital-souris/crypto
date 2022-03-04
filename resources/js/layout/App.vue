<template>
  <div class="page">
      <main-header></main-header>
      <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "../components/layout/MainHeader";
import JsCookie from 'js-cookie'

export default {

    name: "App",
    components: {MainHeader},
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
