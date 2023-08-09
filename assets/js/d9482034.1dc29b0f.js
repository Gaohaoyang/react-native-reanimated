"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[2747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,g=c["".concat(s,".").concat(p)]||c[p]||d[p]||o;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(83117),i=(n(67294),n(3905));const o={sidebar_position:4},r="Custom animations",l={unversionedId:"layout-animations/custom-animations",id:"layout-animations/custom-animations",title:"Custom animations",description:"This page was ported from an old version of the documentation.",source:"@site/docs/layout-animations/custom-animations.mdx",sourceDirName:"layout-animations",slug:"/layout-animations/custom-animations",permalink:"/react-native-reanimated/docs/layout-animations/custom-animations",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/docs/layout-animations/custom-animations.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Layout transitions",permalink:"/react-native-reanimated/docs/layout-animations/layout-transitions"},next:{title:"Shared Element Transitions",permalink:"/react-native-reanimated/docs/category/shared-element-transitions"}},s={},u=[{value:"Custom Exiting Animation",id:"custom-exiting-animation",level:2},{value:"Example",id:"example",level:3},{value:"Custom Entering Animation",id:"custom-entering-animation",level:2},{value:"Example",id:"example-1",level:3},{value:"Custom Layout Transition",id:"custom-layout-transition",level:2},{value:"Example",id:"example-2",level:3},{value:"Other Facts",id:"other-facts",level:2}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-animations"},"Custom animations"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page was ported from an old version of the documentation."),(0,i.kt)("p",{parentName:"admonition"},"As we're rewriting the documentation some of the pages might be a little outdated.")),(0,i.kt)("p",null,"If our set of predefined animations is not enough for you then this tab is what you are looking for."),(0,i.kt)("h2",{id:"custom-exiting-animation"},"Custom Exiting Animation"),(0,i.kt)("p",null,"What our exiting animation builders do under the hood is generating a worklet function that returns essential data for starting particular animation.\nThe high level template looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function CustomExitingAnimation(values) {\n  'worklet';\n  const animations = {\n    // your animations\n  };\n  const initialValues = {\n    // initial values for animations\n  };\n  const callback = (finished: boolean) => {\n    // optional callback that will fire when layout animation ends\n  };\n  return {\n    initialValues,\n    animations,\n    callback,\n  };\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," - contains information about where view was displayed and what were its dimensions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentOriginX")," - X coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentOriginY")," - Y coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentWidth")," - view's width"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentHeight")," - view's height"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginX")," - X coordinate of top left corner in global coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginY")," - Y coordinate of top left corner in global coordinate system")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function CardView() {\n  const exiting = (values) => {\n    'worklet';\n    const animations = {\n      originX: withTiming(width, { duration: 3000 }),\n      opacity: withTiming(0.5, { duration: 2000 }),\n    };\n    const initialValues = {\n      originX: values.currentOriginX,\n      opacity: 1,\n    };\n    return {\n      initialValues,\n      animations,\n    };\n  };\n\n  return (\n    <Animated.View style={[styles.animatedView]} exiting={exiting}>\n      <Text> Card Example </Text>\n    </Animated.View>\n  );\n}\n")),(0,i.kt)("h2",{id:"custom-entering-animation"},"Custom Entering Animation"),(0,i.kt)("p",null,"What our entering animation builders do under the hood is generating a worklet function that returns essential data for starting particular animation.\nThe high level template looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function CustomEnteringAnimation(values) {\n  'worklet';\n  const animations = {\n    // your animations\n  };\n  const initialValues = {\n    // initial values for animations\n  };\n  const callback = (finished: boolean) => {\n    // optional callback that will fire when layout animation ends\n  };\n  return {\n    initialValues,\n    animations,\n    callback,\n  };\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," - contains information about where view wants to be displayed and what are its dimensions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetOriginX")," - X coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetOriginY")," - Y coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetWidth")," - view's width"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetHeight")," - view's height"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginX")," - X coordinate of top left corder in global coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginY")," - Y coordinate of top left corder in global coordinate system")))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function CardView() {\n  const entering = (targetValues) => {\n    'worklet';\n    const animations = {\n      originX: withTiming(targetValues.originX, { duration: 3000 }),\n      opacity: withTiming(1, { duration: 2000 }),\n      borderRadius: withDelay(4000, withTiming(30, { duration: 3000 })),\n      transform: [\n        { rotate: withTiming('0deg', { duration: 4000 }) },\n        { scale: withTiming(1, { duration: 3500 }) },\n      ],\n    };\n    const initialValues = {\n      originX: -width,\n      opacity: 0,\n      borderRadius: 10,\n      transform: [{ rotate: '90deg' }, { scale: 0.5 }],\n    };\n    return {\n      initialValues,\n      animations,\n    };\n  };\n\n  return (\n    <Animated.View style={[styles.animatedView]} entering={entering}>\n      <Text> Card Example </Text>\n    </Animated.View>\n  );\n}\n")),(0,i.kt)("h2",{id:"custom-layout-transition"},"Custom Layout Transition"),(0,i.kt)("p",null,"What our layout transition builders do under the hood is generating a worklet function that returns essential data for starting particular transition.\nThe high level template looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function CustomLayoutTransition(values) {\n  'worklet';\n  const animations = {\n    // your animations\n  };\n  const initialValues = {\n    // initial values for animations\n  };\n  const callback = (finished: boolean) => {\n    // optional callback that will fire when layout animation ends\n  };\n  return {\n    initialValues,\n    animations,\n    callback,\n  };\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," - contains before and after information about the view's origin and dimensions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetOriginX")," - X coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetOriginY")," - Y coordinate of top left corner in parent's coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetWidth")," - view's width"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetHeight")," - view's height"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginX")," - X coordinate of top left corder in global coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginY")," - Y coordinate of top left corder in global coordinate system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentOriginX")," - X coordinate of top left corner in parent's coordinate system (before)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentOriginY")," - Y coordinate of top left corner in parent's coordinate system (before)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentWidth")," - view's width (before)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentHeight")," - view's height (before)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginX")," - X coordinate of top left corner in global coordinate system (before)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginY")," - Y coordinate of top left corner in global coordinate system (before)")))),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("video",{src:"https://user-images.githubusercontent.com/12784455/120450759-09fa3980-c391-11eb-9b64-65ec8e6c2509.mp4",controls:"controls",muted:"muted",width:"45%"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function CustomLayoutTransition(values) {\n  \'worklet\';\n  return {\n    animations: {\n      originX: withTiming(values.targetOriginX, { duration: 1000 }),\n      originY: withDelay(\n        1000,\n        withTiming(values.targetOriginY, { duration: 1000 })\n      ),\n      width: withSpring(values.targetWidth),\n      height: withSpring(values.targetHeight),\n    },\n    initialValues: {\n      originX: values.currentOriginX,\n      originY: values.currentOriginY,\n      width: values.currentWidth,\n      height: values.currentHeight,\n    },\n  };\n}\n\nfunction Box({ label, state }: { label: string, state: boolean }) {\n  const ind = label.charCodeAt(0) - \'A\'.charCodeAt(0);\n  const delay = 300 * ind;\n  return (\n    <Animated.View\n      layout={CustomLayoutTransition}\n      style={[\n        styles.box,\n        {\n          flexDirection: state ? \'row\' : \'row-reverse\',\n          height: state ? 30 : 60,\n        },\n      ]}>\n      <Text> {label} </Text>\n    </Animated.View>\n  );\n}\n\nexport function CustomLayoutTransitionExample(): React.ReactElement {\n  const [state, setState] = useState(true);\n  return (\n    <View style={{ marginTop: 30 }}>\n      <View style={{ height: 300 }}>\n        <View style={{ flexDirection: state ? \'row\' : \'column\' }}>\n          {state && <Box key="a" label="A" state={state} />}\n          <Box key="b" label="B" state={state} />\n          {!state && <Box key="a" label="A" state={state} />}\n          <Box key="c" label="C" state={state} />\n        </View>\n      </View>\n\n      <Button\n        onPress={() => {\n          setState(!state);\n        }}\n        title="toggle"\n      />\n    </View>\n  );\n}\n')),(0,i.kt)("h2",{id:"other-facts"},"Other Facts"),(0,i.kt)("p",null,"Each Reanimated component has its shared value that keeps current animations assigned to that particular component. If you want to start a new animation for a specific prop and you don't provide an initial value for the prop then the initial value will be taken from the last animation that has been assigned to the component. The only exception is Entering animation because we have no way to get the previous animation values."))}d.isMDXComponent=!0}}]);