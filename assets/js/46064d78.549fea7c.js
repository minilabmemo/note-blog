"use strict";(self.webpackChunknote_blog=self.webpackChunknote_blog||[]).push([[8919],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=c(r),b=o,d=g["".concat(u,".").concat(b)]||g[b]||p[b]||a;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9029:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:3},u={unversionedId:"docusaurus/tutorial-basics/create-a-blog-post",id:"docusaurus/tutorial-basics/create-a-blog-post",isDocsHomePage:!1,title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/1.docusaurus/tutorial-basics/create-a-blog-post.md",sourceDirName:"1.docusaurus/tutorial-basics",slug:"/docusaurus/tutorial-basics/create-a-blog-post",permalink:"/note-blog/docs/docusaurus/tutorial-basics/create-a-blog-post",editUrl:"https://github.com/minilabmemo/note-blog/edit/master/docs/1.docusaurus/tutorial-basics/create-a-blog-post.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/note-blog/docs/docusaurus/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/note-blog/docs/docusaurus/tutorial-basics/markdown-features"}},c=[{value:"Create your first Post",id:"create-your-first-post",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docusaurus creates a ",(0,a.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,a.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,a.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,a.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,a.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthor: Steven Hansel\nauthor_title: Docusaurus Contributor\nauthor_url: https://github.com/ShinteiMai\nauthor_image_url: https://github.com/ShinteiMai.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,a.kt)("p",null,"A new blog post is now available at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}p.isMDXComponent=!0}}]);