(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){e.exports=a(82)},49:function(e,t,a){},51:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),i=(a(49),a(50),a(51),a(15)),l=a(16),s=a(21),u=a(17),m=a(20),d=a(83),p=a(84),f=a(85),h=a(86),E=a(87),g=a(88),O=a(89),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(p.a,{href:"/"},"ShoppingList"),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(O.a,{href:"https://github.com/Volodia1999"},"Github"))))))}}]),t}(r.a.Component),v=a(90),y=a(91),j=a(92),w=a(93),I=a(19),k=a(14),_=a.n(k),A=a(22),T=a.n(A),C=function(e){return{type:"DELETE_ITEM",payload:e}},D=function(e){return{type:"ADD_ITEM",payload:e}},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).deleteAItem=function(e){a.props.deleteItem(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(v.a,null,r.a.createElement(y.a,{className:"mt-3"},t.map((function(t){var a=t._id,n=t.name;return(r.a.createElement(j.a,{key:a},r.a.createElement(w.a,{color:"danger",className:"mr-3",size:"sm",onClick:function(){return e.deleteAItem(a)}},"\xd7"),n))}))))}}]),t}(r.a.Component),x=Object(I.b)((function(e){return{item:e.items}}),{getAllItems:function(){return function(e){var t;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.awrap(T.a.get("/api/items"));case 2:t=a.sent,e({type:"GET_ITEMS",payload:t.data});case 4:case"end":return a.stop()}}))}},deleteItem:function(e){return function(t){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.awrap(T.a.delete("/api/items/".concat(e)));case 2:t(C(e));case 3:case"end":return a.stop()}}))}}})(S),M=a(13),N=a(42),L=a(43),G=a(23),B={items:[]},J=Object(M.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(G.a)({},e,{items:t.payload});case"DELETE_ITEM":return Object(G.a)({},e,{items:e.items.filter((function(e){return e._id!==t.payload}))});case"ADD_ITEM":return Object(G.a)({},e,{items:[t.payload].concat(Object(L.a)(e.items))});default:return e}}}),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,W=Object(M.e)(J,V(Object(M.a)(N.a))),X=a(18),z=a(99),F=a(94),P=a(95),R=a(96),U=a(97),$=a(98),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},a.onChange=function(e){a.setState(Object(X.a)({},e.target.name,e.target.value))},a.saveItem=function(e){e.preventDefault();var t={name:a.state.name};a.props.addItem(t),a.toggle()},a.toggle=function(){a.setState({modal:!a.state.modal})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(w.a,{color:"dark",className:"mt-5",onClick:this.toggle},"Add Item"),r.a.createElement(z.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(F.a,{toggle:this.toggle},"Add new Item"),r.a.createElement(P.a,null,r.a.createElement(R.a,{onSubmit:this.saveItem},r.a.createElement(U.a,{htmlFor:"item"},"Item"),r.a.createElement($.a,{type:"text",id:"item",name:"name",placeholder:"Add new item",onChange:this.onChange}),r.a.createElement(w.a,{color:"dark",className:"mt-3",block:!0},"Add item")))))}}]),t}(r.a.Component),H=Object(I.b)((function(e){return{}}),{addItem:function(e){return function(t){var a;return _.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.a.awrap(T.a.post("/api/items",e));case 2:a=n.sent,t(D(a.data));case 4:case"end":return n.stop()}}))}}})(q);var K=function(){return r.a.createElement(I.a,{store:W},r.a.createElement(b,null),r.a.createElement(H,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.eeed0a49.chunk.js.map