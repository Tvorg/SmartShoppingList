(this.webpackJsonpreactless=this.webpackJsonpreactless||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),i=n.n(a),l=(n(9),n(1)),c=r.a.createContext(),d={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"},button:{background:"grey",border:"1px solid grey",borderRadius:"5px",color:"white"}};var u=function(e){var t=e.todo,n=e.index,a=e.onChange,i=Object(o.useContext)(c).removeTodo,l=[];return t.completed&&l.push("done"),r.a.createElement("li",{style:d.li},r.a.createElement("span",{className:l.join("")},r.a.createElement("input",{type:"checkbox",checked:t.completed,style:d.input,onChange:function(){return a(t.id)}}),r.a.createElement("strong",null,n+1),"\xa0",t.title),r.a.createElement("button",{style:d.button,onClick:i.bind(null,t.id)},"\xd7"))},s={ul:{listStyle:"none",margin:0,padding:0}};var m=function(e){return r.a.createElement("ul",{style:s.ul},e.todos.map((function(t,n){return r.a.createElement(u,{todo:t,key:t.id,index:n,onChange:e.onToggle})})))};var p=function(e){var t=e.onCreate,n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],c=a[1];return r.a.createElement("form",{style:{marginBottom:"1rem",margin:"0 auto",width:"600px",display:"flex",justifyContent:"space-between",height:"38px"},onSubmit:function(e){e.preventDefault(),i.trim()&&(t("\u041a\u0443\u043f\u0438\u0442\u044c "+i),c(""))}},r.a.createElement("input",{value:i,onChange:function(e){return c(e.target.value)},style:{border:"1px solid #ccc",borderRadius:"4px",width:"512px"}}),r.a.createElement("button",{type:"submit",style:{background:"grey",border:"1px solid grey",borderRadius:"5px",color:"white",width:"78px"}},"Add item"))};var g=function(){var e=r.a.useState([{id:1,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431"},{id:2,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0432\u043e\u0434\u0443"},{id:3,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e"}]),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(c.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}}},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Smart Shopping List"),n.length?r.a.createElement(m,{todos:n,onToggle:function(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):r.a.createElement("p",null,"Please add item for your list!"),r.a.createElement(p,{onCreate:function(e){o(n.concat([{title:e,id:Date.now(),completed:!1}]))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.9bd3b827.chunk.js.map