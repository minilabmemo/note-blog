"use strict";(self.webpackChunknote_blog=self.webpackChunknote_blog||[]).push([[4060],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||l;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9327:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],c={title:"[\u6e2c\u8a66]JMETER\u7684\u4f7f\u7528"},i={unversionedId:"tool/test_tool",id:"tool/test_tool",isDocsHomePage:!1,title:"[\u6e2c\u8a66]JMETER\u7684\u4f7f\u7528",description:"JMETER\u5728linex\u5e95\u4e0b\u7684\u6307\u4ee4apache-jmeter-4.0",source:"@site/docs/tool/test_tool.md",sourceDirName:"tool",slug:"/tool/test_tool",permalink:"/note-blog/docs/tool/test_tool",editUrl:"https://github.com/minilabmemo/note-blog/edit/master/docs/tool/test_tool.md",version:"current",frontMatter:{title:"[\u6e2c\u8a66]JMETER\u7684\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u300cflow\u300dmurmur",permalink:"/note-blog/docs/tool/murmur"},next:{title:"\u300c\u66ab\u8a18\u300d\u5404\u7a2e\u8edf\u9ad4\u5de5\u5177",permalink:"/note-blog/docs/tool/tools"}},u=[],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JMETER\u5728linex\u5e95\u4e0b\u7684\u6307\u4ee4apache-jmeter-4.0\n\u53ea\u8981\u5c07GUI\u7248\u672c\u8a2d\u5b9a\u5b8c\u5f8c\u53e6\u5b58jmx\u6a94\u6848\n\u7136\u5f8c\u628aapache-jmeter-4.0\u8207jmx\u6a94\u6848\u4e1f\u9032linux\n\u7136\u5f8c\u5efa\u7acbreport\u4f4d\u7f6e\uff0c\u5230\u6642\u6703\u81ea\u52d5\u751f\u6210test.jtl\u8207\u5176\u4ed6\u6a94\u6848\uff0c\u5167\u6709html\u53ef\u4ee5\u6253\u958b\u5c31\u662f\u5831\u544a\u4e86\u3002\nsudo sh jmeter -n -t /home/eda/testTool/jmx/httppush-u1-5m_stage201.jmx -l /home/eda/testTool/report/test.jtl -e -o /home/eda/testTool/report/test"),(0,l.kt)("p",null,"GNU / Linux \u5404\u7a2e\u58d3\u7e2e\u8207\u89e3\u58d3\u7e2e\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://note.drx.tw/2008/04/command.html"},"http://note.drx.tw/2008/04/command.html")),(0,l.kt)("p",null,"Jmeter\u5206\u5e03\u5f0f\u6267\u884c\u62a5\u9519\u89e3\u51b3\u65b9\u6cd5\u6c47\u603b\n",(0,l.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1540047"},"https://cloud.tencent.com/developer/article/1540047")))}m.isMDXComponent=!0}}]);