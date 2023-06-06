"use strict";(self.webpackChunkbump_sh_github_io=self.webpackChunkbump_sh_github_io||[]).push([[5825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=o,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(3905));const i={},r="Organizations",l={unversionedId:"organizations/index",id:"organizations/index",title:"Organizations",description:"Organizations are great when you need to work collaboratively with your team. Instead of a single shared account, each member of your team will be able to access/maintain your documentation and hubs.",source:"@site/docs/help/organizations/index.md",sourceDirName:"organizations",slug:"/organizations/",permalink:"/help/organizations/",draft:!1,editUrl:"https://github.com/bump-sh/docs/tree/main/docs/help/organizations/index.md",tags:[],version:"current",frontMatter:{},sidebar:"help",previous:{title:"Access Management",permalink:"/help/access-management"},next:{title:"Single Sign-On (SSO)",permalink:"/help/organizations/single-sign-on-sso"}},s={},m=[{value:"Create a new organization",id:"create-a-new-organization",level:2},{value:"Member management",id:"member-management",level:2},{value:"Organization management",id:"organization-management",level:2},{value:"Organizations FAQ",id:"organizations-faq",level:2},{value:"How many members can I invite to my organization?",id:"how-many-members-can-i-invite-to-my-organization",level:3},{value:"I&#39;ve invited the wrong person!",id:"ive-invited-the-wrong-person",level:3},{value:"I can&#39;t access my organization/documentation anymore!",id:"i-cant-access-my-organizationdocumentation-anymore",level:3},{value:"Organizations are great but I need this another specific feature to work with my team.",id:"organizations-are-great-but-i-need-this-another-specific-feature-to-work-with-my-team",level:3},{value:"I would like to move one of my documentation/hubs from my personal space to an organization.",id:"i-would-like-to-move-one-of-my-documentationhubs-from-my-personal-space-to-an-organization",level:3}],c={toc:m};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organizations"},"Organizations"),(0,o.kt)("p",null,"Organizations are great when you need to work collaboratively with your team. Instead of a single shared account, each member of your team will be able to access/maintain your documentation and hubs."),(0,o.kt)("p",null,'Organizations are also super useful if you want to invite guests (who are called "viewers") to your documentation: it\'s a read-only role. If you need to keep your API private or shared with a small number of partners, viewers are a great solution.'),(0,o.kt)("h2",{id:"create-a-new-organization"},"Create a new organization"),(0,o.kt)("p",null,"You can easily create an organization from your dashboard. Select the settings section and the organization tab. From here, you can create an organization or manage the ones you own."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3221).Z,width:"1332",height:"476"})),(0,o.kt)("p",null,'Select "Create Organization" to start a new one. You\'ll need to name it and choose its slug.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3683).Z,width:"1093",height:"1058"})),(0,o.kt)("h2",{id:"member-management"},"Member management"),(0,o.kt)("p",null,"Once your organization is created, you may want to invite teammates and guests (which is the point, actually). When you invite a new member, you'll have to select a role before sending the invitation. Each role has its own permissions, detailed below. Roles can be modified at anytime."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Role/Permission"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Admin"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Maintainer"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Viewer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Documentation access"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Hubs access"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Documentation management"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Hubs management"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Organization management"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Member management"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Adding a new member requires an email address and an assigned role.",src:a(6518).Z,width:"1984",height:"1281"})),(0,o.kt)("p",null,"Billing and invoice are only managed by the owner of the organization."),(0,o.kt)("h2",{id:"organization-management"},"Organization management"),(0,o.kt)("p",null,"From your dashboard, you can manage the organizations you own and those you have admin role. Organization settings allow you to change its name and URL, transfer ownership to an active member or completely delete the organization."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(945).Z,width:"1356",height:"1106"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Transferring ownership is mandatory if you want to leave an organization. You can only transfer ownership to a member with admin role.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you choose to close your Bump account but are still the owner of an organization, a warning message will be displayed. Please consider transferring ownership if necessary.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Deleting an organization will definitively erase its documentation and hubs. We ",(0,o.kt)("strong",{parentName:"p"},"cannot")," restore deleted content.")),(0,o.kt)("h2",{id:"organizations-faq"},"Organizations FAQ"),(0,o.kt)("h3",{id:"how-many-members-can-i-invite-to-my-organization"},"How many members can I invite to my organization?"),(0,o.kt)("p",null,"The sky is the limit! You can invite as many members as you want to your organizations."),(0,o.kt)("h3",{id:"ive-invited-the-wrong-person"},"I've invited the wrong person!"),(0,o.kt)("p",null,"No worries, you can cancel a pending invitation at anytime (or even resend the invitation email).\nIf the invitation has been accepted, you can still revoke access in a few clicks."),(0,o.kt)("h3",{id:"i-cant-access-my-organizationdocumentation-anymore"},"I can't access my organization/documentation anymore!"),(0,o.kt)("p",null,"This is most likely due to an organization created during a trial that has not been switched to a paid plan. Organization is a feature available ",(0,o.kt)("a",{parentName:"p",href:"https://bump.sh/pricing"},"from the Startup plan"),". If you are in such a situation, please reach us, we'll try to find the most suitable solution for you and your team!"),(0,o.kt)("h3",{id:"organizations-are-great-but-i-need-this-another-specific-feature-to-work-with-my-team"},"Organizations are great but I need this another specific feature to work with my team."),(0,o.kt)("p",null,"Organizations are a brand new feature we plan to polish with time. We're always open to feedback or suggestions, so please feel free to contact us anytime to discuss what would fit your needs the best."),(0,o.kt)("h3",{id:"i-would-like-to-move-one-of-my-documentationhubs-from-my-personal-space-to-an-organization"},"I would like to move one of my documentation/hubs from my personal space to an organization."),(0,o.kt)("p",null,"If you cannot perform this operation on your end yet, we can surely do this for you. Contact us and we will take care of this!"))}d.isMDXComponent=!0},6518:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Q6P4SEp9xUI38Vntiem7-b77dd0f961931ec04cfa228c993f355b.png"},3221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/organization-create-6f899b53566d8495a4e7794a0c168ca0.png"},3683:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/organization-creation-2b469198d9ee8c4fd03d2e0f06ed030a.png"},945:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/organization-settings-33f6048d193676603793875e9dad3902.png"}}]);