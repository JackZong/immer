(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(99)),c={id:"complex-objects",title:"\u7c7b"},i={unversionedId:"complex-objects",id:"complex-objects",isDocsHomePage:!1,title:"\u7c7b",description:"\u666e\u901a\u5bf9\u8c61\uff08\u6ca1\u6709\u539f\u578b\u7684\u5bf9\u8c61\uff09\u3001\u6570\u7ec4\u3001Map \u548c Set \u603b\u662f\u53ef\u4ee5\u7528 Immer \u66f4\u65b0\u3002\u6240\u6709\u5176\u4ed6\u5bf9\u8c61\u90fd\u5fc5\u987b\u4f7f\u7528 immerable \u7b26\u53f7\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a\u4e0e Immer \u517c\u5bb9\u3002\u5f53\u8fd9\u4e9b\u5bf9\u8c61\u4e4b\u4e00\u5728 produce \u4e2d\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5b83\u7684\u539f\u578b\u5c06\u4fdd\u7559\u5728\u526f\u672c\u4e4b\u95f4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/complex-objects.md",slug:"/complex-objects",permalink:"/immer/zh-CN/complex-objects",editUrl:"https://github.com/immerjs/immer/edit/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/complex-objects.md",version:"current",sidebar:"Immer",previous:{title:"Map \u548c Set",permalink:"/immer/zh-CN/map-set"},next:{title:"\u4ece draft \u4e2d\u63d0\u53d6\u5f53\u524d state",permalink:"/immer/zh-CN/current"}},l=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]},{value:"\u8bed\u4e49\u7ec6\u8282",id:"\u8bed\u4e49\u7ec6\u8282",children:[]}],m={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(a.b)("p",null,"\u666e\u901a\u5bf9\u8c61\uff08\u6ca1\u6709\u539f\u578b\u7684\u5bf9\u8c61\uff09\u3001\u6570\u7ec4\u3001",Object(a.b)("inlineCode",{parentName:"p"},"Map")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," \u603b\u662f\u53ef\u4ee5\u7528 Immer \u66f4\u65b0\u3002\u6240\u6709\u5176\u4ed6\u5bf9\u8c61\u90fd\u5fc5\u987b\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"immerable")," \u7b26\u53f7\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a\u4e0e Immer \u517c\u5bb9\u3002\u5f53\u8fd9\u4e9b\u5bf9\u8c61\u4e4b\u4e00\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u4e2d\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5b83\u7684\u539f\u578b\u5c06\u4fdd\u7559\u5728\u526f\u672c\u4e4b\u95f4"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import {immerable} from "immer"\n\nclass Foo {\n    [immerable] = true // \u65b9\u5f0f\u4e00\n\n    constructor() {\n        this[immerable] = true // \u65b9\u5f0f\u4e8c\n    }\n}\n\nFoo[immerable] = true // \u65b9\u5f0f\u4e09\n')),Object(a.b)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import {immerable, produce} from "immer"\n\nclass Clock {\n    [immerable] = true\n\n    constructor(hour, minute) {\n        this.hour = hour\n        this.minute = minute\n    }\n\n    get time() {\n        return `${this.hour}:${this.minute}`\n    }\n\n    tick() {\n        return produce(this, draft => {\n            draft.minute++\n        })\n    }\n}\n\nconst clock1 = new Clock(12, 10)\nconst clock2 = clock1.tick()\nconsole.log(clock1.time) // 12:10\nconsole.log(clock2.time) // 12:11\nconsole.log(clock2 instanceof Clock) // true\n')),Object(a.b)("h3",{id:"\u8bed\u4e49\u7ec6\u8282"},"\u8bed\u4e49\u7ec6\u8282"),Object(a.b)("p",null,"\u5173\u4e8e\u7c7b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"draft")," \u5bf9\u8c61\u8bed\u4e49\u5982\u4e0b\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u7c7b\u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"draft")," \u662f\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u4f46\u4e0e\u539f\u59cb\u5bf9\u8c61\u5177\u6709\u76f8\u540c\u7684\u539f\u578b\u3002"),Object(a.b)("li",{parentName:"ol"},"\u521b\u5efa ",Object(a.b)("inlineCode",{parentName:"li"},"draft")," \u65f6\uff0cImmer \u4f1a\u5c06\u6240\u6709\u62e5\u6709\u7684\u7684\u5c5e\u6027\u4ece\u6e90\u5bf9\u8c61\u590d\u5236\u5230 ",Object(a.b)("inlineCode",{parentName:"li"},"draft"),"\u3002\u8fd9\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u548c\u7b26\u53f7\u5c5e\u6027\u3002"),Object(a.b)("li",{parentName:"ol"},"\u6e90\u5bf9\u8c61\u62e5\u6709\u7684 getter \u5c06\u5728\u590d\u5236\u8fc7\u7a0b\u4e2d\u88ab\u8c03\u7528\uff0c\u5c31\u50cf ",Object(a.b)("inlineCode",{parentName:"li"},"Object.assign")," \u65b9\u6cd5\u4e00\u6837"),Object(a.b)("li",{parentName:"ol"},"\u7ee7\u627f\u7684 getter \u548c\u65b9\u6cd5\u5c06\u4fdd\u6301\u539f\u6837\u5e76\u88ab ",Object(a.b)("inlineCode",{parentName:"li"},"draft")," \u7ee7\u627f"),Object(a.b)("li",{parentName:"ol"},"Immer \u4e0d\u4f1a\u8c03\u7528\u6784\u9020\u51fd\u6570"),Object(a.b)("li",{parentName:"ol"},"\u6700\u7ec8\u5b9e\u4f8b\u5c06\u4f7f\u7528\u4e0e\u521b\u5efa ",Object(a.b)("inlineCode",{parentName:"li"},"draft")," \u76f8\u540c\u7684\u673a\u5236\u6784\u5efa\u3002"),Object(a.b)("li",{parentName:"ol"},"\u53ea\u6709\u5177\u6709 setter \u7684 getter \u624d\u80fd\u5728 ",Object(a.b)("inlineCode",{parentName:"li"},"draft")," \u4e2d\u5199\u5165\uff0c\u5426\u5219\u65e0\u6cd5\u5c06\u503c\u590d\u5236\u56de\u6765\u3002")),Object(a.b)("p",null,"\u56e0\u4e3a Immer \u4f1a\u5c06\u5bf9\u8c61\u62e5\u6709\u7684 getter \u89e3\u5f15\u7528\u5230\u666e\u901a\u5c5e\u6027\u4e2d\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u5728\u5176\u5b57\u6bb5\u4e0a\u4f7f\u7528 getter/setter \u83b7\u5f97\u7684\u5bf9\u8c61\uff0c\u5c31\u50cfMobX \u548c Vue\u3002"),Object(a.b)("p",null,"Immer \u4e0d\u652f\u6301\u5916\u6765/\u5f15\u64ce\u539f\u751f\u5bf9\u8c61\uff0c\u4f8b\u5982 DOM \u8282\u70b9\u6216 Buffers\uff0c\u4e5f\u4e0d\u652f\u6301\u7ee7\u627f\u7684 Map\u3001Set \u6216\u6570\u7ec4\uff0c\u5e76\u4e14\u4e0d\u80fd\u5728\u5b83\u4eec\u4e0a\u4f7f\u7528 immerable \u7b26\u53f7\u3002"),Object(a.b)("p",null,"\u56e0\u6b64\uff0c\u4f8b\u5982\u5728\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," \u5bf9\u8c61\u65f6\uff0c\u60a8\u5e94\u8be5\u59cb\u7ec8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," \u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u6539\u53d8\u73b0\u6709\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"Date")," \u5bf9\u8c61\u3002"))}b.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),b=function(e){var t=o.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,d=p["".concat(c,".").concat(s)]||p[s]||u[s]||a;return n?o.a.createElement(d,i(i({ref:t},m),{},{components:n})):o.a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<a;m++)c[m]=n[m];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);