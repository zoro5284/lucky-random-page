if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const o=e=>r(e,c),d={module:{uri:c},exports:l,require:o};s[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"lucky-random-page"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/lucky-random-page/dist/css/414.4115d6e7.css",revision:null},{url:"/lucky-random-page/dist/css/807.70ed4ccb.css",revision:null},{url:"/lucky-random-page/dist/index.html",revision:"c3370d94af0110b3bc469b5d9fc4f3c7"},{url:"/lucky-random-page/dist/js/414.73406cae.js",revision:null},{url:"/lucky-random-page/dist/js/807.4c15801d.js",revision:null},{url:"/lucky-random-page/dist/js/app.91e395bb.js",revision:null},{url:"/lucky-random-page/dist/js/chunk-vendors.a2bb707d.js",revision:null},{url:"/lucky-random-page/dist/manifest.json",revision:"f4a25d520f35c84712c34d733be0c601"},{url:"/lucky-random-page/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
