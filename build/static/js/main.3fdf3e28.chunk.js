(this["webpackJsonpgh-pages"]=this["webpackJsonpgh-pages"]||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),l=n.n(r),c=(n(10),n(1)),i=o.a.createContext();n(2);var m=function(e){var t=e.todo,n=e.index,r=e.onChange,l=Object(a.useContext)(i).removeTodo,c=[];return t.completed&&c.push("done"),o.a.createElement("li",{className:"liTodoItemStyle"},o.a.createElement("span",{className:c.join("")},o.a.createElement("input",{className:"inputTodoItemStyle",type:"checkbox",checked:t.completed,onChange:function(){return r(t.id)}}),o.a.createElement("strong",null,n+1),"\xa0",t.title),o.a.createElement("button",{className:"buttonTodoItemStyle",onClick:l.bind(null,t.id)},"\xd7"))};var u=function(e){return o.a.createElement("ul",{className:"ulTodoListStyle"},e.todos.map((function(t,n){return o.a.createElement(m,{todo:t,key:t.id,index:n,onChange:e.onToggle})})))};var s=function(e){var t=e.onCreate,n=Object(a.useState)(""),r=Object(c.a)(n,2),l=r[0],i=r[1];return o.a.createElement("form",{className:"formAddStyle",onSubmit:function(e){e.preventDefault(),l.trim()&&(t("\u041a\u0443\u043f\u0438\u0442\u044c "+l),i(""))}},o.a.createElement("input",{value:l,onChange:function(e){return i(e.target.value)},className:"inputAddStyle"}),o.a.createElement("button",{type:"submit",className:"buttonAddStyle"},"Add item"))};var d=function(){var e=o.a.useState([{id:1,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431"},{id:2,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0432\u043e\u0434\u0443"},{id:3,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e"}]),t=Object(c.a)(e,2),n=t[0],a=t[1];return o.a.createElement(i.Provider,{value:{removeTodo:function(e){a(n.filter((function(t){return t.id!==e})))}}},o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",{className:"titleTextStyle"},"Smart Shopping List"),n.length?o.a.createElement(u,{todos:n,onToggle:function(e){a(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):o.a.createElement("p",null,"Please add item for your list!"),o.a.createElement(s,{onCreate:function(e){a(n.concat([{title:e,id:Date.now(),completed:!1}]))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.3fdf3e28.chunk.js.map