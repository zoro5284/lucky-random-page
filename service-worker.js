if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>n(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(i(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"lucky-random"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/icons/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/index.html",revision:"22d84012530e55b15a04751415abb279"},{url:"/js/966.418bce8f.js",revision:null},{url:"/js/app.bb81a428.js",revision:null},{url:"/js/chunk-vendors.a4065713.js",revision:null},{url:"/manifest.json",revision:"afffae5871dfa2538e2be3e1d8b662cd"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
