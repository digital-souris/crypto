<template>
    <ul :class="[!mobile ? 'd-flex align-items-center justify-content-between' : '', 'nav']">
        <router-link v-for="(item, key) in menu" tag="li" :key="key" :to="item.link" class="nav__item">
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.707107" y="5" width="5" height="5" transform="rotate(-45 0.707107 5)" stroke="#708B9B"/>
            </svg>
            <a class="nav__link">{{$t('menu.' + item.name)}}</a>
        </router-link>
		<li v-if="!$store.getters.getUser && mobile"  class="nav__item">
			<router-link class="header__link" to="/login">{{$t('auth.login')}}</router-link>
		</li>
		<li v-if="!$store.getters.getUser && mobile"  class="nav__item">
			<router-link to="/register" class="header__button">{{$t('auth.register')}}</router-link>
		</li>
		<li v-if="mobile && $store.getters.getUser" class="nav__item">
			<router-link to="/lk" class="header__button">{{$t('auth.lk')}}</router-link>

		</li>
    </ul>
</template>

<script>
export default {
    name: "HeaderMenu",
	props: ['mobile'],
    data() {
        return {
            menu: [
                {
                    link: '/trading',
                    name: 'trading'
                },
                {
                    link: '/market-tools',
                    name: 'market_tools'
                },
                {
                    link: '/invest-pad',
                    name: 'invest_pad'
                },
                {
                    link: '/wallet',
                    name: 'wallet'
                },
                {
                    link: '/news',
                    name: 'news'
                },
                {
                    link: '/support',
                    name: 'support'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .nav {
        padding: 0;
        margin: 0;
        padding-left: 40px;

		@media screen and (max-width: 1200px) {
			padding-left: 0;
		}
		&_mobile {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background-color: #031F31;
			padding: 10px 20px;
			z-index: 100;
			.nav {
				&__item {
					padding-bottom: 10px;
				}
			}
		}
        &__item {
            svg {
                vertical-align: middle;
            }
        }
        &__link {
            padding-left: 10px;
            text-decoration: none;
            color: #fff;
            font-weight: 600;
        }
    }
	.header {
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
	}
</style>
