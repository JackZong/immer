(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(99)),c={id:"curried-produce",title:"\u67ef\u91cc\u5316 producers"},i={unversionedId:"curried-produce",id:"curried-produce",isDocsHomePage:!1,title:"\u67ef\u91cc\u5316 producers",description:"<div",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/curried-produce.mdx",slug:"/curried-produce",permalink:"/immer/zh-CN/curried-produce",editUrl:"https://github.com/immerjs/immer/edit/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/curried-produce.mdx",version:"current",sidebar:"Immer",previous:{title:"\u4f7f\u7528 produce",permalink:"/immer/zh-CN/produce"},next:{title:"React & Immer",permalink:"/immer/zh-CN/example-setstate"}},d=[],p={toc:d};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",Object(a.b)("details",null,Object(a.b)("summary",{className:"egghead-summary"},"egghead.io \u7b2c\u516d\u8bfe\uff1a \u4f7f\u7528\u67ef\u91cc\u5316\u7b80\u5316\u4ee3\u7801"),Object(a.b)("br",null),Object(a.b)("div",null,Object(a.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/javascript-simplify-immer-producer-functions-using-currying/embed"})),Object(a.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/javascript-simplify-immer-producer-functions-using-currying"},"Hosted on egghead.io")),Object(a.b)("p",null,"\u5c06\u51fd\u6570\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c1a\u672a\u5c06 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u5e94\u7528\u4e8e\u7279\u5b9a state\uff0c\u800c\u662f\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u5e94\u7528\u4e8e\u5c06\u6765\u4f20\u9012\u7ed9\u5b83\u7684\u4efb\u4f55 state\u3002\u8fd9\u901a\u5e38\u79f0\u4e3a\u67ef\u91cc\u5316\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\nfunction toggleTodo(state, id) {\n    return produce(state, draft => {\n        const todo = draft.find(todo => todo.id === id)\n        todo.done = !todo.done\n    })\n}\n\nconst baseState = [\n    {\n        id: "JavaScript",\n        title: "Learn TypeScript",\n        done: true\n    },\n    {\n        id: "Immer",\n        title: "Try Immer",\n        done: false\n    }\n]\n\nconst nextState = toggleTodo(baseState, "Immer")\n')),Object(a.b)("p",null,"\u4e0a\u9762\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"toggleTodo")," \u6a21\u5f0f\u975e\u5e38\u5178\u578b\uff1b\u4f20\u9012\u4e00\u4e2a\u73b0\u6709\u7684 state \u6765 ",Object(a.b)("inlineCode",{parentName:"p"},"produce"),"\uff0c\u4fee\u6539 ",Object(a.b)("inlineCode",{parentName:"p"},"draft"),"\uff0c\u7136\u540e\u8fd4\u56de\u7ed3\u679c\u3002\u7531\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"state")," \u9664\u4e86\u5c06\u5176\u4f20\u9012\u7ed9 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u4e4b\u5916\u6ca1\u6709\u5176\u4ed6\u4efb\u4f55\u7528\u9014\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u7684\u67ef\u91cc\u5316\u5f62\u5f0f\u6765\u7b80\u5316\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u5176\u4e2d\u60a8\u53ea\u4f20\u9012 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," recipe \u51fd\u6570\uff0c\u5e76\u4e14 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u5c06\u8fd4\u56de\u4e00\u4e2a\u5e94\u7528 recipe \u5230\u57fa\u7840\u72b6\u6001\u7684\u65b0\u51fd\u6570\u3002\u8fd9\u5141\u8bb8\u6211\u4eec\u7f29\u77ed\u4e0a\u8ff0 ",Object(a.b)("inlineCode",{parentName:"p"},"toggleTodo")," \u5b9a\u4e49\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\n// curried producer:\nconst toggleTodo = produce((draft, id) => {\n    const todo = draft.find(todo => todo.id === id)\n    todo.done = !todo.done\n})\n\nconst baseState = [\n    /* as is */\n]\n\nconst nextState = toggleTodo(baseState, "Immer")\n')),Object(a.b)("p",null,"\u8bf7\u6ce8\u610f\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"id")," \u53c2\u6570\u73b0\u5728\u5df2\u6210\u4e3a recipe \u51fd\u6570\u7684\u4e00\u90e8\u5206\uff01\u8fd9\u79cd\u62e5\u6709 curried producers \u7684\u6a21\u5f0f\u4e0e React \u4e2d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," Hook \u975e\u5e38\u5de7\u5999\u5730\u7ed3\u5408\u5728\u4e00\u8d77\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u9875\u770b\u5230\u3002"))}u.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,b=l["".concat(c,".").concat(m)]||l[m]||s[m]||a;return r?o.a.createElement(b,i(i({ref:t},p),{},{components:r})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);