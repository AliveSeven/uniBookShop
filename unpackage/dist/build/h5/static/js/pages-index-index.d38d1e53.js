(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"07f4":function(t,e,i){var n=i("a902");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("463c6141",n,!0,{sourceMap:!1,shadowMode:!1})},"0f37":function(t,e,i){"use strict";var n=i("2764"),o=i.n(n);o.a},"1d83":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},r=[]},2734:function(t,e,i){"use strict";var n=i("3f2f"),o=i.n(n);o.a},2764:function(t,e,i){var n=i("9054");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("39f148d5",n,!0,{sourceMap:!1,shadowMode:!1})},"2e2f":function(t,e,i){"use strict";i.r(e);var n=i("1d83"),o=i("6fd4");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("2734");var a,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"b5a02ffc",null,!1,n["a"],a);e["default"]=s.exports},"395b":function(t,e,i){"use strict";i.r(e);var n=i("5ed8"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"3f2f":function(t,e,i){var n=i("5b1d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("547d286f",n,!0,{sourceMap:!1,shadowMode:!1})},"3f31":function(t,e,i){var n=i("908e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4157f6ab",n,!0,{sourceMap:!1,shadowMode:!1})},"5b1d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{display:flex;flex-direction:row;overflow:hidden;align-items:center}',""]),t.exports=e},"5ed8":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:function(){return{color:"#909399",fontSize:"38rpx"}}},customStyle:{type:Object,default:function(){return{}}}},watch:{showBackTop:function(t,e){t?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop:function(){return this.scrollTop>uni.upx2px(this.top)}},data:function(){return{opacity:0,uZIndex:-1}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};e.default=n},"6b8f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("2909"));i("96cf");var r=n(i("1da1")),a={data:function(){return{swiperlist:[],goodsPage:1,goodsList:[],sortList:[{name:"默认"},{name:"销量"},{name:"推荐"},{name:"最新"}],sortCurrent:0,isShowLoading:"loading",loading:!1,scrollTop:0}},onLoad:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getIndexData();case 1:case"end":return e.stop()}}),e)})))()},methods:{sortChange:function(t){this.sortCurrent=t,this.page=1,this.goodsList=[],this.getIndexData()},getIndexData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!t.loading,n={page:t.goodspage},1===t.sortCurrent&&(n.sales=1),2===t.sortCurrent&&(n.recommend=1),3===t.sortCurrent&&(n.new=1),e.next=7,t.$u.api.getIndex(n);case 7:r=e.sent,t.swiperlist=r.slides,(i=t.goodsList).push.apply(i,(0,o.default)(r.goods.data)),console.log(t.goodsList),t.loading=!t.loading;case 12:case"end":return e.stop()}}),e)})))()},onReachBottom:function(){this.goodsList.length%10==0?(this.goodsPage++,this.getIndexData()):this.isShowLoading="nomore"},onPageScroll:function(t){this.scrollTop=t.scrollTop}}};e.default=a},"6fd4":function(t,e,i){"use strict";i.r(e);var n=i("85b8"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"7e8c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("v-uni-view",{style:{width:t.windowWinth+"px",height:t.windowHeight+"px",backgroundColor:t.bgColor,position:"absolute",left:t.left+"px",top:t.top+"px",zIndex:9998,overflow:"hidden"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[t._l(t.RectNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:[t.animation?"skeleton-fade":""],style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.circleNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:e.width/2+"px",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.filletNodes,(function(e,n){return i("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:t.borderRadius+"rpx",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})}))],2):t._e()},r=[]},"85b8":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},"8a68":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uSwiper:i("2e2f").default,uTabs:i("9f08").default,uRow:i("bf2b").default,uCol:i("80aa").default,uImage:i("bd6a").default,uLoadmore:i("3d40").default,uBackTop:i("a92d").default,uSkeleton:i("c846").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("u-swiper",{attrs:{list:t.swiperlist,height:"328",name:"img_url"}}),i("v-uni-view",{staticClass:"u-text-center u-m-t-20"},[i("u-tabs",{attrs:{gutter:20,"item-width":160,"bar-height":12,list:t.sortList,current:t.sortCurrent},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sortChange.apply(void 0,arguments)}}})],1),i("u-row",{staticClass:"u-skeleton",attrs:{gutter:"16"}},[t._l(t.goodsList,(function(e,n){return i("u-col",{key:n,attrs:{span:"6"}},[i("v-uni-navigator",{staticClass:"goods-item u-p-20 u-m-10",attrs:{url:"/pages/goods/goods-detail/goods-detail?id="+e.id}},[i("u-image",{staticClass:"u-skeleton-rect",attrs:{width:"100%",height:"300rpx",src:e.cover_url}}),i("v-uni-view",{staticClass:"u-flex u-row-between goods-title u-line-1 u-font-30 u-m-t-10 u-m-b-10"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"u-flex u-row-between"},[i("v-uni-text",{staticClass:"goods-price u-skeleton-rect"},[t._v("￥"+t._s(e.price))])],1),i("v-uni-view",{staticClass:"goods-sales u-skeleton-rect u-text-right"},[i("v-uni-view",[t._v("已售:"+t._s(e.sales))])],1)],1)],1)})),i("u-col",{attrs:{span:"12"}},[i("u-loadmore",{attrs:{status:t.isShowLoading,"icon-color":"#2979ff",color:"#2979ff"}})],1)],2),i("u-back-top",{attrs:{"scroll-top":t.scrollTop}}),i("u-skeleton",{attrs:{loading:t.loading,animation:!0,bgColor:"#fff"}})],1)},r=[]},9054:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-back-top[data-v-feb04766]{width:%?80?%;height:%?80?%;position:fixed;z-index:9;display:flex;flex-direction:row;flex-direction:column;justify-content:center;background-color:#e1e1e1;color:#606266;align-items:center;transition:opacity .4s}.u-back-top__content[data-v-feb04766]{display:flex;flex-direction:row;flex-direction:column;align-items:center}.u-back-top__content__tips[data-v-feb04766]{font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);line-height:1}',""]),t.exports=e},"908e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.goods-item[data-v-1d0fc677]{box-shadow:0 %?10?% %?20?% 0 rgba(0,0,0,.3)}.goods-item .goods-title[data-v-1d0fc677]{width:100%;font-weight:550}.goods-item .goods-price[data-v-1d0fc677]{width:40%;color:red;font-weight:550}.goods-item .goods-sales[data-v-1d0fc677]{font-size:%?24?%;color:#ccc}',""]),t.exports=e},"9a77":function(t,e,i){"use strict";i.r(e);var n=i("8a68"),o=i("e186");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("e534");var a,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"1d0fc677",null,!1,n["a"],a);e["default"]=s.exports},a03e:function(t,e,i){"use strict";i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-skeleton",props:{elColor:{type:String,default:"#e5e5e5"},bgColor:{type:String,default:"#ffffff"},animation:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:"10"},loading:{type:Boolean,default:!0}},data:function(){return{windowWinth:750,windowHeight:1500,filletNodes:[],circleNodes:[],RectNodes:[],top:0,left:0}},methods:{selecterQueryInfo:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton").boundingClientRect().exec((function(e){t.windowHeight=e[0][0].height,t.windowWinth=e[0][0].width,t.top=e[0][0].bottom-e[0][0].height,t.left=e[0][0].left})),this.getRectEls(),this.getCircleEls(),this.getFilletEls()},getRectEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-rect").boundingClientRect().exec((function(e){t.RectNodes=e[0]}))},getFilletEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-fillet").boundingClientRect().exec((function(e){t.filletNodes=e[0]}))},getCircleEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-circle").boundingClientRect().exec((function(e){t.circleNodes=e[0]}))}},mounted:function(){var t=uni.getSystemInfoSync();this.windowHeight=t.windowHeight,this.windowWinth=t.windowWidth,this.selecterQueryInfo()}};e.default=n},a902:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.skeleton-fade[data-v-f551b034]{width:100%;height:100%;background:#c2cfd6;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:blink-data-v-f551b034;animation-name:blink-data-v-f551b034;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}@keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}',""]),t.exports=e},a92d:function(t,e,i){"use strict";i.r(e);var n=i("f4fb"),o=i("395b");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("0f37");var a,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"feb04766",null,!1,n["a"],a);e["default"]=s.exports},aa20:function(t,e,i){"use strict";i.r(e);var n=i("a03e"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},c846:function(t,e,i){"use strict";i.r(e);var n=i("7e8c"),o=i("aa20");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("e43a");var a,u=i("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"f551b034",null,!1,n["a"],a);e["default"]=s.exports},e186:function(t,e,i){"use strict";i.r(e);var n=i("6b8f"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},e43a:function(t,e,i){"use strict";var n=i("07f4"),o=i.n(n);o.a},e534:function(t,e,i){"use strict";var n=i("3f31"),o=i.n(n);o.a},f4fb:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("2b22").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-back-top",class:["u-back-top--mode--"+t.mode],style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.mode?"10000rpx":"8rpx",zIndex:t.uZIndex,opacity:t.opacity},t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):i("v-uni-view",{staticClass:"u-back-top__content"},[i("u-icon",{attrs:{name:t.icon,"custom-style":t.iconStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-back-top__content__tips"},[t._v(t._s(t.tips))])],1)],2)},r=[]}}]);