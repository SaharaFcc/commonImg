(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15a49a56"],{"00fe":function(t,e,n){},"9a47":function(t,e,n){"use strict";n("00fe")},a6a3:function(t,e,n){"use strict";n.r(e);var r=n("1da1"),a=(n("96cf"),n("ac1f"),n("5319"),n("b0c0"),n("4e40")),s=n("f0e9"),i=n("2058"),o=n("f453"),c={"ko-KR":{},"zh-CN":{},"en-US":{data:{meta_title:"Business Process",info:{id:"48",pid:"2",group:"1",doc_type:"2",title:"Business Process",en_title:"Business Process",subtitle:"Waltonchain Business Process",cover:"428",url:"#",content:'<p style="text-align:center;">\r\n\t<img src="/en/Uploads/2019-04-10/5cadc87ab6614.jpg" alt="" /> \r\n</p>\r\n<p style="text-align:center;">\r\n\t<img src="/en/Uploads/2019-04-12/5cb06ce52928e.png" title="from clipboard" alt="from clipboard" />\r\n</p>',index_template:"",detail_template:"cate_detail",post_auth:"1",icon:"",create_time:"1554892449",update_time:"1555066108",sort:"0",status:"1",other:null,cover_url:"http://www.waltonchain.org/en/Uploads/2019-03-06/5c7f6452194d3.jpg",doc_type_info:{id:"2",name:"page",title:"单页",icon:"fa fa-file-text",main_field:"0",list_field:"",filter_field:"",field_sort:"",field_group:"",system:"1",create_time:"1426580628",update_time:"1426580628",sort:"0",status:"1"},href:"http://www.waltonchain.org/en/sys/cate/48.html"},_current_category:{id:"48",pid:"2",group:"1",doc_type:"2",title:"Business Process",en_title:"Business Process",subtitle:"Waltonchain Business Process",cover:"428",url:"#",content:'<p style="text-align:center;">\r\n\t<img src="/en/Uploads/2019-04-10/5cadc87ab6614.jpg" alt="" /> \r\n</p>\r\n<p style="text-align:center;">\r\n\t<img src="/en/Uploads/2019-04-12/5cb06ce52928e.png" title="from clipboard" alt="from clipboard" />\r\n</p>',index_template:"",detail_template:"cate_detail",post_auth:"1",icon:"",create_time:"1554892449",update_time:"1555066108",sort:"0",status:"1",other:null,cover_url:"http://www.waltonchain.org/en/Uploads/2019-03-06/5c7f6452194d3.jpg",doc_type_info:{id:"2",name:"page",title:"单页",icon:"fa fa-file-text",main_field:"0",list_field:"",filter_field:"",field_sort:"",field_group:"",system:"1",create_time:"1426580628",update_time:"1426580628",sort:"0",status:"1"},href:"http://www.waltonchain.org/en/sys/cate/48.html"},__current_category__:"48"},info:"数据获取成功",status:1,url:""}},l={name:"Process",components:{CommonHeader:a.a,CommonMenu:s.a,Loading:o.a,CommonFooter:i.a},data:function(){return{contentStr:"",currentCate:{},navList:null}},computed:{formatAlign:function(){return function(t){var e;return t.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(t,n){e=n})),t.replace(/<img/g,'<img class="common-process-align" data-src="'+e+'"')}}},created:function(){this.navList=n("d196")[this.$i18n.locale],this.getProcess()},methods:{getProcess:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c[(n=t).$i18n.locale].data,n.contentStr=r.info.content,n.currentCate.secondTitle=n.$i18n.t("header.Ecosystem"),n.currentCate.thirdTitle=n.navList.Ecosystem[4].name,n.currentCate.cover_url=r._current_category.cover_url,n.currentCate.subtitle=r._current_category.subtitle;case 7:case"end":return e.stop()}}),e)})))()}}},u=(n("9a47"),n("2877")),d=Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"process"},[e("div",{staticClass:"process-body"},[this.currentCate.subtitle&&this.contentStr?[e("common-header"),e("common-menu",{attrs:{currentCate:this.currentCate}}),e("div",{staticClass:"process-body-content",domProps:{innerHTML:this._s(this.formatAlign(this.contentStr))}}),e("common-footer")]:[e("loading")]],2)])}),[],!1,null,null,null);e.default=d.exports}}]);