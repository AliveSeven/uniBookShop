<template>
	<view class="content">
		<u-swiper :list="swiperlist" height="328" name="img_url"></u-swiper>
		<!-- tabs -->
		<!-- 使用内置样式，u-text-center表示文字居中对齐，u-m-t-20表示u-margin-top-x -->
		<view class="u-text-center u-m-t-20">
			<!-- gutter为单个tab标签的左右内边距之和 -->
			<!-- item-width表示两个item标签之间的距离 -->
			<!-- bar-height底部横线的厚度，list表示标签的分类名， -->
			<!-- current为初始化tabs的激活tab索引，默认为0 -->
			<!-- @change表示标签变更方法，类似于饿了么UI的那个换页分页的 -->
			<u-tabs :gutter="20" :item-width="160" :bar-height="12" :list="sortList" :current="sortCurrent"
				@change="sortChange"></u-tabs>
		</view>
		<u-row gutter="16" class="u-skeleton">
			<!-- 通过col组件的span设置需要分栏的比例 -->
			<u-col span="6" v-for="(item,index) in goodsList" :key="index">
				<navigator class="goods-item u-p-20 u-m-10"
					:url="`/pages/goods/goods-detail/goods-detail?id=${item.id}`">
					<!-- 封面，图片 -->
					<u-image class="u-skeleton-rect" width="100%" height="300rpx" :src="item.cover_url"></u-image>
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
			<u-col span="12">
				<u-loadmore :status="isShowLoading" icon-color="#2979ff" color="#2979ff" />
			</u-col>
		</u-row>
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<!-- 骨架屏 -->
		<u-skeleton :loading="loading" :animation="true" bgColor="#fff"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图的列表
				swiperlist: [],
				// 货物的页数
				goodsPage: 1,
				// 货物的列表
				goodsList: [],
				// 分类列表
				sortList: [{
						name: "默认"
					},
					{
						name: "销量"
					},
					{
						name: "推荐"
					},
					{
						name: "最新"
					},
				],
				// 分类
				sortCurrent: 0,
				// 是否展示Loading
				isShowLoading: 'loading',
				loading: false, // 是否显示骨架屏组件
				scrollTop: 0,
			}
		},
		async onLoad() {
			// this.$u.get('https://api.shop.eduwork.cn/api/index').then(res => {
			// 	console.log(res)
			// })
			this.getIndexData();
		},
		methods: {
			sortChange(index) {
				this.sortCurrent = index;
				// 重置商品数据和分页
				this.page = 1
				this.goodsList = []
				this.getIndexData()
			},

			async getIndexData() {
				// 开启加载
				this.loading = !this.loading
				// 分页
				const params = {
					page: this.goodspage
				}
				// 根据分类的不同，给出不同的params值
				if (this.sortCurrent === 1) params.sales = 1
				if (this.sortCurrent === 2) params.recommend = 1
				if (this.sortCurrent === 3) params.new = 1
				// 拿到首页商品数据
				const indexData = await this.$u.api.getIndex(params)
				this.swiperlist = indexData.slides
				// 增加数据
				this.goodsList.push(...indexData.goods.data)
				console.log(this.goodsList)
				// 加载结束
				this.loading = !this.loading
			},

			onReachBottom() {
				// 如果请求到的数据不再是10条，说明数据到底
				if (this.goodsList.length % 10 == 0) {
					this.goodsPage++
					this.getIndexData()
				} else {
					this.isShowLoading = "nomore"
				}
			},
			onPageScroll(e) {
				// 返回顶部
				this.scrollTop = e.scrollTop;
			}

		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		box-shadow: 0 10rpx 20rpx 0 rgba(#000, .3);

		.goods-title {
			width: 100%;
			font-weight: 550;
		}

		.goods-price {
			width: 40%;
			color: red;
			font-weight: 550;
		}

		.goods-sales {
			font-size: 24rpx;
			color: #ccc;
		}
	}
</style>
