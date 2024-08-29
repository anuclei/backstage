/*! For license information please see eb8bfc59.32a4c7f6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[336594],{631832:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=s(785893),i=s(511151);const t={id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},r=void 0,o={id:"overview/versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage",source:"@site/../docs/overview/versioning-policy.md",sourceDirName:"overview",slug:"/overview/versioning-policy",permalink:"/docs/overview/versioning-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/versioning-policy.md",tags:[],version:"current",frontMatter:{id:"versioning-policy",title:"Release & Versioning Policy",description:"The process and policy for releasing and versioning Backstage"},sidebar:"docs",previous:{title:"Strategies for adopting",permalink:"/docs/overview/adopting"},next:{title:"Backstage Threat Model",permalink:"/docs/overview/threat-model"}},l={},c=[{value:"Release Lines",id:"release-lines",level:2},{value:"Main Release Line",id:"main-release-line",level:2},{value:"Next Release Line",id:"next-release-line",level:2},{value:"Release Versioning Policy",id:"release-versioning-policy",level:2},{value:"Skew Policy",id:"skew-policy",level:3},{value:"Package Versioning Policy",id:"package-versioning-policy",level:2},{value:"Changes that are Not Considered Breaking",id:"changes-that-are-not-considered-breaking",level:3},{value:"Release Stages",id:"release-stages",level:3},{value:"Node.js Releases",id:"nodejs-releases",level:2},{value:"TypeScript Releases",id:"typescript-releases",level:2},{value:"PostgreSQL Releases",id:"postgresql-releases",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The Backstage project is comprised of a set of software components that together\nform the Backstage platform. These components are both plugins as well as core\nplatform libraries and tools. Each component is distributed as a collection of\n",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Npm_(software)",children:"packages"}),", which in the end is\nwhat you end up consuming as an adopter of Backstage."]}),"\n",(0,a.jsx)(n.p,{children:"The number of Backstage packages that build up an application can be quite\nlarge, in the order of hundreds, with just the core platform packages being\ncounted in the dozen. This creates a challenge for the integrators of a\nBackstage project, as there are a lot of moving parts and pieces to keep up to\ndate."}),"\n",(0,a.jsx)(n.p,{children:"Our solution to this is collecting our most used components and their packages\ninto an umbrella version that we call a Backstage release. Each release is a\ncollection of packages at specific versions that have been verified to work\ntogether. Think of it as a toolbox that comes with batteries included, but you\ncan always add more plugins and libraries from the open source ecosystem as well\nas build your own."}),"\n",(0,a.jsx)(n.h2,{id:"release-lines",children:"Release Lines"}),"\n",(0,a.jsx)(n.p,{children:'The Backstage project is structured around two different release lines, a\nprimary "main" release line, and a "next" release line that serves as a preview\nand pre-release of the next main-line release. Each of these release lines have\ntheir own release cadence and versioning policy.'}),"\n",(0,a.jsx)(n.h2,{id:"main-release-line",children:"Main Release Line"}),"\n",(0,a.jsx)(n.p,{children:"Release cadence: Monthly, specifically on the Tuesday before the third Wednesday of each month. The first release took place in March 2022."}),"\n",(0,a.jsxs)(n.p,{children:["The main release line is versioned with a major, minor and patch version but\ndoes ",(0,a.jsx)(n.strong,{children:"not"})," adhere to ",(0,a.jsx)(n.a,{href:"https://semver.org",children:"semver"}),". The version format is\n",(0,a.jsx)(n.code,{children:"<major>.<minor>.<patch>"}),", for example ",(0,a.jsx)(n.code,{children:"1.3.0"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"An increment of the major version denotes a significant improvement or change to\nthe Backstage platform. It may come with a large new set of features, or a\nswitch in the product direction. These will be few and far between, and do not\nhave any set cadence. Policy-wise they are no different than a minor release."}),"\n",(0,a.jsxs)(n.p,{children:["Each regularly scheduled release will bring an increment to the minor version,\nas long as it is not a major release. Each new minor version can contain new\nfunctionality, breaking changes, and bug fixes, according the\n",(0,a.jsx)(n.a,{href:"#release-versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Patch versions will only be released to address critical bug fixes. They are not\nbound to the regular cadence and are instead released whenever needed."}),"\n",(0,a.jsx)(n.h2,{id:"next-release-line",children:"Next Release Line"}),"\n",(0,a.jsx)(n.p,{children:"Release cadence: Weekly, specifically on Tuesdays."}),"\n",(0,a.jsx)(n.p,{children:"The next release line is a weekly release of the project. Consuming these\nreleases gives you early access to upcoming functionality in Backstage. There\nare however fewer guarantees around breaking changes in these releases, where\nmoving from one release to the next may introduce significant breaking changes."}),"\n",(0,a.jsx)(n.h2,{id:"release-versioning-policy",children:"Release Versioning Policy"}),"\n",(0,a.jsx)(n.p,{children:"The following versioning policy applies to the main-line releases only."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Breaking changes in Packages that have reached version ",(0,a.jsx)(n.code,{children:">=1.0.0"})," will only be\ndone when necessary and with the goal of having minimal impact. When possible,\nthere will always be a deprecation path for a breaking change."]}),"\n",(0,a.jsxs)(n.li,{children:["Security fixes ",(0,a.jsx)(n.strong,{children:"may"})," be backported to older releases based on the simplicity\nof the upgrade path, and the severity of the vulnerability. Vulnerabilities\nwith a severity of ",(0,a.jsx)(n.code,{children:"high"})," or ",(0,a.jsx)(n.code,{children:"critical"})," will always be backported to releases\nfor the last 6 months if feasible."]}),"\n",(0,a.jsx)(n.li,{children:"Bug reports are valid only if reproducible in the most recent release, and bug\nfixes are only applied to the next release."}),"\n",(0,a.jsx)(n.li,{children:"We will do our best to adhere to this policy."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"skew-policy",children:"Skew Policy"}),"\n",(0,a.jsxs)(n.p,{children:["In order for Backstage to function properly the following versioning rules must\nbe followed. The rules are referring to the\n",(0,a.jsx)(n.a,{href:"https://backstage.io/docs/overview/architecture-overview#package-architecture",children:"Package Architecture"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'The versions of all packages for each of the "App Core" groups must be from the\nsame Backstage release.'}),"\n",(0,a.jsx)(n.li,{children:'For each frontend and backend setup, the "App Core" packages must be ahead of or on the same Backstage release as the "Plugin Core" packages, including transitive dependencies of all installed plugins and modules.'}),"\n",(0,a.jsx)(n.li,{children:'For any given plugin, the versions of all packages from the "Plugin Core" and\n"Library" groups must be from the same Backstage release.'}),"\n",(0,a.jsxs)(n.li,{children:["Frontend plugins with a corresponding backend plugin should be from the same\nrelease. The update to the backend plugin ",(0,a.jsx)(n.strong,{children:"MUST"})," be deployed before or\ntogether with the update to the frontend plugin."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'It is allowed and often expected that the "Plugin Core" and "Library" packages\nare from older releases than the "App Core" packages. It is also allowed to have\nduplicate installations of the "Plugin Core" and "Library" packages. This is all\nto make sure that upgrading Backstage is as smooth as possible and allows for\nmore flexibility across the entire plugin ecosystem.'}),"\n",(0,a.jsx)(n.h2,{id:"package-versioning-policy",children:"Package Versioning Policy"}),"\n",(0,a.jsxs)(n.p,{children:["Every individual package is versioned according to ",(0,a.jsx)(n.a,{href:"https://semver.org",children:"semver"}),".\nThis versioning is completely decoupled from the Backstage release versioning,\nmeaning you might for example have ",(0,a.jsx)(n.code,{children:"@backstage/core-plugin-api"})," version ",(0,a.jsx)(n.code,{children:"3.1.4"}),"\nbe part of the ",(0,a.jsx)(n.code,{children:"1.12"})," Backstage release."]}),"\n",(0,a.jsx)(n.p,{children:"The following versioning policy applies to all packages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Breaking changes are noted in the changelog, and documentation is updated."}),"\n",(0,a.jsxs)(n.li,{children:["Breaking changes are prefixed with ",(0,a.jsx)(n.code,{children:"**BREAKING**: "})," in the changelog."]}),"\n",(0,a.jsx)(n.li,{children:"All public exports are considered stable and will have an entry in the\nchangelog"}),"\n",(0,a.jsx)(n.li,{children:"Breaking changes are recommended to document a clear upgrade path in the\nchangelog. This may be omitted for newly introduced or unstable packages."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For packages at version ",(0,a.jsx)(n.code,{children:"1.0.0"})," or above, the following policy also applies:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All exports are marked with a ",(0,a.jsx)(n.a,{href:"#release-stages",children:"release stage"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Breaking changes to stable exports include a deprecation phase if possible.\nThe deprecation must have been released for at least one mainline release\nbefore it can be removed."}),"\n",(0,a.jsx)(n.li,{children:"The release of breaking changes document a clear upgrade path in the\nchangelog, both when deprecations are introduced and when they are removed."}),"\n",(0,a.jsxs)(n.li,{children:["Breaking changes to ",(0,a.jsx)(n.code,{children:"@alpha"})," or ",(0,a.jsx)(n.code,{children:"@beta"})," exports must result in at least a minor\nversion bump, and may be done without a deprecation period."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"changes-that-are-not-considered-breaking",children:"Changes that are Not Considered Breaking"}),"\n",(0,a.jsx)(n.p,{children:"There are a few changes that would typically be considered breaking changes, but\nthat we make exceptions for. This is both to be able to evolve the project more\nrapidly, also because the alternative ends up having a bigger impact on users."}),"\n",(0,a.jsxs)(n.p,{children:["For all Utility APIs and Backend Services that ",(0,a.jsx)(n.em,{children:"have"})," a built-in implementation,\nwe only consider the API stability for consumers of those interfaces. This means\nthat it is not considered a breaking change to break the contract for producers\nof the interface."]}),"\n",(0,a.jsxs)(n.p,{children:["Changes that fall under the above rule, must be marked with\n",(0,a.jsx)(n.code,{children:"**BREAKING PRODUCERS**:"})," in the changelog."]}),"\n",(0,a.jsxs)(n.p,{children:["For any case of dependency injection, it is not considered a breaking change to\nadd a dependency on a Utility API or Backend Service that is provided by the\nframework. This includes any dependency that is provided by the\n",(0,a.jsx)(n.code,{children:"@backstage/app-defaults"})," and ",(0,a.jsx)(n.code,{children:"@backstage/backend-defaults"})," packages."]}),"\n",(0,a.jsx)(n.h3,{id:"release-stages",children:"Release Stages"}),"\n",(0,a.jsxs)(n.p,{children:["The release stages(",(0,a.jsx)(n.code,{children:"@alpha"}),", ",(0,a.jsx)(n.code,{children:"@beta"})," ",(0,a.jsx)(n.code,{children:"@public"}),") refers to the\n",(0,a.jsx)(n.a,{href:"https://tsdoc.org/",children:"TSDoc"})," documentation tag of the export, and are also\nvisible in the API report of each package."]}),"\n",(0,a.jsx)(n.p,{children:"Backstage uses three stages to indicate the stability for each individual\npackage export."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@public"})," - considered stable and are available in the main package entry\npoint."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@beta"})," - Not visible in the main package entry point, beta exports must be\naccessed via ",(0,a.jsx)(n.code,{children:"<package-name>/beta"})," or ",(0,a.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@alpha"})," - here be dragons. Not visible in the main package entry point, alpha\nexports must be accessed via ",(0,a.jsx)(n.code,{children:"<package-name>/alpha"})," imports."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"nodejs-releases",children:"Node.js Releases"}),"\n",(0,a.jsxs)(n.p,{children:["The Backstage project uses ",(0,a.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," for both its development\ntooling and backend runtime. In order for expectations to be clear we use the\nfollowing schedule for determining the ",(0,a.jsx)(n.a,{href:"https://nodejs.org/en/about/previous-releases",children:"Node.js releases"})," that we support:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"At any given point in time we support exactly two adjacent even-numbered\nreleases of Node.js, for example v12 and v14."}),"\n",(0,a.jsxs)(n.li,{children:["Once a new Node.js release becomes ",(0,a.jsx)(n.em,{children:"Active LTS"})," we switch to support that\nrelease and the previous one. The switch is not immediate but done as soon\nas possible. You can find the Node.js version supported by each release\nin the ",(0,a.jsx)(n.code,{children:"engines"})," field in the root ",(0,a.jsx)(n.code,{children:"package.json"})," of a new app."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When we say ",(0,a.jsx)(n.em,{children:"Supporting"})," a Node.js release, that means the following:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The CI pipeline in the main Backstage repo tests towards the supported releases, and we encourage any other Backstage related projects to do the same."}),"\n",(0,a.jsxs)(n.li,{children:["New Backstage projects created with ",(0,a.jsx)(n.code,{children:"@backstage/create-app"})," will have their ",(0,a.jsx)(n.code,{children:"engines.node"})," version set accordingly."]}),"\n",(0,a.jsx)(n.li,{children:"Dropping compatibility with unsupported releases is not considered a breaking change. This includes using new syntax or APIs, as well as bumping dependencies that drop support for these versions."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"typescript-releases",children:"TypeScript Releases"}),"\n",(0,a.jsxs)(n.p,{children:["The Backstage project uses ",(0,a.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," for type checking within the project, as well as external APIs and documentation. It is important to have a clear policy for which TypeScript versions we support, since we want to be able to adopt new TypeScript features, but at the same time not break existing projects that are using older versions."]}),"\n",(0,a.jsx)(n.p,{children:"The TypeScript release cadence is roughly every three months. An important aspect of the TypeScript versioning is that it does not follow semver. In particular, there is no differentiation between major and minor versions, both of them are breaking. One way to think about it is to merge the two, for example version 4.7 can be considered major version 47, 5.0 is 50, and so on. Within these releases there can be a number of patch releases, which do follow semver."}),"\n",(0,a.jsx)(n.p,{children:"Our policy is to support the last 3 TypeScript versions, for example 4.8, 4.9, and 5.0. Converted to time, this means that we typically support the TypeScript version from the last six to nine months, depending on where in the TypeScript release window we are. This policy applies as a snapshot at the time of any given Backstage release, new TypeScript releases only apply to the following Backstage main-line release, not to the current one."}),"\n",(0,a.jsxs)(n.p,{children:["For anyone maintaining their own Backstage project, this means that you should strive to bump to the latest TypeScript version at least every 6 months, or you may encounter breakages as you upgrade Backstage packages. If you encounter any issues in doing so, please ",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"file an issue in the main Backstage repository"}),", as per this policy we should always support the latest version. In order to ensure that we do not start using new TypeScript features too early, the Backstage project itself uses the version at the beginning of the currently supported window, in the above example that would be version 4.8."]}),"\n",(0,a.jsx)(n.h2,{id:"postgresql-releases",children:"PostgreSQL Releases"}),"\n",(0,a.jsx)(n.p,{children:"The Backstage project recommends and supports using PostgreSQL for persistent storage."}),"\n",(0,a.jsxs)(n.p,{children:["The PostgreSQL ",(0,a.jsx)(n.a,{href:"https://www.postgresql.org/support/versioning/",children:"versioning policy"})," is to release a new major version every year with new features which is then supported for 5 years after its initial release."]}),"\n",(0,a.jsx)(n.p,{children:"Our policy mirrors the PostgreSQL versioning policy - we will support the last 5 major versions. We will also test the newest and oldest versions in that range. For example, if the range we support is currently 12 to 16, then we would only test 12 and 16 explicitly."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},675251:(e,n,s)=>{var a=s(667294),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var a,t={},c=null,h=null;for(a in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)r.call(n,a)&&!l.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:i,type:e,key:c,ref:h,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},785893:(e,n,s)=>{e.exports=s(675251)},511151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var a=s(667294);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);