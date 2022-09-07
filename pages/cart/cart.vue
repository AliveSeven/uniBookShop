<template>
	<view class="wrap">
		<!-- 如果登录了 -->
		<template v-if="vuex_token">
			<!-- 如果购物车有点东西的话，将其显示出来 -->
			<view v-if="goodsList.length" class="cartGoodsList u-p-b-80">
				<view class="cartGoods u-flex u-p-15" v-for="goods in goodsList" :key="goods.id">
					<view>
						<!-- checkbox复选框 -->
						<u-checkbox v-model="goods.is_checked ? true : false" :name="goods.id" @change="checkChange"
							size="40" shape="circle"></u-checkbox>
					</view>
					<!-- 点击商品跳转到商品详细 -->
					<view class="goodsInfo u-flex u-p-10">
						<view @tap='jump(`/pages/goods/goods-detail/goods-detail`,goods.goods_id)'>
							<!-- 商品封面 -->
							<u-image border-radius="15" width="200rpx" height="200rpx" :src="goods.goods.cover_url">
							</u-image>
						</view>
						<view class="goodsBaseInfo u-flex u-row-between u-col-top u-p-10">
							<view class="priceNum" @tap='jump(`/pages/goods/goods-detail/goods-detail`,goods.goods_id)'>
								<text class="title u-p-l-10 u-font-32">{{goods.goods.title}}</text>
								<br>
								<text class="small">{{goods.goods.description}}</text>
								<view class="u-text-right small">
									库存:<text style="color:red">{{goods.goods.stock}}</text>
								</view>
							</view>
							<view class="priceNum u-flex u-row-between">
								<text class="price u-font-34">￥{{goods.goods.price}}</text>
								<u-number-box v-model="goods.num" :min="1" :max="goods.goods.stock" :index="goods.id"
									@change="numChange"></u-number-box>
								<u-icon @tap="removeGoods(goods.id)" name="trash" color="#e83333" size="36">
								</u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 购物车没有东西 -->
			<view class="empty" v-else>
				<u-empty text="购物车空空如也" mode="car"></u-empty>
			</view>
			<view class="bottomFixed u-flex u-p-15">
				<view class="u-flex-5">
					<u-checkbox v-model="allCheck" size="40" shape="circle">全选</u-checkbox>
				</view>
				<view class="u-flex u-flex-7 u-row-around">
					<view>
						<text class="title">合计:</text>
						<text class="price">￥{{totalPrice}}</text>
					</view>
					<u-button type="primary" :ripple="true" shape="square" disabled>去结算</u-button>
				</view>
			</view>
		</template>
		<!-- 如果没登陆，会提示要登录 -->
		<template v-else>
			<u-empty text="暂未登入" mode="permission"></u-empty>
		</template>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				goodsList: [],
			};
		},
		// 后台进入前台调用
		onShow() {
			if (this.vuex_token) {
				this.getCartGoods()
			}
		},
		// 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
		computed: {
			// 全选和全不选判断
			allCheck: {
				get() {
					return this.goodsList.every((goods) => {
						return goods.is_checked
					})
				},
				set(val) {
					this.checkApi(val)
				}
			},
			// 选中商品的总价
			totalPrice() {
				return this.goodsList.filter((goods) => { //过滤掉没有选中商品
					if (goods.is_checked) {
						return true
					}
				}).reduce((pre, goods) => { //价格累加
					return parseInt(pre) + parseInt(goods.goods.price) * goods.num //乘商品数量
				}, 0)
			}
		},
		methods: {
			// 商品详情跳转
			jump(url, id) {
				this.$u.route({
					url,
					params: {
						id
					}
				})
			},
			// 获取购物车里面的商品
			async getCartGoods() {
				const {
					data
				} = await this.$u.api.cartGoods()
				this.goodList = data
			},
			// 商品数量改变
			async numChange(val) {
				// 通过设置index获取（购物车商品的id）既val中第二参数
				const {
					value,
					index
				} = val
				await this.$u.api.numChange(index, String(value))
			},
			// 移出购物车
			async removeGoods(id) {
				// delCartGoods
				await this.$u.api.delCartGoods(id)
				// 删除商品后进行提示   再次调用获取商品列表
				this.$u.toast("移出购物车成功")
				// 再次调用方法重新获取购物车商品
				this.getCartGoods()
			},
			// 单个商品是否选中
			async checkChange(val) {
				const {
					value,
					name
				} = val
				let idArr = [];
				// 先把已经选中的商品id存入idArr内
				this.goodsList.forEach((goods) => {
					if (goods.is_checked) {
						idArr.push(goods.id)
					}
				})
				if (!value) {
					// 选中状态，点击后变成false
					// splice是删除操作，arr.splice(起始索引index, 删除的个数, 新增元素1, 新增元素2...)
					idArr.splice(idArr.indexOf(name), 1)
					await this.$u.api.isCheck(idArr)
				} else {
					//没选中中状态，点击后变成true
					idArr.push(name)
					await this.$u.api.isCheck(idArr)
				}
				// 最后重新调用获取商品数据更新
				this.getCartGoods()
			},
			// 全选与全不选接口调用
			async checkApi(val) {
				// 准备获取各个购物车id参数
				let idArr = []
				if (!val) {
					// 全选点击（变全不选）
					idArr = []
					await this.$u.api.isCheck(idArr)
				} else {
					// 全不选选点击（变全选）
					this.goodsList.forEach((goods) => {
						idArr.push(goods.id)
					})
					await this.$u.api.isCheck(idArr)
				}
				// 最后重新调用获取商品数据更新
				this.getCartGoods()
			},

		}

	}
</script>

<style lang="scss">
	.wrap {
		min-height: 80vh;

		.empty {
			height: 80vh;
		}

		.loading {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.title,
		.price {
			font-weight: 800;
		}

		.price {
			color: #e83333;
		}

		.cartGoodsList {
			.cartGoods {
				.goodsInfo {
					width: 100%;
					background-color: rgb(251, 250, 251);

					.goodsBaseInfo {
						width: 100%;
						height: 200rpx;
						flex-direction: column;

						.priceNum {
							width: 100%;

						}
					}
				}
			}
		}

		.bottomFixed {
			position: fixed;
			left: 0;
			right: 0;
			background-color: #fff;
		}

		/*#ifdef H5*/
		.bottomFixed {
			bottom: 100rpx;
		}

		/*#endif*/
		/*#ifdef MP-WEIXIN*/
		.bottomFixed {
			bottom: 0;
			z-index: 99999;
		}

		/*#endif*/

	}
</style>
