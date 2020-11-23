(this["webpackJsonpexercise-tracker"]=this["webpackJsonpexercise-tracker"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),c=(a(86),a(23)),o=a(6),l=a(16),u=a(17),m=a(19),h=a(18),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"ExerciseTracker"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),a}(n.Component),b=a(7),p=a(12),g=a.n(p),E=a(78);a.n(E).a.config();var v="mongodb+srv://Kable:Kable2020.@cluster0.g8oc5.mongodb.net/Cluster0?retryWrites=true&w=majority",f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(c.b,{to:"/edit/"+e.exercise._id},"edit"),"|"," ",r.a.createElement("a",{href:"/",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},C=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).deleteExercise=n.deleteExercise.bind(Object(b.a)(n)),n.state={exercises:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(v+"exercises/").then((function(t){e.setState({exercises:t.data}),console.log("this is the class project")})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){g.a.delete(v+"exercises/"+e).then((function(e){return console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return r.a.createElement(f,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),a}(n.Component),x=a(36),y=a.n(x),D=(a(67),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(b.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(v+"exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),g.a.get(v+"users/").then((function(t){e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post(v+"/exercises/update/"+this.props.match.params.id,t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Username: "),r.a.createElement("select",{ref:"userInput",className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration(in minutes)"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"edit Exercise Log",className:"btn btn-primary"}))))}}]),a}(n.Component)),k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(b.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get(v+"users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post(v+"exercises/add",t).then((function(e){console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Duration(in minutes) "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date:"),r.a.createElement("div",null,r.a.createElement(y.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Excercise Log",className:"btn-btn-primary"}))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.state={username:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),g.a.post(v+"users/add",t).then((function(e){console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{required:!0,type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"create user",className:"btn btn-primary"}))))}}]),a}(n.Component);var j=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(o.a,{path:"/",exact:!0,component:C}),r.a.createElement(o.a,{path:"/edit/:id",component:D}),r.a.createElement(o.a,{path:"/create",component:k}),r.a.createElement(o.a,{path:"/user",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(165)}},[[81,1,2]]]);
//# sourceMappingURL=main.c2c97c67.chunk.js.map