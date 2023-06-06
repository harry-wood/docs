"use strict";(self.webpackChunkbump_sh_github_io=self.webpackChunkbump_sh_github_io||[]).push([[1086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Better change summaries",tags:["Improvement"]},s=void 0,i={permalink:"/product-updates/2020/07/02/better-change-summaries",editUrl:"https://github.com/bump-sh/docs/tree/main/docs/product-updates/2020-07-02-better-change-summaries.md",source:"@site/docs/product-updates/2020-07-02-better-change-summaries.md",title:"Better change summaries",description:"We have enhanced the way we summarize API changes. We now list any changes, at all levels (endpoints, requests, responses, attributes & headers) in the API changelogs and notifications we send.",date:"2020-07-02T00:00:00.000Z",formattedDate:"July 2, 2020",tags:[{label:"Improvement",permalink:"/product-updates/tags/improvement"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Better change summaries",tags:["Improvement"]},prevItem:{title:"Add a favicon to your documentation",permalink:"/product-updates/2020/11/12/add-a-favicon-to-your-documentation"},nextItem:{title:"Documentation examples for lazy people",permalink:"/product-updates/2020/06/12/enhanced-examples"}},c={authorsImageUrls:[]},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have enhanced the way we summarize API changes. We now list any changes, at all levels (endpoints, requests, responses, attributes & headers) in the API changelogs and notifications we send."),(0,a.kt)("p",null,"Here an example of a previous summary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Endpoint updated: Versions\nEndpoint updated: Validations\n")),(0,a.kt)("p",null,"Which now becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Updated: POST /docs/{:id}/versions\n  Body attribute added: specification\n  Response added: 200\n  Responses removed: 201, default\nUpdated: POST /docs/{:id}/validations\n  Body attribute added: specification\n  Response removed: default\n")),(0,a.kt)("p",null,"It is now active for all new deployments. We\u2019ll be recalculating the summaries of previous deployments to make your API changelogs clearer soon."))}u.isMDXComponent=!0}}]);