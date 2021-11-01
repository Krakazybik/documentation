"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[557],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(4137)),a=["components"],p={sidebar_position:2},l="App",s={unversionedId:"reference/layers/app",id:"reference/layers/app",isDocsHomePage:!1,title:"App",description:"app-themed-bordered",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/app.md",sourceDirName:"reference/layers",slug:"/reference/layers/app",permalink:"/en/docs/reference/layers/app",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/reference/layers/app.md",tags:[],version:"current",lastUpdatedAt:1635749816,formattedLastUpdatedAt:"11/1/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"referenceSidebar",previous:{title:"Overview",permalink:"/en/docs/reference/layers/overview"},next:{title:"Processes",permalink:"/en/docs/reference/layers/processes"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Initializing the router",id:"initializing-the-router",children:[],level:3},{value:"Initializing external libraries",id:"initializing-external-libraries",children:[],level:3},{value:"Enabling initialization",id:"enabling-initialization",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,p=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app"},"App"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-themed-bordered",src:n(6290).Z})),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"There are usually placed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initialization of processes and other background logic"),(0,o.kt)("li",{parentName:"ul"},"initialization of providers, wrappers"),(0,o.kt)("li",{parentName:"ul"},"connecting global application styles")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The methodology does not yet regulate the content of this layer in any way, so it depends on the specific project")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"initializing-the-router"},"Initializing the router"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withRouter.tsx",title:"app/providers/withRouter.tsx"},"export const withRouter = (component: Component) => () => (\n    <Router>\n        <Suspense fallback={<Spin overlay />}>\n            <QueryParamProvider ReactRouterRoute={Route}>\n                {component()}\n            </QueryParamProvider>\n        </Suspense>\n    </Router>\n);\n")),(0,o.kt)("h3",{id:"initializing-external-libraries"},"Initializing external libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withAntd.tsx",title:"app/providers/withAntd.tsx"},"export const withAntd = (component: Component) => () => (\n    <ConfigProvider getPopupContainer={...}>\n        {component()}\n    </ConfigProvider>\n);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/withApollo.tsx",title:"app/providers/withApollo.tsx"},"const client = new ApolloClient({ ... });\n\nexport const withApollo = (component: Component) => () => (\n    <ApolloProvider client={client}>\n        {component()}\n    </ApolloProvider>\n);\n")),(0,o.kt)("h3",{id:"enabling-initialization"},"Enabling initialization"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Only one of the methods is shown here, if you use HOC for providers and logic initialization")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/providers/index.ts",title:"app/providers/index.ts"},'import compose from "compose-function";\nimport { withRouter } from "./with-router";\nimport { withAntd } from "./with-antd";\n...\n\n// 1. The compose library is often exported from some dependencies that you already use\n// e.g.: `import { compose } from "redux"`\n// 2. It is worth considering the order of HOCs connection\n// e.g.: withHOC2 cannot be started until there is a wrapper withHOC1, etc.\nexport const withProviders = compose(withRouter, withAntd,...);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=app/index.tsx",title:"app/index.tsx"},'import { withProviders } from "./providers";\n...\n\nconst App = () => { ... }\n\nexport default withProviders(App);\n')))}d.isMDXComponent=!0},6290:function(e,t,n){t.Z=n.p+"assets/images/app-f2b5dd3e5531b1008447b0487b493c0f.png"}}]);