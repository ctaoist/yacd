import{r as m,b as l,j as t,k as u,e as y,J as T,K as b,y as P,L,u as R,C as N,S as z,N as C,O as W,h as w,P as k,i as j,c as I}from"./index.70ba2435.js";import{a as O,F}from"./index.esm.ab3effa4.js";import{r as M,s as $,f as A}from"./logs.1f30d846.js";import{d as B}from"./debounce.c2d20996.js";import{u as D}from"./useRemainingViewPortHeight.a89e161f.js";import{F as E,p as H}from"./Fab.15df21ef.js";import{P as K,a as q}from"./play.2c517d87.js";function J(e,n){if(e==null)return{};var r=V(e,n),a,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(r[a]=e[a]))}return r}function V(e,n){if(e==null)return{};var r={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}var f=m.exports.forwardRef(function(e,n){var r=e.color,a=r===void 0?"currentColor":r,o=e.size,s=o===void 0?24:o,p=J(e,["color","size"]);return l("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...p,children:[t("circle",{cx:"11",cy:"11",r:"8"}),t("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})});f.propTypes={color:u.exports.string,size:u.exports.oneOfType([u.exports.string,u.exports.number])};f.displayName="Search";const Y=f,G="_RuleSearch_1oz2t_1",Q="_RuleSearchContainer_1oz2t_5",U="_inputWrapper_1oz2t_10",X="_input_1oz2t_10",Z="_iconWrapper_1oz2t_35",h={RuleSearch:G,RuleSearchContainer:Q,inputWrapper:U,input:X,iconWrapper:Z};function ee({dispatch:e,searchText:n,updateSearchText:r}){const[a,o]=m.exports.useState(n),s=m.exports.useCallback(i=>{e(r(i))},[e,r]),p=m.exports.useMemo(()=>B(s,300),[s]),g=i=>{o(i.target.value),p(i.target.value)};return t("div",{className:h.RuleSearch,children:l("div",{className:h.RuleSearchContainer,children:[t("div",{className:h.inputWrapper,children:t("input",{type:"text",value:a,onChange:g,className:h.input})}),t("div",{className:h.iconWrapper,children:t(Y,{size:20})})]})})}const te=e=>({searchText:T(e),updateSearchText:b}),oe=y(te)(ee),re="_logMeta_7a1x3_1",ae="_logType_7a1x3_8",ne="_logTime_7a1x3_18",se="_logText_7a1x3_24",ce="_logsWrapper_7a1x3_37",ie="_logPlaceholder_7a1x3_51",le="_logPlaceholderIcon_7a1x3_64",pe="_search_7a1x3_68",c={logMeta:re,logType:ae,logTime:ne,logText:se,logsWrapper:ce,logPlaceholder:ie,logPlaceholderIcon:le,search:pe},{useCallback:v,memo:he,useEffect:ge}=j,_=30,de={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function ue({time:e,even:n,payload:r,type:a}){const o=I({even:n},"log");return t("div",{className:o,children:l("div",{className:c.logMeta,children:[t("div",{className:c.logTime,children:e}),t("div",{className:c.logType,style:{backgroundColor:de[a]},children:a}),t("div",{className:c.logText,children:r})]})})}function me(e,n){return n[e].id}const _e=he(({index:e,style:n,data:r})=>{const a=r[e];return t("div",{style:n,children:t(ue,{...a})})},O);function fe({dispatch:e,logLevel:n,apiConfig:r,logs:a,logStreamingPaused:o}){const s=P(),p=v(()=>{o?M({...r,logLevel:n}):$(),s.app.updateAppConfig("logStreamingPaused",!o)},[r,n,o,s.app]),g=v(S=>e(L(S)),[e]);ge(()=>{A({...r,logLevel:n},g)},[r,n,g]);const[i,x]=D(),{t:d}=R();return l("div",{children:[t(N,{title:d("Logs")}),t("div",{className:c.search,children:t(oe,{})}),t("div",{ref:i,style:{paddingBottom:_},children:a.length===0?l("div",{className:c.logPlaceholder,style:{height:x-_},children:[t("div",{className:c.logPlaceholderIcon,children:t(z,{width:200,height:200})}),t("div",{children:d("no_logs")})]}):l("div",{className:c.logsWrapper,children:[t(F,{height:x-_,width:"100%",itemCount:a.length,itemSize:80,itemData:a,itemKey:me,children:_e}),t(E,{icon:o?t(K,{size:16}):t(q,{size:16}),mainButtonStyles:o?{background:"#e74c3c"}:{},style:H,text:d(o?"Resume Refresh":"Pause Refresh"),onClick:p})]})})]})}const xe=e=>({logs:C(e),logLevel:W(e),apiConfig:w(e),logStreamingPaused:k(e)}),Re=y(xe)(fe);export{Re as default};
