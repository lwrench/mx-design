"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[442],{2531:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var c=t(8631),a=t(4154),o=t(4317),r=t(1855),s=t(4985),m={code:"\nimport { IconSmile } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <IconSmile size=\"2em\" />\n      <IconSmile size=\"2em\" style={{ color: '#8a2be2' }} />\n    </Space>\n  )\n}",namespace:s.x},i={code:"\nimport { Loading, IconLoading, Space } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Loading size=\"24px\" spin style={{ color: 'var(--brand-color)' }} />\n      <IconLoading size=\"24px\" spin style={{ color: 'var(--brand-color)' }} />\n    </Space>\n  )\n}",namespace:s.Rh},l={code:'\nimport { createIcon } from \'@mx-design/web\';\n\nfunction App() {\n  const IconFace = createIcon({\n    viewBox: \'0 0 36 36\',\n    paths: (\n      <>\n        <path\n          fill="#FFCB4C"\n          d="M35.597 14.232c2.083 9.72-4.108 19.289-13.828 21.372C12.049 37.687 2.48 31.496.397 21.776C-1.686 12.056 4.506 2.487 14.225.404c9.72-2.084 19.289 4.108 21.372 13.828"\n        />\n        <path fill="#F4F7F9" d="M29.284 9.012a6.734 6.734 0 1 1-13.169 2.821a6.734 6.734 0 0 1 13.169-2.821z" />\n        <circle fill="#292F33" cx="22.306" cy="9.291" r="2.037" />\n        <path fill="#F4F7F9" d="M14.088 14.282a3.938 3.938 0 1 1-7.7 1.65a3.938 3.938 0 0 1 7.7-1.65z" />\n        <circle transform="rotate(-12.095 10.236 15.853)" fill="#292F33" cx="10.238" cy="15.857" r="1.942" />\n        <path\n          fill="#65471B"\n          d="M18.625 20.937c-3.543.759-5.981.85-9.01.908c-.691.015-1.955.419-1.536 2.375c.838 3.911 6.379 7.837 12.642 6.495c6.262-1.342 9.708-7.194 8.87-11.105c-.419-1.956-1.739-1.808-2.375-1.536c-2.786 1.187-5.048 2.104-8.591 2.863z"\n        />\n        <path fill="#E8596E" d="M11 24.004v6c0 3 2 6 6 6s6-3 6-6v-6H11z" />\n        <path fill="#DD2F45" d="M17 31.883a.545.545 0 0 0 .545-.545v-6.295h-1.091v6.295a.546.546 0 0 0 .546.545z" />\n        <path\n          fill="#FFF"\n          d="M10.034 23.801s3.143.349 9.01-.908c5.867-1.257 8.591-2.864 8.591-2.864s-1.117 4.33-7.962 5.797c-6.845 1.467-9.639-2.025-9.639-2.025z"\n        />\n      </>\n    ),\n  });\n\n  return <IconFace size="2em" />;\n}',namespace:s.Sv},p={code:"\nimport { createFromIconfont } from '@mx-design/web';\n\nfunction App() {\n  // pass url\n  const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_3337530_4kpk3x87pyc.js')\n  return <IconFont type=\"icon-checked\" size=\"2em\" />;\n}",namespace:s.rP},u=t(9895),f=t(5627);const d="index-module__icon-container--sncUg",y="index-module__icon-item--hvhtP",v="index-module__icon-item-text--03Sik";var b=t(3418),h=t(9867),k=t(929);function I(){let e=!1;const n=new Set,t={subscribe:e=>(n.add(e),()=>{n.delete(e)}),start(t,c){(0,b.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const a=[];return n.forEach((e=>{a.push((0,k._)(e,t,{transitionOverride:c}))})),Promise.all(a)},set:t=>((0,b.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((e=>{(0,h.VI)(e,t)}))),stop(){n.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,t.stop()})};return t}var E=t(4685),O=t(8484);const j=function(){const e=(0,E.M)(I);return(0,O.E)(e.mount,[]),e};var F=t(6255),g=t(9585),x=t.n(g),A=t(3607);const w=function(e){var n=e.Icon,t=e.Item,c=j();return r.createElement(F.P.div,{onClick:function(){return function(e){x()("<".concat(e," />"))&&A.p.add({type:"success",content:"copy success <".concat(e," /> ")})}(t)},onMouseEnter:function(){c.start({scale:1.2})},onMouseLeave:function(){c.start({scale:1})},className:y},r.createElement(F.P.div,{animate:c},r.createElement(n,{size:"2em"})),r.createElement("span",{className:v},t))};var _={component:r.createElement("div",{className:d},Object.keys(u).map((function(e,n){var t=u[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))," ",Object.keys(f).map((function(e,n){var t=f[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))),namespace:s.t5},z=t(5569),P=t(9338),S={component:r.createElement("div",{className:d},Object.keys(z).map((function(e,n){var t=z[e];return r.createElement(w,{Icon:t,Item:e,key:n})})),Object.keys(P).map((function(e,n){var t=P[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))),namespace:s.B7},M=t(6021),C={component:r.createElement("div",{className:d},Object.keys(M).map((function(e,n){var t=M[e];return r.createElement(w,{Icon:t,Item:e,key:n})})),Object.keys(P).map((function(e,n){var t=P[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))),namespace:s.Fo},D=t(9376),N=t(9210),L={component:r.createElement("div",{className:d},Object.keys(D).map((function(e,n){var t=D[e];return r.createElement(w,{Icon:t,Item:e,key:n})})),Object.keys(N).map((function(e,n){var t=N[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))),namespace:s.Jb},B=t(2687),V={component:r.createElement("div",{className:d},Object.keys(B).map((function(e,n){var t=B[e];return r.createElement(w,{Icon:t,Item:e,key:n})}))),namespace:s.B_},H=(0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},m.namespace,m),i.namespace,i),l.namespace,l),p.namespace,p),_.namespace,_),S.namespace,S),C.namespace,C),L.namespace,L),V.namespace,V),J=t(5849),K=t(1753),Q=t(4141),R=t(6501);function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const Y=function(){var e=(0,J.Y)({namespace:K.uK}),n=(0,o.A)(e,1)[0],t=(0,r.useMemo)((function(){return Object.keys(n).map((function(e){return X(X({},n[e]),H[e])}))}),[n,H]),a=(0,r.useMemo)((function(){return t.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[t]);return r.createElement(Q.A,{titleList:a},t.map((function(e){return null!=e&&e.component?r.createElement(R.DX,(0,c.A)({key:e.namespace},e)):r.createElement(R.Qk,(0,c.A)({key:e.namespace},e))})))}}}]);