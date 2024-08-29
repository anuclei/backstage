/*! For license information please see 64f8917c.67f0018c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[5581],{559928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(785893),r=n(511151);const a={id:"authentication-strategies",title:"Kubernetes Authentication Strategies",sidebar_label:"Authentication Strategies",description:"Authentication Strategies in Kubernetes plugin"},i="Kubernetes Auth Strategies",c={id:"features/kubernetes/authentication-strategies",title:"Kubernetes Authentication Strategies",description:"Authentication Strategies in Kubernetes plugin",source:"@site/../docs/features/kubernetes/authenticationstrategy.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/authentication-strategies",permalink:"/docs/features/kubernetes/authentication-strategies",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/kubernetes/authenticationstrategy.md",tags:[],version:"current",frontMatter:{id:"authentication-strategies",title:"Kubernetes Authentication Strategies",sidebar_label:"Authentication Strategies",description:"Authentication Strategies in Kubernetes plugin"},sidebar:"docs",previous:{title:"Kubernetes Authentication",permalink:"/docs/features/kubernetes/authentication"},next:{title:"Troubleshooting",permalink:"/docs/features/kubernetes/troubleshooting"}},o={},d=[{value:"Context",id:"context",level:2},{value:"AuthenticationStrategy interface",id:"authenticationstrategy-interface",level:2},{value:"KubernetesCredential type",id:"kubernetescredential-type",level:3},{value:"AuthenticationStrategies examples",id:"authenticationstrategies-examples",level:2},{value:"AksStrategy",id:"aksstrategy",level:3},{value:"AwsIamStrategy",id:"awsiamstrategy",level:3},{value:"Custom AuthStrategy",id:"custom-authstrategy",level:2},{value:"Custom Pinniped auth strategy in the new backend system",id:"custom-pinniped-auth-strategy-in-the-new-backend-system",level:3},{value:"Custom Pinniped auth strategy in the old backend system",id:"custom-pinniped-auth-strategy-in-the-old-backend-system",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kubernetes-auth-strategies",children:"Kubernetes Auth Strategies"})}),"\n",(0,s.jsxs)(t.p,{children:["A Kubernetes Auth Strategy specifies the authentication steps executed on the ",(0,s.jsx)(t.strong,{children:"server side"})," to authenticate against a Kubernetes cluster,\nit also defines what authentication metadata about a Kubernetes cluster is returned to the front-end in case a\n",(0,s.jsx)(t.strong,{children:"client side auth provider"})," requires it."]}),"\n",(0,s.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,s.jsxs)(t.p,{children:["Backstage includes by default some ",(0,s.jsx)(t.a,{href:"/docs/features/kubernetes/authentication",children:"Kubernetes Auth Providers"})," to ease the authentication proccess to\nkubernetes clusters, it includes:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Server Side Providers"})," like ",(0,s.jsx)(t.code,{children:"localKubectlProxy"})," or ",(0,s.jsx)(t.code,{children:"serviceAccount"})," where the same set\nof kubernetes permissions are shared and granted among the Backstage users and plugins."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Client Side Providers"})," like ",(0,s.jsx)(t.code,{children:"aks"})," or ",(0,s.jsx)(t.code,{children:"oidc"})," where the user is authenticated with the cluster, getting only the\nkubernetes permissions granted to that specific user."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Although there are ",(0,s.jsx)(t.code,{children:"Server Side Providers"})," and ",(0,s.jsx)(t.code,{children:"Client Side Providers"}),", authenticating with a cluster requires code on both sides. Perhaps one of them does\nmost of the job, but in general not all steps to authenticate against a Kubernetes cluster are always executed exclusively on the server side or client side.\nA Kubernetes authentication flow could require splitting the authentication process among steps on the client side ",(0,s.jsx)(t.strong,{children:"and"})," steps on the server side."]}),"\n",(0,s.jsx)(t.h2,{id:"authenticationstrategy-interface",children:"AuthenticationStrategy interface"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-node/src/types/types.ts#L149",children:(0,s.jsx)(t.code,{children:"AuthenticationStrategy"})})," interface defines the steps executed on the ",(0,s.jsx)(t.strong,{children:"server side"})," to authenticate against a Kubernetes cluster. It is similar to the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-react/src/kubernetes-auth-provider/types.ts#L21",children:(0,s.jsx)(t.code,{children:"KubernetesAuthProvider"})})," interface, which defines corresponding steps on the ",(0,s.jsx)(t.strong,{children:"client side"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-node/src/types/types.ts"',children:"export interface AuthenticationStrategy {\n  getCredential(\n    clusterDetails: ClusterDetails,\n    authConfig: KubernetesRequestAuth,\n  ): Promise<KubernetesCredential>;\n\n  presentAuthMetadata(authMetadata: AuthMetadata): AuthMetadata;\n\n  validateCluster(authMetadata: AuthMetadata): Error[];\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AuthenticationStrategy"})," interface defines the following signature:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getCredential"}),": Executes the steps require on the server side to authenticate against a Kubernetes Cluster. It receives the cluster info on the ",(0,s.jsx)(t.code,{children:"clusterDetails"})," parameter and the authentication data provided from the Client Side on the ",(0,s.jsx)(t.code,{children:"authConfig"})," parameter."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"presentAuthMetadata"}),": A Kubernetes cluster configuration could include extra metadata specific to a given authentication flow (like ",(0,s.jsx)(t.a,{href:"/docs/features/kubernetes/authentication#aws",children:"AWS clusters"})," do). The ",(0,s.jsx)(t.code,{children:"presentAuthMetadata"})," method receives that metadata and filters/adds information that could be required by the front-end in a client side authentication process. The front-end gets this info via the ",(0,s.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/service/KubernetesBuilder.ts#L379",children:[(0,s.jsx)(t.code,{children:"/clusters"})," endpoint"]}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"validateCluster"}),": Allows strategies to reject clusters if they have invalid metadata. Currently this method only gets invoked when ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/cluster-locator/ConfigClusterLocator.ts#L96",children:"reading"})," clusters from the app-config."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"kubernetescredential-type",children:"KubernetesCredential type"}),"\n",(0,s.jsxs)(t.p,{children:["Something to highlight is that the ",(0,s.jsx)(t.code,{children:"getCredential"})," method on an ",(0,s.jsx)(t.code,{children:"AuthenticationStrategy"})," will return a ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/0226d424f5a3104239eb9e1eaa9f0cbf29cc1f1c/plugins/kubernetes-node/src/types/types.ts#L140",children:(0,s.jsx)(t.code,{children:"KubernetesCredential"})})," object representing a single method of authenticating with a Kubernetes cluster. This value can be:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A bearer token"}),"\n",(0,s.jsx)(t.li,{children:"A x509 client certificate and key"}),"\n",(0,s.jsx)(t.li,{children:"Anonymous authentication"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-node/src/types/types.ts"',children:"export type KubernetesCredential =\n  | { type: 'bearer token'; token: string }\n  | { type: 'x509 client certificate'; cert: string; key: string }\n  | { type: 'anonymous' };\n"})}),"\n",(0,s.jsx)(t.h2,{id:"authenticationstrategies-examples",children:"AuthenticationStrategies examples"}),"\n",(0,s.jsx)(t.h3,{id:"aksstrategy",children:"AksStrategy"}),"\n",(0,s.jsxs)(t.p,{children:["Some kubernetes Authentication Strategies are pretty simple, since the Authentication process was executed on the client side by the ",(0,s.jsx)(t.code,{children:"KubernetesAuthProvider"}),",\nSo Authentication Strategies like ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/auth/AksStrategy.ts#L28",children:(0,s.jsx)(t.code,{children:"AksStrategy"})})," or ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/auth/GoogleStrategy.ts#L29C14-L29C28",children:(0,s.jsx)(t.code,{children:"GoogleStrategy"})})," only map the info that the corresponding ",(0,s.jsx)(t.code,{children:"KubernetesAuthProvider"})," returned on the client side."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-backend/src/auth/AksStrategy.ts"',children:"export class AksStrategy implements AuthenticationStrategy {\n  public async getCredential(\n    _: ClusterDetails,\n    requestAuth: KubernetesRequestAuth,\n  ): Promise<KubernetesCredential> {\n    const token = requestAuth.aks;\n    return token\n      ? { type: 'bearer token', token: token as string }\n      : { type: 'anonymous' };\n  }\n\n  public validateCluster(): Error[] {\n    return [];\n  }\n\n  public presentAuthMetadata(_authMetadata: AuthMetadata): AuthMetadata {\n    return {};\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AksStrategy"})," is pretty simple, it is only mapping the token that ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/f0ffd38136163edd75ae340e5653cf6b349dcbc1/plugins/kubernetes-react/src/kubernetes-auth-provider/AksKubernetesAuthProvider.ts#L21",children:(0,s.jsx)(t.code,{children:"AksKubernetesAuthProvider.ts"})})," was able to get in the Client Side authentication flow."]}),"\n",(0,s.jsx)(t.h3,{id:"awsiamstrategy",children:"AwsIamStrategy"}),"\n",(0,s.jsxs)(t.p,{children:["Another AuthenticationStrategy is ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/f0ffd38136163edd75ae340e5653cf6b349dcbc1/plugins/kubernetes-backend/src/auth/AwsIamStrategy.ts#L52C40-L52C62",children:(0,s.jsx)(t.code,{children:"AwsIamStrategy"})}),", it is more complex than ",(0,s.jsx)(t.code,{children:"AksStrategy"}),", since it consumes some AWS APIs to get a kubernetes token."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-backend/src/auth/AwsIamStrategy.ts"',children:"export class AwsIamStrategy implements AuthenticationStrategy {\n  // ... code ...\n\n  public async getCredential(\n    clusterDetails: ClusterDetails,\n  ): Promise<KubernetesCredential> {\n    return {\n      type: 'bearer token',\n      token: await this.getBearerToken(\n        clusterDetails.authMetadata[ANNOTATION_KUBERNETES_AWS_CLUSTER_ID] ??\n          clusterDetails.name,\n        clusterDetails.authMetadata[ANNOTATION_KUBERNETES_AWS_ASSUME_ROLE],\n        clusterDetails.authMetadata[ANNOTATION_KUBERNETES_AWS_EXTERNAL_ID],\n      ),\n    };\n  }\n\n  private async getBearerToken(\n    clusterId: string,\n    assumeRole?: string,\n    externalId?: string,\n  ): Promise<string> {\n    // ... code ...\n\n    const request = await signer.presign(\n      {\n        headers: {\n          host: `sts.${region}.amazonaws.com`,\n          'x-k8s-aws-id': clusterId,\n        },\n        hostname: `sts.${region}.amazonaws.com`,\n        method: 'GET',\n        path: '/',\n        protocol: 'https:',\n        query: {\n          Action: 'GetCallerIdentity',\n          Version: '2011-06-15',\n        },\n      },\n      { expiresIn: 0 },\n    );\n\n    // ... code ...\n  }\n\n  public presentAuthMetadata(_authMetadata: AuthMetadata): AuthMetadata {\n    return {};\n  }\n  public validateCluster(): Error[] {\n    return [];\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"custom-authstrategy",children:"Custom AuthStrategy"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes you need to add a new way to authenticate against a kubernetes cluster not support by default by Backstage. This is how integrators can bring their own kubernetes auth strategies through the use of the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/service/KubernetesBuilder.ts#L211",children:(0,s.jsx)(t.code,{children:"addAuthStrategy"})})," method on ",(0,s.jsx)(t.code,{children:"KubernetesBuilder"})," or through the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/plugin.ts#L112",children:"AuthStrategyExtensionPoint"}),". So, on the following sections, we are going to introduce a new AuthStrategy for ",(0,s.jsx)(t.a,{href:"https://pinniped.dev",children:"Pinniped"}),", an authentication service for Kubernetes clusters."]}),"\n",(0,s.jsx)(t.h3,{id:"custom-pinniped-auth-strategy-in-the-new-backend-system",children:"Custom Pinniped auth strategy in the new backend system"}),"\n",(0,s.jsxs)(t.p,{children:["To add a new AuthStrategy, we need to create a new Pinniped ",(0,s.jsx)(t.a,{href:"/docs/backend-system/building-plugins-and-modules/index#modules",children:"backend module"})," to extend the Kubernetes-Backend plugin. The Pinniped module will interact with the Kubernetes-Backend plugin through the ",(0,s.jsx)(t.a,{href:"/docs/backend-system/architecture/extension-points",children:"extension points"})," registered by the plugin. The Kubernetes-Backend plugin ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/ebe7afad9d19f279469168ca0d4feceb92c1ad36/plugins/kubernetes-backend/src/plugin.ts#L155",children:"registers"})," multiple extension points like ",(0,s.jsx)(t.code,{children:"kubernetesObjectsProvider"}),", ",(0,s.jsx)(t.code,{children:"kubernetesClusterSupplier"}),", ",(0,s.jsx)(t.code,{children:"kubernetesFetcher"}),", ",(0,s.jsx)(t.code,{children:"kubernetesServiceLocator"})," and the ",(0,s.jsx)(t.code,{children:"kubernetesAuthStrategy"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Notice that this guide assumes that you already installed the ",(0,s.jsx)(t.a,{href:"/docs/features/kubernetes/installation",children:"Kubernetes Plugin"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To create the Backend module, run ",(0,s.jsx)(t.code,{children:"yarn new"}),", select ",(0,s.jsx)(t.code,{children:"backend-module"}),". Then fill out:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"? What do you want to create? backend-module - A new backend module\n? Enter the ID of the plugin [required] kubernetes\n? Enter the ID of the module [required] pinniped\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will create a new package at ",(0,s.jsx)(t.code,{children:"plugins/kubernetes-backend-module-pinniped"}),". We are going to need also the ",(0,s.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})," and ",(0,s.jsx)(t.code,{children:"@backstage/plugin-kubernetes-common"})," dependencies, the ",(0,s.jsx)(t.code,{children:"@backstage/plugin-kubernetes-node"})," houses the ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/ebe7afad9d19f279469168ca0d4feceb92c1ad36/plugins/kubernetes-node/src/extensions.ts#L77",children:"kubernetesAuthStrategyExtensionPoint"})," and a ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/ebe7afad9d19f279469168ca0d4feceb92c1ad36/plugins/kubernetes-node/src/auth/PinnipedHelper.ts#L53",children:"Pinniped Helper"})," class."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd plugins/kubernetes-backend-module-pinniped add @backstage/plugin-kubernetes-node\nyarn --cwd plugins/kubernetes-backend-module-pinniped add @backstage/plugin-kubernetes-common\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's create a new file to house the Pinniped authentication strategy which will implement the ",(0,s.jsx)(t.code,{children:"AuthenticationStrategy"})," interface."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-backend-module-pinniped/src/PinnipedStrategy.ts"',children:"import { KubernetesRequestAuth } from '@backstage/plugin-kubernetes-common';\nimport { Logger } from 'winston';\nimport {\n  AuthMetadata,\n  AuthenticationStrategy,\n  ClusterDetails,\n  KubernetesCredential,\n  PinnipedClientCerts,\n  PinnipedHelper,\n  PinnipedParameters,\n} from '@backstage/plugin-kubernetes-node';\nimport { JsonObject } from '@backstage/types';\n\nexport class PinnipedStrategy implements AuthenticationStrategy {\n  private pinnipedHelper: PinnipedHelper;\n\n  constructor(private readonly logger: Logger) {\n    this.pinnipedHelper = new PinnipedHelper(logger);\n  }\n\n  public async getCredential(\n    clusterDetails: ClusterDetails,\n    requestAuth: KubernetesRequestAuth,\n  ): Promise<KubernetesCredential> {\n    const params: PinnipedParameters = {\n      token:\n        ((requestAuth.pinniped as JsonObject)?.clusteridtoken as string) || '',\n      authenticator: {\n        apiGroup: 'authentication.concierge.pinniped.dev',\n        kind: 'JWTAuthenticator',\n        name: 'supervisor',\n      },\n      tokenCredentialRequest: {\n        apiGroup: 'login.concierge.pinniped.dev/v1alpha1',\n      },\n    };\n\n    const x509Data: PinnipedClientCerts =\n      await this.pinnipedHelper.tokenCredentialRequest(clusterDetails, params);\n    return {\n      type: 'x509 client certificate',\n      cert: x509Data.cert,\n      key: x509Data.key,\n    };\n  }\n\n  public validateCluster(): Error[] {\n    return [];\n  }\n\n  presentAuthMetadata: (authMetadata: AuthMetadata): AuthMetadata => {\n    return {\n      audience: authMetadata['kubernetes.io/x-pinniped-audience'],\n    };\n  },\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"PinnipedStrategy"})," implements the ",(0,s.jsx)(t.code,{children:"AuthenticationStrategy"})," interface, it uses the PinnipedHelper class to exchange the clusterIdToken ( created by a custom Pinniped client-side ",(0,s.jsx)(t.code,{children:"KubernetesAuthProvider"})," ) for a x509 certificate, certificate that will allow us to consume the kubernetes cluster. It also returns the audience value to the front-end through ",(0,s.jsx)(t.code,{children:"presentAuthMetadata"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Notice that the PinnipedHelper class will help you only to exchange the token, It doesn't introduce a cache layer, something that your strategy could introduce."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Finally we could use the ",(0,s.jsx)(t.code,{children:"kubernetesAuthStrategyExtensionPoint"})," to register our new PinnipedStrategy."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="plugins/kubernetes-backend-module-pinniped/src/module.ts"',children:"import {\n  coreServices,\n  createBackendModule,\n} from '@backstage/backend-plugin-api';\nimport {\n  AuthenticationStrategy,\n  kubernetesAuthStrategyExtensionPoint,\n} from '@backstage/plugin-kubernetes-node';\nimport { PinnipedStrategy } from './PinnipedStrategy';\nimport { loggerToWinstonLogger } from '@backstage/backend-common';\n\nexport const kubernetesModulePinniped = createBackendModule({\n  pluginId: 'kubernetes',\n  moduleId: 'pinniped',\n  register(reg) {\n    reg.registerInit({\n      deps: {\n        logger: coreServices.logger,\n        authStrategy: kubernetesAuthStrategyExtensionPoint,\n      },\n      async init({ logger, authStrategy }) {\n        const winstonLogger = loggerToWinstonLogger(logger);\n        const pinnipedStrategy: AuthenticationStrategy = new PinnipedStrategy(\n          winstonLogger,\n        );\n        authStrategy.addAuthStrategy('pinniped', pinnipedStrategy);\n      },\n    });\n  },\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"custom-pinniped-auth-strategy-in-the-old-backend-system",children:"Custom Pinniped auth strategy in the old backend system"}),"\n",(0,s.jsxs)(t.p,{children:["To add a new AuthStrategy, You could use ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/57397e7d6d2d725712c439f4ab93f2ac6aa27bf8/plugins/kubernetes-backend/src/service/KubernetesBuilder.ts#L211",children:(0,s.jsx)(t.code,{children:"addAuthStrategy"})})," method on ",(0,s.jsx)(t.code,{children:"KubernetesBuilder"}),".\nWe are going to reuse the ",(0,s.jsx)(t.code,{children:"PinnipedStrategy"})," created on the previous section. So when setting up the ",(0,s.jsx)(t.a,{href:"/docs/features/kubernetes/installation#adding-kubernetes-backend-plugin",children:"Kubernetes Backend plugin"}),", you could add a new Strategy:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport { CatalogClient } from '@backstage/catalog-client';\nimport { loggerToWinstonLogger } from '@backstage/backend-common';\nimport { AuthenticationStrategy } from '@backstage/plugin-kubernetes-node';\nimport { PinnipedStrategy } from '@internal/plugin-kubernetes-backend-module-pinniped';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogApi = new CatalogClient({ discoveryApi: env.discovery });\n  const winstonLogger = loggerToWinstonLogger(env.logger);\n  const pinnipedStrategy: AuthenticationStrategy = new PinnipedStrategy(\n    winstonLogger,\n  );\n  const { router } = await KubernetesBuilder.createBuilder({\n    logger: env.logger,\n    config: env.config,\n    catalogApi,\n    permissions: env.permissions,\n  })\n    .addAuthStrategy('pinniped', pinnipedStrategy)\n    .build();\n  return router;\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},675251:(e,t,n)=>{var s=n(667294),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,a={},d=null,u=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:u,props:a,_owner:c.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(667294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);