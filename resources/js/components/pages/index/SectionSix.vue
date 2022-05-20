<template>
	<div class="section section_relative section_padding section_background"
		 style="background-image: url(/img/background.jpg);">
		<div
			class="info__particles"
			id="part3"
		></div>
		<div class="info__wrapper">
			<div class="container">
				<div class="row d-flex align-items-center">
					<div class="col-12 col-lg-4 pb-4 pb-lg-0">
						<h2 class="title title_second title_white">{{$t('six.title')}}</h2>
						<div class="first__desc">
							{{$t('six.desc')}}
						</div>
						<div class="item__button">
							<router-link :to="$store.getters.getUser ? '/lk' : '/register'" class="button button_green">
								{{$t('six.button')}}
							</router-link>
						</div>
					</div>
					<div class="col-12 col-lg-8">
						<div class="item__container">
							<div class="container">
								<div class="row pb-4">
									<div class="col-md-9 col-7">
										<div class="item__deposit">
											{{$t('six.deposit')}}
										</div>
										<div class="item__range">
											<input type="range" v-model="price" step="10" min="10" max="1000">
										</div>
									</div>
									<div class="col-md-3 col-5">
										<div class="item__input">
											<input type="number" v-model="price">
											<span>$</span>
										</div>
									</div>
								</div>
								<div class="row pb-4">
									<div class="col-12">
										<div class="item__line"></div>
									</div>
								</div>
								<div class="row pb-4">
									<div class="col-12">
										<div class="item__deposit">
											{{$t('six.select')}}
										</div>
									</div>
									<div class="col-12 col-sm-6 col-md-3" v-for="(item, index) in daysArr" :key='index'>
										<div class="item__day" @click="percent = item.percent; days = item.days" :class="item.percent === percent ? 'active' : ''">
											{{$t('six.' + item.name)}}
										</div>
									</div>
								</div>
								<div class="row pb-4">
									<div class="col-12">
										<div class="item__line"></div>
									</div>
								</div>
								<div class="row">

								</div>
								<div class="row">
									<div class="col-12 col-sm-6 col-lg-4 pb-md-0 pb-2">
										<div class="item__desc">{{$t('six.profit')}}</div>
										<div class="item__val item__val_green">+ {{getPercent}} $</div>
									</div>
									<div class="col-12 col-sm-6 col-lg-4 pb-md-0 pb-2">
										<div class="item__desc">{{$t('six.total')}}</div>
										<div class="item__val">{{((Number(total)+Number(getPercent))).toFixed(2)}} $</div>

									</div>
									<div class="col-12 col-sm-6 col-lg-4 pb-md-0">
										<div class="item__desc">{{$t('six.percentage')}}</div>
										<div class="item__val">{{percent}}%</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import 'particles.js'

export default {
	name: "SectionSix",
	data() {
		return {
			price: 10,
			days: 7,
			percent: 3,
			total: 100,
			daysArr: [
				{
					name: 'week',
					percent: 3,
					days: 7,
				},
				{
					name: 'two_week',
					percent: 4,
					days: 14,

				},
				{
					name: 'month',
					percent: 5,
					days: 30,

				},
				{
					name: 'three_month',
					percent: 10,
					days: 90,
				}
			]
		}
	},
	methods: {
		initParticles() {
			window.particlesJS('part3', {
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
	computed: {
		getPercent() {
			const percent = (((this.price * this.percent * this.days) / (365 * 100)))
			return percent.toFixed(2)
		}
	},
	mounted() {
		this.initParticles()
	}
}
</script>

<style scoped lang="scss">
	.first {
		&__desc {
			padding-top: 30px;
			color: #818F98;
			font-size: 18px;
			padding-bottom: 30px;
		}
	}
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
		&__container {
			padding: 30px 0;
			background: #FFFFFF;
			border-radius: 16px;
		}
		&__button {
			max-width: 270px;
		}
		&__range {
			padding-top: 16px;
			input {
				width: 100%;
				-webkit-appearance: none !important;
				//background:red;
				background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
				border-radius: 10px;
				height:14px;
				&::-webkit-slider-thumb {
					-webkit-appearance: none !important;
					width: 24px;
					height: 24px;
					background: #4FE2C3;
					border: 3px solid #FFFFFF;
					border-radius: 150px;
				}
			}
		}
		&__input {
			position: relative;
			input {
				width: 100%;
				height: 60px;
				line-height: 60px;
				background: #F8F9FE;
				border: none;
				padding: 0 20px;
				font-size: 30px;
				font-weight: 500;
				&:hover, &:focus {
					outline: none;
				}
			}
			span {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 10px;
				font-size: 30px;
				color: #031F31;
				font-weight: 500;
			}
		}
		&__deposit {
			font-weight: 500;
			font-size: 18px;
			color: #031F31;
		}
		&__line {
			height: 1px;
			background: #F8F9FE;
		}
		&__day {
			text-align: center;
			margin-top: 16px;
			font-size: 18px;
			font-weight: 500;
			color: rgba(3, 31, 49, 1);
			border: 2px solid #DADADA;
			box-sizing: border-box;
			cursor: pointer;
			height: 54px;
			line-height: 54px;
			border-radius: 12px;
			&.active {
				background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
				border-radius: 12px;
				border: none;
				color: #fff;
			}
		}
		&__desc {
			font-size: 18px;
			color: #818F98;
			padding-bottom: 10px;
		}
		&__val {
			color: #031F31;
			font-size: 28px;
			font-weight: 500;
			&_green {
				background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-clip: text;
				text-fill-color: transparent;
			}
		}
	}
</style>
