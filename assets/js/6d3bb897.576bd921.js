/*! For license information please see 6d3bb897.576bd921.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811510],{828964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(785893),o=n(511151);const i={id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},r=void 0,a={id:"permissions/plugin-authors/01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author",source:"@site/../docs/permissions/plugin-authors/01-setup.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/01-setup",permalink:"/docs/permissions/plugin-authors/01-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/01-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-setup",title:"1. Tutorial setup",description:"How to get started with the permission framework as a plugin author"},sidebar:"docs",previous:{title:"Defining custom permission rules",permalink:"/docs/permissions/custom-rules"},next:{title:"2. Adding a basic permission check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}},l={},c=[{value:"Setup for the Tutorial",id:"setup-for-the-tutorial",level:2},{value:"Integrate the new plugin",id:"integrate-the-new-plugin",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The following tutorial is designed to help plugin authors add support for permissions to their plugins. We'll add support for permissions to example ",(0,s.jsx)(t.code,{children:"todo-list"})," and ",(0,s.jsx)(t.code,{children:"todo-list-backend"})," plugins, but the process should be similar for other plugins!"]}),"\n",(0,s.jsxs)(t.p,{children:["The rest of this page is focused on adding the ",(0,s.jsx)(t.code,{children:"todo-list"})," and ",(0,s.jsx)(t.code,{children:"todo-list-backend"})," plugins to your Backstage instance. If you want to add support for permissions to your own plugin instead, feel free to skip to the ",(0,s.jsx)(t.a,{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check",children:"next section"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"setup-for-the-tutorial",children:"Setup for the Tutorial"}),"\n",(0,s.jsxs)(t.p,{children:['We will use a "Todo list" feature, composed of the ',(0,s.jsx)(t.code,{children:"todo-list"})," and ",(0,s.jsx)(t.code,{children:"todo-list-backend"})," plugins, as well as their dependency, ",(0,s.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The source code is available here:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list",children:"todo-list"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-backend",children:"todo-list-backend"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/example-todo-list-common",children:"todo-list-common"})}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy-paste the three folders into the plugins folder of your backstage application repository (removing the ",(0,s.jsx)(t.code,{children:"example-"})," prefix from each folder) or run the following script from the root of your backstage application:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cd $(mktemp -d)\n  git clone --depth 1 --quiet --no-checkout --filter=blob:none https://github.com/backstage/backstage.git .\n  git checkout master -- plugins/example-todo-list/\n  git checkout master -- plugins/example-todo-list-backend/\n  git checkout master -- plugins/example-todo-list-common/\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-backend/package.json\n  sed -i '' 's/workspace:\\^/\\*/g' plugins/example-todo-list-common/package.json\n  for file in plugins/*; do mv \"$file\" \"$OLDPWD/${file/example-todo/todo}\"; done\n  cd -\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"plugins"})," directory of your project should now include ",(0,s.jsx)(t.code,{children:"todo-list"}),", ",(0,s.jsx)(t.code,{children:"todo-list-backend"}),", and ",(0,s.jsx)(t.code,{children:"todo-list-common"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important"}),": if you are on ",(0,s.jsx)(t.strong,{children:"Windows"}),", make sure you have WSL and git installed on your machine before executing the script above."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Add these packages as dependencies for your Backstage app:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @internal/plugin-todo-list-backend @internal/plugin-todo-list-common\nyarn --cwd packages/app add @internal/plugin-todo-list\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Include the backend and frontend plugin in your application:"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.code,{children:"packages/backend/src/plugins/todolist.ts"})," with the following content:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/todolist.ts"',children:"import { DefaultIdentityClient } from '@backstage/plugin-auth-node';\nimport { createRouter } from '@internal/plugin-todo-list-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin({\n  logger,\n  discovery,\n}: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    logger,\n    identity: DefaultIdentityClient.create({\n      discovery,\n      issuer: await discovery.getExternalBaseUrl('auth'),\n    }),\n  });\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Apply the following changes to ",(0,s.jsx)(t.code,{children:"packages/backend/src/index.ts"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import techdocs from './plugins/techdocs';\n/* highlight-add-next-line */\nimport todoList from './plugins/todolist';\nimport search from './plugins/search';\n\nasync function main() {\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n  /* highlight-add-next-line */\n  const todoListEnv = useHotMemoize(module, () => createEnv('todolist'));\n  // ..\n\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n  apiRouter.use('/permission', await permission(permissionEnv));\n  /* highlight-add-next-line */\n  apiRouter.use('/todolist', await todoList(todoListEnv));\n  // Add backends ABOVE this line; this 404 handler is the catch-all fallback\n  apiRouter.use(notFoundHandler());\n  // ..\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Apply the following changes to ",(0,s.jsx)(t.code,{children:"packages/app/src/App.tsx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:'/* highlight-add-next-line */\nimport { TodoListPage } from \'@internal/plugin-todo-list\';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path="/search" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n    <Route path="/settings" element={<UserSettingsPage />} />\n    {/* highlight-add-next-line */}\n    <Route path="/todo-list" element={<TodoListPage />} />\n    {/* ... */}\n  </FlatRoutes>\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Now if you start your application you should be able to reach the ",(0,s.jsx)(t.code,{children:"/todo-list"})," page:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Todo List plugin page",src:n(226358).Z+"",width:"1323",height:"611"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"integrate-the-new-plugin",children:"Integrate the new plugin"}),"\n",(0,s.jsx)(t.p,{children:"If you play with the UI, you will notice that it is possible to perform a few actions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["create a new todo item (",(0,s.jsx)(t.code,{children:"POST /todos"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["view todo items (",(0,s.jsx)(t.code,{children:"GET /todos"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["edit an existing todo item (",(0,s.jsx)(t.code,{children:"PUT /todos"}),")"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Let's try to bring authorization on top of each one of them."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var s=n(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},785893:(e,t,n)=>{e.exports=n(675251)},226358:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/permission-todo-list-page-6cbdeae87098cd84d982e8ece2442ce9.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(667294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);