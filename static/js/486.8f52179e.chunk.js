"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[486],{486:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(439),c=e(87),u=e(689),i=e(791),o=e(861),a=e(757),s=e.n(a),f=e(390);function l(){return(l=(0,o.Z)(s().mark((function n(t,e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(f._).concat(t).concat(f.$).concat(e)).then((function(n){return n.json()}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var h=function(n,t){return l.apply(this,arguments)},v=e(184);var d=function(){var n,t=(0,i.useState)([]),e=(0,r.Z)(t,2),o=e[0],a=e[1],s=(0,c.lr)(),f=(0,r.Z)(s,2),l=f[0],d=f[1],p=(0,u.TH)(),_=null!==(n=l.get("movieId"))&&void 0!==n?n:"",m="&query=".concat(_);return(0,v.jsxs)("div",{children:[(0,v.jsx)("input",{type:"text",value:_,onChange:function(n){if(""===n.target.value)return d({});d({movieId:n.target.value})}}),(0,v.jsx)("button",{onClick:function(){h("search/movie?api_key=",m).then((function(n){return a(n.results)})).catch((function(n){console.log(n)}))},children:"Search"}),(0,v.jsx)("ul",{children:o.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(c.rU,{state:{from:p},to:"".concat(n.id),children:n.original_title})},n.id)}))})]})}},390:function(n,t,e){e.d(t,{$:function(){return c},_:function(){return r}});var r="https://api.themoviedb.org/3/",c="acac49daeae449d51e6ac182f82d5604"},861:function(n,t,e){function r(n,t,e,r,c,u,i){try{var o=n[u](i),a=o.value}catch(s){return void e(s)}o.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var i=n.apply(t,e);function o(n){r(i,c,u,o,a,"next",n)}function a(n){r(i,c,u,o,a,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=486.8f52179e.chunk.js.map