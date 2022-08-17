const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api.shop.eduwork.cn', // 请求的本域名
		// method: 'POST',
		dataType: 'json',
		showLoading: true, // 是否显示请求中的loading
		loadingText: '请求中...', // 请求loading中的文字提示
		loadingTime: 80000, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
	});

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 将vuex内的token注入请求头
		// config.header.Authorization =
		// 	`Bearer ${vm.vuex_token}`
		return config;

	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		const {
			statusCode,
			data
		} = res
		if (statusCode < 400) {
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return data;
		} else if (statusCode == 400) {
			// 错误的请求
			vm.$u.toast(data.message);
			return false;
		} else if (statusCode == 401) {
			// 密码错误情况
			if (data.message == "Unauthorized") {
				vm.$u.toast('密码错误');
			} else {
				// token过期，未登录权限
				vm.$u.utils.isLogin()
			}
			return false;
		} else if (statusCode == 422) {
			// 参数没有填写
			vm.$u.toast(Object.values(data.errors)[0][0]);
			return false;
		} else {
			vm.$u.toast("请求超时")
			return false;
		}
	}

	// 增加patch请求
	// vm.$u.patch = (url, params = {}, header = {}) => {
	// 	// 模拟patch请求
	// 	const _params = {
	// 		...params,
	// 		_method: 'PATCH'
	// 	}
	// 	return vm.$u.post(url, _params, header)
	// }
}

export default {
	install
}
