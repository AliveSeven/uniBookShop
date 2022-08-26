const install = (Vue, vm) => {

	// 是否登录
	const isLogin = () => {
		const token = vm.vuex_token
		// 没有token，跳转登录页面
		if (!token) {
			// 回源跳转，拿到当前页
			let currentRoute;
			if (getCurrentPages().pop().goodsId) {
				// 如果url带参数，加上参数
				currentRoute = `/${getCurrentPages().pop().route}?id=${getCurrentPages().pop().goodsId}`
			} else {
				currentRoute = `/${getCurrentPages().pop().route}`
			}
			uni.setStorageSync("currentRoute", currentRoute)
			// 请求登录页面
			uni.showToast({
				title: "请先登入",
				icon: "error",
				mask: true
			})
			// 1.5秒后跳转到登陆页面
			setTimeout(() => {
				// 跳转登录页
				vm.$u.route({
					url: '/pages/user/login'
				})
			}, 1500)
			return false
		}
		return true
	}

	// 更新用户信息
	const setUserInfo = async () => {
		// 更新vuex用户信息
		const userInfo = await vm.$u.api.getUserInfo()
		vm.$u.vuex('vuex_user', userInfo)
	}

	vm.$u.utils = {
		isLogin,
		setUserInfo
	}
}

export default {
	install
}
