"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4664],{60582:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),i=n(67177),r=n(72400),o=n(28033),s=n(87827),l=n(10758),c=n(35842),u=n(12448),m=n(6328),d=n(347),h=n(49638);const p=10,f=100,g=s.o.elastic(1.5),b={code:'function anonymous(){const{rotation}=this._closure;return{transform:[{rotateZ:rotation.value+"deg"}]};}',location:"/home/runner/work/react-native-reanimated/react-native-reanimated/docs/src/examples/SequenceWobble.jsx"};function y(){const e=(0,l.y)(0),t=(0,c.l)(function(){const t=()=>({transform:[{rotateZ:`${e.value}deg`}]});return t._closure={rotation:e},t.__initData=b,t.__workletHash=5517220837954,t}());return a.createElement(i.Z,{style:w.container},a.createElement(h.Z,{style:[w.box,t]}),a.createElement(r.Z,{title:"wobble",onPress:()=>{e.value=(0,u.u)((0,m.j)(-p,{duration:f/2,easing:g}),(0,d.D)((0,m.j)(p,{duration:f,easing:g}),7,!0),(0,m.j)(0,{duration:f/2,easing:g}))}}))}const w=o.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginBottom:30}})},81180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>N,default:()=>R,frontMatter:()=>x,metadata:()=>E,toc:()=>q});var a=n(83117),i=n(67294),r=n(3905),o=n(67177),s=n(28033),l=n(10758),c=n(35842),u=n(347),m=n(12448),d=n(6328),h=n(87827),p=n(49638);const f=200,g=800,b={code:"function anonymous(){const{offset}=this._closure;return{transform:[{translateX:offset.value}]};}",location:"/home/runner/work/react-native-reanimated/react-native-reanimated/docs/src/examples/SequenceBasic.jsx"};function y(){const e=(0,l.y)(f),t=(0,c.l)(function(){const t=()=>({transform:[{translateX:e.value}]});return t._closure={offset:e},t.__initData=b,t.__workletHash=3235417794450,t}());return i.useEffect((()=>{e.value=(0,u.D)((0,m.u)((0,d.j)(-f,{duration:g,easing:h.o.cubic}),(0,d.j)(0,{duration:g,easing:h.o.cubic}),(0,d.j)(f,{duration:g,easing:h.o.cubic})),-1,!0)}),[]),i.createElement(o.Z,{style:w.container},i.createElement(p.Z,{style:[w.box,t]}))}const w=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20}}),k="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withSequence,\n  Easing,\n  withRepeat,\n} from 'react-native-reanimated';\n\nconst initialOffset = 200;\nconst duration = 800;\n\nexport default function App() {\n  const offset = useSharedValue(initialOffset);\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  React.useEffect(() => {\n    offset.value = withRepeat(\n      // highlight-start\n      withSequence(\n        withTiming(-initialOffset, { duration, easing: Easing.cubic }),\n        withTiming(0, { duration, easing: Easing.cubic }),\n        withTiming(initialOffset, { duration, easing: Easing.cubic })\n      ),\n      // highlight-end\n      -1,\n      true\n    );\n  }, []);\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyles]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n});\n";var v=n(60582),S=n(28709);const x={sidebar_position:4},N="withSequence",E={unversionedId:"animations/withSequence",id:"animations/withSequence",title:"withSequence",description:"withSequence is an animation modifier that lets you run animations in a sequence.",source:"@site/docs/animations/withSequence.mdx",sourceDirName:"animations",slug:"/animations/withSequence",permalink:"/react-native-reanimated/docs/animations/withSequence",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/docs/animations/withSequence.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"withDecay",permalink:"/react-native-reanimated/docs/animations/withDecay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/animations/withRepeat"}},A={},q=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>...animations</code>",id:"animations",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],T=(_="InteractiveExample",function(e){return console.warn("Component "+_+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var _;const j={toc:q},I="wrapper";function R(e){let{components:t,...n}=e;return(0,r.kt)(I,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"withsequence"},"withSequence"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withSequence")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-modifier"},"animation modifier")," that lets you run animations in a sequence."),(0,r.kt)(T,{src:k,component:(0,r.kt)(y,{mdxType:"SequenceBasic"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { withSequence } from 'react-native-reanimated';\n\nfunction App() {\n  sv.value = withSequence(withTiming(50), withTiming(0));\n  // ...\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Type definitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AnimatableValue = number | string | number[];\n\nfunction withSequence<T extends AnimatableValue>(...animations: [T, ...T[]]): T;\n"))),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"animations"},(0,r.kt)("inlineCode",{parentName:"h4"},"...animations")),(0,r.kt)("p",null,"Any number of ",(0,r.kt)("a",{parentName:"p",href:"docs/fundamentals/glossary#animation-object"},"animation objects")," to be run in a sequence."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withSequence")," returns an ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animation-object"},"animation object"),". It can be either assigned directly to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"docs/core/useAnimatedStyle"},"useAnimatedStyle"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(T,{src:S.Z,component:(0,r.kt)(v.Z,{mdxType:"SequenceWobble"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,r.kt)("div",{className:"compatibility"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}R.isMDXComponent=!0},28709:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  withTiming,\n  Easing,\n  useAnimatedStyle,\n  withRepeat,\n  withSequence,\n} from 'react-native-reanimated';\n\nconst ANGLE = 10;\nconst TIME = 100;\nconst EASING = Easing.elastic(1.5);\n\nexport default function App() {\n  const rotation = useSharedValue(0);\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    transform: [{ rotateZ: `${rotation.value}deg` }],\n  }));\n\n  const handlePress = () => {\n    // highlight-next-line\n    rotation.value = withSequence(\n      // deviate left to start from -ANGLE\n      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),\n      // wobble between -ANGLE and ANGLE 7 times\n      withRepeat(\n        withTiming(ANGLE, {\n          duration: TIME,\n          easing: EASING,\n        }),\n        7,\n        true\n      ),\n      // go back to 0 at the end\n      withTiming(0, { duration: TIME / 2, easing: EASING })\n      // highlight-next-line\n    );\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n      <Button title=\"wobble\" onPress={handlePress} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n});\n"}}]);