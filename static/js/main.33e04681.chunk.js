(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(8),r=o.n(l),c=(o(16),o(17),o(1)),d=o(2),i=o(4),s=o(3),u=o(5),m=o(6),f=o(9),p=function(e){var t=e.todo,o=e.handleToggle,n=e.deleteTodo;return a.a.createElement("li",{key:t.id,className:""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onChange:function(){return o(t.id)},checked:t.completed}),a.a.createElement("label",{className:t.completed?"completed":null,htmlFor:"todo-1"},t.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})))},h=function(e){var t=e.todos,o=e.handleToggle,n=e.deleteTodo;return a.a.createElement("ul",{className:"todo-list"},t.map(function(e){return a.a.createElement(p,{key:e.id,todo:e,handleToggle:o,deleteTodo:n})}))},T=function(e){var t=e.title,o=e.addTodo,n=e.getTodo;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:o},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:n,value:t})))},g=[{filterName:"all",filterText:"All"},{filterName:"active",filterText:"Active"},{filterName:"completed",filterText:"Completed"}],b=function(e){var t=e.todos,o=e.handleFilter,n=e.clearCompletedTodos;return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},t.filter(function(e){return!e.completed}).length," items left"),a.a.createElement("ul",{className:"filters"},g.map(function(e){return a.a.createElement("li",{key:e.filterName},a.a.createElement("a",{className:"selected",onClick:function(){return o(e.filterName)},href:"#/"},e.filterText))})),a.a.createElement("button",{type:"button",className:"clear-completed",style:t.some(function(e){return e.completed})?{display:"block"}:{display:"none"},onClick:n},"Clear completed"))},E=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],newTodo:{title:""},sortField:"all"},o.addTodo=function(e){e.preventDefault(),o.setState(function(e){return{todos:[].concat(Object(f.a)(e.todos),[e.newTodo]),newTodo:{title:""}}})},o.getTodo=function(e){var t=e.target.value,n={id:Math.floor(Math.random()*Math.floor(1e3)),title:t,completed:!1};e.preventDefault(),o.setState({newTodo:n})},o.deleteTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.clearCompletedTodos=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o.handleToggle=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(m.a)({},t,{completed:!t.completed}):t})}})},o.handleToggleAll=function(){o.setState(function(e){return{todos:e.todos.map(function(e){return Object(m.a)({},e,{completed:!0})})}})},o.handleFilter=function(e){o.setState({filterBy:e})},o.setFilteredTodos=function(e){var t=o.state.todos;switch(e){case"active":return t.filter(function(e){return!e.completed});case"completed":return t.filter(function(e){return e.completed});default:return t}},o}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){console.log(this.state.todos);var e=this.setFilteredTodos(this.state.filterBy);return a.a.createElement("section",{className:"todoapp"},a.a.createElement(T,{title:this.state.newTodo.title,addTodo:this.addTodo,getTodo:this.getTodo}),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.handleToggleAll}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(h,{todos:e,handleToggle:this.handleToggle,deleteTodo:this.deleteTodo})),a.a.createElement(b,{todos:this.state.todos,handleFilter:this.handleFilter,clearCompletedTodos:this.clearCompletedTodos}))}}]),t}(a.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(E,null)}}]),t}(a.a.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.33e04681.chunk.js.map