"use strict";(self.webpackChunkbump_sh_github_io=self.webpackChunkbump_sh_github_io||[]).push([[8883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Topics",c={unversionedId:"doc-topics",id:"doc-topics",title:"Topics",description:"Creating good API documentation requires giving users context and guides. As most of the specifications don't permit to add generic content, we have created a custom property. Setting the x-topics property at the root of your documentation specification will let you add some content sections at the beginning of your documentation.",source:"@site/docs/help/doc-topics.md",sourceDirName:".",slug:"/doc-topics",permalink:"/help/doc-topics",draft:!1,editUrl:"https://github.com/bump-sh/docs/tree/main/docs/help/doc-topics.md",tags:[],version:"current",frontMatter:{},sidebar:"help",previous:{title:"Single Sign-On (SSO)",permalink:"/help/organizations/single-sign-on-sso"},next:{title:"Custom domains",permalink:"/help/custom-domains"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topics"},"Topics"),(0,o.kt)("p",null,"Creating good API documentation requires giving users context and guides. As most of the specifications don't permit to add generic content, we have created a custom property. Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"x-topics")," property at the root of your documentation specification will let you add some content sections at the beginning of your documentation."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"Topic title as it will appear in the navigation bar and in the content section.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"content"),(0,o.kt)("td",{parentName:"tr",align:null},"The topic content. Markdown is fully supported here.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"example"),(0,o.kt)("td",{parentName:"tr",align:null},"Will appear in the examples section, if activated. Markdown is fully supported here.")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'x-topics:\n  - title: Getting started\n    content: Before using the API you need to get an API key by sending us an email.\n  - title: Authentication\n    content: Send the `X-API-KEY` header with all your requests.\n    example: |\n      ```\n      $ curl \\\n        -X POST https://api.example.com/endpoint/ \\\n        -H "X-API-KEY: XXXXXX" \\\n      ```\n')))}u.isMDXComponent=!0}}]);