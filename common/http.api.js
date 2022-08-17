// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
const install = (Vue, vm) => {
	vm.$u.api = {}
	// 首页
	vm.$u.api.getIndex = (params = {}) => vm.$u.get('/api/index', params); //获取首页数据

	// 商品
	vm.$u.api.getGoodsList = (params = {}) => vm.$u.get(`/api/goods`, params); //商品列表
	vm.$u.api.getGoodsDetail = id => vm.$u.get(`/api/goods/${id}`); //商品详情
	vm.$u.api.getCollect = (page = 1) => vm.$u.get('/api/collects', {
		page
	}) //获取收藏商品
	vm.$u.api.isCollect = id => vm.$u.post(`/api/collects/goods/${id}`); //商品收藏或取消

	// 购物车相关
	vm.$u.api.addCart = params => vm.$u.post(`/api/carts`, params); //添加购物车
	vm.$u.api.cartGoods = () => vm.$u.get(`/api/carts?include=goods`); //购物车列表
	vm.$u.api.numChange = (cart, num) => vm.$u.put(`/api/carts/${cart}`, {
		num
	}); //购物车商品数量改变
	vm.$u.api.delCartGoods = cart => vm.$u.delete(`/api/carts/${cart}`); //将商品移出购物车
	vm.$u.api.isCheck = cart_ids => vm.$u.patch(`/api/carts/checked`, {
		cart_ids
	}); //将商品选中与否

	// 个人中心
	vm.$u.api.getUserInfo = () => vm.$u.get('/api/user') //获取用户信息
	vm.$u.api.setUserInfo = params => vm.$u.put('/api/user', params) //更新用户信息

	// 认证相关的
	vm.$u.api.authLogin = params => vm.$u.post('/api/auth/login', params) //登录
	vm.$u.api.authLoginOut = () => vm.$u.post('/api/auth/logout') //退出登录
	vm.$u.api.authRegister = params => vm.$u.post('/api/auth/register', params) //注册
	vm.$u.api.authOss = () => vm.$u.get('/api/auth/oss/token') //获取oss
	vm.$u.api.authAvatar = params => vm.$u.patch('/api/user/avatar', params) //用户更改头像
	// 订单相关的


	// 后端

	vm.$u.api.addGoods1 = (id, params) => vm.$u.put(`/api/admin/goods/${id}`, params) //xiugai商品
	vm.$u.api.addGoods2 = () => vm.$u.get(`/api/admin/goods`) //商品列表
	vm.$u.api.addGoods3 = id => vm.$u.patch(`/api/admin/goods`, id) //上架列表

	vm.$u.api.getBanner = () => vm.$u.get(`/api/admin/slides`) //获取轮播
	vm.$u.api.setBanner = (slide, params) => vm.$u.put(`/api/admin/slides/${slide}`, params) //修改轮播
	vm.$u.api.sortBanner = (slide, seq) => vm.$u.patch(`/api/admin/slides/${slide}/seq`, {
		seq
	}) //修改轮播
}

export default {
	install
}
