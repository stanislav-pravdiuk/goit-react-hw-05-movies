"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{622:function(t,n,e){e.d(n,{Z:function(){return l}});var r=e(689),a=e(87),c="gallery_imageGallery__KmnX4",i="gallery_imageGallery__item__KEebH",o="gallery_imageGalleryItem__image__dGH3g",u="gallery_titleGalleryItem__image__9EjIW",s=e(184);var l=function(t){var n=t.object,e=(0,r.TH)();return(0,s.jsx)("ul",{className:c,children:n.map((function(t){var n,r="https://image.tmdb.org/t/p/original/".concat(t.poster_path);return(0,s.jsx)("li",{className:i,children:(0,s.jsxs)(a.rU,{state:{from:e},to:"/movies/".concat(t.id),children:[(0,s.jsx)("img",{className:o,src:r,alt:t.title}),(0,s.jsx)("p",{className:u,children:null!==(n=t.title)&&void 0!==n?n:t.name})]})},t.id)}))})}},415:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(79),i=e(622),o=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],u=n[1],s="trending/all/day?api_key=";return(0,a.useEffect)((function(){(0,c.Z)(s).then((function(t){return u(t.results)})).catch((function(t){console.log(t)}))}),[s]),(0,o.jsx)(i.Z,{object:e})}},390:function(t,n,e){e.d(n,{$:function(){return a},_:function(){return r}});var r="https://api.themoviedb.org/3/",a="acac49daeae449d51e6ac182f82d5604"},79:function(t,n,e){var r=e(861),a=e(757),c=e.n(a),i=e(390);function o(){return(o=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i._).concat(n).concat(i.$)).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n.Z=function(t){return o.apply(this,arguments)}},861:function(t,n,e){function r(t,n,e,r,a,c,i){try{var o=t[c](i),u=o.value}catch(s){return void e(s)}o.done?n(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,c){var i=t.apply(n,e);function o(t){r(i,a,c,o,u,"next",t)}function u(t){r(i,a,c,o,u,"throw",t)}o(void 0)}))}}e.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=415.716d85e5.chunk.js.map