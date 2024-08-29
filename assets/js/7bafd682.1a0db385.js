/*! For license information please see 7bafd682.1a0db385.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512591],{425679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(785893),a=t(511151);const s={id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},o=void 0,r={id:"getting-started/configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins",source:"@site/../docs/getting-started/configure-app-with-plugins.md",sourceDirName:"getting-started",slug:"/getting-started/configure-app-with-plugins",permalink:"/docs/getting-started/configure-app-with-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/configure-app-with-plugins.md",tags:[],version:"current",frontMatter:{id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/getting-started/config/authentication"},next:{title:"Customize the look-and-feel of your App",permalink:"/docs/getting-started/app-custom-theme"}},c={},d=[{value:"Adding existing plugins to your app",id:"adding-existing-plugins-to-your-app",level:2},{value:"Adding a plugin page to the Sidebar",id:"adding-a-plugin-page-to-the-sidebar",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Backstage plugins customize the app for your needs. There is a\n",(0,i.jsx)(n.a,{href:"https://backstage.io/plugins",children:"plugin directory"})," with plugins for many common\ninfrastructure needs - CI/CD, monitoring, auditing, and more."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-existing-plugins-to-your-app",children:"Adding existing plugins to your app"}),"\n",(0,i.jsxs)(n.p,{children:["The following steps assume that you have\n",(0,i.jsx)(n.a,{href:"/docs/getting-started/",children:"created a Backstage app"})," and want to add an existing plugin\nto it."]}),"\n",(0,i.jsxs)(n.p,{children:["We are using the\n",(0,i.jsx)(n.a,{href:"https://github.com/CircleCI-Public/backstage-plugin/tree/main/plugins/circleci",children:"CircleCI"}),"\nplugin in this example, which is designed to show CI/CD pipeline information attached\nto an entity in the software catalog."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the plugin's npm package to the repo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/app add @circleci/backstage-plugin\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note the plugin is added to the ",(0,i.jsx)(n.code,{children:"app"})," package, rather than the root\n",(0,i.jsx)(n.code,{children:"package.json"}),". Backstage Apps are set up as monorepos with\n",(0,i.jsx)(n.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",children:"Yarn workspaces"}),". Since\nCircleCI is a frontend UI plugin, it goes in ",(0,i.jsx)(n.code,{children:"app"})," rather than ",(0,i.jsx)(n.code,{children:"backend"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"EntityCircleCIContent"})," extension to the entity pages in the app:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/EntityPage.tsx"',children:"/* highlight-add-start */\nimport {\n  EntityCircleCIContent,\n  isCircleCIAvailable,\n} from '@circleci/backstage-plugin';\n/* highlight-add-end */\n\nconst cicdContent = (\n  <EntitySwitch>\n    {/* ... */}\n    {/* highlight-add-next-line */}\n    <EntitySwitch.Case if={isCircleCIAvailable}>\n      <EntityCircleCIContent />\n    </EntitySwitch.Case>\n    ;{/* highlight-add-end */}\n  </EntitySwitch>\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is just one example, but each Backstage instance may integrate content or\ncards to suit their needs on different pages, tabs, etc. In addition, while some\nplugins such as this example are designed to annotate or support specific software\ncatalog entities, others may be intended to be used in a stand-alone fashion and\nwould be added outside the ",(0,i.jsx)(n.code,{children:"EntityPage"}),", such as being added to the main navigation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"[Optional]"})," Add a proxy config:"]}),"\n",(0,i.jsx)(n.p,{children:"Plugins that collect data off of external services may require the use of a proxy service.\nThis plugin accesses the CircleCI REST API, and thus requires a proxy definition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"proxy:\n  '/circleci/api':\n    target: https://circleci.com/api/v1.1\n    headers:\n      Circle-Token: ${CIRCLECI_AUTH_TOKEN}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"adding-a-plugin-page-to-the-sidebar",children:"Adding a plugin page to the Sidebar"}),"\n",(0,i.jsxs)(n.p,{children:["In a standard Backstage app created with\n",(0,i.jsx)(n.a,{href:"/docs/getting-started/",children:"@backstage/create-app"}),", the sidebar is managed inside\n",(0,i.jsx)(n.code,{children:"packages/app/src/components/Root/Root.tsx"}),". The file exports the entire\n",(0,i.jsx)(n.code,{children:"Sidebar"})," element of your app, which you can extend with additional entries by\nadding new ",(0,i.jsx)(n.code,{children:"SidebarItem"})," elements."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you install the ",(0,i.jsx)(n.code,{children:"api-docs"})," plugin, a matching ",(0,i.jsx)(n.code,{children:"SidebarItem"}),"\ncould be something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/components/Root/Root.tsx"',children:'// Import icon from Material UI\nimport ExtensionIcon from \'@material-ui/icons/Extension\';\n\n// ... inside the AppSidebar component\n<SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use your own SVGs directly as icon components. Just make sure they\nare sized according to the Material UI's\n",(0,i.jsx)(n.a,{href:"https://material-ui.com/api/svg-icon/",children:"SvgIcon"})," default of 24x24px, and set the\nextension to ",(0,i.jsx)(n.code,{children:".icon.svg"}),". For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import InternalToolIcon from './internal-tool.icon.svg';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["On mobile devices the ",(0,i.jsx)(n.code,{children:"Sidebar"})," is displayed at the bottom of the screen. For\ncustomizing the experience you can group ",(0,i.jsx)(n.code,{children:"SidebarItems"})," in a ",(0,i.jsx)(n.code,{children:"SidebarGroup"}),"\n(Example 1) or create a ",(0,i.jsx)(n.code,{children:"SidebarGroup"})," with a link (Example 2). All\n",(0,i.jsx)(n.code,{children:"SidebarGroup"}),"s are displayed in the bottom navigation with an icon."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'// Example 1\n<SidebarGroup icon={<MenuIcon />} label="Menu">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'// Example 2\n<SidebarGroup label="Search" icon={<SearchIcon />} to="/search">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If no ",(0,i.jsx)(n.code,{children:"SidebarGroup"})," is provided a default menu will display the ",(0,i.jsx)(n.code,{children:"Sidebar"}),"\ncontent."]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,n,t)=>{var i=t(667294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,s={},d=null,l=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:r.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},785893:(e,n,t)=>{e.exports=t(675251)},511151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(667294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);