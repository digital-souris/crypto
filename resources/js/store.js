import Vue from 'vue'
import Vuex from 'Vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
		"crypto": [
			{
				"id": 1,
				"name": "Bitcoin",
				"symbol": "BTC",
				"slug": "bitcoin",
				"cmc_rank": 1,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:36:00.000Z",
				"quote": {
					"USD": {
						"price": 41677.435795003,
						"volume_24h": 29442865755.104958,
						"volume_change_24h": 6.6502,
						"percent_change_1h": 0.57486681,
						"percent_change_24h": -4.54444719,
						"percent_change_7d": 5.60212693,
						"percent_change_30d": 8.16002172,
						"percent_change_60d": -11.86449232,
						"percent_change_90d": -11.80436038,
						"market_cap": 790796752455.3903,
						"market_cap_dominance": 42.859,
						"fully_diluted_market_cap": 875226151695.06,
						"last_updated": "2022-03-04T13:36:00.000Z"
					}
				}
			},
			{
				"id": 1027,
				"name": "Ethereum",
				"symbol": "ETH",
				"slug": "ethereum",
				"cmc_rank": 2,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2745.7140752062355,
						"volume_24h": 14454130001.00027,
						"volume_change_24h": 7.8256,
						"percent_change_1h": 0.6337365,
						"percent_change_24h": -5.99656029,
						"percent_change_7d": 0.96433804,
						"percent_change_30d": -1.39242313,
						"percent_change_60d": -28.24355484,
						"percent_change_90d": -30.49463187,
						"market_cap": 328992778602.8287,
						"market_cap_dominance": 17.9095,
						"fully_diluted_market_cap": 328992778602.83,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 825,
				"name": "Tether",
				"symbol": "USDT",
				"slug": "tether",
				"cmc_rank": 3,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.0002028643657446,
						"volume_24h": 63996227824.38983,
						"volume_change_24h": 6.3442,
						"percent_change_1h": -0.00680342,
						"percent_change_24h": -0.00419955,
						"percent_change_7d": -0.06000032,
						"percent_change_30d": -0.01934987,
						"percent_change_60d": 0.00035632,
						"percent_change_90d": 0.00107814,
						"market_cap": 79529186813.86005,
						"market_cap_dominance": 4.3293,
						"fully_diluted_market_cap": 82181365337.93,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1839,
				"name": "BNB",
				"symbol": "BNB",
				"slug": "bnb",
				"cmc_rank": 4,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 397.2135175841135,
						"volume_24h": 1691442475.3722074,
						"volume_change_24h": 5.6917,
						"percent_change_1h": 0.63298044,
						"percent_change_24h": -3.49581102,
						"percent_change_7d": 7.21904346,
						"percent_change_30d": 3.7898875,
						"percent_change_60d": -25.30149728,
						"percent_change_90d": -27.52744424,
						"market_cap": 65586609405.211876,
						"market_cap_dominance": 3.5726,
						"fully_diluted_market_cap": 65586609051.69,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3408,
				"name": "USD Coin",
				"symbol": "USDC",
				"slug": "usd-coin",
				"cmc_rank": 5,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.0002375158751347,
						"volume_24h": 4484342953.15845,
						"volume_change_24h": 5.3506,
						"percent_change_1h": 0.04141941,
						"percent_change_24h": 0.04386929,
						"percent_change_7d": 0.00379022,
						"percent_change_30d": -0.00284519,
						"percent_change_60d": 0.07656004,
						"percent_change_90d": 0.11116412,
						"market_cap": 53193064347.4362,
						"market_cap_dominance": 2.8957,
						"fully_diluted_market_cap": 53193064347.44,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 52,
				"name": "XRP",
				"symbol": "XRP",
				"slug": "xrp",
				"cmc_rank": 6,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.7420827132988695,
						"volume_24h": 2341154024.4908953,
						"volume_change_24h": 8.6125,
						"percent_change_1h": 0.54707577,
						"percent_change_24h": -3.43110672,
						"percent_change_7d": 3.58336362,
						"percent_change_30d": 18.10135216,
						"percent_change_60d": -12.03923605,
						"percent_change_90d": -5.11034928,
						"market_cap": 35582332647.61735,
						"market_cap_dominance": 1.937,
						"fully_diluted_market_cap": 74208271329.89,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4172,
				"name": "Terra",
				"symbol": "LUNA",
				"slug": "terra-luna",
				"cmc_rank": 7,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 91.3638989173748,
						"volume_24h": 3748427874.6442614,
						"volume_change_24h": 4.2315,
						"percent_change_1h": 2.06735699,
						"percent_change_24h": -2.00049624,
						"percent_change_7d": 36.24201841,
						"percent_change_30d": 72.818993,
						"percent_change_60d": -2.36855235,
						"percent_change_90d": 63.13239793,
						"market_cap": 33942082177.375904,
						"market_cap_dominance": 1.8477,
						"fully_diluted_market_cap": 71690452264.37,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2010,
				"name": "Cardano",
				"symbol": "ADA",
				"slug": "cardano",
				"cmc_rank": 8,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.8921010460892163,
						"volume_24h": 1093802585.8094084,
						"volume_change_24h": 2.221,
						"percent_change_1h": 1.28024695,
						"percent_change_24h": -3.45035217,
						"percent_change_7d": 1.13937832,
						"percent_change_30d": -17.29220881,
						"percent_change_60d": -34.77588523,
						"percent_change_90d": -34.75522035,
						"market_cap": 30029196267.14832,
						"market_cap_dominance": 1.6347,
						"fully_diluted_market_cap": 40144547074.01,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5426,
				"name": "Solana",
				"symbol": "SOL",
				"slug": "solana",
				"cmc_rank": 9,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 93.33221277569596,
						"volume_24h": 2510466562.7076874,
						"volume_change_24h": -3.9548,
						"percent_change_1h": 1.44191982,
						"percent_change_24h": -6.14153367,
						"percent_change_7d": 2.57391664,
						"percent_change_30d": -15.43501614,
						"percent_change_60d": -46.74608303,
						"percent_change_90d": -51.63482412,
						"market_cap": 29613649411.825436,
						"market_cap_dominance": 1.6121,
						"fully_diluted_market_cap": 47750341677,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5805,
				"name": "Avalanche",
				"symbol": "AVAX",
				"slug": "avalanche",
				"cmc_rank": 10,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 81.69027467681367,
						"volume_24h": 1869391150.1766133,
						"volume_change_24h": 36.71,
						"percent_change_1h": 0.74971613,
						"percent_change_24h": 0.6727838,
						"percent_change_7d": 4.90382172,
						"percent_change_30d": 10.25951284,
						"percent_change_60d": -27.463423,
						"percent_change_90d": -7.57679567,
						"market_cap": 21674879205.484127,
						"market_cap_dominance": 1.1799,
						"fully_diluted_market_cap": 32340468215.18,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4687,
				"name": "Binance USD",
				"symbol": "BUSD",
				"slug": "binance-usd",
				"cmc_rank": 11,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.0000300234358876,
						"volume_24h": 5793398785.943799,
						"volume_change_24h": 14.8838,
						"percent_change_1h": 0.14155087,
						"percent_change_24h": -0.11371753,
						"percent_change_7d": -0.10546211,
						"percent_change_30d": -0.02465084,
						"percent_change_60d": -0.09656426,
						"percent_change_90d": 0.01129501,
						"market_cap": 17996785729.899864,
						"market_cap_dominance": 0.9803,
						"fully_diluted_market_cap": 17996785729.9,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6636,
				"name": "Polkadot",
				"symbol": "DOT",
				"slug": "polkadot-new",
				"cmc_rank": 12,
				"self_reported_circulating_supply": 904869778,
				"self_reported_market_cap": 15834428257.273188,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 17.499123788034378,
						"volume_24h": 1136632019.2358644,
						"volume_change_24h": 9.4553,
						"percent_change_1h": 1.21914826,
						"percent_change_24h": -5.29158972,
						"percent_change_7d": 5.40597776,
						"percent_change_30d": -14.0815777,
						"percent_change_60d": -42.07273514,
						"percent_change_90d": -38.10420536,
						"market_cap": 17281772682.936222,
						"market_cap_dominance": 0.9408,
						"fully_diluted_market_cap": 19306844021.49,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 74,
				"name": "Dogecoin",
				"symbol": "DOGE",
				"slug": "dogecoin",
				"cmc_rank": 13,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.12838126636604644,
						"volume_24h": 624825342.3595138,
						"volume_change_24h": 14.3211,
						"percent_change_1h": 0.96371596,
						"percent_change_24h": -3.39463509,
						"percent_change_7d": 1.03512482,
						"percent_change_30d": -11.07064082,
						"percent_change_60d": -25.71265481,
						"percent_change_90d": -21.90681643,
						"market_cap": 17032440730.571667,
						"market_cap_dominance": 0.9278,
						"fully_diluted_market_cap": 17032440730.57,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5994,
				"name": "Shiba Inu",
				"symbol": "SHIB",
				"slug": "shiba-inu",
				"cmc_rank": 14,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.00002505539014685963,
						"volume_24h": 991647885.9055417,
						"volume_change_24h": -7.878,
						"percent_change_1h": 0.8799023,
						"percent_change_24h": -3.68678643,
						"percent_change_7d": 1.22026309,
						"percent_change_30d": 15.67857658,
						"percent_change_60d": -26.35469783,
						"percent_change_90d": -30.81885171,
						"market_cap": 13756994667.559736,
						"market_cap_dominance": 0.7494,
						"fully_diluted_market_cap": 14776041270.15,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7129,
				"name": "TerraUSD",
				"symbol": "UST",
				"slug": "terrausd",
				"cmc_rank": 15,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.0060216501279484,
						"volume_24h": 682414637.8606519,
						"volume_change_24h": -2.5965,
						"percent_change_1h": 0.34428072,
						"percent_change_24h": 0.38277756,
						"percent_change_7d": 0.2912565,
						"percent_change_30d": 0.52741491,
						"percent_change_60d": 0.50485475,
						"percent_change_90d": 0.67625527,
						"market_cap": 13463365730.600645,
						"market_cap_dominance": 0.7334,
						"fully_diluted_market_cap": 13463365730.6,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3890,
				"name": "Polygon",
				"symbol": "MATIC",
				"slug": "polygon",
				"cmc_rank": 16,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.5583004715968696,
						"volume_24h": 1013262610.0508044,
						"volume_change_24h": -8.0063,
						"percent_change_1h": 0.9222466,
						"percent_change_24h": -4.04029009,
						"percent_change_7d": 3.17476151,
						"percent_change_30d": -5.34101994,
						"percent_change_60d": -37.59390382,
						"percent_change_90d": -15.53805727,
						"market_cap": 11797504790.56247,
						"market_cap_dominance": 0.6426,
						"fully_diluted_market_cap": 15583004715.97,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3717,
				"name": "Wrapped Bitcoin",
				"symbol": "WBTC",
				"slug": "wrapped-bitcoin",
				"cmc_rank": 17,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 41669.14608019081,
						"volume_24h": 234674879.7845575,
						"volume_change_24h": 0.1979,
						"percent_change_1h": 0.43618073,
						"percent_change_24h": -4.37925445,
						"percent_change_7d": 5.91879161,
						"percent_change_30d": 7.99649814,
						"percent_change_60d": -11.80335689,
						"percent_change_90d": -11.47060893,
						"market_cap": 11028906177.95618,
						"market_cap_dominance": 0.6004,
						"fully_diluted_market_cap": 11028906177.96,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3635,
				"name": "Cronos",
				"symbol": "CRO",
				"slug": "cronos",
				"cmc_rank": 18,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.42254260721453046,
						"volume_24h": 91043722.25621726,
						"volume_change_24h": 3.392,
						"percent_change_1h": 0.79158125,
						"percent_change_24h": -3.14596765,
						"percent_change_7d": 2.13039362,
						"percent_change_30d": -1.66523995,
						"percent_change_60d": -27.65961745,
						"percent_change_90d": -23.2894433,
						"market_cap": 10674699671.514061,
						"market_cap_dominance": 0.5815,
						"fully_diluted_market_cap": 12787412707.59,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3794,
				"name": "Cosmos",
				"symbol": "ATOM",
				"slug": "cosmos",
				"cmc_rank": 19,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 33.63274304686034,
						"volume_24h": 1940744525.6845918,
						"volume_change_24h": 34.1241,
						"percent_change_1h": 0.68096458,
						"percent_change_24h": 4.16088703,
						"percent_change_7d": 31.45234254,
						"percent_change_30d": 17.24855452,
						"percent_change_60d": -11.61832026,
						"percent_change_90d": 31.51397678,
						"market_cap": 9631418615.25408,
						"market_cap_dominance": 0.5243,
						"fully_diluted_market_cap": 0,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4943,
				"name": "Dai",
				"symbol": "DAI",
				"slug": "multi-collateral-dai",
				"cmc_rank": 20,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.9999725513798292,
						"volume_24h": 389386058.25863767,
						"volume_change_24h": 42.2054,
						"percent_change_1h": 0.01930784,
						"percent_change_24h": 0.03694807,
						"percent_change_7d": -0.04362003,
						"percent_change_30d": -0.00078864,
						"percent_change_60d": 0.05576324,
						"percent_change_90d": 0.23726159,
						"market_cap": 9630038938.481834,
						"market_cap_dominance": 0.5242,
						"fully_diluted_market_cap": 9630038938.48,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2,
				"name": "Litecoin",
				"symbol": "LTC",
				"slug": "litecoin",
				"cmc_rank": 21,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:36:00.000Z",
				"quote": {
					"USD": {
						"price": 107.60691245268016,
						"volume_24h": 1006138022.125266,
						"volume_change_24h": 34.0492,
						"percent_change_1h": 0.57760628,
						"percent_change_24h": -3.14833449,
						"percent_change_7d": 1.38026208,
						"percent_change_30d": -6.18313703,
						"percent_change_60d": -28.73945801,
						"percent_change_90d": -29.85992502,
						"market_cap": 7507439038.361261,
						"market_cap_dominance": 0.4069,
						"fully_diluted_market_cap": 9038980646.03,
						"last_updated": "2022-03-04T13:36:00.000Z"
					}
				}
			},
			{
				"id": 6535,
				"name": "NEAR Protocol",
				"symbol": "NEAR",
				"slug": "near-protocol",
				"cmc_rank": 22,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 11.61272649413069,
						"volume_24h": 939716777.7020379,
						"volume_change_24h": 18.236,
						"percent_change_1h": 0.98330841,
						"percent_change_24h": 2.13207028,
						"percent_change_7d": 31.21908486,
						"percent_change_30d": 0.18943693,
						"percent_change_60d": -20.74090021,
						"percent_change_90d": 51.30199895,
						"market_cap": 7478807852.5423155,
						"market_cap_dominance": 0.4074,
						"fully_diluted_market_cap": 11612726494.13,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1975,
				"name": "Chainlink",
				"symbol": "LINK",
				"slug": "chainlink",
				"cmc_rank": 23,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 14.53024362620862,
						"volume_24h": 706787111.6627357,
						"volume_change_24h": 1.5564,
						"percent_change_1h": 0.92346109,
						"percent_change_24h": -4.43825857,
						"percent_change_7d": 4.6007916,
						"percent_change_30d": -15.31594895,
						"percent_change_60d": -36.38466377,
						"percent_change_90d": -25.14318262,
						"market_cap": 6785762530.299729,
						"market_cap_dominance": 0.3694,
						"fully_diluted_market_cap": 14530243626.21,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7083,
				"name": "Uniswap",
				"symbol": "UNI",
				"slug": "uniswap",
				"cmc_rank": 24,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 9.342791068960882,
						"volume_24h": 207553385.52464205,
						"volume_change_24h": -6.9699,
						"percent_change_1h": 0.72106825,
						"percent_change_24h": -6.80396161,
						"percent_change_7d": 1.74897416,
						"percent_change_30d": -16.75573672,
						"percent_change_60d": -50.77074255,
						"percent_change_90d": -43.56912784,
						"market_cap": 6420141379.572399,
						"market_cap_dominance": 0.3497,
						"fully_diluted_market_cap": 9342791068.96,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1958,
				"name": "TRON",
				"symbol": "TRX",
				"slug": "tron",
				"cmc_rank": 25,
				"self_reported_circulating_supply": 71659659264,
				"self_reported_market_cap": 4274324201.2340245,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.05964756524290839,
						"volume_24h": 704387306.1009974,
						"volume_change_24h": 4.6225,
						"percent_change_1h": 0.39121607,
						"percent_change_24h": -1.70450072,
						"percent_change_7d": -4.48511197,
						"percent_change_30d": -2.53337264,
						"percent_change_60d": -23.46807797,
						"percent_change_90d": -28.70462694,
						"market_cap": 6067958593.294403,
						"market_cap_dominance": 0.3303,
						"fully_diluted_market_cap": 6067960837.74,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4195,
				"name": "FTX Token",
				"symbol": "FTT",
				"slug": "ftx-token",
				"cmc_rank": 26,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 43.57479461634195,
						"volume_24h": 130101420.01101999,
						"volume_change_24h": -27.9707,
						"percent_change_1h": 0.36499603,
						"percent_change_24h": -4.26988262,
						"percent_change_7d": 1.54657461,
						"percent_change_30d": -4.94944875,
						"percent_change_60d": 8.9687594,
						"percent_change_90d": 1.29822104,
						"market_cap": 6000047755.781611,
						"market_cap_dominance": 0.3266,
						"fully_diluted_market_cap": 15345736073.66,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1831,
				"name": "Bitcoin Cash",
				"symbol": "BCH",
				"slug": "bitcoin-cash",
				"cmc_rank": 27,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 307.70563181119417,
						"volume_24h": 3875898822.678161,
						"volume_change_24h": -4.6228,
						"percent_change_1h": 0.4003223,
						"percent_change_24h": -3.07962482,
						"percent_change_7d": 1.85139964,
						"percent_change_30d": 4.4510162,
						"percent_change_60d": -30.98997766,
						"percent_change_90d": -31.98278903,
						"market_cap": 5846097375.620679,
						"market_cap_dominance": 0.3184,
						"fully_diluted_market_cap": 6461818268.04,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4030,
				"name": "Algorand",
				"symbol": "ALGO",
				"slug": "algorand",
				"cmc_rank": 28,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.8089604253336926,
						"volume_24h": 302507293.79158217,
						"volume_change_24h": -29.2952,
						"percent_change_1h": 1.62272341,
						"percent_change_24h": -3.21310455,
						"percent_change_7d": 0.0327256,
						"percent_change_30d": -20.68859686,
						"percent_change_60d": -52.64568821,
						"percent_change_90d": -47.50556895,
						"market_cap": 5355827865.451683,
						"market_cap_dominance": 0.2917,
						"fully_diluted_market_cap": 8089604253.34,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3957,
				"name": "UNUS SED LEO",
				"symbol": "LEO",
				"slug": "unus-sed-leo",
				"cmc_rank": 29,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 5.54508177141116,
						"volume_24h": 6586695.1459173,
						"volume_change_24h": 2.1507,
						"percent_change_1h": 0.42470855,
						"percent_change_24h": -1.98016692,
						"percent_change_7d": -4.59507184,
						"percent_change_30d": 38.42899711,
						"percent_change_60d": 46.91647313,
						"percent_change_90d": 72.20567576,
						"market_cap": 5289753657.025393,
						"market_cap_dominance": 0.288,
						"fully_diluted_market_cap": 5463233614.1,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1966,
				"name": "Decentraland",
				"symbol": "MANA",
				"slug": "decentraland",
				"cmc_rank": 30,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.6212512084143,
						"volume_24h": 532420483.49292094,
						"volume_change_24h": 3.0825,
						"percent_change_1h": 0.84579554,
						"percent_change_24h": -3.7388102,
						"percent_change_7d": -3.5325761,
						"percent_change_30d": -2.52531088,
						"percent_change_60d": -21.05166521,
						"percent_change_90d": -22.31707218,
						"market_cap": 4802403246.900086,
						"market_cap_dominance": 0.2614,
						"fully_diluted_market_cap": 5750531117.02,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3513,
				"name": "Fantom",
				"symbol": "FTM",
				"slug": "fantom",
				"cmc_rank": 31,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.7819584938627584,
						"volume_24h": 1373341463.2583394,
						"volume_change_24h": -19.3272,
						"percent_change_1h": -0.4338651,
						"percent_change_24h": -5.89344054,
						"percent_change_7d": 8.30584788,
						"percent_change_30d": -14.04396644,
						"percent_change_60d": -31.00883429,
						"percent_change_90d": 14.58548585,
						"market_cap": 4535095545.106352,
						"market_cap_dominance": 0.2469,
						"fully_diluted_market_cap": 5657718218.01,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 512,
				"name": "Stellar",
				"symbol": "XLM",
				"slug": "stellar",
				"cmc_rank": 32,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.18444191504392113,
						"volume_24h": 277724519.63288385,
						"volume_change_24h": 13.4286,
						"percent_change_1h": 0.59314316,
						"percent_change_24h": -4.26009038,
						"percent_change_7d": -1.36100454,
						"percent_change_30d": -9.7456512,
						"percent_change_60d": -36.91793345,
						"percent_change_90d": -33.62459704,
						"market_cap": 4529351440.033087,
						"market_cap_dominance": 0.2466,
						"fully_diluted_market_cap": 9222429004.06,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4023,
				"name": "Bitcoin BEP2",
				"symbol": "BTCB",
				"slug": "bitcoin-bep2",
				"cmc_rank": 33,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 41579.77821062882,
						"volume_24h": 27285240.16842108,
						"volume_change_24h": -13.1809,
						"percent_change_1h": 0.12283524,
						"percent_change_24h": -4.57612705,
						"percent_change_7d": 5.72042916,
						"percent_change_30d": 7.75606033,
						"percent_change_60d": -12.12227453,
						"percent_change_90d": -11.71171094,
						"market_cap": 4372147788.665662,
						"market_cap_dominance": 0.238,
						"fully_diluted_market_cap": 4677766628.47,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4642,
				"name": "Hedera",
				"symbol": "HBAR",
				"slug": "hedera",
				"cmc_rank": 34,
				"self_reported_circulating_supply": 19389577881,
				"self_reported_market_cap": 4191695429.404721,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.21618291306445594,
						"volume_24h": 82422190.97023068,
						"volume_change_24h": 9.1621,
						"percent_change_1h": 0.73696785,
						"percent_change_24h": -4.60884909,
						"percent_change_7d": -2.76834361,
						"percent_change_30d": -6.99577224,
						"percent_change_60d": -30.415616,
						"percent_change_90d": -16.14809037,
						"market_cap": 4229695849.929201,
						"market_cap_dominance": 0.2303,
						"fully_diluted_market_cap": 10809145653.22,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 8916,
				"name": "Internet Computer",
				"symbol": "ICP",
				"slug": "internet-computer",
				"cmc_rank": 35,
				"self_reported_circulating_supply": 208548236.0137315,
				"self_reported_market_cap": 3991210303.8698215,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.138067912533323,
						"volume_24h": 327762515.5276352,
						"volume_change_24h": 6.7358,
						"percent_change_1h": 1.44210117,
						"percent_change_24h": -6.14612377,
						"percent_change_7d": 10.44419503,
						"percent_change_30d": -11.58516516,
						"percent_change_60d": -29.96043895,
						"percent_change_90d": -36.88245059,
						"market_cap": 3990689205.01202,
						"market_cap_dominance": 0.2174,
						"fully_diluted_market_cap": 9144124928.09,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1321,
				"name": "Ethereum Classic",
				"symbol": "ETC",
				"slug": "ethereum-classic",
				"cmc_rank": 36,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 29.44066088385696,
						"volume_24h": 527885355.7509022,
						"volume_change_24h": -10.0297,
						"percent_change_1h": 0.96433378,
						"percent_change_24h": -4.89566234,
						"percent_change_7d": 8.32523618,
						"percent_change_30d": 5.31688777,
						"percent_change_60d": -16.58112559,
						"percent_change_90d": -19.1820045,
						"market_cap": 3925841493.920107,
						"market_cap_dominance": 0.2137,
						"fully_diluted_market_cap": 6203147248.23,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6210,
				"name": "The Sandbox",
				"symbol": "SAND",
				"slug": "the-sandbox",
				"cmc_rank": 37,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 3.0821261501412582,
						"volume_24h": 906084844.038003,
						"volume_change_24h": -1.487,
						"percent_change_1h": 1.15794657,
						"percent_change_24h": -5.20305903,
						"percent_change_7d": -1.62251839,
						"percent_change_30d": -22.27757871,
						"percent_change_60d": -47.23406104,
						"percent_change_90d": -40.78062692,
						"market_cap": 3467221699.934204,
						"market_cap_dominance": 0.1889,
						"fully_diluted_market_cap": 9246378450.42,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2280,
				"name": "Filecoin",
				"symbol": "FIL",
				"slug": "filecoin",
				"cmc_rank": 38,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.84406113622186,
						"volume_24h": 362785181.7333797,
						"volume_change_24h": -1.5466,
						"percent_change_1h": 0.80138185,
						"percent_change_24h": -2.93735826,
						"percent_change_7d": 4.72365571,
						"percent_change_30d": -6.50652072,
						"percent_change_60d": -43.86831634,
						"percent_change_90d": -49.15254612,
						"market_cap": 3415117657.24033,
						"market_cap_dominance": 0.1859,
						"fully_diluted_market_cap": 3415117657.24,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3077,
				"name": "VeChain",
				"symbol": "VET",
				"slug": "vechain",
				"cmc_rank": 39,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.053041497762397666,
						"volume_24h": 488698766.2275112,
						"volume_change_24h": 12.7865,
						"percent_change_1h": 1.25101961,
						"percent_change_24h": -6.19681645,
						"percent_change_7d": 13.08374435,
						"percent_change_30d": -4.73835722,
						"percent_change_60d": -39.18716816,
						"percent_change_90d": -41.90220967,
						"market_cap": 3411394532.9493585,
						"market_cap_dominance": 0.1858,
						"fully_diluted_market_cap": 4599368007,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6783,
				"name": "Axie Infinity",
				"symbol": "AXS",
				"slug": "axie-infinity",
				"cmc_rank": 40,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 52.591645220564736,
						"volume_24h": 324660124.5387285,
						"volume_change_24h": -10.8954,
						"percent_change_1h": 0.93187504,
						"percent_change_24h": -4.59207293,
						"percent_change_7d": 4.74004284,
						"percent_change_30d": -1.22010904,
						"percent_change_60d": -46.02438051,
						"percent_change_90d": -52.50394258,
						"market_cap": 3203225631.271547,
						"market_cap_dominance": 0.1744,
						"fully_diluted_market_cap": 14199744209.55,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6892,
				"name": "Elrond",
				"symbol": "EGLD",
				"slug": "elrond-egld",
				"cmc_rank": 41,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 145.15809640995516,
						"volume_24h": 173536655.67173222,
						"volume_change_24h": -3.3021,
						"percent_change_1h": 0.92774014,
						"percent_change_24h": -4.99520758,
						"percent_change_7d": 0.95647068,
						"percent_change_30d": -6.19576149,
						"percent_change_60d": -40.3849889,
						"percent_change_90d": -48.0780157,
						"market_cap": 3134693643.0206594,
						"market_cap_dominance": 0.1706,
						"fully_diluted_market_cap": 4560276015.12,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 328,
				"name": "Monero",
				"symbol": "XMR",
				"slug": "monero",
				"cmc_rank": 42,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 172.48304579919161,
						"volume_24h": 179396976.94982123,
						"volume_change_24h": 25.3928,
						"percent_change_1h": -1.21829336,
						"percent_change_24h": -3.35833683,
						"percent_change_7d": 13.71602502,
						"percent_change_30d": 15.54682414,
						"percent_change_60d": -27.17780418,
						"percent_change_90d": -13.39402197,
						"market_cap": 3119814413.2556386,
						"market_cap_dominance": 0.1699,
						"fully_diluted_market_cap": 3119814413.26,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4256,
				"name": "Klaytn",
				"symbol": "KLAY",
				"slug": "klaytn",
				"cmc_rank": 43,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.1635577262764982,
						"volume_24h": 64502106.98842302,
						"volume_change_24h": 1.2612,
						"percent_change_1h": 0.64520116,
						"percent_change_24h": -2.18183074,
						"percent_change_7d": -5.40702575,
						"percent_change_30d": -2.09234952,
						"percent_change_60d": -19.36039857,
						"percent_change_90d": -5.78797749,
						"market_cap": 3068883962.659566,
						"market_cap_dominance": 0.1672,
						"fully_diluted_market_cap": 12545826122.58,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2416,
				"name": "Theta Network",
				"symbol": "THETA",
				"slug": "theta-network",
				"cmc_rank": 44,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 3.0296204684038384,
						"volume_24h": 239113999.86304516,
						"volume_change_24h": -28.8652,
						"percent_change_1h": 0.78669104,
						"percent_change_24h": -6.07028899,
						"percent_change_7d": 9.74904848,
						"percent_change_30d": 3.57918533,
						"percent_change_60d": -37.29188278,
						"percent_change_90d": -36.86477807,
						"market_cap": 3029620468.403838,
						"market_cap_dominance": 0.1649,
						"fully_diluted_market_cap": 3029620468.4,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2011,
				"name": "Tezos",
				"symbol": "XTZ",
				"slug": "tezos",
				"cmc_rank": 45,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 3.3028754983876376,
						"volume_24h": 109412071.76201227,
						"volume_change_24h": -29.3058,
						"percent_change_1h": 0.6918734,
						"percent_change_24h": -4.88463537,
						"percent_change_7d": 4.7664858,
						"percent_change_30d": -12.28775571,
						"percent_change_60d": -29.14337554,
						"percent_change_90d": -18.2010322,
						"market_cap": 2927123199.1469507,
						"market_cap_dominance": 0.1593,
						"fully_diluted_market_cap": 2999593035.61,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5665,
				"name": "Helium",
				"symbol": "HNT",
				"slug": "helium",
				"cmc_rank": 46,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 22.75009516932122,
						"volume_24h": 43934740.46107729,
						"volume_change_24h": 11.7862,
						"percent_change_1h": 0.64565288,
						"percent_change_24h": -8.29597697,
						"percent_change_7d": -4.40161446,
						"percent_change_30d": -16.74970962,
						"percent_change_60d": -43.84522381,
						"percent_change_90d": -23.16233286,
						"market_cap": 2563224316.3772836,
						"market_cap_dominance": 0.1396,
						"fully_diluted_market_cap": 5073271222.76,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1720,
				"name": "IOTA",
				"symbol": "MIOTA",
				"slug": "iota",
				"cmc_rank": 47,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.7577598722781669,
						"volume_24h": 29746993.75628626,
						"volume_change_24h": -9.4778,
						"percent_change_1h": 0.70800737,
						"percent_change_24h": -3.66382525,
						"percent_change_7d": 3.70813561,
						"percent_change_30d": -15.65910843,
						"percent_change_60d": -45.04417291,
						"percent_change_90d": -34.64919661,
						"market_cap": 2106216512.239377,
						"market_cap_dominance": 0.1147,
						"fully_diluted_market_cap": 2106216512.24,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1274,
				"name": "Waves",
				"symbol": "WAVES",
				"slug": "waves",
				"cmc_rank": 48,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.28911593749793,
						"volume_24h": 1420575975.360329,
						"volume_change_24h": 74.8027,
						"percent_change_1h": 0.60377542,
						"percent_change_24h": 3.41135312,
						"percent_change_7d": 92.9398402,
						"percent_change_30d": 113.43183278,
						"percent_change_60d": 23.33984054,
						"percent_change_90d": 12.41665143,
						"market_cap": 2076394978.282714,
						"market_cap_dominance": 0.1131,
						"fully_diluted_market_cap": 2076394978.28,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1765,
				"name": "EOS",
				"symbol": "EOS",
				"slug": "eos",
				"cmc_rank": 49,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.103768108860333,
						"volume_24h": 323706243.2102457,
						"volume_change_24h": 13.2921,
						"percent_change_1h": 0.46456728,
						"percent_change_24h": -4.5284872,
						"percent_change_7d": -0.81223465,
						"percent_change_30d": -13.42496989,
						"percent_change_60d": -34.6779902,
						"percent_change_90d": -29.8918024,
						"market_cap": 2065913136.63809,
						"market_cap_dominance": 0.1125,
						"fully_diluted_market_cap": 2205995114.03,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4558,
				"name": "Flow",
				"symbol": "FLOW",
				"slug": "flow",
				"cmc_rank": 50,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 6.119800159035559,
						"volume_24h": 133832168.11772877,
						"volume_change_24h": 47.4835,
						"percent_change_1h": 2.11965266,
						"percent_change_24h": -2.28143743,
						"percent_change_7d": 8.20020193,
						"percent_change_30d": -6.40444918,
						"percent_change_60d": -33.21549174,
						"percent_change_90d": -34.97481216,
						"market_cap": 2030993053.93012,
						"market_cap_dominance": 0.1106,
						"fully_diluted_market_cap": 8434380419.52,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4157,
				"name": "THORChain",
				"symbol": "RUNE",
				"slug": "thorchain",
				"cmc_rank": 51,
				"self_reported_circulating_supply": 224410215,
				"self_reported_market_cap": 1292042104.0708542,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 5.757501297660867,
						"volume_24h": 318963802.2167342,
						"volume_change_24h": 66.0906,
						"percent_change_1h": 2.77062255,
						"percent_change_24h": 3.3181929,
						"percent_change_7d": 59.21022293,
						"percent_change_30d": 36.89030672,
						"percent_change_60d": -21.59586283,
						"percent_change_90d": -27.86572493,
						"market_cap": 1903936942.2540867,
						"market_cap_dominance": 0.1037,
						"fully_diluted_market_cap": 2878750648.83,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1518,
				"name": "Maker",
				"symbol": "MKR",
				"slug": "maker",
				"cmc_rank": 52,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1937.7614404577744,
						"volume_24h": 109066687.84865545,
						"volume_change_24h": 77.0598,
						"percent_change_1h": 0.29059653,
						"percent_change_24h": 0.96714334,
						"percent_change_7d": -0.80060791,
						"percent_change_30d": -15.13283875,
						"percent_change_60d": -23.17022067,
						"percent_change_90d": -22.0141997,
						"market_cap": 1894415726.3981843,
						"market_cap_dominance": 0.1031,
						"fully_diluted_market_cap": 1948568336.01,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3945,
				"name": "Harmony",
				"symbol": "ONE",
				"slug": "harmony",
				"cmc_rank": 53,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.15189347178210902,
						"volume_24h": 157804030.19015872,
						"volume_change_24h": -31.8263,
						"percent_change_1h": 0.86485097,
						"percent_change_24h": -4.42121056,
						"percent_change_7d": 12.36220662,
						"percent_change_30d": -19.90758359,
						"percent_change_60d": -48.24697381,
						"percent_change_90d": -18.9129836,
						"market_cap": 1794027107.4814339,
						"market_cap_dominance": 0.0977,
						"fully_diluted_market_cap": 2031059148.6,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7278,
				"name": "Aave",
				"symbol": "AAVE",
				"slug": "aave",
				"cmc_rank": 54,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 130.45654431699393,
						"volume_24h": 235092167.1746956,
						"volume_change_24h": 6.9836,
						"percent_change_1h": 0.57675591,
						"percent_change_24h": -2.36513433,
						"percent_change_7d": -4.14290173,
						"percent_change_30d": -19.69260518,
						"percent_change_60d": -52.89832759,
						"percent_change_90d": -31.74265834,
						"market_cap": 1778004546.24499,
						"market_cap_dominance": 0.0969,
						"fully_diluted_market_cap": 2087304709.07,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7186,
				"name": "PancakeSwap",
				"symbol": "CAKE",
				"slug": "pancakeswap",
				"cmc_rank": 55,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 6.413371111670229,
						"volume_24h": 119583743.41084889,
						"volume_change_24h": -9.917,
						"percent_change_1h": 0.67728679,
						"percent_change_24h": -5.43002269,
						"percent_change_7d": -1.96619982,
						"percent_change_30d": -16.18468669,
						"percent_change_60d": -48.24563443,
						"percent_change_90d": -42.73433829,
						"market_cap": 1753023819.807014,
						"market_cap_dominance": 0.0954,
						"fully_diluted_market_cap": 1753023819.81,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 16086,
				"name": "BitTorrent (New)",
				"symbol": "BTT",
				"slug": "bittorrent-new",
				"cmc_rank": 56,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.0000018840135456088591,
						"volume_24h": 43494582.90922269,
						"volume_change_24h": -4.8483,
						"percent_change_1h": -0.01932464,
						"percent_change_24h": -2.10914434,
						"percent_change_7d": -0.526233,
						"percent_change_30d": -12.39992067,
						"percent_change_60d": -21.26747154,
						"percent_change_90d": -21.26747154,
						"market_cap": 1740390853.0681286,
						"market_cap_dominance": 0.0948,
						"fully_diluted_market_cap": 1865173410.15,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1437,
				"name": "Zcash",
				"symbol": "ZEC",
				"slug": "zcash",
				"cmc_rank": 57,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 123.69943684252229,
						"volume_24h": 305575049.24542964,
						"volume_change_24h": 16.9778,
						"percent_change_1h": 0.91643991,
						"percent_change_24h": -2.30064773,
						"percent_change_7d": 17.32199918,
						"percent_change_30d": 20.75471849,
						"percent_change_60d": -18.68662637,
						"percent_change_90d": -28.11153742,
						"market_cap": 1716019664.4764102,
						"market_cap_dominance": 0.0935,
						"fully_diluted_market_cap": 2597688173.69,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6719,
				"name": "The Graph",
				"symbol": "GRT",
				"slug": "the-graph",
				"cmc_rank": 58,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.36198112437394736,
						"volume_24h": 79172534.65870029,
						"volume_change_24h": 4.1647,
						"percent_change_1h": 1.20904005,
						"percent_change_24h": -3.02572029,
						"percent_change_7d": 0.91941356,
						"percent_change_30d": -16.72977582,
						"percent_change_60d": -47.22722597,
						"percent_change_90d": -47.92142982,
						"market_cap": 1707007129.9458015,
						"market_cap_dominance": 0.0929,
						"fully_diluted_market_cap": 3640460251.01,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7080,
				"name": "Gala",
				"symbol": "GALA",
				"slug": "gala",
				"cmc_rank": 59,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.2417733727908702,
						"volume_24h": 841256076.8621893,
						"volume_change_24h": -7.3129,
						"percent_change_1h": 1.16364009,
						"percent_change_24h": -5.59873966,
						"percent_change_7d": -3.80244153,
						"percent_change_30d": 19.73210536,
						"percent_change_60d": -46.75283962,
						"percent_change_90d": -44.72026643,
						"market_cap": 1686902490.916514,
						"market_cap_dominance": 0.0918,
						"fully_diluted_market_cap": 8520120854.96,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1376,
				"name": "Neo",
				"symbol": "NEO",
				"slug": "neo",
				"cmc_rank": 60,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 22.96496247064661,
						"volume_24h": 180777769.99973208,
						"volume_change_24h": -32.2182,
						"percent_change_1h": 0.65716403,
						"percent_change_24h": -5.5546656,
						"percent_change_7d": 8.0120817,
						"percent_change_30d": 9.10606143,
						"percent_change_60d": -15.35833067,
						"percent_change_90d": -18.64628594,
						"market_cap": 1619921606.6382837,
						"market_cap_dominance": 0.0882,
						"fully_diluted_market_cap": 2296496247.06,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3602,
				"name": "Bitcoin SV",
				"symbol": "BSV",
				"slug": "bitcoin-sv",
				"cmc_rank": 61,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 84.23357269907572,
						"volume_24h": 162322817.35295382,
						"volume_change_24h": 106.3139,
						"percent_change_1h": 0.41762553,
						"percent_change_24h": -1.84657812,
						"percent_change_7d": -0.03722284,
						"percent_change_30d": -10.25785342,
						"percent_change_60d": -31.81603449,
						"percent_change_90d": -31.45981232,
						"market_cap": 1600030539.8746364,
						"market_cap_dominance": 0.0872,
						"fully_diluted_market_cap": 1768905026.68,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2087,
				"name": "KuCoin Token",
				"symbol": "KCS",
				"slug": "kucoin-token",
				"cmc_rank": 62,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.33779939285852,
						"volume_24h": 12266443.5113243,
						"volume_change_24h": 26.2711,
						"percent_change_1h": 0.66876154,
						"percent_change_24h": -4.52242039,
						"percent_change_7d": 2.93215031,
						"percent_change_30d": 5.51842777,
						"percent_change_60d": -14.72250577,
						"percent_change_90d": -11.42412703,
						"market_cap": 1549318149.2730517,
						"market_cap_dominance": 0.0844,
						"fully_diluted_market_cap": 3289720094.63,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3155,
				"name": "Quant",
				"symbol": "QNT",
				"slug": "quant",
				"cmc_rank": 63,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 126.5213699703419,
						"volume_24h": 85802232.88312079,
						"volume_change_24h": 42.601,
						"percent_change_1h": 0.90047385,
						"percent_change_24h": -0.9131507,
						"percent_change_7d": 15.32134266,
						"percent_change_30d": 7.57490706,
						"percent_change_60d": -32.18763826,
						"percent_change_90d": -22.8555567,
						"market_cap": 1527459351.0530055,
						"market_cap_dominance": 0.0832,
						"fully_diluted_market_cap": 1848792633.04,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4847,
				"name": "Stacks",
				"symbol": "STX",
				"slug": "stacks",
				"cmc_rank": 64,
				"self_reported_circulating_supply": 1048765672.087772,
				"self_reported_market_cap": 1227605529.7027185,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.1705241336312342,
						"volume_24h": 21512489.84191386,
						"volume_change_24h": -17.1264,
						"percent_change_1h": 0.82111863,
						"percent_change_24h": -5.01579777,
						"percent_change_7d": 0.35091902,
						"percent_change_30d": -22.14220251,
						"percent_change_60d": -49.51235201,
						"percent_change_90d": -44.03030969,
						"market_cap": 1523718768.8493834,
						"market_cap_dominance": 0.0829,
						"fully_diluted_market_cap": 2128012874.94,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2502,
				"name": "Huobi Token",
				"symbol": "HT",
				"slug": "huobi-token",
				"cmc_rank": 65,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 9.439216905541217,
						"volume_24h": 39325034.23633487,
						"volume_change_24h": 1.8953,
						"percent_change_1h": 0.54579958,
						"percent_change_24h": -0.63807833,
						"percent_change_7d": 5.08263351,
						"percent_change_30d": 0.94643595,
						"percent_change_60d": 0.40095268,
						"percent_change_90d": 9.65870827,
						"market_cap": 1473689756.2015712,
						"market_cap_dominance": 0.0803,
						"fully_diluted_market_cap": 4719608452.77,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2563,
				"name": "TrueUSD",
				"symbol": "TUSD",
				"slug": "trueusd",
				"cmc_rank": 66,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.0008159278229178,
						"volume_24h": 157879581.42343566,
						"volume_change_24h": 22.366,
						"percent_change_1h": 0.1224541,
						"percent_change_24h": 0.07109063,
						"percent_change_7d": 0.05971562,
						"percent_change_30d": 0.09989357,
						"percent_change_60d": 0.10402418,
						"percent_change_90d": 0.23408025,
						"market_cap": 1439447237.2801974,
						"market_cap_dominance": 0.0784,
						"fully_diluted_market_cap": 1439447237.28,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 10791,
				"name": "eCash",
				"symbol": "XEC",
				"slug": "ecash",
				"cmc_rank": 67,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.0000742589622062666,
						"volume_24h": 17731176.58920722,
						"volume_change_24h": 19.3805,
						"percent_change_1h": 0.79403813,
						"percent_change_24h": -2.68380037,
						"percent_change_7d": -0.98948661,
						"percent_change_30d": -7.24713013,
						"percent_change_60d": -36.8072655,
						"percent_change_90d": -35.31211106,
						"market_cap": 1410542372.3657007,
						"market_cap_dominance": 0.0768,
						"fully_diluted_market_cap": 1559438206.33,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 8857,
				"name": "Anchor Protocol",
				"symbol": "ANC",
				"slug": "anchor-protocol",
				"cmc_rank": 68,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 4.918052312190299,
						"volume_24h": 255634677.88329178,
						"volume_change_24h": -22.8466,
						"percent_change_1h": 1.98274919,
						"percent_change_24h": 4.15014317,
						"percent_change_7d": 46.00228923,
						"percent_change_30d": 221.59880589,
						"percent_change_60d": 40.53154037,
						"percent_change_90d": 42.98657603,
						"market_cap": 1278193772.427724,
						"market_cap_dominance": 0.0696,
						"fully_diluted_market_cap": 4918052312.19,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2130,
				"name": "Enjin Coin",
				"symbol": "ENJ",
				"slug": "enjin-coin",
				"cmc_rank": 69,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.4607342354138877,
						"volume_24h": 136530200.6292801,
						"volume_change_24h": 2.4903,
						"percent_change_1h": 1.29674083,
						"percent_change_24h": -4.88434993,
						"percent_change_7d": 2.42493128,
						"percent_change_30d": -20.78967853,
						"percent_change_60d": -49.49614078,
						"percent_change_90d": -44.37877104,
						"market_cap": 1266521885.0568862,
						"market_cap_dominance": 0.0689,
						"fully_diluted_market_cap": 1460734235.41,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 4066,
				"name": "Chiliz",
				"symbol": "CHZ",
				"slug": "chiliz",
				"cmc_rank": 70,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.2008309905988172,
						"volume_24h": 275772641.31861794,
						"volume_change_24h": 112.1627,
						"percent_change_1h": 0.70010443,
						"percent_change_24h": 3.16837007,
						"percent_change_7d": 17.53400324,
						"percent_change_30d": 4.98579712,
						"percent_change_60d": -35.23436657,
						"percent_change_90d": -36.16458225,
						"market_cap": 1199978784.13748,
						"market_cap_dominance": 0.0653,
						"fully_diluted_market_cap": 1785164360.7,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5647,
				"name": "Kadena",
				"symbol": "KDA",
				"slug": "kadena",
				"cmc_rank": 71,
				"self_reported_circulating_supply": 171287601.11586,
				"self_reported_market_cap": 1199429266.6715784,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 7.002429007457913,
						"volume_24h": 53736310.78364024,
						"volume_change_24h": -0.9042,
						"percent_change_1h": 0.67960341,
						"percent_change_24h": -4.23096313,
						"percent_change_7d": 10.14912695,
						"percent_change_30d": 17.15745438,
						"percent_change_60d": -42.82089217,
						"percent_change_90d": -44.9304653,
						"market_cap": 1199429266.6715784,
						"market_cap_dominance": 0.0653,
						"fully_diluted_market_cap": 7002429007.46,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5567,
				"name": "Celo",
				"symbol": "CELO",
				"slug": "celo",
				"cmc_rank": 72,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.754124386233044,
						"volume_24h": 106117156.53307639,
						"volume_change_24h": 54.245,
						"percent_change_1h": 0.64027722,
						"percent_change_24h": 3.98000453,
						"percent_change_7d": 16.41974919,
						"percent_change_30d": -14.09517401,
						"percent_change_60d": -44.50737736,
						"percent_change_90d": -27.27182164,
						"market_cap": 1177081393.1992438,
						"market_cap_dominance": 0.0641,
						"fully_diluted_market_cap": 2754124386.23,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6945,
				"name": "Amp",
				"symbol": "AMP",
				"slug": "amp",
				"cmc_rank": 73,
				"self_reported_circulating_supply": 36271610691,
				"self_reported_market_cap": 992597320.7958995,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.027365680814450035,
						"volume_24h": 17146174.61688079,
						"volume_change_24h": -26.9683,
						"percent_change_1h": 0.47479405,
						"percent_change_24h": -3.3393852,
						"percent_change_7d": -4.03061154,
						"percent_change_30d": -11.14777573,
						"percent_change_60d": -43.85392779,
						"percent_change_90d": -45.43587483,
						"market_cap": 1155589819.54973,
						"market_cap_dominance": 0.0629,
						"fully_diluted_market_cap": 2532629127.09,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3897,
				"name": "OKB",
				"symbol": "OKB",
				"slug": "okb",
				"cmc_rank": 74,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.0909436534965,
						"volume_24h": 193602177.51753074,
						"volume_change_24h": 23.3548,
						"percent_change_1h": -0.08216217,
						"percent_change_24h": -5.28732692,
						"percent_change_7d": 8.68513872,
						"percent_change_30d": -12.18794115,
						"percent_change_60d": -34.2299903,
						"percent_change_90d": -19.43258557,
						"market_cap": 1145456619.20979,
						"market_cap_dominance": 0.0624,
						"fully_diluted_market_cap": 5727283096.05,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2694,
				"name": "Nexo",
				"symbol": "NEXO",
				"slug": "nexo",
				"cmc_rank": 75,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.9993923693376268,
						"volume_24h": 5874196.05219109,
						"volume_change_24h": -17.5687,
						"percent_change_1h": 0.18897192,
						"percent_change_24h": -2.42226468,
						"percent_change_7d": 0.92206664,
						"percent_change_30d": -0.89444383,
						"percent_change_60d": -24.90922741,
						"percent_change_90d": -11.2635432,
						"market_cap": 1119659748.822387,
						"market_cap_dominance": 0.061,
						"fully_diluted_market_cap": 1999392369.34,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 6538,
				"name": "Curve DAO Token",
				"symbol": "CRV",
				"slug": "curve-dao-token",
				"cmc_rank": 76,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.4580548614899653,
						"volume_24h": 235867434.94455153,
						"volume_change_24h": -17.33,
						"percent_change_1h": 0.5587486,
						"percent_change_24h": -4.47202302,
						"percent_change_7d": 5.69162794,
						"percent_change_30d": -27.11383616,
						"percent_change_60d": -62.64461217,
						"percent_change_90d": -30.29937684,
						"market_cap": 1119065905.3161166,
						"market_cap_dominance": 0.0609,
						"fully_diluted_market_cap": 8119029684.11,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5034,
				"name": "Kusama",
				"symbol": "KSM",
				"slug": "kusama",
				"cmc_rank": 77,
				"self_reported_circulating_supply": 8597992,
				"self_reported_market_cap": 1126521336.8767169,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 131.02144510912743,
						"volume_24h": 55495047.92554092,
						"volume_change_24h": 23.9795,
						"percent_change_1h": 1.11746831,
						"percent_change_24h": -6.76595444,
						"percent_change_7d": 7.69557761,
						"percent_change_30d": -24.9656557,
						"percent_change_60d": -55.38398404,
						"percent_change_90d": -55.22138054,
						"market_cap": 1109764487.6784878,
						"market_cap_dominance": 0.0604,
						"fully_diluted_market_cap": 1264516457.53,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1697,
				"name": "Basic Attention Token",
				"symbol": "BAT",
				"slug": "basic-attention-token",
				"cmc_rank": 78,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.6954738856952452,
						"volume_24h": 102206726.10802062,
						"volume_change_24h": -8.3148,
						"percent_change_1h": 0.90719437,
						"percent_change_24h": -4.25420853,
						"percent_change_7d": 0.43734061,
						"percent_change_30d": -18.93651023,
						"percent_change_60d": -47.27395803,
						"percent_change_90d": -33.04465796,
						"market_cap": 1040481846.3553789,
						"market_cap_dominance": 0.0566,
						"fully_diluted_market_cap": 1043210828.54,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5632,
				"name": "Arweave",
				"symbol": "AR",
				"slug": "arweave",
				"cmc_rank": 79,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 31.12702762604934,
						"volume_24h": 66500659.48762055,
						"volume_change_24h": 42.8377,
						"percent_change_1h": -0.03467642,
						"percent_change_24h": -0.47997095,
						"percent_change_7d": 9.91149767,
						"percent_change_30d": -20.89550311,
						"percent_change_60d": -48.72344951,
						"percent_change_90d": -32.41589233,
						"market_cap": 1039477780.5906576,
						"market_cap_dominance": 0.0566,
						"fully_diluted_market_cap": 2054383823.32,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1934,
				"name": "Loopring",
				"symbol": "LRC",
				"slug": "loopring",
				"cmc_rank": 80,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.7767345860309026,
						"volume_24h": 146191566.66386515,
						"volume_change_24h": -7.3016,
						"percent_change_1h": 1.28203135,
						"percent_change_24h": -3.27615252,
						"percent_change_7d": 1.31892981,
						"percent_change_30d": -17.13957317,
						"percent_change_60d": -62.85485402,
						"percent_change_90d": -61.04460116,
						"market_cap": 1032741693.9040458,
						"market_cap_dominance": 0.0563,
						"fully_diluted_market_cap": 1067632482,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 131,
				"name": "Dash",
				"symbol": "DASH",
				"slug": "dash",
				"cmc_rank": 81,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 95.72766883531096,
						"volume_24h": 181973240.97602502,
						"volume_change_24h": -6.1988,
						"percent_change_1h": 0.87032247,
						"percent_change_24h": -5.9595556,
						"percent_change_7d": 4.82254379,
						"percent_change_30d": -3.20763147,
						"percent_change_60d": -32.4320617,
						"percent_change_90d": -28.9591544,
						"market_cap": 1015634728.4465816,
						"market_cap_dominance": 0.0553,
						"fully_diluted_market_cap": 1809252940.99,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 9903,
				"name": "Convex Finance",
				"symbol": "CVX",
				"slug": "convex-finance",
				"cmc_rank": 82,
				"self_reported_circulating_supply": 2814665,
				"self_reported_market_cap": 53582489.98215383,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 19.036897812760607,
						"volume_24h": 31333279.71258156,
						"volume_change_24h": -60.6776,
						"percent_change_1h": -0.68074738,
						"percent_change_24h": -8.5811695,
						"percent_change_7d": -5.42363118,
						"percent_change_30d": -33.33557907,
						"percent_change_60d": -60.41402901,
						"percent_change_90d": -2.32869429,
						"market_cap": 1003681773.2015926,
						"market_cap_dominance": 0.0547,
						"fully_diluted_market_cap": 1903689781.28,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3330,
				"name": "Pax Dollar",
				"symbol": "USDP",
				"slug": "paxos-standard",
				"cmc_rank": 83,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 1.000716383626937,
						"volume_24h": 30629213.30186414,
						"volume_change_24h": 28.3538,
						"percent_change_1h": 0.26629677,
						"percent_change_24h": 0.05665536,
						"percent_change_7d": -0.2391435,
						"percent_change_30d": 0.37413528,
						"percent_change_60d": 0.07330658,
						"percent_change_90d": 0.22092381,
						"market_cap": 946320383.2292234,
						"market_cap_dominance": 0.0515,
						"fully_diluted_market_cap": 946320383.23,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 873,
				"name": "NEM",
				"symbol": "XEM",
				"slug": "nem",
				"cmc_rank": 84,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.10163446931036318,
						"volume_24h": 21391108.67975874,
						"volume_change_24h": -8.9214,
						"percent_change_1h": 0.52129447,
						"percent_change_24h": -3.73042466,
						"percent_change_7d": 3.6982865,
						"percent_change_30d": -3.49548342,
						"percent_change_60d": -21.44706138,
						"percent_change_90d": -20.87655248,
						"market_cap": 914710223.6916342,
						"market_cap_dominance": 0.0498,
						"fully_diluted_market_cap": 914710223.69,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 7653,
				"name": "Oasis Network",
				"symbol": "ROSE",
				"slug": "oasis-network",
				"cmc_rank": 85,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.24880096333951016,
						"volume_24h": 156338261.9981011,
						"volume_change_24h": -24.5316,
						"percent_change_1h": 0.81861345,
						"percent_change_24h": -5.40075359,
						"percent_change_7d": 10.62383795,
						"percent_change_30d": -28.1353059,
						"percent_change_60d": -42.54423428,
						"percent_change_90d": -5.60732884,
						"market_cap": 869065324.3611548,
						"market_cap_dominance": 0.0473,
						"fully_diluted_market_cap": 2488009633.4,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3822,
				"name": "Theta Fuel",
				"symbol": "TFUEL",
				"slug": "theta-fuel",
				"cmc_rank": 86,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.16341704427468537,
						"volume_24h": 40989875.04708586,
						"volume_change_24h": -50.9176,
						"percent_change_1h": 0.00578615,
						"percent_change_24h": -4.08699863,
						"percent_change_7d": -2.75211766,
						"percent_change_30d": -7.32969603,
						"percent_change_60d": -20.03023369,
						"percent_change_90d": -35.03504438,
						"market_cap": 866308788.3143996,
						"market_cap_dominance": 0.0472,
						"fully_diluted_market_cap": 866308788.31,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1168,
				"name": "Decred",
				"symbol": "DCR",
				"slug": "decred",
				"cmc_rank": 87,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 60.10326549101227,
						"volume_24h": 3232503.19679261,
						"volume_change_24h": -60.7044,
						"percent_change_1h": 0.47438597,
						"percent_change_24h": -1.58449528,
						"percent_change_7d": 9.6916323,
						"percent_change_30d": -6.37936156,
						"percent_change_60d": -18.55449702,
						"percent_change_90d": -31.95625455,
						"market_cap": 830437394.8031638,
						"market_cap_dominance": 0.0452,
						"fully_diluted_market_cap": 1262168575.31,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 8646,
				"name": "Mina",
				"symbol": "MINA",
				"slug": "mina",
				"cmc_rank": 88,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.0672100742839294,
						"volume_24h": 49508259.353761,
						"volume_change_24h": 14.649,
						"percent_change_1h": 1.20908065,
						"percent_change_24h": -1.43079083,
						"percent_change_7d": -0.6513668,
						"percent_change_30d": -20.51099723,
						"percent_change_60d": -42.92763413,
						"percent_change_90d": -43.89298271,
						"market_cap": 814476303.7634352,
						"market_cap_dominance": 0.0444,
						"fully_diluted_market_cap": 1703598100.39,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 8677,
				"name": "Symbol",
				"symbol": "XYM",
				"slug": "symbol",
				"cmc_rank": 89,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.14225494291688479,
						"volume_24h": 4945874.21619968,
						"volume_change_24h": 12.4052,
						"percent_change_1h": 0.19182736,
						"percent_change_24h": -3.0396526,
						"percent_change_7d": -0.3586604,
						"percent_change_30d": -21.42812601,
						"percent_change_60d": -31.46509651,
						"percent_change_90d": -47.06548893,
						"market_cap": 794132529.2842479,
						"market_cap_dominance": 0.0433,
						"fully_diluted_market_cap": 1280294486.11,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5604,
				"name": "Secret",
				"symbol": "SCRT",
				"slug": "secret",
				"cmc_rank": 90,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 4.8427933008825095,
						"volume_24h": 32054363.21145135,
						"volume_change_24h": 1.2456,
						"percent_change_1h": 0.38614442,
						"percent_change_24h": -2.98875305,
						"percent_change_7d": -6.13863568,
						"percent_change_30d": -12.28843487,
						"percent_change_60d": -24.60730024,
						"percent_change_90d": 3.67212024,
						"market_cap": 790806629.5034779,
						"market_cap_dominance": 0.0431,
						"fully_diluted_market_cap": 920930078.63,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5864,
				"name": "yearn.finance",
				"symbol": "YFI",
				"slug": "yearn-finance",
				"cmc_rank": 91,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 21262.992487409036,
						"volume_24h": 136570006.36692017,
						"volume_change_24h": -14.0513,
						"percent_change_1h": 0.54710499,
						"percent_change_24h": -2.13317283,
						"percent_change_7d": 7.50891395,
						"percent_change_30d": -14.07454464,
						"percent_change_60d": -47.3710989,
						"percent_change_90d": -8.72291394,
						"market_cap": 779027591.1816729,
						"market_cap_dominance": 0.0424,
						"fully_diluted_market_cap": 779628882.54,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 3801,
				"name": "BORA",
				"symbol": "BORA",
				"slug": "bora",
				"cmc_rank": 92,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.8926750186548753,
						"volume_24h": 37579681.52958227,
						"volume_change_24h": 0.2591,
						"percent_change_1h": 0.46105518,
						"percent_change_24h": -3.70647475,
						"percent_change_7d": -8.20578636,
						"percent_change_30d": -16.11777294,
						"percent_change_60d": -21.69273287,
						"percent_change_90d": 0.93001142,
						"market_cap": 768816359.8165114,
						"market_cap_dominance": 0.0419,
						"fully_diluted_market_cap": 1076342903.74,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5692,
				"name": "Compound",
				"symbol": "COMP",
				"slug": "compound",
				"cmc_rank": 93,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 115.35670946707475,
						"volume_24h": 63867857.9966061,
						"volume_change_24h": 1.7136,
						"percent_change_1h": 0.43881993,
						"percent_change_24h": -5.37449756,
						"percent_change_7d": 2.21723419,
						"percent_change_30d": -11.64463503,
						"percent_change_60d": -48.03417973,
						"percent_change_90d": -47.1468307,
						"market_cap": 761841065.9480952,
						"market_cap_dominance": 0.0415,
						"fully_diluted_market_cap": 1153567094.67,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2682,
				"name": "Holo",
				"symbol": "HOT",
				"slug": "holo",
				"cmc_rank": 94,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.004331513357785707,
						"volume_24h": 54042822.17718336,
						"volume_change_24h": 9.8637,
						"percent_change_1h": 0.48305229,
						"percent_change_24h": -3.11572729,
						"percent_change_7d": 1.35515245,
						"percent_change_30d": -5.24336525,
						"percent_change_60d": -41.7523485,
						"percent_change_90d": -51.34702835,
						"market_cap": 750481663.9436278,
						"market_cap_dominance": 0.0409,
						"fully_diluted_market_cap": 769360948.99,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2777,
				"name": "IoTeX",
				"symbol": "IOTX",
				"slug": "iotex",
				"cmc_rank": 95,
				"self_reported_circulating_supply": 6116124331.505642,
				"self_reported_market_cap": 461879089.1396154,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.07551826354483411,
						"volume_24h": 30072382.12869509,
						"volume_change_24h": -5.8473,
						"percent_change_1h": 0.60437338,
						"percent_change_24h": -3.95347871,
						"percent_change_7d": 2.469531,
						"percent_change_30d": -3.48523357,
						"percent_change_60d": -40.73402597,
						"percent_change_90d": -36.72493977,
						"market_cap": 720503087.4361868,
						"market_cap_dominance": 0.0392,
						"fully_diluted_market_cap": 755182635.45,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2700,
				"name": "Celsius",
				"symbol": "CEL",
				"slug": "celsius",
				"cmc_rank": 96,
				"self_reported_circulating_supply": 510732063,
				"self_reported_market_cap": 1518776226.009448,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 2.9737240640195486,
						"volume_24h": 3399121.1118704,
						"volume_change_24h": 36.5474,
						"percent_change_1h": 0.40648466,
						"percent_change_24h": -5.59355151,
						"percent_change_7d": -5.55809927,
						"percent_change_30d": 15.56271099,
						"percent_change_60d": -28.8114063,
						"percent_change_90d": -20.59076208,
						"market_cap": 710314196.9229867,
						"market_cap_dominance": 0.0387,
						"fully_diluted_market_cap": 2068695410.72,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5617,
				"name": "UMA",
				"symbol": "UMA",
				"slug": "uma",
				"cmc_rank": 97,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 10.05795584060952,
						"volume_24h": 792040210.2605536,
						"volume_change_24h": 114.2102,
						"percent_change_1h": -1.39870045,
						"percent_change_24h": -1.43854021,
						"percent_change_7d": 104.60544487,
						"percent_change_30d": 69.22444322,
						"percent_change_60d": 6.69024442,
						"percent_change_90d": -2.27724497,
						"market_cap": 657472250.7886484,
						"market_cap_dominance": 0.0358,
						"fully_diluted_market_cap": 1017589241.34,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 1684,
				"name": "Qtum",
				"symbol": "QTUM",
				"slug": "qtum",
				"cmc_rank": 98,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 6.314139412600731,
						"volume_24h": 109578136.81564814,
						"volume_change_24h": -10.3555,
						"percent_change_1h": 0.96758383,
						"percent_change_24h": -4.48741576,
						"percent_change_7d": 3.96174393,
						"percent_change_30d": -2.52554451,
						"percent_change_60d": -33.01830545,
						"percent_change_90d": -40.52026262,
						"market_cap": 625310190.4000545,
						"market_cap_dominance": 0.034,
						"fully_diluted_market_cap": 680805703.29,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 2634,
				"name": "XDC Network",
				"symbol": "XDC",
				"slug": "xinfin",
				"cmc_rank": 99,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 0.050532347658692155,
						"volume_24h": 9441570.84052003,
						"volume_change_24h": 30.1847,
						"percent_change_1h": 0.40508407,
						"percent_change_24h": -3.72538408,
						"percent_change_7d": -0.35532657,
						"percent_change_30d": -14.1751322,
						"percent_change_60d": -49.47510676,
						"percent_change_90d": -31.96044108,
						"market_cap": 621801179.6378568,
						"market_cap_dominance": 0.0338,
						"fully_diluted_market_cap": 1905322810.17,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			},
			{
				"id": 5777,
				"name": "renBTC",
				"symbol": "RENBTC",
				"slug": "renbtc",
				"cmc_rank": 100,
				"self_reported_circulating_supply": null,
				"self_reported_market_cap": null,
				"last_updated": "2022-03-04T13:35:00.000Z",
				"quote": {
					"USD": {
						"price": 41288.29961520607,
						"volume_24h": 14088831.60082605,
						"volume_change_24h": -76.2144,
						"percent_change_1h": 0.30592209,
						"percent_change_24h": -4.91649154,
						"percent_change_7d": 4.98648511,
						"percent_change_30d": 6.51464079,
						"percent_change_60d": -12.58762066,
						"percent_change_90d": -12.22501317,
						"market_cap": 609875051.4342724,
						"market_cap_dominance": 0.0332,
						"fully_diluted_market_cap": 565567128.13,
						"last_updated": "2022-03-04T13:35:00.000Z"
					}
				}
			}
		],
		interval: null,
    },
    getters: {
        getUser(state) {
            return state.user
        },
		getCrypto(state) {
			return state.crypto.splice(0,6)
		},
		getCryptoFull(state) {
			return state.crypto
		}
    },
    mutations: {
        changeUser(state, payload) {
            return state.user = payload
        },
		changeCrypto(state, payload) {
			return state.crypto = payload
		}
    },
    actions: {
		loadCrypto({commit}) {
			axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?aux=cmc_rank&CMC_PRO_API_KEY=a9999373-7a7b-4b87-b878-e57911fcfb8a', {
				headers: {}
			})
				.then(resp => {
					commit('changeCrypto', resp.data.data)
				})
				.catch(e => {
					console.log(e)
				})
		}
	}
})

export default store
