"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1843],{42566:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),l=n(35742),c=n(39960);const r={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};function s(e){let{to:t,children:n}=e;return a.createElement(c.Z,{className:r.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)}function u(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Z,null,a.createElement("html",{lang:"en"}),a.createElement("title",null,"Docusaurus debug panel"),a.createElement("meta",{name:"robots",content:"noindex"})),a.createElement("div",null,a.createElement("nav",{className:r.nav},a.createElement(s,{to:"/__docusaurus/debug"},"Config"),a.createElement(s,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.createElement(s,{to:"/__docusaurus/debug/registry"},"Registry"),a.createElement(s,{to:"/__docusaurus/debug/routes"},"Routes"),a.createElement(s,{to:"/__docusaurus/debug/content"},"Content"),a.createElement(s,{to:"/__docusaurus/debug/globalData"},"Global data")),a.createElement("main",{className:r.container},t)))}},60007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),l=n(52263),c=n(42566);const r={sectionTitle:"sectionTitle_gpPX",listItem:"listItem_KhP1",version:"version_eAdG",name:"name_omfq"};function s(){const{siteMetadata:e}=(0,l.Z)();return a.createElement(c.Z,null,a.createElement("h2",null,"Site Metadata"),a.createElement("div",null,"Docusaurus Version: ",a.createElement("code",null,e.docusaurusVersion)),a.createElement("div",null,"Site Version:"," ",a.createElement("code",null,e.siteVersion??"No version specified")),a.createElement("h3",{className:r.sectionTitle},"Plugins and themes"),a.createElement("ul",{className:"clean-list"},Object.entries(e.pluginVersions).map((e=>{let[t,n]=e;return a.createElement("li",{key:t,className:r.listItem},"package"===n.type&&n.version&&a.createElement("div",{className:r.version},a.createElement("code",null,n.version)),a.createElement("div",{className:r.name},t),a.createElement("div",null,"Type: ",n.type))}))))}}}]);