<template>
	<div class="home">
		<first-screen></first-screen>
		<second-section></second-section>
		<third-section></third-section>
		<fourth-section></fourth-section>
		<fiveth-section></fiveth-section>
		<section-seventh></section-seventh>
	</div>
</template>

<script>
import FirstScreen from "../components/pages/index/FirstScreen";
import SecondSection from "../components/pages/index/SecondSection";
import ThirdSection from "../components/pages/index/ThirdSection";
import FourthSection from "../components/pages/index/FourthSection";
import FivethSection from "../components/pages/index/FivethSection";
import SectionSeventh from "../components/pages/index/SectionSeventh";

export default {
	name: "Home",
	components: {SectionSeventh, FivethSection, FourthSection, ThirdSection, SecondSection, FirstScreen}
}
</script>

<style scoped lang="scss">

</style>
