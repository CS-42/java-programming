"use strict";(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[280],{21530:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var o=n(67294),l=n(50535),r=n(24555),a=n.n(r),i=n(25444),c=n(35414),m=n(22989),s=n(11779),d=n(64663),u=n(13578);const p=l.default.footer.withConfig({displayName:"CoursePageFooter__CoursePageFooterWrapper",componentId:"sc-1wp274x-0"})(["background-color:white;color:black;padding:3rem;"]),f=l.default.div.withConfig({displayName:"CoursePageFooter__CoursePageFooterContent",componentId:"sc-1wp274x-1"})(["display:flex;justify-content:center;max-width:960px;margin:0 auto;"]);class h extends o.Component{render(){return o.createElement(p,null,o.createElement(f,null,o.createElement(d.Z,{style:{width:"400px",fontSize:"0.8rem",margin:0}})))}}var g=(0,u.Z)(h),w=n(94694),C=n(27611),E=n(54021),y=n(86810),b=n(47065),v=n(77606),_=n(23168),k=n(58591);const x=(0,l.default)(i.Link).withConfig({displayName:"EndOfSubSection__StyledLink",componentId:"ees48a-0"})(["color:black;text-decoration:none;padding:1rem;border-radius:0.25rem;margin:1rem 0;display:inline-block;width:100%;border-radius:10px;transition:background-color 0.2s;&:hover{text-decoration:none;color:black;background-color:#eeeeee;}"]),I=(0,l.default)(v.G).withConfig({displayName:"EndOfSubSection__StyledIcon",componentId:"ees48a-1"})(["vertical-align:middle;margin-right:1rem;margin-left:0.5rem;color:var(--color);font-size:1.5em;"]),S=l.default.div.withConfig({displayName:"EndOfSubSection__ButtonWrapper",componentId:"ees48a-2"})(["display:flex;align-items:center;"]);class N extends o.Component{render(){return o.createElement(C.Z.Consumer,null,(e=>{const t=e.current.path;let n=t;const l=(0,b.Nk)(t,"/",2);-1!==l&&(n=t.substr(0,l));const r=e.all.filter((e=>e.path.startsWith(n+"/"))).sort(((e,t)=>(e=e.path.toLowerCase())>(t=t.path.toLowerCase())?1:t>e?-1:0));let a=null;r.forEach(((e,n)=>{e.path===t&&(a=n)}));let i=null;return null!==a&&a!==r.length-1&&(i=r[a+1]),o.createElement("div",null,this.props.t("endReached")," ",i&&o.createElement(o.Fragment,null,this.props.t("continueToNext")," ",o.createElement(S,null,o.createElement(x,{to:i.path},o.createElement(I,{icon:_.eFW}),a+2,". ",i.title))),o.createElement("p",null,this.props.t("rememberToCheckPoints")))}))}}var T=(0,k.Z)("common")((0,u.Z)(N));function Z(e){if("undefined"!=typeof window)try{const t=document.querySelector(e);if(!t)return void console.warn("Could not find the element to scroll to.");t.scrollIntoView()}catch(t){console.warn("Could not scroll element into view",t)}}const P=(0,l.default)(v.G).withConfig({displayName:"CourseContentTemplate__StyledIcon",componentId:"sc-1m06ow0-0"})(["margin-right:0.25rem;font-size:1em;"]),F=l.default.article.withConfig({displayName:"CourseContentTemplate__ContentWrapper",componentId:"sc-1m06ow0-1"})([""]),L=(0,l.default)(i.Link).withConfig({displayName:"CourseContentTemplate__UpLink",componentId:"sc-1m06ow0-2"})(["color:#332c2cb3 !important;font-weight:bold;margin-bottom:1rem !important;display:block;:hover{text-decoration:none;color:#805050b3 !important;}"]);class W extends o.Component{async componentDidMount(){var e;if(!(0,w.Pl)())return;let t=await(0,w.gb)();if(void 0===(null==t||null===(e=t.extra_fields)||void 0===e?void 0:e.research)&&(0,i.navigate)("/missing-info"),"undefined"!=typeof window&&window.location.hash){const e=window.location.hash;setTimeout((()=>{Z(e)}),100),setTimeout((()=>{Z(e)}),500),setTimeout((()=>{Z(e)}),1e3),setTimeout((()=>{Z(e)}),2e3)}}render(){const{data:e}=this.props,{frontmatter:t,htmlAst:n}=e.page,l=e.allPages.edges.map((e=>{var t;return null===(t=e.node)||void 0===t?void 0:t.frontmatter})),r=(0,s.Z)(),i=new(a())({createElement:o.createElement,components:r}).Compiler,d=(0,b.fm)(""+t.path.split(/\//g)[1].replace(/-/g," ")),u="/"+t.path.split(/\//g)[1];return o.createElement(o.Fragment,null,o.createElement(c.q,{title:t.title}),o.createElement(C.Z.Provider,{value:{all:l,current:t}},o.createElement(E.Oo,null,o.createElement(m.Z,null,o.createElement(o.Fragment,null,o.createElement(y.Z,null,o.createElement(F,null,o.createElement(L,{to:u},o.createElement(P,{icon:_.M3_}),d),o.createElement("h1",null,t.title),i(n),o.createElement(T,null))),o.createElement(g,null))))))}}W.contextType=E.ZP}}]);
//# sourceMappingURL=component---src-templates-course-content-template-js-9fa93b1c9fc138a6cc97.js.map