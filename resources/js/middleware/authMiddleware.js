import axios from 'axios'
import moment from 'moment'
export default {
	getUser({store, next}) {
		if (localStorage.getItem('token')) {
			axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`}
			axios.get('/auth/user')
				.then(resp => {
					store.commit('changeUser', resp.data.data)
				})
				.catch(e => console.log(e))
		}
		return next()
	},
	isGuest({store, next}) {
		if (store.getters.getUser) {
			return next('/')
		}
		return next()
	},
	isAuth({store, next}) {
		if (store.getters.getUser) {
			return next()
		}
		if (localStorage.getItem('token')) {
			console.log(123)
			axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`}
			axios.get('/auth/user')
				.then(resp => {
					store.commit('changeUser', resp.data.data)
					return next()
				})
				.catch(e => {
					console.log(e)
					return next('/login')
				})
		}
	},
}
