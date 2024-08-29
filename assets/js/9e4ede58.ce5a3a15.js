/*! For license information please see 9e4ede58.ce5a3a15.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[348387],{435496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(785893),i=a(511151);const s={title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},o=void 0,r={permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport",source:"@site/blog/2020-07-01-how-to-enable-authentication-in-backstage-using-passport.mdx",title:"How to enable authentication in Backstage using Passport",description:"auth-landing-page",date:"2020-07-01T00:00:00.000Z",tags:[],readingTime:2.02,hasTruncateMarker:!0,authors:[{name:"Lee Mills, Spotify",url:"https://github.com/leemills83",imageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4",key:null,page:null}],frontMatter:{title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},unlisted:!1,prevItem:{title:"Announcing Backstage Software Templates",permalink:"/blog/2020/08/05/announcing-backstage-software-templates"},nextItem:{title:"Backstage Service Catalog released in alpha",permalink:"/blog/2020/06/22/backstage-service-catalog-alpha"}},c={authorsImageUrls:[void 0]},d=[{value:"What is Passport?",id:"what-is-passport",level:2},{value:"Using authentication in Backstage",id:"using-authentication-in-backstage",level:2},{value:"Ready to get started by adding your chosen provider and implementation?",id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation",level:2},{value:"Interested in contributing to the next steps for authentication?",id:"interested-in-contributing-to-the-next-steps-for-authentication",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"auth-landing-page",src:a(897781).Z+"",width:"1548",height:"622"})}),"\n",(0,n.jsxs)(t.p,{children:["Getting authentication right is important. It helps keep your platform safe, it\u2019s one of the first things users will interact with, and there are many different authentication providers to support. To this end, we chose to use ",(0,n.jsx)(t.a,{href:"http://www.passportjs.org/",children:"Passport"})," to provide an easy-to-use, out-of-the-box experience that can be extended to your own, pre-existing authentication providers (known as strategies). The Auth APIs in Backstage serve two purposes: identify the user and provide a way for plugins to request access to third-party services on behalf of the user. We\u2019ve already implemented Google and GitHub authentication to provide examples and to get you started."]}),"\n","\n",(0,n.jsx)(t.h2,{id:"what-is-passport",children:"What is Passport?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"http://www.passportjs.org/",children:"Passport"})," is Express-compatible authentication middleware for Node.js that provides access to over 500 authentication providers, covering everything from Google, Facebook, and Twitter to generic OAuth, SAML, and local. Check out all of the currently available ",(0,n.jsx)(t.a,{href:"http://www.passportjs.org/",children:"strategies listed on the Passport site"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Passport has allowed us to leverage an existing open-source authentication framework that will, in turn, give users the freedom to add and extend alternative authentication strategies to their instance of Backstage."}),"\n",(0,n.jsx)(t.h2,{id:"using-authentication-in-backstage",children:"Using authentication in Backstage"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"auth-landing-page",src:a(764454).Z+"",width:"206",height:"185"})}),"\n",(0,n.jsxs)(t.p,{children:["First, check out the provided Google and GitHub implementations! ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog/2020/04/30/how-to-quickly-set-up-backstage",children:"Spin up a local copy of Backstage"})," along with our example-backend. You can find more documentation on setting up the example backend ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend",children:"here"}),", but be sure to include the relevant client IDs and secrets when running ",(0,n.jsx)(t.code,{children:"yarn start"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"AUTH_GOOGLE_CLIENT_ID=x AUTH_GOOGLE_CLIENT_SECRET=x AUTH_GITHUB_CLIENT_ID=x AUTH_GITHUB_CLIENT_SECRET=x SENTRY_TOKEN=x LOG_LEVEL=debug yarn start\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find the implementation for these strategies along with a lightweight proof-of-concept implementation for SAML authentication at ",(0,n.jsx)(t.code,{children:"<root>/plugins/auth-backend/src/providers"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation",children:"Ready to get started by adding your chosen provider and implementation?"}),"\n",(0,n.jsx)(t.p,{children:"Getting started is really straightforward, and can be broadly broken down into five steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Install the ",(0,n.jsx)(t.a,{href:"http://www.passportjs.org/",children:"Passport-based provider package that best suits your needs"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Add a new provider to ",(0,n.jsx)(t.code,{children:"plugins/auth-backend/src/providers/"})]}),"\n",(0,n.jsx)(t.li,{children:"Implement the provider, extending the suitable framework, if needed."}),"\n",(0,n.jsx)(t.li,{children:"Add the provider to the backend."}),"\n",(0,n.jsx)(t.li,{children:"Add a frontend Auth Utility API."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For full details, take a look at our ",(0,n.jsx)(t.a,{href:"/docs/auth/add-auth-provider",children:"\u201cAdding authentication providers\u201d documentation"})," and at the ",(0,n.jsx)(t.a,{href:"http://www.passportjs.org/docs/",children:"excellent documentation"})," provided by Passport."]}),"\n",(0,n.jsx)(t.h2,{id:"interested-in-contributing-to-the-next-steps-for-authentication",children:"Interested in contributing to the next steps for authentication?"}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019ve already seen both GitLab and Okta contributions from the community \u2014 and we\u2019re thinking about a few more providers we\u2019d like to add to Backstage, too. You can find those, and other authentication-related issues, in our repository by filtering with the ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+label%3Aauth",children:"auth label"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,a)=>{var n=a(667294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var n,s={},d=null,l=null;for(n in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:l,props:s,_owner:r.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},785893:(e,t,a)=>{e.exports=a(675251)},897781:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auth-landing-36c55882496255abe67830e1ea6db2ea.png"},764454:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auth-sidebar-7757b6f66cada94c378abb527b01859a.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(667294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);