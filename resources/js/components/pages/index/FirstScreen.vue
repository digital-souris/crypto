<template>
	<div class="section section_relative section_full section_first section_background"
		 style="background-image: url(/img/background.jpg);">
		<div
			class="first__particles"
			id="tsparticles"
		></div>
		<div class="first__wrapper">
			<div class="first__top">
				<div class="container">
					<div class="row d-flex align-items-center">
						<div class="col-12 col-lg-6">
							<h1 class="first__title">
								{{$t('title.first')}}
							</h1>
							<div class="first__desc">
								{{$t('first.desc')}}
							</div>
							<div class="first__buttons" v-if="!$store.getters.getUser">
								<div class="row">
									<div class="col-8 col-lg-8">
										<router-link to="/register" class="button button_green">
											{{$t('auth.start')}}
											<svg width="25" height="24" viewBox="0 0 25 24" fill="none"
												 xmlns="http://www.w3.org/2000/svg">
												<path
													d="M21.5 8C20.05 8 19.24 9.44 19.57 10.51L16.02 14.07C15.72 13.98 15.28 13.98 14.98 14.07L12.43 11.52C12.77 10.45 11.96 9 10.5 9C9.05 9 8.23 10.44 8.57 11.52L4.01 16.07C2.94 15.74 1.5 16.55 1.5 18C1.5 19.1 2.4 20 3.5 20C4.95 20 5.76 18.56 5.43 17.49L9.98 12.93C10.28 13.02 10.72 13.02 11.02 12.93L13.57 15.48C13.23 16.55 14.04 18 15.5 18C16.95 18 17.77 16.56 17.43 15.48L20.99 11.93C22.06 12.26 23.5 11.45 23.5 10C23.5 8.9 22.6 8 21.5 8Z"
													fill="white"/>
												<path
													d="M15.5 9L16.44 6.93L18.5 6L16.44 5.07L15.5 3L14.58 5.07L12.5 6L14.58 6.93L15.5 9Z"
													fill="white"/>
												<path d="M4 11L4.5 9L6.5 8.5L4.5 8L4 6L3.5 8L1.5 8.5L3.5 9L4 11Z"
													  fill="white"/>
											</svg>
										</router-link>
									</div>
									<div class="col-4 col-lg-4">
										<router-link to="/login" class="button button_grey">{{$t('auth.login')}}
										</router-link>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6 d-none d-lg-block">
							<img v-lazy="'/img/mac.png'" alt="mac" class="first__mac">
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="first__bottom">
							<div class="first__arrow first__arrow_left" @click="prev">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
										  fill="white"/>
								</svg>
							</div>
							<div class="first__arrow first__arrow_right" @click="next">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white"/>
								</svg>
							</div>
							<slick ref="slider" :options="slickOptions" v-if="$store.getters.getCrypto.length">
								<slide-item v-for="crypto in $store.getters.getCrypto" :key="crypto.id"
											:crypto="crypto"></slide-item>
							</slick>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Slick from 'vue-slick'
import SlideItem from "../../items/SlideItem";
import 'particles.js'

export default {
	name: "FirstScreen",
	components: {SlideItem, Slick},
	data() {
		return {
			slickOptions: {
				slidesToShow: 4,
				infinite: true,
				autoplay: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1
						}
					}
				]
				// Any other options that can be got from plugin documentation
			},
		}
	},
	methods: {
		next() {
			this.$refs.slider.next();
		},

		prev() {
			this.$refs.slider.prev();
		},
		initParticles() {
			window.particlesJS('tsparticles', {
				"particles": {
					"number": {
						"value": 80,
						"density": {
							"enable": true,
							"value_area": 700
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 5
						},
					},
					"opacity": {
						"value": 0.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 40,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.4,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 6,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 140,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			})
		}
	},
	mounted() {
		this.initParticles()
	},
}
</script>

<style scoped lang="scss">
.first {
	&__particles {
		position: absolute;
		top: 90px;
		left: 0;
		right: 0;
		bottom: 0;
	}

	&__wrapper {
		position: relative;
		z-index: 2;
	}

	&__top {
		padding-top: 85px;
	}

	&__title {
		font-size: 48px;
		color: #fff;
		font-weight: 600;
	}

	&__desc {
		padding-top: 30px;
		color: #818F98;
		font-size: 18px;
		padding-bottom: 30px;
	}

	&__buttons {
		max-width: 400px;
	}

	&__bottom {
		margin-top: 72px;
		background-color: #FFFFFF;
		filter: drop-shadow(0px 4px 0px #DBE3EB);
		border-radius: 16px;
		overflow: hidden;
		position: relative;
		@media screen and (max-width: 768px) {
			margin-bottom: 40px;
		}
	}

	&__mac {
		max-width: 100%;
	}

	&__arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		cursor: pointer;

		svg {
			* {
				fill: #000
			}
		}

		&_left {
			left: 0;
		}

		&_right {
			right: 0;
		}
	}

}
</style>
