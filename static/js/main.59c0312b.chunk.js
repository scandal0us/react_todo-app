(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),l=o.n(n),a=o(8),c=o.n(a),r=(o(16),o(17),o(1)),d=o(2),s=o(4),i=o(3),u=o(5),m=o(6),f=o(9),h=function(e){var t=e.todo,o=e.handleToggle,n=e.deleteTodo;return l.a.createElement("li",{key:t.id,className:""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onChange:function(){return o(t.id)},checked:t.completed}),l.a.createElement("label",{className:t.completed?"completed":null,htmlFor:"todo-1"},t.title),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})))},p=function(e){var t=e.todos,o=e.handleToggle,n=e.deleteTodo;return l.a.createElement("ul",{className:"todo-list"},t.map(function(e){return l.a.createElement(h,{key:e.id,todo:e,handleToggle:o,deleteTodo:n})}))},g=function(e){function t(){var e,o;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],newTodo:{title:""},sortField:"all"},o.addTodo=function(e){e.preventDefault(),o.setState(function(e){return{todos:[].concat(Object(f.a)(e.todos),[e.newTodo]),newTodo:{title:""}}})},o.getTodo=function(e){var t=e.target.value,n={id:Math.floor(Math.random()*Math.floor(1e3)),title:t,completed:!1};e.preventDefault(),o.setState({newTodo:n})},o.deleteTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.clearCompletedTodos=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o.handleToggle=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(m.a)({},t,{completed:!t.completed}):t})}})},o.handleToggleAll=function(){o.setState(function(e){return{todos:e.todos.map(function(e){return Object(m.a)({},e,{completed:!e.completed})})}})},o.handleFilter=function(e){o.setState({filterBy:e})},o.setFilteredTodos=function(e){var t=o.state.todos;switch(e){case"active":return t.filter(function(e){return!e.completed});case"completed":return t.filter(function(e){return e.completed});default:return t}},o}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.todos);var t=this.setFilteredTodos(this.state.filterBy);return l.a.createElement("form",{onSubmit:this.addTodo},l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.getTodo,value:this.state.newTodo.title})),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:this.handleToggleAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(p,{todos:t,handleToggle:this.handleToggle,deleteTodo:this.deleteTodo})),l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},this.state.todos.filter(function(e){return!e.completed}).length," items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{className:"selected",onClick:function(){return e.handleFilter("active")},href:"#/"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{className:"selected",onClick:function(){return e.handleFilter("all")},href:"#/active"},"All")),l.a.createElement("li",null,l.a.createElement("a",{className:"selected",onClick:function(){return e.handleFilter("completed")},href:"#/completed"},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",style:this.state.todos.some(function(e){return e.completed})?{display:"block"}:{display:"none"},onClick:this.clearCompletedTodos},"Clear completed"))))}}]),t}(l.a.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(g,null)}}]),t}(l.a.Component);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.59c0312b.chunk.js.map