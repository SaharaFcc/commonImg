(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06be8f62"],{"15b1":function(A,t,e){"use strict";e("6f2d")},"1b86":function(A,t,e){"use strict";e("8340")},"54c5":function(A,t,e){"use strict";e("a9e3");var n=e("f1ed"),o={name:"CommonNav",components:{},props:{volist:{type:Array,default:[]},anchorName:{type:String,default:""}},data:function(){return{navBarFixed:!1,anchorIndex:-1,detailIndex:-1,bgUrl:"http://www.waltonchain.org/en/Theme/wed/Public/images/stappbj1.jpg",loadUrl:e("c950"),errorUrl:e("c950"),downloadUrl:""}},computed:{getCurrentRoute:function(){var A=this;return function(t){return t===A.$route.path}}},created:function(){this.downloadUrl="zh-CN"===this.$i18n.locale?"http://www.waltonchain.org/Uploads/2018-12-10/5c0e47a525f9f.docx":"en-US"===this.$i18n.locale?"http://www.waltonchain.org/en/Uploads/2018-12-28/5c25d8ace868f.docx":"ko-KR"===this.$i18n.locale?"http://www.waltonchain.org/kr/Uploads/2018-12-10/5c0e47a525f9f.docx":"",this.detailIndex=Object(n.a)("detailNav")?Number(Object(n.a)("detailNav")):-1},mounted:function(){window.addEventListener("scroll",this.watchScroll)},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)},methods:{toAnchor:function(A,t){var e=document.getElementById(t+A);this.anchorIndex=A,this.$emit("toAnchor",A),e&&e.scrollIntoView({behavior:"smooth"})},watchScroll:function(){var A=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.$refs.navScroll.offsetTop,this.$refs.navScroll.offsetHeight;this.navBarFixed=A>410}}},a=(e("15b1"),e("1b86"),e("2877")),i=Object(a.a)(o,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:{src:A.bgUrl,loading:A.loadUrl,error:A.errorUrl},expression:"{\n    src: bgUrl,\n    loading: loadUrl,\n    error: errorUrl\n  }",arg:"background-image"}],ref:"navScroll",staticClass:"commonNav",class:A.navBarFixed?"navFixed":"",style:"bluePaperCell"==A.anchorName||"infoCell"==A.anchorName?"padding:0px;":"",attrs:{id:"commonNav"}},[e("div",{staticClass:"commonNav-body"},["bluePaperCell"!==A.anchorName&&"infoCell"!==A.anchorName?e("div",{staticClass:"commonNav-mail"},["smnCell"===A.anchorName?[e("div",[e("p",[A._v(" "+A._s(A.$t("commonPreText"))+" "),e("span",[A._v(A._s(A.$t("commonNextText")))]),A._v(" "+A._s(A.$t("commonLastText"))+" ")])]),e("div",[e("a",{attrs:{href:A.downloadUrl,target:"_blank"}},[A._v(A._s(A.$t("commonNav.downloadText")))])])]:"appDownloadCell"===A.anchorName||"walletCell"===A.anchorName?[e("div",{staticClass:"contact-mail"},[e("div",[A._v(A._s(A.$t("feedBack")))]),A._m(0)])]:"childChainCell"===A.anchorName?[e("div",[e("p",[A._v(" "+A._s(A.$t("childChainText"))+" ")])]),e("div",{staticClass:"contact-mail"},[e("div",[A._v(A._s(A.$t("commonNav.contactText")))]),A._m(1)])]:[e("div",[e("p",[A._v(" "+A._s(A.$t("commonNav.customText"))+" ")])]),e("div",{staticClass:"contact-mail"},[e("div",[A._v(A._s(A.$t("commonNav.contactText")))]),A._m(2)])]],2):A._e(),A.volist.length>1?[e("div",{staticClass:"commonNav-tab"},["infoCell"===A.anchorName?A._l(A.volist,(function(t,n){return e("router-link",{key:n,class:A.getCurrentRoute(t.route)||A.detailIndex===n?"active":"",attrs:{tag:"div",to:{path:t.route}}},[A._v(A._s(t.title))])})):A._l(A.volist,(function(t,n){return e("div",{key:n,class:A.anchorIndex===n||0===n&&-1===A.anchorIndex?"active":"",on:{click:function(t){return A.toAnchor(n,A.anchorName)}}},[t.icon?e("span",[e("i",{staticClass:"iconfont",class:t.icon})]):A._e(),A._v(" "+A._s(t.title)+" ")])}))],2)]:A._e()],2)])}),[function(){var A=this.$createElement,t=this._self._c||A;return t("div",[t("a",{attrs:{href:"mailto:wallet@waltonchain.org"}},[this._v("wallet@waltonchain.org")])])},function(){var A=this.$createElement,t=this._self._c||A;return t("div",[t("a",{attrs:{href:"mailto:business@waltonchain.org"}},[this._v("business@waltonchain.org")])])},function(){var A=this.$createElement,t=this._self._c||A;return t("div",[t("a",{attrs:{href:"mailto:business@waltonchain.org"}},[this._v("business@waltonchain.org")])])}],!1,null,"a7e3872c",null);t.a=i.exports},"6f2d":function(A,t,e){},7114:function(A,t,e){},7331:function(A,t,e){"use strict";e("7114")},8340:function(A,t,e){},becb:function(A){A.exports=JSON.parse('{"zh-CN":{"volist":[{"title":"常见问题","route":"/info/activity"},{"title":"新闻","route":"/info/news"},{"title":"公告","route":"/info/announce"},{"title":"博客","route":"/info/blog"}]},"en-US":{"volist":[{"title":"Activities","route":"/en/info/activity"},{"title":"News","route":"/en/info/news"},{"title":"Announcements","route":"/en/info/announce"},{"title":"Blog","route":"/en/info/blog"}]},"ko-KR":{"volist":[{"title":"이벤트","route":"/kr/info/activity"},{"title":"뉴스","route":"/kr/info/news"},{"title":"공지","route":"/kr/info/announce"},{"title":"블로그","route":"/kr/info/blog"}]}}')},c950:function(A,t){A.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAD3CAYAAAD8IkkxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAlhSURBVHhe7dkBDQAADMOg+ze9+2jABjcAAAAAAAAAEgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgAgBDAAAAAAAABAhgAEAAAAAAAAiBDAAAAAAAABAhAAGAAAAAAAAiBDAAAAAAAAAABECGAAAAAAAACBCAAMAAAAAAABECGAAAAAAAACACAEMAAAAAAAAECGAAQAAAAAAACIEMAAAAAAAAECEAAYAAAAAAACIEMAAAAAAAAAAEQIYAAAAAAAAIEIAAwAAAAAAAEQIYAAAAAAAAIAIAQwAAAAAAAAQIYABAAAAAAAAIgQwAAAAAAAAQIQABgAAAAAAAIgQwAAAAAAAAAARAhgAAAAAAAAgQgADAAAAAAAARAhgAAAAAAAAgITtAb0lvosKd3BtAAAAAElFTkSuQmCC"},dcd0:function(A,t,e){"use strict";e.r(t);var n=e("1da1"),o=e("5530"),a=(e("96cf"),e("d81d"),e("2f62")),i=e("f453"),r=e("4e40"),s=e("f0e9"),c=e("2058"),l=e("54c5"),g={name:"News",components:{Loading:i.a,CommonHeader:r.a,CommonMenu:s.a,CommonFooter:c.a,CommonNav:l.a},data:function(){return{volist:null,currentCate:{},navList:null,tagList:null,isMore:!0,showLoad:!1,pageNo:2}},computed:Object(o.a)({},Object(a.b)(["netError","blockError"])),watch:{blockError:function(A,t){A&&(this.showLoad=!1)},netError:function(A,t){A&&(this.showLoad=!1)}},created:function(){this.getNews(),this.tagList=e("becb")[this.$i18n.locale].volist},methods:{loadMore:function(){var A=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=A).showLoad=!0,t.next=4,e.$api.news.getMore(e.pageNo);case 4:(n=t.sent.data.data).volist.length>0?(e.pageNo++,n.volist.map((function(A,t,n){e.volist.push(A)}))):e.isMore=!1,e.showLoad=!1;case 7:case"end":return t.stop()}}),t)})))()},getDetailData:function(A){var t="en-US"===this.$i18n.locale?"/en/":"zh-CN"===this.$i18n.locale?"/":"ko-KR"===this.$i18n.locale?"/kr/":"";this.$router.push({path:t+"info/newsDetail",query:{id:A.id}})},getNews:function(){var A=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=A,t.next=3,e.$api.news.getNews();case 3:n=t.sent.data.data,e.volist=n.volist,e.currentCate.secondTitle=e.$i18n.t("header.Info"),e.currentCate.thirdTitle=e.tagList[1].title,e.currentCate.cover_url=n._current_category.cover_url,e.currentCate.subtitle=n._current_category.subtitle;case 9:case"end":return t.stop()}}),t)})))()}}},h=(e("7331"),e("2877")),u=Object(h.a)(g,(function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"news"},[A.volist&&A.currentCate.subtitle?[e("common-header"),e("common-menu",{attrs:{currentCate:A.currentCate}}),e("common-nav",{attrs:{volist:A.tagList,anchorName:"infoCell"}}),e("div",{staticClass:"news-body"},[e("div",{staticClass:"news-body-content"},A._l(A.volist,(function(t,n){return e("div",{key:n,on:{click:function(e){return A.getDetailData(t)}}},[e("div",{staticClass:"image-content"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover_url,expression:"item.cover_url"}],attrs:{alt:""}})]),e("div",{staticClass:"title-content"},[A._v(A._s(t.title))]),e("div",{staticClass:"time-content"},[A._v(A._s(t.time))])])})),0),e("div",{staticClass:"news-body-loadMore"},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){A.isMore&&A.loadMore()}}},[A._v(" "+A._s(A.isMore?A.$t("loadMore"):A.$t("noMore"))+" "),A.showLoad?e("i",{staticClass:"el-icon-loading"}):A._e()])])]),e("common-footer")]:[e("loading")]],2)}),[],!1,null,null,null);t.default=u.exports}}]);