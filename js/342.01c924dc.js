"use strict";(self["webpackChunklucky_random"]=self["webpackChunklucky_random"]||[]).push([[342],{342:function(t,s,r){r.r(s),r.d(s,{default:function(){return _}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"detail-page"},[s("div",{staticClass:"duotone-wrapp"},[s("p",{staticClass:"mp18"},[t._v("双色球")]),t._l(t.duotoneBallList,(function(r,n){return s("p",{key:n,staticClass:"mp8"},[t._l(r.frontPrizeArr,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),t._l(r.backPrizeArr,(function(r){return s("span",{key:r,staticStyle:{"margin-left":"88px"}},[t._v(" "+t._s(r)+" ")])}))],2)}))],2),s("div",{staticClass:"happy-eight-wrap"},[s("p",{staticClass:"mp18"},[t._v("选5复式")]),s("p",{staticClass:"mp8"},t._l(t.choose5,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0),s("p",{staticClass:"mp18"},[t._v("选7")]),s("p",{staticClass:"mp8"},t._l(t.choose7,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0),s("p",{staticClass:"mp18"},[t._v("选2")]),s("p",{staticClass:"mp8"},t._l(t.choose2,(function(r){return s("span",{key:r},[t._v(" "+t._s(r)+" ")])})),0)])])},e=[];r(7658);function o(t,s){const r=Math.random()*(s-t+1)+t;return Math.floor(r)}const a=t=>{if(t<=0)throw new Error("抱歉，暂不支持该玩法");if(t>11)throw new Error("理性购彩");const s=1,r=80,n=[];while(n.length<t){const t=o(s,r);i(n,t)}return n.sort(((t,s)=>t-s))},c=(t,s)=>{if(t<6||s<1)throw new Error("抱歉，暂不支持该玩法");if(t>7||s>2)throw new Error("请理性购彩");const r=[],n=[],e=33,a=1,c=16,l=1;while(r.length<t){const t=o(a,e);i(r,t)}while(n.length<s){const t=o(l,c);i(n,t)}return{frontPrizeArr:r.sort(((t,s)=>t-s)),backPrizeArr:n.sort(((t,s)=>t-s))}};function i(t,s,r=!1){r?t.push(s):t.includes(s)||t.push(s)}var l={name:"Detail",data(){return{duotoneBallList:[],choose7:[],choose5:[],choose2:[]}},created(){try{this.duotoneBallList.push(c(6,1)),this.choose5=a(6),this.choose7=a(7),this.choose2=a(2)}catch(t){alert(t.message)}},methods:{sort(t){return t.sort(((t,s)=>t-s))}}},u=l,h=r(1001),p=(0,h.Z)(u,n,e,!1,null,"48a8c6a3",null),_=p.exports}}]);
//# sourceMappingURL=342.01c924dc.js.map