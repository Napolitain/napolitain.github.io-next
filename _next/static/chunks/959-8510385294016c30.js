(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{9938:function(e,t,n){"use strict";var r=n(930),i=n(5696),a=n(7980);t.default=function(e){var t,n=e.src,o=e.sizes,c=e.unoptimized,p=void 0!==c&&c,g=e.priority,w=void 0!==g&&g,A=e.loading,P=e.lazyRoot,x=void 0===P?null:P,M=e.lazyBoundary,_=void 0===M?"200px":M,E=e.className,I=e.quality,R=e.width,C=e.height,D=e.style,q=e.objectFit,L=e.objectPosition,N=e.onLoadingComplete,H=e.loader,W=void 0===H?k:H,B=e.placeholder,U=void 0===B?"empty":B,F=e.blurDataURL,T=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),G=u.useContext(f.ImageConfigContext),J=u.useMemo((function(){var e=y||G||l.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[G]),Q=T,V=o?"responsive":"intrinsic";"layout"in Q&&(Q.layout&&(V=Q.layout),delete Q.layout);var $="";if(function(e){return"object"===typeof e&&(O(e)||function(e){return void 0!==e.src}(e))}(n)){var K=O(n)?n.default:n;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(F=F||K.blurDataURL,$=K.src,(!V||"fill"!==V)&&(C=C||K.height,R=R||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}n="string"===typeof n?n:$;var X=j(R),Y=j(C),Z=j(I),ee=!w&&("lazy"===A||"undefined"===typeof A);(n.startsWith("data:")||n.startsWith("blob:"))&&(p=!0,ee=!1);v.has(n)&&(ee=!1);var te,ne=d.useIntersection({rootRef:x,rootMargin:_,disabled:!ee}),re=i(ne,2),ie=re[0],ae=re[1],oe=!ee||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:L};0;0;var de=Object.assign({},D,"raw"===V?{aspectRatio:"".concat(X," / ").concat(Y)}:le),fe="blur"===U?{filter:"blur(20px)",backgroundSize:q||"cover",backgroundImage:'url("'.concat(F,'")'),backgroundPosition:L||"0% 0%"}:{};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Y){var pe=Y/X,ge=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===V?(ce.display="block",ce.position="relative",se=!0,ue.paddingTop=ge):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",se=!0,ue.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=X,ce.height=Y)}else 0;var he={src:b,srcSet:void 0,sizes:void 0};oe&&(he=S({config:J,src:n,unoptimized:p,layout:V,width:X,quality:Z,sizes:o,loader:W}));var me=n;0;var ye="imagesrcset",ve="imagesizes";ye="imageSrcSet",ve="imageSizes";var be=(r(t={},ye,he.srcSet),r(t,ve,he.sizes),t),we=u.default.useLayoutEffect,Oe=u.useRef(N),Se=u.useRef(null);u.useEffect((function(){Oe.current=N}),[N]),we((function(){ie(Se.current)}),[ie]),u.useEffect((function(){!function(e,t,n,r,i){var a=function(){var n=e.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(v.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var a=n.naturalWidth,o=n.naturalHeight;i.current({naturalWidth:a,naturalHeight:o})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(Se,me,0,U,Oe)}),[me,V,U,oe]);var je=h({isLazy:ee,imgAttributes:he,heightInt:Y,widthInt:X,qualityInt:Z,layout:V,className:E,imgStyle:de,blurStyle:fe,imgRef:Se,loading:A,config:J,unoptimized:p,placeholder:U,loader:W,srcString:me},Q);return u.default.createElement(u.default.Fragment,null,"raw"===V?u.default.createElement(z,Object.assign({},je)):u.default.createElement("span",{style:ce},se?u.default.createElement("span",{style:ue},te?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,u.default.createElement(z,Object.assign({},je))),w?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},be))):null)};var o,c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(o=n(6505))&&o.__esModule?o:{default:o},l=n(5980),d=n(7215),f=n(1059),p=(n(7206),n(4979));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t.path).concat(A(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(A(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(A(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,u=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,s=[];c=u.exec(r);c)s.push(parseInt(c[2]));if(s.length){var l=.01*Math.min.apply(Math,s);return{widths:o.filter((function(e){return e>=i[0]*l})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,u),d=l.widths,f=l.kind,p=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(n))}var z=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,c=e.imgStyle,s=e.blurStyle,l=e.isLazy,d=e.imgRef,f=e.placeholder,p=e.loading,g=e.sizes,y=e.srcString,v=e.config,b=e.unoptimized,w=e.loader,O=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,t,"raw"!==a||g?{}:{height:n,width:r},{decoding:"async","data-nimg":a,className:o,ref:d,style:h({},c,s)})),(l||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},O,S({config:v,src:y,unoptimized:b,layout:a,width:r,quality:i,sizes:g,loader:w}),"raw"!==a||g?{}:{height:n,width:r},{decoding:"async","data-nimg":a,style:c,className:o,loading:p||"lazy"}))))};function A(e){return"/"===e[0]?e.slice(1):e}},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!o,l=i.useRef(),d=i.useState(!1),f=r(d,2),p=f[0],g=f[1],h=i.useState(t?t.current:null),m=r(h,2),y=m[0],v=m[1],b=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),s||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:i}),t}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:y,rootMargin:n}))}),[s,y,n,p]);return i.useEffect((function(){if(!o&&!p){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),i.useEffect((function(){t&&v(t.current)}),[t]),[b,p]};var i=n(7294),a=n(8065),o="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},6505:function(e,t,n){"use strict";var r=n(930);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(a=n(148))&&a.__esModule?a:{default:a},u=n(7285),s=n(523),l=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=i.props[l],f=r[l]||new Set;"name"===l&&o||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=o.useContext(u.AmpStateContext),r=o.useContext(s.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:g,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=h},148:function(e,t,n){"use strict";var r=n(7980),i=n(3227),a=n(8361),o=(n(2191),n(5971)),c=n(2715),u=n(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){o(n,e);var t=s(n);function n(e){var a;return i(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},9008:function(e,t,n){e.exports=n(6505)},5675:function(e,t,n){e.exports=n(9938)}}]);