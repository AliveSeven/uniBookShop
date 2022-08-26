<template>
	<view>
		<!-- 第一个盒子块 -->
		<view class="user-box u-flex u-p-30">
			<!-- 头像，点击预览 -->
			<view class="u-m-r-10 avatar" @tap="previewImage">
				<u-avatar :src="vuex_user.avatar_url" size="140"></u-avatar>
			</view>
			<view class="u-flex-1" v-if="Object.keys(userInfo).length">
				<!-- 用户名 -->
				<view class="u-font-18 u-p-b-20">{{userInfo.name}}</view>
				<!-- 用户信息 -->
				<view class="u-font-14 u-tips-color">
					<text>邮箱: {{userInfo.email}}</text>
					<br>
					<text class="small">创建日期:{{userInfo.created_at}}</text>
				</view>
			</view>
			<!-- 未登录信息 -->
			<view class="u-flex-1" v-else @tap="$u.utils.isLogin()">
				<view class="u-font-18 u-p-b-20">未登录</view>
			</view>
		</view>
		<!-- 第二个盒子块，cell单元格，修改信息 -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="account" title="修改信息" @tap="updateMsg"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- 第三个盒子块，商品收藏 -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="商品收藏" @tap="showCollect"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- 退出登录选项 -->
		<view class="u-m-t-20" v-if="Object.keys(userInfo).length">
			<u-button type="error" :ripple="true" @click="showLoginout">退出登录</u-button>
		</view>
		<!-- 退出登录模态框 -->
		<u-modal v-model="isShowLoginout" content="确定退出登录吗？" :show-cancel-button="true" @confirm="loginOut"
			@cancel="showLoginout"></u-modal>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowLoginout: false,
				userInfo: {}
			}
		},
		onLoad() {
			// 如果已经登录，拿取信息
			this.userInfo = this.vuex_user
		},
		methods: {
			// 图像预览
			previewImage() {
				uni.previewImage({
					urls: [this.userInfo.avatar_url]
				})
			},
			// 页面跳转
			jump(path) {
				this.$u.route(path)
			},
			// 点击修改信息
			updateMsg() {
				if (!this.$u.utils.isLogin()) {} // 如果没有登录先去登录
				else {
					this.jump('/pages/center/baseInfo')
				}
			},
			// 点击查看收藏
			showCollect() {
				if (!this.$u.utils.isLogin()) {} // 如果没有登录先去登录
				else {
					this.jump('pages/center/collectGoods')
				}
			},
			// 出现模态框
			showLoginout() {
				this.isShowLoginout = !this.isShowLoginout
			},
			// 确定退出登录
			async loginOut() {
				// 请求api
				await this.$u.api.authLoginOut()

				uni.showToast({
					title: "退出成功！"
				})
				setTimeout(() => {
					// 清除缓存token和用户信息
					this.$u.vuex("vuex_token", null)
					this.$u.vuex("vuex_user", {})

					// 跳转首页
					this.$u.route({
						type: "reLaunch",
						url: "pages/index/index"
					})
				}, 1500)

			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #ededed;
	}

	.avatar {}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
