"use strict";(self["webpackChunklucky_random_page"]=self["webpackChunklucky_random_page"]||[]).push([[564],{1564:(t,s,r)=>{r.r(s),r.d(s,{default:()=>f});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"detail-page"},[s("div",{staticClass:"happy-eight-wrap"},[s("p",{staticClass:"mp18"},[t._v("选5复式")]),s("p",{staticClass:"mp8"},t._l(t.choose5,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0),s("p",{staticClass:"mp18"},[t._v("选6复式")]),s("p",{staticClass:"mp8"},t._l(t.choose7,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0),s("p",{staticClass:"mp18"},[t._v("选3")]),s("p",{staticClass:"mp8"},t._l(t.choose3,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0),s("p",{staticClass:"mp18"},[t._v("选2")]),s("p",{staticClass:"mp8"},t._l(t.choose2,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0)])])},o=[];r(7658),r(2707),r(1703),r(6647),r(6699),r(2023);function e(t,s){var r=Math.random()*(s-t+1)+t;return Math.floor(r)}var a=function(t){if(t<=0)throw new Error("抱歉，暂不支持该玩法");if(t>11)throw new Error("理性购彩");var s=1,r=80,n=[];while(n.length<t){var o=e(s,r);i(n,o)}return n.sort((function(t,s){return t-s}))},c=function(t,s){if(t<6||s<1)throw new Error("抱歉，暂不支持该玩法");if(t>7||s>2)throw new Error("请理性购彩");var r=[],n=[],o=33,a=1,c=16,u=1;while(r.length<t){var h=e(a,o);i(r,h)}while(n.length<s){var l=e(u,c);i(n,l)}return{frontPrizeArr:r.sort((function(t,s){return t-s})),backPrizeArr:n.sort((function(t,s){return t-s}))}};function i(t,s){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r?t.push(s):t.includes(s)||t.push(s)}const u={name:"Detail",data:function(){return{duotoneBallList:[],choose10:[],choose7:[],choose5:[],choose3:[],choose2:[]}},created:function(){try{this.duotoneBallList.push(c(6,1)),this.choose10=a(10),this.choose5=a(6),this.choose7=a(7),this.choose3=a(3),this.choose2=a(2)}catch(t){alert(t.message)}},methods:{sort:function(t){return t.sort((function(t,s){return t-s}))}}},h=u;var l=r(1001),p=(0,l.Z)(h,n,o,!1,null,"c01c4be0",null);const f=p.exports}}]);
//# sourceMappingURL=564.7d25b190.js.map