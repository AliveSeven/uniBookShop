<template>
	<view class="wrap u-rela">
		<template v-if="Object.keys(goods).length">
			<!-- 商品信息展示 -->
			<view class="goods-show">
				<!-- 商品图片 -->
				<view class="u-text-center">
					<image mode="heightFix" :src="goods.cover_url"></image>
				</view>
				<!-- 商品基本信息 -->
				<view class="u-p-20">
					<view class="base-info">
						<!-- 商品，书名 -->
						<text class="title u-font-40">{{goods.title}}</text>
						<!-- 其他信息，价格、库存、销量 -->
						<view class="u-flex u-row-between u-m-t-20 u-m-b-20">
							<text class="price u-font-32">￥{{goods.price}}</text>
							<text class="small">库存:{{goods.stock}}</text>
							<text class="small">销量:{{goods.sales}}</text>
						</view>
					</view>
					<!-- 标签盒子 -->
					<view class="u-text-center u-m-t-20">
						<!-- 标签tabs -->
						<u-tabs :gutter="40" :item-width="200" :bar-height="12" :list="tabsList" :current="tabsCurrent"
							@change="tabsChange"></u-tabs>
					</view>
					<view class="u-p-b-80">
						<!-- 商品详情区 -->
						<template v-if="tabsCurrent === 0">
							<!-- u-prase富文本解析 -->
							<u-parse :html="goods.details"></u-parse>
						</template>
						<!-- 商品评论区 -->
						<template v-if="tabsCurrent===1">
							<template v-if="goods.comments.length">
								<view class="comment" v-for="(item, index) in commentList" :key="index">
									<view class="left">
										<image :src="item.user.avatar_url" mode="aspectFill"></image>
									</view>
									<view class="right">
										<view class="top">
											<view class="name">{{ item.user.name }}</view>
											<view class="like" :class="{ highlight: item.isLike }">
												<view class="num">{{ item.star }}</view>
												<u-icon v-if="!item.isLike" name="thumb-up" :size="30" color="#9a9a9a">
												</u-icon>
											</view>
										</view>
										<view class="content">{{ item.content }}</view>
										<view class="reply-box">
											<view class="text">{{ item.reply }}</view>
										</view>
										<view class="bottom">
											{{ item.created_at }}
										</view>
									</view>
								</view>
							</template>
							<!-- 评论为空 -->
							<template v-else>
								<u-empty text="暂无评论" src="order"></u-empty>
							</template>
						</template>
						<!-- 商品推荐区 -->
						<template v-if="tabsCurrent===2">
							<u-row gutter="16">
								<u-col span="6" v-for="(item,index) in likeGoods" :key="index">
									<navigator class="goods-item u-p-20 u-m-10"
										:url="`/pages/goods/goods-detail/goods-detail?id=${item.id}`">
										<!-- 封面，图片 -->
										<u-image class="u-skeleton-rect" width="100%" height="300rpx"
											:src="item.cover_url">
										</u-image>
										<!-- 书名 -->
										<view
											class="u-flex u-row-between goods-title u-line-1 u-font-30 u-m-t-10 u-m-b-10">
											{{item.title}}
										</view>
										<!-- 已售数量和价格 -->
										<view class="u-flex u-row-between">
											<text class="goods-price u-skeleton-rect">￥{{item.price}}</text>
										</view>
										<view class="goods-sales u-skeleton-rect u-text-right">
											<view>已售:{{item.sales}}</view>
										</view>
									</navigator>
								</u-col>
							</u-row>
						</template>
					</view>
				</view>
			</view>
			<!-- 提交订单栏 -->
			<view class="navigation">
				<view class="left">
					<view class="item" @tap="collect">
						<u-icon v-if="!collectNum" name="heart" :size="40" :color="$u.color['contentColor']"></u-icon>
						<u-icon v-else name="heart-fill" :size="40" color="#2979ff"></u-icon>
						<view class="text u-line-1">{{collectNum?"已收藏":"收藏"}}</view>
					</view>
					<view class="item" @tap="toCart">
						<u-badge :count="cartNum" bgColor="#2979ff" :is-center="true"></u-badge>
						<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">购物车</view>
					</view>
				</view>
				<view class="right">
					<u-button :disabled="goods.stock?false:true" class="cart btn" @click="addCart" :ripple="true"
						type="primary">加入购物车</u-button>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="loading">
				<u-loading size="40" color="#2979ff"></u-loading>
				<view>
					<text class="small">拼命加载中~</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 商品基本信息
				goods: {},
				// 推荐商品
				likeGoods: {},
				// 标签切换列表
				tabsList: [{
					name: "商品详情"
				}, {
					name: "商品评论",
					count: 0
				}, {
					name: "推荐商品"
				}],
				tabsCurrent: 0,
				commentList: {},
				goodsId: null,
				collectNum: 0,
				cartNum: 0
			}
		},
		onLoad(option) {
			this.goodsId = option.id
			// 获取商品基本信息
			this.getBooksInfo()
			// 获取购物车商品数量
			this.cartLen()
		},
		methods: {
			// 获取商品详细信息接口
			async getBooksInfo() {
				const res = await this.$u.api.getGoodsDetail(this.goodsId)
				// 商品基本信息
				this.goods = res.goods
				// 推荐商品
				this.likeGoods = res.like_goods
				// 是否收藏
				this.collectNum = res.goods.is_collect
				// 商品评论
				this.commentList = res.goods.comments
				// 评论数量
				this.tabsList[1].count = res.goods.comments.length
				console.log(res)
			},
			// 切换tabs
			tabsChange(index) {
				this.tabsCurrent = index
			},
			// 收藏节流
			// 节流的意思是，规定时间内，只触发一次
			collect() {
				// throttle(func, wait = 500, immediate = true)
				// func <Function> 触发回调执行的函数
				// wait <Number> 时间间隔，单位ms
				this.$u.throttle(this.collectNot, 1500)
			},
			// 收藏和取消收藏
			async collectNot() {
				if (!this.$u.utils.isLogin()) {} // 如果没有登录先去登录
				else {
					// 收藏和取消收藏提示
					if (this.collectNum) {
						this.$u.toast("取消收藏成功")
					} else {
						this.$u.toast("收藏成功")
					}
					this.collectNum = !this.collectNum
					// 请求收藏接口
					await this.$u.api.isCollect(this.goodsId)
				}
			},
			// 添加购物车(自带节流效果)
			async addCart() {
				if (!this.$u.utils.isLogin()) {} // 如果没有登录先去登录
				else {
					this.$u.toast("添加购物车成功！")
					this.cartNum++
					// 准备参数
					const params = {
						goods_id: this.goodsId
					}
					// 发送请求
					const res = await this.$u.api.addCart(params)
				}
			},
			async cartLen() {
				// 如果登录成功在调用这个接口
				if (this.vuex_token) {
					// 获取购物车商品数量
					const res = await this.$u.api.cartGoods()
					// 累加总的商品数量
					this.cartNum = res.data.reduce((pre, item) => {
						return parseInt(pre) + parseInt(item.num);
					}, 0)
				}
			},
			/* 跳转到购物车页面 */
			toCart() {
				if (!this.$u.utils.isLogin()) {} else {
					this.$u.route({
						type: 'switchTab',
						url: 'pages/cart/cart'
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 90vh;

		.loading {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.goods-show {
			.base-info {

				.title,
				.price {
					font-weight: bolder;
				}

				.price {
					color: rgb(209, 45, 58);
				}
			}

			.comment {
				display: flex;
				padding: 30rpx;

				.left {
					image {
						width: 64rpx;
						height: 64rpx;
						border-radius: 50%;
						background-color: #f2f2f2;
					}
				}

				.right {
					flex: 1;
					padding-left: 20rpx;
					font-size: 30rpx;

					.top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 10rpx;

						.name {
							color: #5677fc;
						}

						.like {
							display: flex;
							align-items: center;
							color: #9a9a9a;
							font-size: 26rpx;

							.num {
								margin-right: 4rpx;
								color: #9a9a9a;
							}
						}

						.highlight {
							color: #5677fc;

							.num {
								color: #5677fc;
							}
						}
					}

					.content {
						margin-bottom: 10rpx;
					}

					.reply-box {
						background-color: rgb(242, 242, 242);
						border-radius: 12rpx;
						text-indent: 1em;

						.item {
							padding: 20rpx;
							border-bottom: solid 2rpx $u-border-color;

							.username {
								font-size: 24rpx;
								color: #999999;
							}
						}

						.all-reply {
							padding: 20rpx;
							display: flex;
							color: #5677fc;
							align-items: center;

							.more {
								margin-left: 6rpx;
							}
						}
					}

					.bottom {
						margin-top: 20rpx;
						display: flex;
						font-size: 24rpx;
						color: #9a9a9a;

						.reply {
							color: #5677fc;
							margin-left: 10rpx;
						}
					}
				}
			}
		}

		// min-height: 100vh;
		.navigation {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			border: solid 2rpx #f2f2f2;
			background-color: #ffffff;
			padding: 16rpx 0;
			justify-content: space-between;

			.left {
				flex: 3;
				display: flex;
				font-size: 20rpx;
				justify-content: space-around;

				.item {
					position: relative;
					text-align: center;
				}
			}

			.right {
				flex: 9;
				display: flex;
				font-size: 28rpx;
				justify-content: flex-end;
				align-items: center;

				.btn {
					text-align: center;
					line-height: 66rpx;
					width: 90%;
					border-radius: 10rpx;
					color: #ffffff;
				}

				.cart {
					background-color: #2979ff;
					margin-right: 30rpx;
				}

				.buy {
					background-color: #ff7900;
				}
			}
		}
	}
</style>
