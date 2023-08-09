"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[3326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={id:"examples",title:"Examples",sidebar_label:"Examples"},i=void 0,l={unversionedId:"examples",id:"version-1.x/examples",title:"Examples",description:"The source code for the example (showcase) app is under the Example/ directory.",source:"@site/versioned_docs/version-1.x/examples.md",sourceDirName:".",slug:"/examples",permalink:"/react-native-reanimated/docs/1.x/examples",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/versioned_docs/version-1.x/examples.md",tags:[],version:"1.x",frontMatter:{id:"examples",title:"Examples",sidebar_label:"Examples"},sidebar:"version-1.x/docs",previous:{title:"Declarative Animation API",permalink:"/react-native-reanimated/docs/1.x/declarative"},next:{title:"Transitions",permalink:"/react-native-reanimated/docs/1.x/transitions"}},c={},p=[],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The source code for the example (showcase) app is under the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/main/Example/"},(0,a.kt)("inlineCode",{parentName:"a"},"Example/"))," directory."),(0,a.kt)("p",null,"In order to run it you need to run those commands (starting at main directory):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  yarn\n  cd Example\n  yarn\n  cd ios && pod install && cd .. # if using IOS devices\n  yarn start\n")),(0,a.kt)("p",null,"Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native run-android")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native run-ios")," (depending on which platform you want to run the Example app on)."),(0,a.kt)("p",null,"You will need to have an Android or iOS device or emulator connected as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}m.isMDXComponent=!0}}]);