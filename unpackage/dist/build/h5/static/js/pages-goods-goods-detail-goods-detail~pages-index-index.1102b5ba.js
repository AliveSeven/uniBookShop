(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-detail-goods-detail~pages-index-index"],{"05dd":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},"074a":function(t,e,a){var i=a("a997");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("3e3b18be",i,!0,{sourceMap:!1,shadowMode:!1})},2330:function(t,e,a){var i=a("5006");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("cc31d342",i,!0,{sourceMap:!1,shadowMode:!1})},"23a8":function(t,e,a){"use strict";a.r(e);var i=a("5d7a"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},2424:function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r={name:"u-tabs",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:30},duration:{type:[String,Number],default:.5},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:6},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"}},data:function(){return{scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:this.$u.guid(),currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var a=this;t.length!==e.length&&(this.currentIndex=0),this.$nextTick((function(){a.init()}))},current:{immediate:!0,handler:function(t,e){var a=this;this.$nextTick((function(){a.currentIndex=t,a.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx","border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var a={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx","transition-duration":"".concat(t.duration,"s"),padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:t.$u.addUnit(t.itemWidth)};return e==t.currentIndex&&t.bold&&(a.fontWeight="bold"),e==t.currentIndex?(a.color=t.activeColor,a=Object.assign(a,t.activeItemStyle)):a.color=t.inactiveColor,a}}},methods:{init:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uGetRect("#"+t.id);case 2:a=e.sent,t.parentLeft=a.left,t.componentWidth=a.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){t!=this.currentIndex&&this.$emit("change",t)},getTabRect:function(){for(var t=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)t.select("#u-tab-item-".concat(e)).fields({size:!0,rect:!0});t.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var t=this,e=this.tabQueryInfo[this.currentIndex];if(e){var a=e.width,i=e.left-this.parentLeft,n=i-(this.componentWidth-a)/2;this.scrollLeft=n<0?0:n;var r=e.left+e.width/2-this.parentLeft;this.scrollBarLeft=r-uni.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){t.barFirstTimeMove=!1}),100)}}},mounted:function(){this.init()}};e.default=r},"3f43":function(t,e,a){"use strict";var i=a("2330"),n=a.n(i);n.a},4058:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-col-0[data-v-0a5981a4]{width:0}.u-col-1[data-v-0a5981a4]{width:calc(100%/12)}.u-col-2[data-v-0a5981a4]{width:calc(100%/12 * 2)}.u-col-3[data-v-0a5981a4]{width:calc(100%/12 * 3)}.u-col-4[data-v-0a5981a4]{width:calc(100%/12 * 4)}.u-col-5[data-v-0a5981a4]{width:calc(100%/12 * 5)}.u-col-6[data-v-0a5981a4]{width:calc(100%/12 * 6)}.u-col-7[data-v-0a5981a4]{width:calc(100%/12 * 7)}.u-col-8[data-v-0a5981a4]{width:calc(100%/12 * 8)}.u-col-9[data-v-0a5981a4]{width:calc(100%/12 * 9)}.u-col-10[data-v-0a5981a4]{width:calc(100%/12 * 10)}.u-col-11[data-v-0a5981a4]{width:calc(100%/12 * 11)}.u-col-12[data-v-0a5981a4]{width:calc(100%/12 * 12)}',""]),t.exports=e},"4f6d":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uBadge:a("7eaf").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-tabs",style:{background:t.bgColor}},[a("v-uni-view",{attrs:{id:t.id}},[a("v-uni-scroll-view",{staticClass:"u-scroll-view",attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[a("v-uni-view",{staticClass:"u-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"u-tab-item u-line-1",style:[t.tabItemStyle(i)],attrs:{id:"u-tab-item-"+i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickTab(i)}}},[a("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?a("v-uni-view",{staticClass:"u-tab-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)],1)},r=[]},5006:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-bec4b458],\r\nuni-scroll-view[data-v-bec4b458]{box-sizing:border-box}[data-v-bec4b458]::-webkit-scrollbar,[data-v-bec4b458]::-webkit-scrollbar,[data-v-bec4b458]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-box[data-v-bec4b458]{position:relative}uni-scroll-view[data-v-bec4b458]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-bec4b458]{width:100%;white-space:nowrap;position:relative}.u-tab-item[data-v-bec4b458]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color}.u-tab-bar[data-v-bec4b458]{position:absolute;bottom:0}.u-tabs-scorll-flex[data-v-bec4b458]{display:flex;flex-direction:row;justify-content:space-between}',""]),t.exports=e},"5cb0":function(t,e,a){"use strict";a.r(e);var i=a("6a47"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"5d7a":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=i},"621f":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},r=[]},"6a47":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"},stop:{type:Boolean,default:!0}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=i},"7d57":function(t,e,a){"use strict";var i=a("ad2d"),n=a.n(i);n.a},"7eaf":function(t,e,a){"use strict";a.r(e);var i=a("621f"),n=a("23a8");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("7d57");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"4d072e0b",null,!1,i["a"],o);e["default"]=s.exports},"80aa":function(t,e,a){"use strict";a.r(e);var i=a("884b"),n=a("feab");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("f891");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"0a5981a4",null,!1,i["a"],o);e["default"]=s.exports},"884b":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},"9f08":function(t,e,a){"use strict";a.r(e);var i=a("4f6d"),n=a("b707");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3f43");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"bec4b458",null,!1,i["a"],o);e["default"]=s.exports},a997:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-image[data-v-885009e8]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-885009e8]{width:100%;height:100%}.u-image__loading[data-v-885009e8], .u-image__error[data-v-885009e8]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},ad2d:function(t,e,a){var i=a("e19a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("07c3a14b",i,!0,{sourceMap:!1,shadowMode:!1})},b35b:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},b62a:function(t,e,a){var i=a("ed61");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7e061d24",i,!0,{sourceMap:!1,shadowMode:!1})},b707:function(t,e,a){"use strict";a.r(e);var i=a("2424"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},bd6a:function(t,e,a){"use strict";a.r(e);var i=a("f095"),n=a("dc27");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("cac8");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"885009e8",null,!1,i["a"],o);e["default"]=s.exports},bf2b:function(t,e,a){"use strict";a.r(e);var i=a("d5e1"),n=a("5cb0");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("d864");var o,u=a("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"345affc4",null,!1,i["a"],o);e["default"]=s.exports},c5b3:function(t,e,a){var i=a("4058");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5c047b2d",i,!0,{sourceMap:!1,shadowMode:!1})},cac8:function(t,e,a){"use strict";var i=a("074a"),n=a.n(i);n.a},d5e1:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},d864:function(t,e,a){"use strict";var i=a("b62a"),n=a.n(i);n.a},dc27:function(t,e,a){"use strict";a.r(e);var i=a("b35b"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e19a:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-badge[data-v-4d072e0b]{display:inline-flex;justify-content:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-4d072e0b]{background-color:#2979ff}.u-badge--bg--error[data-v-4d072e0b]{background-color:#fa3534}.u-badge--bg--success[data-v-4d072e0b]{background-color:#19be6b}.u-badge--bg--info[data-v-4d072e0b]{background-color:#909399}.u-badge--bg--warning[data-v-4d072e0b]{background-color:#f90}.u-badge-dot[data-v-4d072e0b]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-4d072e0b]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-4d072e0b]{background-color:#909399;color:#fff}',""]),t.exports=e},ed61:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-row[data-v-345affc4]{display:flex;flex-direction:row;flex-wrap:wrap}',""]),t.exports=e},f095:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uIcon:a("2b22").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():a("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?a("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):a("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?a("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):a("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},r=[]},f891:function(t,e,a){"use strict";var i=a("c5b3"),n=a.n(i);n.a},feab:function(t,e,a){"use strict";a.r(e);var i=a("05dd"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);