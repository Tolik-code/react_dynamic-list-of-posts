(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(2),u=(n(11),n(12),n(1)),l=n.n(u),i=n(3),m="https://mate-api.herokuapp.com",p=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts/")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){return!t||+e.userId===+t}))}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/posts/").concat(t)).then((function(e){return e.json()})).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(14),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),b=(n(15),function(e){var t=e.userId,n=e.selectedPostId,c=e.setPostId,s=Object(a.useState)(""),u=Object(o.a)(s,2),m=u[0],f=u[1],b=Object(a.useState)(!0),E=Object(o.a)(b,2),h=E[0],v=E[1];return Object(a.useEffect)((function(){v(!0),function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t).then((function(e){f(e)}));case 2:v(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),h?r.a.createElement(d,null):r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},m&&m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #",t,"]:"),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){if(n===e.id)return c(0);c(e.id)}},n===e.id?"close":"open"))}))))}),E=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/comments/")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){return e.postId===t}))}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return fetch("".concat(m,"/comments/"),{method:"POST",body:JSON.stringify(e)})},v=(n(16),function(e){var t=e.postId,n=e.loadComments,c=e.setLoadComments,s=Object(a.useState)(""),u=Object(o.a)(s,2),m=u[0],p=u[1],f=Object(a.useState)(""),d=Object(o.a)(f,2),b=d[0],E=d[1],v=Object(a.useState)(""),_=Object(o.a)(v,2),j=_[0],N=_[1],O=Object(a.useState)(""),w=Object(o.a)(O,2),y=w[0],x=w[1],P=function(e){var t=e.target;switch(x(""),t.name){case"name":p(t.value);break;case"email":E(t.value);break;default:N(t.value)}},k=function(){var e=Object(i.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),m.trim()&&b.trim()&&j.trim()){e.next=3;break}return e.abrupt("return",x("no valid data"));case 3:return c(!0),r={postId:t,name:m,email:b,body:j},p(""),N(""),E(""),e.next=8,h(r);case 8:return e.next=10,n();case 10:c(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"NewCommentForm",onSubmit:k},y&&r.a.createElement("p",{className:"NewCommentForm__error"},y),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",required:!0,value:m,onChange:P})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"email",required:!0,name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:b,onChange:P})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",required:!0,value:j,onChange:P})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),_=(n(17),function(e){var t=e.selectedPostId,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),h=b[0],_=b[1],j=Object(a.useState)(!0),N=Object(o.a)(j,2),O=N[0],w=N[1],y=Object(a.useState)(!0),x=Object(o.a)(y,2),P=x[0],k=x[1],C=Object(a.useState)(""),S=Object(o.a)(C,2),I=S[0],L=S[1],g=function(){return E(t).then((function(e){return _(e)}))};Object(a.useEffect)((function(){k(!0),function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t).then((function(e){return u(e)}));case 2:return e.next=4,g();case 4:k(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);var D=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,L(!0),e.next=4,a=n.dataset.commentid,fetch("".concat(m,"/comments/").concat(a),{method:"DELETE"});case 4:return e.next=6,g();case 6:L(!1);case 7:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();return P?r.a.createElement(d,null):r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s&&s.body)),I?r.a.createElement(d,null):r.a.createElement("section",{className:"PostDetails__comments"},h&&h.length?r.a.createElement("button",{type:"button",className:"button",onClick:function(){w(!O)}},O?"Hide":"Show"," - ".concat(h.length," - "),"comments"):r.a.createElement("h4",null,"no comments"),r.a.createElement("ul",{className:"PostDetails__list"},h&&O&&h.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button","data-commentid":e.id,onClick:D},"X"),r.a.createElement("p",null,e.body))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(v,{setLoadComments:L,postId:t,loadComments:g}))))}),j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),l=u[0],i=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:n,onChange:function(e){var t=e.target;c(t.value)}},r.a.createElement("option",{value:""},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{userId:n,selectedPostId:"".concat(l),setPostId:i})),r.a.createElement("div",{className:"App__content"},l?r.a.createElement(_,{selectedPostId:l}):r.a.createElement("h3",null,"no selected post"))))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.dac34e4d.chunk.js.map