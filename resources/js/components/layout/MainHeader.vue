<template>
    <header class="header">
        <div class="container-fluid">
            <div class="row d-flex align-items-center">
                <div class="col-6 col-lg-1">
                    <div class="header__logo">
                        <router-link :to="'/'">
                            <svg width="150" height="38" viewBox="0 0 150 38" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.5967 29.7893L9.54966 35.4868L9.53385 35.4777L11.5814 29.7788L11.5967 29.7893ZM7.37713 25.0139C8.36877 26.9265 9.81863 28.5632 11.5814 29.7788L17.2934 13.8802C13.7442 13.8802 10.5769 16.1078 9.37687 19.448L7.37713 25.0139ZM4.94451 31.7847L7.37713 25.0139C6.44359 23.2133 5.91617 21.1682 5.91617 19C5.91617 11.774 11.774 5.91617 19 5.91617C19.682 5.91617 20.3164 5.51926 20.547 4.87746L22.2028 0.268804C21.1616 0.092048 20.0916 0 19 0C8.50659 0 0 8.50659 0 19C0 23.9234 1.87264 28.4094 4.94451 31.7847Z"
                                      fill="#031F31"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.5967 29.7893L9.54966 35.4868L9.53385 35.4777L11.5814 29.7788L11.5967 29.7893ZM7.37713 25.0139C8.36877 26.9265 9.81863 28.5632 11.5814 29.7788L17.2934 13.8802C13.7442 13.8802 10.5769 16.1078 9.37687 19.448L7.37713 25.0139ZM4.94451 31.7847L7.37713 25.0139C6.44359 23.2133 5.91617 21.1682 5.91617 19C5.91617 11.774 11.774 5.91617 19 5.91617C19.682 5.91617 20.3164 5.51926 20.547 4.87746L22.2028 0.268804C21.1616 0.092048 20.0916 0 19 0C8.50659 0 0 8.50659 0 19C0 23.9234 1.87264 28.4094 4.94451 31.7847Z"
                                      fill="url(#paint0_linear_212_8152)"/>
                                <path
                                    d="M4.94451 31.7847C6.26926 33.2403 7.81705 34.4893 9.53385 35.4777L11.5814 29.7788C9.81863 28.5632 8.36877 26.9265 7.37713 25.0139L4.94451 31.7847Z"
                                    fill="#031F31"/>
                                <path
                                    d="M4.94451 31.7847C6.26926 33.2403 7.81705 34.4893 9.53385 35.4777L11.5814 29.7788C9.81863 28.5632 8.36877 26.9265 7.37713 25.0139L4.94451 31.7847Z"
                                    fill="url(#paint1_linear_212_8152)"/>
                                <path
                                    d="M32.2043 5.33809C30.8208 4.00066 29.2348 2.87146 27.4966 2.00099L25.475 7.62804C27.2517 8.64185 28.7678 10.06 29.898 11.7573L32.2043 5.33809Z"
                                    fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M19 32.0838C26.226 32.0838 32.0838 26.226 32.0838 19C32.0838 16.3215 31.279 13.8311 29.898 11.7573L32.2043 5.33809C35.778 8.79279 38 13.6369 38 19C38 29.4934 29.4934 38 19 38C17.5338 38 16.1064 37.8339 14.7355 37.5195L15.9952 34.0133C16.4359 32.7868 17.6968 32.0838 19 32.0838Z"
                                      fill="white"/>
                                <path
                                    d="M18.8958 25.9401C22.4392 25.9401 25.6014 23.7161 26.7996 20.3813L29.898 11.7573C28.7678 10.06 27.2517 8.64185 25.475 7.62804L18.8958 25.9401Z"
                                    fill="white"/>
                                <path
                                    d="M48.8 30.536C48.5653 30.536 48.3733 30.4614 48.224 30.312C48.0747 30.1627 48 29.9707 48 29.736V8.93604C48 8.70138 48.0747 8.50938 48.224 8.36004C48.3733 8.21071 48.5653 8.13604 48.8 8.13604H58.304C60.0747 8.13604 61.5253 8.39204 62.656 8.90404C63.7867 9.41604 64.6187 10.1414 65.152 11.08C65.7067 12.0187 65.984 13.1174 65.984 14.376C65.984 15.1654 65.8347 15.8587 65.536 16.456C65.2587 17.0534 64.9067 17.544 64.48 17.928C64.0747 18.312 63.68 18.6 63.296 18.792C64.128 19.176 64.8533 19.816 65.472 20.712C66.112 21.5867 66.432 22.632 66.432 23.848C66.432 25.192 66.1333 26.3654 65.536 27.368C64.9387 28.3707 64.0533 29.1494 62.88 29.704C61.7067 30.2587 60.2773 30.536 58.592 30.536H48.8ZM53.088 26.792H57.984C59.0293 26.792 59.8187 26.504 60.352 25.928C60.8853 25.3307 61.152 24.6267 61.152 23.816C61.152 22.984 60.8747 22.2907 60.32 21.736C59.7867 21.16 59.008 20.872 57.984 20.872H53.088V26.792ZM53.088 17.192H57.696C58.6987 17.192 59.4453 16.9467 59.936 16.456C60.448 15.944 60.704 15.2934 60.704 14.504C60.704 13.7147 60.448 13.0854 59.936 12.616C59.4453 12.1254 58.6987 11.88 57.696 11.88H53.088V17.192Z"
                                    fill="#4FE2C3"/>
                                <path
                                    d="M70.8223 30.536C70.6089 30.536 70.4276 30.4614 70.2782 30.312C70.1289 30.1627 70.0543 29.9707 70.0543 29.736V14.696C70.0543 14.4614 70.1289 14.2694 70.2782 14.12C70.4276 13.9707 70.6089 13.896 70.8223 13.896H74.0223C74.2569 13.896 74.4489 13.9707 74.5983 14.12C74.7476 14.2694 74.8223 14.4614 74.8223 14.696V29.736C74.8223 29.9707 74.7476 30.1627 74.5983 30.312C74.4489 30.4614 74.2569 30.536 74.0223 30.536H70.8223ZM70.7262 11.336C70.5129 11.336 70.3316 11.2614 70.1823 11.112C70.0329 10.9627 69.9583 10.7707 69.9583 10.536V7.97604C69.9583 7.74138 70.0329 7.54938 70.1823 7.40004C70.3316 7.22938 70.5129 7.14404 70.7262 7.14404H74.0863C74.3209 7.14404 74.5129 7.22938 74.6623 7.40004C74.8329 7.54938 74.9183 7.74138 74.9183 7.97604V10.536C74.9183 10.7707 74.8329 10.9627 74.6623 11.112C74.5129 11.2614 74.3209 11.336 74.0863 11.336H70.7262Z"
                                    fill="#4FE2C3"/>
                                <path
                                    d="M86.8355 30.536C85.5128 30.536 84.3822 30.3227 83.4435 29.896C82.5048 29.448 81.7902 28.7654 81.2995 27.848C80.8302 26.9307 80.5955 25.7787 80.5955 24.392V17.672H78.0995C77.8648 17.672 77.6728 17.5974 77.5235 17.448C77.3742 17.2987 77.2995 17.1067 77.2995 16.872V14.696C77.2995 14.4614 77.3742 14.2694 77.5235 14.12C77.6728 13.9707 77.8648 13.896 78.0995 13.896H80.5955V8.61604C80.5955 8.38137 80.6702 8.18938 80.8195 8.04004C80.9902 7.89071 81.1822 7.81604 81.3955 7.81604H84.5315C84.7662 7.81604 84.9582 7.89071 85.1075 8.04004C85.2568 8.18938 85.3315 8.38137 85.3315 8.61604V13.896H89.3315C89.5448 13.896 89.7262 13.9707 89.8755 14.12C90.0248 14.2694 90.0995 14.4614 90.0995 14.696V16.872C90.0995 17.1067 90.0248 17.2987 89.8755 17.448C89.7262 17.5974 89.5448 17.672 89.3315 17.672H85.3315V24.008C85.3315 24.8187 85.4702 25.4587 85.7475 25.928C86.0462 26.376 86.5582 26.6 87.2835 26.6H89.6195C89.8328 26.6 90.0142 26.6747 90.1635 26.824C90.3128 26.9734 90.3875 27.1547 90.3875 27.368V29.736C90.3875 29.9707 90.3128 30.1627 90.1635 30.312C90.0142 30.4614 89.8328 30.536 89.6195 30.536H86.8355Z"
                                    fill="#4FE2C3"/>
                                <path
                                    d="M94.3312 30.536C94.0966 30.536 93.9046 30.4614 93.7552 30.312C93.6059 30.1627 93.5312 29.9707 93.5312 29.736V8.93604C93.5312 8.70138 93.6059 8.50938 93.7552 8.36004C93.9046 8.21071 94.0966 8.13604 94.3312 8.13604H102.363C104.497 8.13604 106.278 8.47738 107.707 9.16004C109.137 9.82138 110.225 10.8027 110.971 12.104C111.739 13.384 112.145 14.9734 112.187 16.872C112.209 17.8107 112.219 18.632 112.219 19.336C112.219 20.04 112.209 20.8507 112.187 21.768C112.123 23.752 111.729 25.3947 111.003 26.696C110.278 27.9974 109.211 28.968 107.803 29.608C106.395 30.2267 104.635 30.536 102.523 30.536H94.3312ZM98.6193 26.408H102.363C103.43 26.408 104.305 26.248 104.987 25.928C105.67 25.608 106.171 25.1067 106.491 24.424C106.833 23.72 107.014 22.8134 107.035 21.704C107.057 21.0854 107.067 20.5307 107.067 20.04C107.089 19.5494 107.089 19.0587 107.067 18.568C107.067 18.0774 107.057 17.5334 107.035 16.936C106.993 15.336 106.577 14.1627 105.787 13.416C105.019 12.648 103.825 12.264 102.203 12.264H98.6193V26.408Z"
                                    fill="white"/>
                                <path
                                    d="M123.291 30.856C120.837 30.856 118.885 30.1734 117.435 28.808C116.005 27.4427 115.248 25.4587 115.163 22.856C115.163 22.6854 115.163 22.4614 115.163 22.184C115.163 21.8854 115.163 21.6507 115.163 21.48C115.248 19.8374 115.621 18.4294 116.283 17.256C116.944 16.0614 117.872 15.1547 119.067 14.536C120.261 13.896 121.659 13.576 123.259 13.576C125.051 13.576 126.544 13.9494 127.739 14.696C128.955 15.4214 129.861 16.424 130.459 17.704C131.077 18.9627 131.387 20.4134 131.387 22.056V22.792C131.387 23.0054 131.301 23.1867 131.131 23.336C130.981 23.4854 130.8 23.56 130.587 23.56H120.123C120.123 23.5814 120.123 23.624 120.123 23.688C120.123 23.7307 120.123 23.7734 120.123 23.816C120.144 24.4987 120.272 25.128 120.507 25.704C120.763 26.2587 121.115 26.7067 121.563 27.048C122.032 27.3894 122.587 27.56 123.227 27.56C123.76 27.56 124.197 27.4854 124.539 27.336C124.88 27.1867 125.157 27.0054 125.371 26.792C125.605 26.5787 125.776 26.3974 125.883 26.248C126.075 26.0347 126.224 25.9067 126.331 25.864C126.459 25.8 126.651 25.768 126.907 25.768H130.235C130.448 25.768 130.619 25.832 130.747 25.96C130.896 26.0667 130.96 26.2267 130.939 26.44C130.917 26.7814 130.736 27.208 130.395 27.72C130.075 28.2107 129.595 28.7014 128.955 29.192C128.315 29.6614 127.515 30.056 126.555 30.376C125.616 30.696 124.528 30.856 123.291 30.856ZM120.123 20.648H126.395V20.584C126.395 19.816 126.267 19.1547 126.011 18.6C125.776 18.024 125.424 17.576 124.955 17.256C124.485 16.936 123.92 16.776 123.259 16.776C122.597 16.776 122.032 16.936 121.563 17.256C121.093 17.576 120.731 18.024 120.475 18.6C120.24 19.1547 120.123 19.816 120.123 20.584V20.648Z"
                                    fill="white"/>
                                <path
                                    d="M133.382 30.536C133.189 30.536 133.019 30.472 132.869 30.344C132.742 30.1947 132.677 30.024 132.677 29.832C132.677 29.768 132.688 29.6934 132.71 29.608C132.752 29.5014 132.805 29.4054 132.869 29.32L138.277 21.992L133.317 15.112C133.253 15.0267 133.2 14.9414 133.158 14.856C133.136 14.7707 133.126 14.6854 133.126 14.6C133.126 14.408 133.189 14.248 133.317 14.12C133.467 13.9707 133.637 13.896 133.829 13.896H137.158C137.413 13.896 137.605 13.96 137.733 14.088C137.883 14.216 137.989 14.3334 138.053 14.44L141.35 18.92L144.646 14.472C144.731 14.3654 144.838 14.248 144.965 14.12C145.093 13.9707 145.296 13.896 145.574 13.896H148.742C148.934 13.896 149.093 13.9707 149.221 14.12C149.371 14.248 149.446 14.408 149.446 14.6C149.446 14.6854 149.435 14.7707 149.413 14.856C149.392 14.9414 149.339 15.0267 149.254 15.112L144.198 22.024L149.67 29.32C149.734 29.4054 149.776 29.4907 149.798 29.576C149.84 29.6614 149.862 29.7467 149.862 29.832C149.862 30.024 149.787 30.1947 149.637 30.344C149.509 30.472 149.35 30.536 149.158 30.536H145.67C145.435 30.536 145.254 30.4827 145.126 30.376C144.998 30.248 144.891 30.1307 144.806 30.024L141.254 25.288L137.637 30.024C137.573 30.1094 137.478 30.216 137.35 30.344C137.222 30.472 137.029 30.536 136.773 30.536H133.382Z"
                                    fill="white"/>
                                <defs>
                                    <linearGradient id="paint0_linear_212_8152" x1="0" y1="0" x2="26.8073" y2="3.90891"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4FE2C3"/>
                                        <stop offset="1" stop-color="#4FE2C3" stop-opacity="0.73"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_212_8152" x1="0" y1="0" x2="26.8073" y2="3.90891"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4FE2C3"/>
                                        <stop offset="1" stop-color="#4FE2C3" stop-opacity="0.73"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </router-link>
                    </div>
                </div>
                <div class="col-6 d-none d-lg-block col-lg-9 col-xxl-7 col-xl-8">
                    <header-menu></header-menu>
                </div>
                <div class="col-3 offset-1 offset-sm-3 col-md-2 offset-lg-0 col-sm-2 col-lg-2 offset-xxl-1 col-xxl-3 col-xl-3 col-lg-2">
                    <div class="row d-flex align-items-center">
                        <div class="col-12 col-lg-6 col-xl-4">
                            <div class="header__lang">
                      <span class="lang lang_active" @click="showLang = !showLang">
                          <img :src="'/img/' + $i18n.locale + '.png'" :alt="$i18n.locale">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.175 0.912524L5 4.72919L8.825 0.912524L10 2.08752L5 7.08752L0 2.08752L1.175 0.912524Z"
                                fill="#708B9B"/>
                          </svg>
                      </span>
                                <ul class="lang__list" v-if="showLang">
                                    <li class="lang__item" @click="changeLang(item)" v-for="(item, index) in langs" :key="index"
                                        :class="$i18n.locale === item ? 'active' : ''">
                                        <img :src="'/img/' + item + '.png'" :alt="item">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-none d-lg-block col-6 col-lg-6 col-xl-8">
                            <div class="header__auth" v-if="!$store.getters.getUser">
                                <div class="row d-flex align-items-center">
                                    <div class="col-4 col-lg-12 col-xl-4">
                                        <router-link to="/login" class="header__link">
                                            {{$t('auth.login')}}
                                        </router-link>
                                    </div>
                                    <div class="col-8 d-none d-xl-block">
                                        <router-link to="/register" class="header__button">
                                            {{$t('auth.register')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
							<div class="header__auth" v-else>
								<div class="row">
									<div class="col-12">
										<router-link to="/lk" class="header__button">{{$store.getters.getUser.email}}</router-link>
									</div>
								</div>
							</div>
                        </div>
                    </div>
                </div>
				<div class="col-2 col-sm-1 d-lg-none">
					<div class="header__burger" >
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showMobile = showMobile ? false : true">
							<path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#818F98"/>
						</svg>
					</div>
				</div>
            </div>
        </div>
		<transition name="slide" enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
			<header-menu :mobile="true" v-if="showMobile" class="nav_mobile"></header-menu>
		</transition>
    </header>
</template>

<script>
import HeaderMenu from "./HeaderMenu";
import JsCookie from 'js-cookie'
export default {
    name: "MainHeader",
    components: {HeaderMenu},
    data() {
        return {
            langs: [
                'ru', 'en'
            ],
            showLang: false,
			showMobile: false,
        }
    },
	computed: {
		getRoute() {
			return this.$route.fullPath
		}
	},
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang
            JsCookie.set('lang', lang, {expires: 30})
            this.showLang = false
        }
    },
	watch: {
		getRoute() {
			this.showMobile = false
		}
	}
}
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    background: #031F31;
    padding: 20px 0;
	@media screen and (max-width: 992px){
		padding: 5px 0;
	}
    &__lang {
        position: relative;
        max-width: 69px;
    }
    &__logo {
        svg {
            max-width: 100%;
            height: auto;
        }
    }
    &__link {
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        color: #fff;
    }
    &__button {
        background: linear-gradient(103.12deg, #4FE2C3 0%, rgba(79, 226, 195, 0.73) 100%), #031F31;
        border-radius: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        color: #fff;
		display: block;
		text-align: center;
		text-decoration: none;
		padding: 12px 10px;
    }
	&__burger {
		cursor: pointer;
		svg {
			cursor: pointer;
		}
	}
}

.lang {

    &_active {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        padding: 10px;
        cursor: pointer;
        display: block;
        position: relative;

        img {
            vertical-align: middle;
			max-width: 23px;
			@media screen and (max-width: 768px) {
				max-width: 20px;
			}
        }

        svg {
            vertical-align: middle;
            margin-left: 10px;
        }
    }

    &__list {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 100%;
        left: 0;
		z-index: 102;
        right: 0;
        background: rgba(0, 0, 0, 0.15);
        list-style-type: none;
    }

    &__item {
        padding: 10px;
        cursor: pointer;
		img {
			max-width: 23px;
		}
        &.active {
            background: rgba(0, 0, 0, 0.15);
        }
    }
}
</style>
