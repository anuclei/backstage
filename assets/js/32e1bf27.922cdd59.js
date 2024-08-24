/*! For license information please see 32e1bf27.922cdd59.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[738570],{374154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(824246),s=n(511151);const a={id:"project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository"},o=void 0,c={id:"contribute/project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository",source:"@site/../docs/contribute/project-structure.md",sourceDirName:"contribute",slug:"/contribute/project-structure",permalink:"/docs/contribute/project-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/contribute/project-structure.md",tags:[],version:"current",frontMatter:{id:"project-structure",title:"Backstage Project Structure",description:"Introduction to files and folders in the Backstage Project repository"},sidebar:"docs",previous:{title:"Getting Involved",permalink:"/docs/contribute/getting-involved"},next:{title:"Glossary",permalink:"/docs/references/glossary"}},i={},l=[{value:"General purpose files and folders",id:"general-purpose-files-and-folders",level:2},{value:"Monorepo packages",id:"monorepo-packages",level:2},{value:"<code>packages/</code>",id:"packages",level:3},{value:"<code>plugins/</code>",id:"plugins",level:3},{value:"Packages outside of the monorepo",id:"packages-outside-of-the-monorepo",level:2},{value:"Root files specifically used by the <code>app</code>",id:"root-files-specifically-used-by-the-app",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage is a complex project, and the GitHub repository contains many\ndifferent files and folders. This document aims to clarify the purpose of those\nfiles and folders."}),"\n",(0,r.jsx)(t.h2,{id:"general-purpose-files-and-folders",children:"General purpose files and folders"}),"\n",(0,r.jsx)(t.p,{children:"In the project root, there are a set of files and folders which are not part of\nthe project as such, and may or may not be familiar to someone looking through\nthe code."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.changeset",children:(0,r.jsx)(t.code,{children:".changeset/"})})," -\nThis folder contains files outlining which changes occurred in the project\nsince the last release. These files are added manually, but managed by\n",(0,r.jsx)(t.a,{href:"https://github.com/atlassian/changesets",children:"changesets"})," and will be removed at\nevery new release. They are essentially building-blocks of a CHANGELOG."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.github",children:(0,r.jsx)(t.code,{children:".github/"})})," -\nStandard GitHub folder. It contains - amongst other things - our workflow\ndefinitions and templates. Worth noting is the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.github/vale",children:"vale"}),"\nsub-folder which is used for a markdown spellchecker."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.yarn",children:(0,r.jsx)(t.code,{children:".yarn/"})})," -\nBackstage ships with its own ",(0,r.jsx)(t.code,{children:"yarn"})," implementation. This allows us to have\nbetter control over our ",(0,r.jsx)(t.code,{children:"yarn.lock"})," file and hopefully avoid problems due to\nyarn versioning differences."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/contrib",children:(0,r.jsx)(t.code,{children:"contrib/"})})," -\nCollection of examples or resources contributed by the community. We really\nappreciate contributions in here and encourage them being kept up to date."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs",children:(0,r.jsx)(t.code,{children:"docs/"})})," - This is\nwhere we keep all of our documentation Markdown files. These end up on\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs",children:"https://backstage.io/docs"}),". Just keep in mind that changes to the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/sidebars.json",children:(0,r.jsx)(t.code,{children:"sidebars.json"})}),"\nfile may be needed as sections are added/removed."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.editorconfig",children:(0,r.jsx)(t.code,{children:".editorconfig"})})," -\nA configuration file used by most common code editors. Learn more at\n",(0,r.jsx)(t.a,{href:"https://editorconfig.org/",children:"EditorConfig.org"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.imgbotconfig",children:(0,r.jsx)(t.code,{children:".imgbotconfig"})})," -\nConfiguration for a ",(0,r.jsx)(t.a,{href:"https://imgbot.net/",children:"bot"})," which helps reduce image sizes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"monorepo-packages",children:"Monorepo packages"}),"\n",(0,r.jsxs)(t.p,{children:["Every folder in both ",(0,r.jsx)(t.code,{children:"packages/"})," and ",(0,r.jsx)(t.code,{children:"plugins/"})," is within our monorepo setup, as\ndefined in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/package.json",children:(0,r.jsx)(t.code,{children:"package.json"})}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:' "workspaces": {\n    "packages": [\n      "packages/*",\n      "plugins/*"\n    ]\n  },\n'})}),"\n",(0,r.jsx)(t.p,{children:"Let's look at them individually."}),"\n",(0,r.jsx)(t.h3,{id:"packages",children:(0,r.jsx)(t.code,{children:"packages/"})}),"\n",(0,r.jsxs)(t.p,{children:["These are all the packages that we use within the project. ",(0,r.jsx)(t.a,{href:"#plugins",children:"Plugins"}),"\nare separated out into their own folder, see further down."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/app",children:(0,r.jsx)(t.code,{children:"app/"})})," -\nThis is our take on how an App could look like, bringing together a set of\npackages and plugins into a working Backstage App. This is not a published\npackage, and the main goals are to provide a demo of what an App could look\nlike and to enable local development."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend",children:(0,r.jsx)(t.code,{children:"backend/"})})," -\nEvery standalone Backstage project will have both an ",(0,r.jsx)(t.code,{children:"app"})," ",(0,r.jsx)(t.em,{children:"and"})," a ",(0,r.jsx)(t.code,{children:"backend"}),"\npackage. The ",(0,r.jsx)(t.code,{children:"backend"})," uses plugins to construct a working backend that the\nfrontend (",(0,r.jsx)(t.code,{children:"app"}),") can use."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/backend-common",children:(0,r.jsx)(t.code,{children:"backend-common/"})}),' -\nThere are no "core" packages in the backend. Instead we have ',(0,r.jsx)(t.code,{children:"backend-common"}),"\nwhich contains helper middleware and other utils."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-client",children:(0,r.jsx)(t.code,{children:"catalog-client"})})," -\nAn isomorphic client to interact with the Software Catalog. Backend plugins\ncan use the package directly. Frontend plugins can use the client by using\n",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})," in combination with ",(0,r.jsx)(t.code,{children:"useApi"})," and the\n",(0,r.jsx)(t.code,{children:"catalogApiRef"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model",children:(0,r.jsx)(t.code,{children:"catalog-model/"})})," -\nYou can consider this to be a library for working with the catalog of sorts.\nIt contains the definition of an\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/references#docsNav",children:"Entity"}),",\nas well as validation and other logic related to it. This package can be used\nin both the frontend and the backend."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:(0,r.jsx)(t.code,{children:"cli/"})})," -\nOne of the biggest packages in our project, the ",(0,r.jsx)(t.code,{children:"cli"})," is used to build, serve,\ndiff, create plugins and more. In the early days of this project, we started\nout with calling tools directly - such as ",(0,r.jsx)(t.code,{children:"eslint"})," - through ",(0,r.jsx)(t.code,{children:"package.json"}),".\nBut as it was tricky to have a good development experience around that when we\nchange named tooling, we opted for wrapping those in our own CLI. That way\neverything looks the same in ",(0,r.jsx)(t.code,{children:"package.json"}),". Much like\n",(0,r.jsx)(t.a,{href:"https://github.com/facebook/create-react-app/tree/master/packages/react-scripts",children:"react-scripts"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli-common",children:(0,r.jsx)(t.code,{children:"cli-common/"})})," -\nThis package mainly handles path resolving. It is a separate package to reduce\nbugs in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/cli",children:"CLI"}),". We\nalso want as few dependencies as possible to reduce download time when running\nthe CLI which is another reason this is a separate package."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/config",children:(0,r.jsx)(t.code,{children:"config/"})})," -\nThe way we read configuration data. This package can take a bunch of config\nobjects and merge them together.\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/app-config.yaml",children:"app-config.yaml"}),"\nis an example of an config object."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/config-loader",children:(0,r.jsx)(t.code,{children:"config-loader/"})})," -\nThis package is used to read config objects. It does not know how to merge,\nbut only reads files and passes them on to the config. As this part is only\nused by the backend, we chose to separate ",(0,r.jsx)(t.code,{children:"config"})," and ",(0,r.jsx)(t.code,{children:"config-loader"})," into\ntwo different packages."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-app-api",children:(0,r.jsx)(t.code,{children:"core-app-api/"})})," -\nThis package contains the core APIs that are used to wire together Backstage\napps."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-components",children:(0,r.jsx)(t.code,{children:"core-components/"})})," -\nThis package contains our visual React components, some of which you can find\nin\n",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-examples--plugin-with-data",children:"plugin examples"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/core-plugin-api",children:(0,r.jsx)(t.code,{children:"core-plugin-api/"})})," -\nThis package contains the core APIs that are used to build Backstage plugins."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/create-app",children:(0,r.jsx)(t.code,{children:"create-app/"})})," -\nAn CLI to specifically scaffold a new Backstage App. It does so by using a\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/create-app/templates/default-app",children:"template"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/dev-utils",children:(0,r.jsx)(t.code,{children:"dev-utils/"})})," -\nHelps you setup a plugin for isolated development so that it can be served\nseparately."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/e2e-test",children:(0,r.jsx)(t.code,{children:"e2e-test/"})})," -\nAnother CLI that can be run to try out what would happen if you build all the\npackages, publish them, create a new app, and then run them. CI uses this for\ne2e-tests."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/integration",children:(0,r.jsx)(t.code,{children:"integration/"})})," -\nCommon functionalities of integrations like GitHub, GitLab, etc."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/storybook",children:(0,r.jsx)(t.code,{children:"storybook/"})})," -\nThis folder contains only the Storybook config which helps visualize our\nreusable React components. Stories are within the core package, and are\npublished in the ",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook",children:"Backstage Storybook"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-node",children:(0,r.jsx)(t.code,{children:"techdocs-node/"})})," -\nCommon node.js functionalities for TechDocs, to be shared between\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/techdocs-backend",children:"techdocs-backend"}),"\nplugin and ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"techdocs-cli"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/test-utils",children:(0,r.jsx)(t.code,{children:"test-utils/"})})," -\nThis package contains general purpose testing facilities for testing a\nBackstage App or its plugins."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/theme",children:(0,r.jsx)(t.code,{children:"theme/"})})," -\nHolds the Backstage Theme."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"plugins",children:(0,r.jsx)(t.code,{children:"plugins/"})}),"\n",(0,r.jsxs)(t.p,{children:["Most of the functionality of a Backstage App comes from plugins. Even core\nfeatures can be plugins, take the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog",children:"catalog"})," as\nan example."]}),"\n",(0,r.jsxs)(t.p,{children:["We can categorize plugins into three different types; ",(0,r.jsx)(t.strong,{children:"Frontend"}),", ",(0,r.jsx)(t.strong,{children:"Backend"}),"\nand ",(0,r.jsx)(t.strong,{children:"GraphQL"}),". We differentiate these types of plugins when we name them, with\na dash-suffix. ",(0,r.jsx)(t.code,{children:"-backend"})," means it\u2019s a backend plugin and so on."]}),"\n",(0,r.jsx)(t.p,{children:"One reason for splitting a plugin is because of its dependencies. Another reason\nis for clear separation of concerns."}),"\n",(0,r.jsxs)(t.p,{children:["Take a look at our ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugin Directory"})," or browse\nthrough the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins",children:(0,r.jsx)(t.code,{children:"plugins/"})})," folder."]}),"\n",(0,r.jsx)(t.h2,{id:"packages-outside-of-the-monorepo",children:"Packages outside of the monorepo"}),"\n",(0,r.jsx)(t.p,{children:"For convenience we include packages in our project that are not part of our\nmonorepo setup."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite",children:(0,r.jsx)(t.code,{children:"microsite/"})})," -\nThis folder contains the source code for backstage.io. It is built with\n",(0,r.jsx)(t.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),". This folder is not part of the monorepo\ndue to dependency reasons. Look at the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/microsite/README.md",children:"microsite README"}),"\nfor instructions on how to run it locally."]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"root-files-specifically-used-by-the-app",children:["Root files specifically used by the ",(0,r.jsx)(t.code,{children:"app"})]}),"\n",(0,r.jsx)(t.p,{children:"These files are kept in the root of the project mostly by historical reasons.\nSome of these files may be subject to be moved out of the root sometime in the\nfuture."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.npmrc",children:(0,r.jsx)(t.code,{children:".npmrc"})})," - It's\ncommon for companies to have their own npm registry, and this file makes sure\nthat this folder always uses the public registry."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/.yarnrc.yml",children:(0,r.jsx)(t.code,{children:".yarnrc.yml"})}),' -\nEnforces "our" version of Yarn.']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/app-config.yaml",children:(0,r.jsx)(t.code,{children:"app-config.yaml"})})," -\nConfiguration for the app, both frontend and backend."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/catalog-info.yaml",children:(0,r.jsx)(t.code,{children:"catalog-info.yaml"})})," -\nDescription of Backstage in the Backstage Entity format."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/lerna.json",children:(0,r.jsx)(t.code,{children:"lerna.json"})})," -\n",(0,r.jsx)(t.a,{href:"https://github.com/lerna/lerna",children:"Lerna"})," monorepo config. We are using\n",(0,r.jsx)(t.code,{children:"yarn workspaces"}),", so this will only be used for executing scripts."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,h=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:h,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function k(){}function j(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var x=j.prototype=new k;x.constructor=j,g(x,m.prototype),x.isPureReactComponent=!0;var y=Array.isArray,w=Object.prototype.hasOwnProperty,v={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var s,a={},o=null,c=null;if(null!=t)for(s in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,s)&&!_.hasOwnProperty(s)&&(a[s]=t[s]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),h=0;h<i;h++)l[h]=arguments[h+2];a.children=l}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===a[s]&&(a[s]=i[s]);return{$$typeof:n,type:e,key:o,ref:c,props:a,_owner:v.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,s,a,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return o=o(i=e),e=""===a?"."+T(i,0):a,y(o)?(s="",null!=e&&(s=e.replace(C,"$&/")+"/"),I(o,t,s,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,s+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(i=0,a=""===a?".":a+":",y(e))for(var l=0;l<e.length;l++){var h=a+T(c=e[l],l);i+=I(c,t,s,h,o)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(c=e.next()).done;)i+=I(c=c.value,t,s,h=a+T(c,l++),o);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function R(e,t,n){if(null==e)return e;var r=[],s=0;return I(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},B={transition:null},$={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:B,ReactCurrentOwner:v};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=s,t.Profiler=o,t.PureComponent=j,t.StrictMode=a,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.act=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),a=e.key,o=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,c=v.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){i=Array(l);for(var h=0;h<l;h++)i[h]=arguments[h+2];s.children=i}return{$$typeof:n,type:e.type,key:a,ref:o,props:s,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(667294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);