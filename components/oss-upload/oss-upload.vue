<template>
	<u-upload :action="action" max-count="1" :before-upload="beforeUpload" :show-progress="false" :form-data="formData"
		:multiple="false" width="140" height="140" @on-success="upSuccess">
	</u-upload>
</template>

<script>
	let _this = {}
	export default {
		name: "oss-upload",
		data() {
			return {
				action: "http://www.example.com",
				formData: {},
				upFileName: ""
			};
		},
		created() {
			// wx小程序中this会在上传前钩子内丢失
			_this = this
		},
		methods: {
			// 上传前的钩子
			async beforeUpload(index, list) {
				// 设置唯一文件名
				const {
					file
				} = list[0]
				// #ifdef H5
				const fileName = file.name
				//  #endif
				// 小程序拿的是path
				// #ifndef H5
				const fileName = file.path
				//  #endif
				const suffix = fileName.slice(fileName.lastIndexOf("."))
				const upFileName = _this.$u.guid(20) + suffix
				_this.upFileName = upFileName
				// 请求获取oss-token的api
				const oss = await _this.$u.api.authOss()
				// 参数准备
				_this.action = oss.host
				// 额外的上传参数
				_this.formData = {
					'key': upFileName,
					'policy': oss.policy,
					'OSSAccessKeyId': oss.accessid,
					'success_action_status': '200', //让服务端返回200,不然，默认会返回204
					'signature': oss.signature,
				}
				return true
			},

			// 上传成功后发射事件给父组件 (带图片key参数)
			async upSuccess() {
				this.$emit("upSuccess", this.upFileName)
			}
		},

	}
</script>

<style lang="scss">

</style>
