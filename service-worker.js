if(!self.define){let e,r={};const s=(s,n)=>(s=new URL(s+".js",n).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let i={};const u=e=>s(e,o),c={module:{uri:o},exports:i,require:u};r[o]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(l(...e),i)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"lucky-random"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/lucky-random-page/css/138.5215363d.css",revision:null},{url:"/lucky-random-page/css/414.4115d6e7.css",revision:null},{url:"/lucky-random-page/index.html",revision:"af75afd7f6e5071b19461551fa0c0a10"},{url:"/lucky-random-page/js/138.8df22f5d.js",revision:null},{url:"/lucky-random-page/js/414.401bff82.js",revision:null},{url:"/lucky-random-page/js/app.f2b25ba3.js",revision:null},{url:"/lucky-random-page/js/chunk-vendors.a4065713.js",revision:null},{url:"/lucky-random-page/manifest.json",revision:"f4a25d520f35c84712c34d733be0c601"},{url:"/lucky-random-page/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
