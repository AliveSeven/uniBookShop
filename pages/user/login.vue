<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<!-- 标题 -->
			<view class="title">欢迎登入图书商城</view>
			<view class=" u-m-b-40">
				<input class="u-border-bottom" v-model="email" placeholder="请输入邮箱" confirm-type="next"
					@confirm="nextFocus" />
				<view class="tips" v-show="isShowTip">请输入正确的邮箱号</view>
			</view>
			<input class="u-border-bottom u-m-b-40" type="password" v-model="password" placeholder="请输入密码"
				:focus="isFocus" confirm-type="done" @confirm="submit" />
			<button :loading="submitBtn" :disabled="submitBtn" @click="submit" :style="[inputStyle]"
				class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="issue" @tap="jump('pages/user/register')">注册</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				email: '', // 邮件
				password: '', // 密码
				isShowTip: false, // 提示
				submitBtn: false, // 提交按钮
				// 密码框聚焦
				isFocus: false
			}
		},
		// 带参加载
		onLoad({
			email,
			password
		}) {
			this.email = email
			this.password = password
		},
		// computed是vue的计算属性，是根据依赖关系进行缓存的计算，只有在它的相关依赖发生改变时才会进行更新
		computed: {
			inputStyle() {
				let style = {};
				if (this.email) {
					this.isShowTip = true
				}
				// this.$u.test.email用来调试是否符合邮箱格式，是则返回true，不是则返回false
				if (this.$u.test.email(this.email)) {
					this.isShowTip = false
				}
				if (this.$u.test.email(this.email) && this.password) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['primary'];
				}
				return style;
			}
		},
		methods: {
			async login() {
				this.submitBtn = true
				// 处理登录参数
				try {
					const params = {
						email: this.email,
						password: this.password
					}
					const loginRes = await this.$u.api.authLogin(params)
					this.submitBtn = false
					// 缓存token
					this.$u.vuex('vuex_token', loginRes.access_token)
					// 更新用户信息
					this.$u.utils.setUserInfo()
					// 登录成功提示
					uni.showToast({
						title: '登录成功'
					})
					setTimeout(() => {
						// 回溯跳转，用getStorageSync是同步操作
						const url = uni.getStorageSync("currentRoute") || "/pages/index/index"
						this.$u.route({
							type: "reLaunch",
							url
						})
					})

				} catch (e) {
					//TODO handle the exception
					this.submitBtn = false
				}
			},
			nextFocus() {
				// 当邮箱格式正确按回车跳转密码框
				if (this.$u.test.email(this.email)) {
					this.$nextTick(() => {
						this.isFocus = true
					})
				} else {
					this.isShowTip = true
				}
			},
			submit() {
				// 点击登录
				if (this.$u.test.email(this.email) && this.password) {
					this.login()
				} else {
					return false
				}
			},
			jump(path) {
				// 页面的跳转
				this.$u.route(path)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		font-size: 28rpx;
		overflow: hidden;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				font-size: 20rpx;
				color: $u-type-error;
				margin-top: 4rpx;
			}

			.getCaptcha {
				background-color: #a2b8ff;
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 0 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
