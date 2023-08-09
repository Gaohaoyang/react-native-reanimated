"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(83117),n=(a(67294),a(3905));const i={id:"useSharedValue",title:"useSharedValue",sidebar_label:"useSharedValue"},o=void 0,s={unversionedId:"api/hooks/useSharedValue",id:"version-2.x/api/hooks/useSharedValue",title:"useSharedValue",description:"Use this hook to create a reference to a JavaScript value that can be shared with worklets.",source:"@site/versioned_docs/version-2.x/api/hooks/useSharedValue.md",sourceDirName:"api/hooks",slug:"/api/hooks/useSharedValue",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useSharedValue",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/versioned_docs/version-2.x/api/hooks/useSharedValue.md",tags:[],version:"2.x",frontMatter:{id:"useSharedValue",title:"useSharedValue",sidebar_label:"useSharedValue"},sidebar:"docs",previous:{title:"useScrollViewOffset",permalink:"/react-native-reanimated/docs/2.x/api/hooks/useScrollViewOffset"},next:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/customAnimations"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>initialValue</code> number|string|bool|Object|Array|Function",id:"initialvalue-numberstringboolobjectarrayfunction",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this hook to create a reference to a JavaScript value that can be shared with worklets."),(0,n.kt)("p",null,"Shared Values serve a similar purpose to React Native's ",(0,n.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animatedvalue"},(0,n.kt)("inlineCode",{parentName:"a"},"Animated.Value"),"s"),".\nThey can carry data, provide a way to react to changes, and also drive animations.\nIf you aren't familiar with the concept of Shared Values in Reanimated v2, please check ",(0,n.kt)("a",{parentName:"p",href:"../../fundamentals/shared-values"},"Shared Values guide")," first."),(0,n.kt)("p",null,"When shared value reference is created using this hook, it can be accessed and modified by worklets.\nShared Values can also be modified from the React Native thread directly, in which case the update is going to be asynchronous."),(0,n.kt)("p",null,"Shared Values are just javascript objects, so you can pass them to children components or define your own hooks that create them."),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"initialvalue-numberstringboolobjectarrayfunction"},(0,n.kt)("inlineCode",{parentName:"h4"},"initialValue")," ","[number|string|bool|Object|Array|Function]"),(0,n.kt)("p",null,"The first argument takes the initial value, which could be any of the primitive JavaScript types, and assigns it as the initial value of the created Shared Value.\nThe value then can be read from the Shared Value reference using ",(0,n.kt)("inlineCode",{parentName:"p"},".value")," attribute."),(0,n.kt)("h3",{id:"returns"},"Returns"),(0,n.kt)("p",null,"The hook returns a reference to shared value initialized with the provided data.\nThe reference is an object with ",(0,n.kt)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"In the below example we render a button, which triggers random updates of a shared value directly from the React Native JS thread."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"import { Button } from 'react-native';\nimport { useSharedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (width.value = Math.random() * 300)} />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);