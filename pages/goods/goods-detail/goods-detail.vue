<template>
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
								<u-image class="u-skeleton-rect" width="100%" height="300rpx" :src="item.cover_url">
								</u-image>
								<!-- 书名 -->
								<view class="u-flex u-row-between goods-title u-line-1 u-font-30 u-m-t-10 u-m-b-10">
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
		}
	}
</script>

<style lang="scss" scoped>
	.goods-show {
		.base-info {

			.title,
			.price {
				font-weight: bold;
			}

			.price {
				color: rgb(209, 45, 58);
			}

			.small {
				font-size: 24rpx;
				color: #ccc;
			}

		}
	}
</style>
