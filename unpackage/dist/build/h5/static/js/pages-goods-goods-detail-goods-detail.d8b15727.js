(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-detail-goods-detail"],{"04ff":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=n},"17da":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("2b22").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[i("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),i("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},s=[]},"1a1a":function(t,e,i){"use strict";var n=i("c4f4"),r=i.n(n);r.a},4428:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-empty[data-v-27d61a1e]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-27d61a1e]{margin-bottom:%?20?%}.u-slot-wrap[data-v-27d61a1e]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},5333:function(t,e,i){"use strict";i.r(e);var n=i("d0b7"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},5653:function(t,e,i){"use strict";var n=i("b13e"),r=i.n(n);r.a},"704e":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,s=n(i("b85c")),a=uni.getSystemInfoSync(),o=a.windowWidth,c=(a.platform,i("7907")),u={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var s=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!s)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var r,a=this.rtf.getElementsByTagName("style"),u=0;r=a[u++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var l=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,v=this.rtf.getElementsByTagName("img"),m=0,g=0;h=v[m];m++)parseInt(h.style.width||h.getAttribute("width"))>o&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=g++,l.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},l.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:l.imgList})}),h.onerror=function(){c.errorImg&&(l.imgList[this.i]=this.src=c.errorImg),l.$emit("error",{source:"img",target:this})},l.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var p,b=this.rtf.getElementsByTagName("a"),y=(0,s.default)(b);try{for(y.s();!(p=y.n()).done;){var w=p.value;w.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(l.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])l.useAnchor&&l.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(M){y.e(M)}finally{y.f()}var _=this.rtf.getElementsByTagName("video");l.videoContexts=_;for(var x,C=0;x=_[C++];)f(x),x.style.maxWidth="100%",x.onerror=function(){l.$emit("error",{source:"video",target:this})},x.onplay=function(){if(l.autopause)for(var t,e=0;t=l.videoContexts[e++];)t!=this&&t.pause()};var k,T,S=this.rtf.getElementsByTagName("audio"),A=(0,s.default)(S);try{for(A.s();!(k=A.n()).done;){var I=k.value;f(I),I.onerror=function(){l.$emit("error",{source:"audio",target:this})}}}catch(M){A.e(M)}finally{A.f()}if(this.autoscroll){var L,B=this.rtf.getElementsByTagName("table"),N=(0,s.default)(B);try{for(N.s();!(L=N.n()).done;){var O=L.value,E=document.createElement("div");E.style.overflow="scroll",O.parentNode.replaceChild(E,O),E.appendChild(O)}}catch(M){N.e(M)}finally{N.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==T&&(i.$emit("ready",i.rect),clearInterval(i._timer)),T=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in c.userAgentStyles)i+="".concat(n,"{").concat(c.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*o/750+"px"}))),t}}};e.default=u},7907:function(t,e,i){i("ac1f"),i("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=n},8116:function(t,e,i){"use strict";var n=i("e251"),r=i.n(n);r.a},"896a":function(t,e,i){"use strict";i.r(e);var n=i("cdcf"),r=i("fcb1");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("5653");var a,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"01dfbd2e",null,!1,n["a"],a);e["default"]=c.exports},"8bd9":function(t,e,i){"use strict";i.r(e);var n=i("17da"),r=i("e646");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("1a1a");var a,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"27d61a1e",null,!1,n["a"],a);e["default"]=c.exports},"93b9":function(t,e,i){"use strict";i.r(e);var n=i("db93"),r=i("5333");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("8116");var a,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"97cf0c56",null,!1,n["a"],a);e["default"]=c.exports},a1a8:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},b13e:function(t,e,i){var n=i("a1a8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("fbb58b34",n,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=r(i("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(c)throw a}}}}},c4f4:function(t,e,i){var n=i("4428");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("ba491fd8",n,!0,{sourceMap:!1,shadowMode:!1})},cdcf:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},s=[]},d0b7:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("1da1")),s={data:function(){return{goods:{},likeGoods:{},tabsList:[{name:"商品详情"},{name:"商品评论",count:0},{name:"推荐商品"}],tabsCurrent:0,commentList:{},goodsId:null,collectNum:0,cartNum:0}},onLoad:function(t){this.goodsId=t.id,this.getBooksInfo()},methods:{getBooksInfo:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$u.api.getGoodsDetail(t.goodsId);case 2:i=e.sent,t.goods=i.goods,t.likeGoods=i.like_goods,t.collectNum=i.goods.is_collect,t.commentList=i.goods.comments,t.tabsList[1].count=i.goods.comments.length,console.log(i);case 9:case"end":return e.stop()}}),e)})))()},tabsChange:function(t){this.tabsCurrent=t}}};e.default=s},db93:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uTabs:i("9f08").default,uParse:i("896a").default,uIcon:i("2b22").default,uEmpty:i("8bd9").default,uRow:i("bf2b").default,uCol:i("80aa").default,uImage:i("bd6a").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"goods-show"},[i("v-uni-view",{staticClass:"u-text-center"},[i("v-uni-image",{attrs:{mode:"heightFix",src:t.goods.cover_url}})],1),i("v-uni-view",{staticClass:"u-p-20"},[i("v-uni-view",{staticClass:"base-info"},[i("v-uni-text",{staticClass:"title u-font-40"},[t._v(t._s(t.goods.title))]),i("v-uni-view",{staticClass:"u-flex u-row-between u-m-t-20 u-m-b-20"},[i("v-uni-text",{staticClass:"price u-font-32"},[t._v("￥"+t._s(t.goods.price))]),i("v-uni-text",{staticClass:"small"},[t._v("库存:"+t._s(t.goods.stock))]),i("v-uni-text",{staticClass:"small"},[t._v("销量:"+t._s(t.goods.sales))])],1)],1),i("v-uni-view",{staticClass:"u-text-center u-m-t-20"},[i("u-tabs",{attrs:{gutter:40,"item-width":200,"bar-height":12,list:t.tabsList,current:t.tabsCurrent},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-p-b-80"},[0===t.tabsCurrent?[i("u-parse",{attrs:{html:t.goods.details}})]:t._e(),1===t.tabsCurrent?[t.goods.comments.length?t._l(t.commentList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"comment"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:e.user.avatar_url,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.user.name))]),i("v-uni-view",{staticClass:"like",class:{highlight:e.isLike}},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(e.star))]),e.isLike?t._e():i("u-icon",{attrs:{name:"thumb-up",size:30,color:"#9a9a9a"}})],1)],1),i("v-uni-view",{staticClass:"content"},[t._v(t._s(e.content))]),i("v-uni-view",{staticClass:"reply-box"},[i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.reply))])],1),i("v-uni-view",{staticClass:"bottom"},[t._v(t._s(e.created_at))])],1)],1)})):[i("u-empty",{attrs:{text:"暂无评论",src:"order"}})]]:t._e(),2===t.tabsCurrent?[i("u-row",{attrs:{gutter:"16"}},t._l(t.likeGoods,(function(e,n){return i("u-col",{key:n,attrs:{span:"6"}},[i("v-uni-navigator",{staticClass:"goods-item u-p-20 u-m-10",attrs:{url:"/pages/goods/goods-detail/goods-detail?id="+e.id}},[i("u-image",{staticClass:"u-skeleton-rect",attrs:{width:"100%",height:"300rpx",src:e.cover_url}}),i("v-uni-view",{staticClass:"u-flex u-row-between goods-title u-line-1 u-font-30 u-m-t-10 u-m-b-10"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"u-flex u-row-between"},[i("v-uni-text",{staticClass:"goods-price u-skeleton-rect"},[t._v("￥"+t._s(e.price))])],1),i("v-uni-view",{staticClass:"goods-sales u-skeleton-rect u-text-right"},[i("v-uni-view",[t._v("已售:"+t._s(e.sales))])],1)],1)],1)})),1)]:t._e()],2)],1)],1)},s=[]},e251:function(t,e,i){var n=i("f874");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("21fb38c6",n,!0,{sourceMap:!1,shadowMode:!1})},e646:function(t,e,i){"use strict";i.r(e);var n=i("04ff"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},f874:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.goods-show .base-info .title[data-v-97cf0c56],\r\n.goods-show .base-info .price[data-v-97cf0c56]{font-weight:700}.goods-show .base-info .price[data-v-97cf0c56]{color:#d12d3a}.goods-show .base-info .small[data-v-97cf0c56]{font-size:%?24?%;color:#ccc}',""]),t.exports=e},fcb1:function(t,e,i){"use strict";i.r(e);var n=i("704e"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a}}]);