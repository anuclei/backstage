/*! For license information please see 9500f25b.04d91b4a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[383030],{998707:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(785893),o=r(511151);const s={id:"heroku",title:"Deploying with Heroku",sidebar_label:"Heroku",description:"How to deploy Backstage to Heroku"},t=void 0,c={id:"deployment/heroku",title:"Deploying with Heroku",description:"How to deploy Backstage to Heroku",source:"@site/../docs/deployment/heroku.md",sourceDirName:"deployment",slug:"/deployment/heroku",permalink:"/docs/deployment/heroku",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/heroku.md",tags:[],version:"current",frontMatter:{id:"heroku",title:"Deploying with Heroku",sidebar_label:"Heroku",description:"How to deploy Backstage to Heroku"},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/deployment/k8s"},next:{title:"Koyeb",permalink:"/docs/deployment/koyeb"}},i={},l=[{value:"Create App",id:"create-app",level:2},{value:"Domain",id:"domain",level:2},{value:"Build Script",id:"build-script",level:2},{value:"Start Command",id:"start-command",level:2},{value:"Database",id:"database",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Docker",id:"docker",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Heroku is a Platform as a Service (PaaS) designed to simplify application deployment."}),"\n",(0,a.jsx)(n.h2,{id:"create-app",children:"Create App"}),"\n",(0,a.jsxs)(n.p,{children:["Starting with an existing Backstage app or follow the ",(0,a.jsx)(n.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})," to create a new one."]}),"\n",(0,a.jsxs)(n.p,{children:["Install the\n",(0,a.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/heroku-cli",children:"Heroku CLI"})," and create a new Heroku app:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"cd your-app/\nheroku apps:create <your-app>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"domain",children:"Domain"}),"\n",(0,a.jsx)(n.p,{children:"Get Heroku app URL:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku domains -a <your-app>\n<your-app-123>.herokuapp.com\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The core ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/plugin-app-backend",children:"app-backend plugin"})," allows a single Heroku app to serve the frontend and backend. To make this work you need to update the ",(0,a.jsx)(n.code,{children:"baseUrl"})," and ",(0,a.jsx)(n.code,{children:"port"})," in ",(0,a.jsx)(n.code,{children:"app-config.production.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: https://<your-app-123>.herokuapp.com\n\nbackend:\n  baseUrl: https://<your-app-123>.herokuapp.com\n  listen:\n    port:\n      $env: PORT\n      # The $PORT environment variable is a feature of Heroku\n      # https://devcenter.heroku.com/articles/dynos#web-dynos\n"})}),"\n",(0,a.jsx)(n.h2,{id:"build-script",children:"Build Script"}),"\n",(0,a.jsxs)(n.p,{children:["Add a build script in ",(0,a.jsx)(n.code,{children:"package.json"})," to compile frontend during deployment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"scripts": {\n  "build": "yarn build:backend --config ../../app-config.yaml --config ../../app-config.production.yaml"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"start-command",children:"Start Command"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/procfile",children:"Procfile"})," in the app's root:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'echo "web: yarn workspace backend start --config ../../app-config.yaml --config ../../app-config.production.yaml" > Procfile\n'})}),"\n",(0,a.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,a.jsxs)(n.p,{children:["Provision a ",(0,a.jsx)(n.a,{href:"https://elements.heroku.com/addons/heroku-postgresql",children:"Heroku Postgres"})," database:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku addons:create heroku-postgresql -a <your-app>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Update ",(0,a.jsx)(n.code,{children:"database"})," in ",(0,a.jsx)(n.code,{children:"app-config.production.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"backend:\n  database:\n    client: pg\n    pluginDivisionMode: schema\n    ensureExists: false\n    ensureSchemaExists: true\n    connection: ${DATABASE_URL}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Allow postgres self-signed certificates:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku config:set PGSSLMODE=no-verify -a <your-app>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,a.jsx)(n.p,{children:"Commit changes and push to Heroku to build and deploy:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'git add Procfile && git commit -am "configure heroku"\ngit push heroku main\n'})}),"\n",(0,a.jsx)(n.p,{children:"View the app in the browser:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku open -a <your-app>\n"})}),"\n",(0,a.jsx)(n.p,{children:"View logs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku logs -a <your-app>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,a.jsxs)(n.p,{children:["As an alternative to git deploys, Heroku also ",(0,a.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/container-registry-and-runtime",children:"supports container images"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Login to Heroku's container registry:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku container:login\n"})}),"\n",(0,a.jsx)(n.p,{children:"Configure the Heroku app to run a container image:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"heroku stack:set container -a <your-app>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Locally run the ",(0,a.jsx)(n.a,{href:"https://backstage.io/docs/deployment/docker/#host-build",children:"host build commands"}),", they must be run whenever you are going to publish a new image:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"yarn install --frozen-lockfile\nyarn tsc\nyarn build:backend --config ../../app-config.yaml --config ../../app-config.production.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Build, push, and release the container image to the ",(0,a.jsx)(n.code,{children:"web"})," dyno:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker image build . -f packages/backend/Dockerfile --tag registry.heroku.com/<your-app>/web\ndocker push registry.heroku.com/<your-app>/web\nheroku container:release web -a <your-app>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},675251:(e,n,r)=>{var a=r(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var a,s={},l=null,d=null;for(a in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,a)&&!i.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var a=r(667294);const o={},s=a.createContext(o);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);