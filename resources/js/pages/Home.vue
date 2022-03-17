<template>
	<div class="home">
		<first-screen></first-screen>
		<second-section></second-section>
		<third-section></third-section>
		<fourth-section></fourth-section>
		<fiveth-section></fiveth-section>
		<section-six></section-six>
		<section-seventh></section-seventh>
		<eighth-section></eighth-section>
	</div>
</template>

<script>
import FirstScreen from "../components/pages/index/FirstScreen";
import SecondSection from "../components/pages/index/SecondSection";
import ThirdSection from "../components/pages/index/ThirdSection";
import FourthSection from "../components/pages/index/FourthSection";
import FivethSection from "../components/pages/index/FivethSection";
import SectionSeventh from "../components/pages/index/SectionSeventh";
import EighthSection from "../components/pages/index/EighthSection";
import SectionSix from "../components/pages/index/SectionSix";

export default {
	name: "Home",
	components: {
		SectionSix,
		EighthSection, SectionSeventh, FivethSection, FourthSection, ThirdSection, SecondSection, FirstScreen}
}
</script>

<style scoped lang="scss">

</style>
