(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(3),i=n.n(r),s=(n(12),n(4)),d=n(5),u=n(7),a=n(6),l=(n(13),n(14),n(0)),j=function(t){var e=t.todos,n=t.onDeleteTodo;return Object(l.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.text;return Object(l.jsxs)("li",{className:"TodoList__item",children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},b=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:"id-1",text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React",completed:!0},{id:"id-2",text:"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router",completed:!1},{id:"id-3",text:"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux",completed:!1}]},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state.todos,e=t.reduce((function(t,e){return e.completed?t+1:t}),0);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e:",t.length]}),Object(l.jsxs)("span",{children:["\u041a\u043e\u043b-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0445:",e]})]}),Object(l.jsx)(j,{todos:t,onDeleteTodo:this.deleteTodo})]})}}]),n}(c.Component),h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.e1f3f028.chunk.js.map