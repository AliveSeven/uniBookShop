<template>
	<view class="u-wrap">
		<template v-if="Object.keys(navData).length">
			<!-- 最上面的搜索商品条 -->
			<view class="u-search-box">
				<u-search placeholder="搜索商品" v-model="keyword" @search="searchGoods" @custom="searchGoods"></u-search>
			</view>
			<!-- 下面的展示 -->
			<view class="u-menu-wrap">
				<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
					<!-- 菜单标签选项 -->
					<block v-for="(item,index) in navData">
						<!-- 标签名 -->
						<view class="u-line-1 navTitle">{{item.name}}</view>
						<!-- 点击标签触发 -->
						<view v-for="child in item.children" :key="child.id" class="u-tab-item"
							:class="[current==child.id ? 'u-tab-item-active' : '']" :data-current="child.id"
							@tap.stop="swichMenu(child.id)">
							<text class="u-line-1">{{child.name}}</text>
						</view>
					</block>
				</scroll-view>
				<!-- 右边板块 -->
				<block>
					<!-- 
					    下拉加载
					    1. lower-threshold 距底部触发的阀值
					    2. bindscrolltolower 触发函数
					  -->
					<scroll-view scroll-y class="right-box" :lower-threshold="30" @scrolltolower="toLower">
						<view class="u-text-center" v-if="isShowLoading">
							<u-loading color="#2979ff"></u-loading>
						</view>
						<template v-else>
							<template v-if="!goodsList.length">
								<u-empty text="暂无商品" mode="list"></u-empty>
							</template>
							<view v-else class="page-view">
								<view class="class-item">
									<view class="item-container">
										<navigator class="thumb-box u-p-10" v-for="(goods, index) in goodsList"
											:key="index" :url="`/pages/goods/goods-detail/goods-detail?id=${goods.id}`">
											<image class="item-menu-image" :src="goods.cover_url" mode=""></image>
											<view class="item-menu-name u-line-1">{{goods.title}}</view>
										</navigator>
									</view>
									<u-loadmore @loadmore="toLower" :status="loadStatus" icon-color="#2979ff"
										color="#2979ff" />
								</view>
							</view>
						</template>
					</scroll-view>
				</block>
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
				navData: {},
				goodsList: [],
				scrollTop: 0, //tab标题的滚动条位置
				current: null, // 预设当前项的值
				isShowLoading: false, //加载动画
				keyword: "", //搜索关键词
				page: 1, //当前页数
				loadStatus: "loadmore",
				categoryId: 0
			}
		},
		async onLoad() {
			// 页面加载调用函数
			this.getGoodsData()
		},
		methods: {
			// 获取商品数据
			async getGoodsData() {
				this.isShowLoading = true
				// 参数准备
				const params = {
					title: this.keyword,
					page: this.page
				}
				// 判断是否有分类id
				if (this.current) params.category_id = this.current;
				// 调用API接口
				const res = await this.$u.api.getGoodsList(params)
				// 导航内商品列表数据
				// this.goodsList.push(...res.goods.data)
				this.goodsList = res.goods.data
				this.navData = res.categories
				this.isShowLoading = false
			},
			// 搜索商品数据
			searchGoods() {
				this.current = 0
				this.page = 0
				// 先初始化页数和加载状态
				this.getGoodsData()
			},
			// 点击左边的栏目切换
			swichMenu(id) {
				if (id == this.current) return;
				// 先初始化页数和加载状态
				this.current = id;
				this.page = 1
				this.keyword = ""
				this.getGoodsData()
			},
			// 触底加载更多
			async toLower(e) {
				// 如果没有到底，就一直可以触发
				if (this.loadStatus !== "nomore") {
					this.loadStatus = "loading"
					this.page++
					const params = {
						page: this.page,
						title: this.keyword,
						category_id: this.categoryId
					}
					const res = await this.$u.api.getGoodsList(params) //this.page
					this.goodsList.push(...res.goods.data)
					this.loadStatus = "loadmore"
					if (res.goods.data.length < 10) { //没有更多数据了
						this.loadStatus = "nomore"
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		/* #ifdef H5*/
		height: calc(100vh - var(--window-top) - 100rpx);
		/* #endif*/
		/* #ifndef H5*/
		height: 100vh;
		/* #endif*/
		display: flex;
		flex-direction: column;

		.loading {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;

		.navTitle {
			width: 100%;
			padding: 10rpx;
			font-weight: 550;
			background-color: #2979ff;
			color: #fff;
		}
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.right-box {
		background-color: rgb(250, 250, 250);
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		/* #ifdef H5*/
		height: 80vh;
		/* #endif*/
		/* #ifndef H5*/
		height: 90vh;
		/* #endif*/
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}

	.item-menu-name {
		font-weight: bold;
		font-size: 26rpx;
		color: $u-main-color;
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.thumb-box {
		width: 45%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}

	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
