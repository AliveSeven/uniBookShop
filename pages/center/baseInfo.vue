<template>
	<!-- 修改信息页面 -->
	<view class="u-p-l-20">
		<!-- 在表单组中，通过model参数绑定一个对象，这个对象的属性为各个u-form-item内组件的对应变量 -->
		<!-- 由于表单验证和绑定表单规则时，需要通过ref操作，故这里需要给form组件声明ref="uForm"属性 -->
		<u-form :model="form" ref="uForm">
			<u-form-item label="昵称">
				<u-input v-model="form.name" placeholder="请输入昵称" />
			</u-form-item>
			<u-form-item label="修改头像">
				<oss-upload @upSuccess="upSuccess"></oss-upload>
			</u-form-item>
		</u-form>
		<!-- 提交修改申请按钮 -->
		<view class="u-flex u-m-t-20">
			<u-button @click="submit" :ripple="true" type="primary" shape="square" size="medium">提交</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		onReady() {
			// 拿到用户vuex的信息
			this.form.name = this.vuex_user.name
		},

		data() {
			return {
				form: {
					name: '',
					avatar: ''
				}
			}
		},
		methods: {
			//节流：规定时间内，只触发一次，可以通过设置immediate来决定触发的时机在这个时间的开始，还是结束的时候执行
			submit() {
				// 此处用法为在js中调用，需要写this.$u.throttle()
				this.$u.throttle(this.submitNo(), 3000)
			},
			// 拿到子组件上传图片成功事件
			upSuccess(data) {
				// 图片上传成功后 保存图片key
				this.form.avatar = data
			},
			// 提交
			async submitNo() {
				// 更新昵称
				if (this.form.name) {
					// 准备参数
					const params = {
						name: this.form.name
					}
					// 调用更新用户信息接口
					await this.$u.api.setUserInfo(params)

					// 更新用户信息
					this.$u.utils.setUserInfo()
					this.$u.toast("更新信息成功")
				}
				// 更新头像
				if (this.form.avatar) {
					const params = {
						avatar: this.form.avatar
					}
					// 发送更改头像请求
					await this.$u.api.authAvatar(params)
					// 更新缓存数据
					this.$u.utils.setUserInfo()
				}
			}
		}
	}
</script>

<style>

</style>
