if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const a=e=>i(e,r),c={module:{uri:r},exports:u,require:a};s[r]=Promise.all(l.map((e=>c[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/0.5f70a106.css",revision:null},{url:"_app/immutable/assets/2.4b14b705.css",revision:null},{url:"_app/immutable/chunks/index.1328acbf.js",revision:null},{url:"_app/immutable/chunks/paths.9b9f3d7e.js",revision:null},{url:"_app/immutable/chunks/plugin_.4a4f2e23.js",revision:null},{url:"_app/immutable/chunks/preload-helper.3685c970.js",revision:null},{url:"_app/immutable/chunks/scheduler.894ff9b9.js",revision:null},{url:"_app/immutable/chunks/singletons.65cbe1c6.js",revision:null},{url:"_app/immutable/chunks/spread.84d39b6c.js",revision:null},{url:"_app/immutable/chunks/stores.a8414e06.js",revision:null},{url:"_app/immutable/entry/app.1a5e6589.js",revision:null},{url:"_app/immutable/entry/start.08068c48.js",revision:null},{url:"_app/immutable/nodes/0.15c26a85.js",revision:null},{url:"_app/immutable/nodes/1.a1db28c0.js",revision:null},{url:"_app/immutable/nodes/2.2f72c299.js",revision:null},{url:"_app/immutable/nodes/3.636df5c8.js",revision:null},{url:"_app/immutable/nodes/4.1ffea298.js",revision:null},{url:"architecture.png",revision:"beeea82c496641ef79087d7521adb9d7"},{url:"architecture.svg",revision:"f44b2c14131a1d0d7675dc265263186f"},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"nav_1.svg",revision:"572707752065bdcb39e3d0ad5a36435d"},{url:"nav_2.svg",revision:"c7b86a29546321befc17295f1018f9a8"},{url:"registerSW.js",revision:"64969cd94bef168e44c3e4140080718d"},{url:"service-worker.js",revision:"ed1ecb786ecac4cb53d0f2bdd64fef02"},{url:"/poc_dynmic_views_host/",revision:"f37350ee3cb1768d35433654e96e1534"},{url:"settings",revision:"f37350ee3cb1768d35433654e96e1534"},{url:"manifest.webmanifest",revision:"85466cbec682de8d73be47f3dd4b1ae1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/poc_dynmic_views_host/")))}));
