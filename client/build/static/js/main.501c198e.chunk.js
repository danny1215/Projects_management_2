(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},63:function(e,t){},64:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(30),s=a.n(n),l=(a(36),a(6)),i=a(7),r=a(9),h=a(8),j=a(11),m=a(3),b=(a(37),a(38),a(2)),d=a(4),v=a.n(d),p=a(0),u=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeDeveLast_name=c.onChangeDeveLast_name.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={DeveFirst_Name:"",DeveLast_name:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeDeveLast_name",value:function(e){this.setState({DeveLast_name:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("DeveFirst_Name: ".concat(this.state.DeveFirst_Name)),console.log("DeveLast_name: ".concat(this.state.DeveLast_name)),console.log("DeveRole: ".concat(this.state.DeveRole));var t={DeveFirst_Name:this.state.DeveFirst_Name,DeveLast_name:this.state.DeveLast_name,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};v.a.post("http://localhost:3001/developer/add",t).then((function(e){return console.log(e.data)})),this.props.history.push("/"),this.setState({DeveFirst_Name:"",DeveLast_name:"",DeveRole:"",Job_completed:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{style:{marginTop:100},children:[Object(p.jsx)("h3",{children:"Create Developers"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"First_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"First_Name",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Last_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Last_Name",value:this.state.DeveLast_name,onChange:this.onChangeDeveLast_name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"DEVELOPER"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"MANAGER"})]})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"NEW Developer",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),O=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeDeveLast_name=c.onChangeDeveLast_name.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onChangeJob_completed=c.onChangeJob_completed.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={DeveFirst_Name:"",DeveLast_name:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/developer/"+this.props.match.params.id).then((function(t){e.setState({DeveFirst_Name:t.data.DeveFirst_Name,DeveLast_name:t.data.DeveLast_name,DeveRole:t.data.DeveRole,Job_completed:t.data.Job_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeDeveLast_name",value:function(e){this.setState({DeveLast_name:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onChangeJob_completed",value:function(e){this.setState({Job_completed:!this.state.Job_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={DeveFirst_Name:this.state.DeveFirst_Name,DeveLast_name:this.state.DeveLast_name,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};console.log(t),v.a.post("http://localhost:3001/developer/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{align:"center",children:"Update Developer"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"First Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Last Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveLast_name,onChange:this.onChangeDeveLast_name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Developer"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Manager"})]})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeJob_completed,checked:this.state.Job_completed,value:this.state.Job_completed}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Completed"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"Update Developer",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),D=function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.developer.DeveFirst_Name}),Object(p.jsx)("td",{children:e.developer.DeveLast_name}),Object(p.jsx)("td",{children:e.developer.DeveRole}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{to:"/edit/"+e.developer._id,children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{to:"/delete/"+e.developer._id,children:"DELETE"})})]})},_=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={developer:[]},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/developer/").then((function(t){e.setState({developer:t.data})})).catch((function(e){console.log(e)}))}},{key:"DeveloperList",value:function(){return this.state.developer.map((function(e,t){return Object(p.jsx)(D,{developer:e},t)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{style:{marginTop:100},children:"Developer List"}),Object(p.jsxs)("table",{className:"table table-striped",style:{marginTop:100},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"First Name"}),Object(p.jsx)("th",{children:"Last Name"}),Object(p.jsx)("th",{children:"Developer Role"}),Object(p.jsx)("th",{children:"EDIT"}),Object(p.jsx)("th",{children:"DELETE"})]})}),Object(p.jsx)("tbody",{children:this.DeveloperList()})]})]})}}]),a}(c.Component),g=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeProject_Name=c.onChangeProject_Name.bind(Object(b.a)(c)),c.onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeProject_Detail=c.onChangeProject_Detail.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={Project_Name:"",DeveFirst_Name:"",Project_Detail:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"onChangeProject_Name",value:function(e){this.setState({Project_Name:e.target.value})}},{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeProject_Detail",value:function(e){this.setState({Project_Detail:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Project_Name: ".concat(this.state.Project_Name)),console.log("DeveFirst_Name: ".concat(this.state.DeveFirst_Name)),console.log("Project_Detail: ".concat(this.state.Project_Detail)),console.log("DeveRole: ".concat(this.state.DeveRole));var t={Project_Name:this.state.Project_Name,DeveFirst_Name:this.state.DeveFirst_Name,Project_Detail:this.state.Project_Detail,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};v.a.post("http://localhost:3001/project/add",t).then((function(e){return console.log(e.data)})),this.props.history.push("/project"),this.setState({Project_Name:"",DeveFirst_Name:"",Project_Detail:"",DeveRole:"",Job_completed:!1})}},{key:"render",value:function(){return Object(p.jsxs)("div",{style:{marginTop:80},children:[Object(p.jsx)("h3",{children:"Create projects"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Project_Name",value:this.state.Project_Name,onChange:this.onChangeProject_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"First_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"First_Name",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Detail: "}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Project_Detail",value:this.state.Project_Detail,onChange:this.onChangeProject_Detail})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"DEVELOPER"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"MANAGER"})]})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"NEW Project",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),N=function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.project.Project_Name}),Object(p.jsx)("td",{children:e.project.DeveFirst_Name}),Object(p.jsx)("td",{children:e.project.Project_Detail}),Object(p.jsx)("td",{children:e.project.DeveRole}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{to:"/list/edit/"+e.project._id,children:"Edit"})}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{to:"/list/delete/"+e.project._id,children:"DELETE"})})]})},x=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={project:[]},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/project/").then((function(t){e.setState({project:t.data})})).catch((function(e){console.log(e)}))}},{key:"ProjectList",value:function(){return this.state.project.map((function(e,t){return Object(p.jsx)(N,{project:e},t)}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{style:{marginTop:100},children:"Project List"}),Object(p.jsxs)("table",{className:"table table-striped",style:{marginTop:100},children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Project Name "}),Object(p.jsx)("th",{children:"DeveFirst Name"}),Object(p.jsx)("th",{children:"Project_Detail"}),Object(p.jsx)("th",{children:"Developer Role"}),Object(p.jsx)("th",{children:"EDIT"}),Object(p.jsx)("th",{children:"DELETE"})]})}),Object(p.jsx)("tbody",{children:this.ProjectList()})]})]})}}]),a}(c.Component),f=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeDeveLast_name=c.onChangeDeveLast_name.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onChangeJob_completed=c.onChangeJob_completed.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={DeveFirst_Name:"",DeveLast_name:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/developer/"+this.props.match.params.id).then((function(t){e.setState({DeveFirst_Name:t.data.DeveFirst_Name,DeveLast_name:t.data.DeveLast_name,DeveRole:t.data.DeveRole,Job_completed:t.data.Job_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeDeveLast_name",value:function(e){this.setState({DeveLast_name:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onChangeJob_completed",value:function(e){this.setState({Job_completed:!this.state.Job_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={DeveFirst_Name:this.state.DeveFirst_Name,DeveLast_name:this.state.DeveLast_name,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};console.log(t),v.a.delete("http://localhost:3001/developer/delete/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{align:"center",children:"ARE YOU SURE YOU WANT TO Delete Developer ?"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"First Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Last Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveLast_name,onChange:this.onChangeDeveLast_name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Developer"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Manager"})]})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeJob_completed,checked:this.state.Job_completed,value:this.state.Job_completed}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Completed"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"Delete Developer",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),C=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeProject_Name=c.onChangeProject_Name.bind(Object(b.a)(c)),c.onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeProject_Detail=c.onChangeProject_Detail.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onChangeJob_completed=c.onChangeJob_completed.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={Project_Name:"",DeveFirst_Name:"",Project_Detail:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/project/"+this.props.match.params.id).then((function(t){e.setState({Project_Name:t.data.Project_Name,DeveFirst_Name:t.data.DeveFirst_Name,Project_Detail:t.data.Project_Detail,DeveRole:t.data.DeveRole,Job_completed:t.data.Job_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeProject_Name",value:function(e){this.setState({Project_Name:e.target.value})}},{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeProject_Detail",value:function(e){this.setState({Project_Detail:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onChangeJob_completed",value:function(e){this.setState({Job_completed:!this.state.Job_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={Project_Name:this.state.Project_Name,DeveFirst_Name:this.state.DeveFirst_Name,Project_Detail:this.state.Project_Detail,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};console.log(t),v.a.post("http://localhost:3001/project/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/project")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{align:"center",children:"Update Project"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.Project_Name,onChange:this.onChangeProject_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"DeveFirst_Name "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Detail "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.Project_Detail,onChange:this.onChangeProject_Detail})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Developer"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Manager"})]})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeJob_completed,checked:this.state.Job_completed,value:this.state.Job_completed}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Completed"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"Update Project",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),k=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).onChangeProject_Name=c.onChangeProject_Name.bind(Object(b.a)(c)),c.onChangeDeveFirst_Name=c.onChangeDeveFirst_Name.bind(Object(b.a)(c)),c.onChangeProject_Detail=c.onChangeProject_Detail.bind(Object(b.a)(c)),c.onChangeDeveRole=c.onChangeDeveRole.bind(Object(b.a)(c)),c.onChangeJob_completed=c.onChangeJob_completed.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c.state={Project_Name:"",DeveFirst_Name:"",Project_Detail:"",DeveRole:"",Job_completed:!1},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:3001/project/"+this.props.match.params.id).then((function(t){e.setState({Project_Name:t.data.Project_Name,DeveFirst_Name:t.data.DeveFirst_Name,Project_Detail:t.data.Project_Detail,DeveRole:t.data.DeveRole,Job_completed:t.data.Job_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeProject_Name",value:function(e){this.setState({Project_Name:e.target.value})}},{key:"onChangeDeveFirst_Name",value:function(e){this.setState({DeveFirst_Name:e.target.value})}},{key:"onChangeProject_Detail",value:function(e){this.setState({Project_Detail:e.target.value})}},{key:"onChangeDeveRole",value:function(e){this.setState({DeveRole:e.target.value})}},{key:"onChangeJob_completed",value:function(e){this.setState({Job_completed:!this.state.Job_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={Project_Name:this.state.Project_Name,DeveFirst_Name:this.state.DeveFirst_Name,Project_Detail:this.state.Project_Detail,DeveRole:this.state.DeveRole,Job_completed:this.state.Job_completed};console.log(t),v.a.delete("http://localhost:3001/project/delete/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/project")}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{align:"center",children:"ARE YOU SURE YOU WANT TO Delete A Project ?"}),Object(p.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Name: "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.Project_Name,onChange:this.onChangeProject_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"DeveFirst_Name "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.DeveFirst_Name,onChange:this.onChangeDeveFirst_Name})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Project_Detail "}),Object(p.jsx)("input",{type:"text",className:"form-control",value:this.state.Project_Detail,onChange:this.onChangeProject_Detail})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleDeveloper",value:"DEVELOPER",checked:"Developer"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Developer"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"form-check-input",type:"radio",name:"RoleOptions",id:"RoleManager",value:"MANAGER",checked:"Manager"===this.state.DeveRole,onChange:this.onChangeDeveRole}),Object(p.jsx)("label",{className:"form-check-label",children:"Manager"})]})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeJob_completed,checked:this.state.Job_completed,value:this.state.Job_completed}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Completed"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{type:"submit",value:"Delete Project",className:"btn btn-primary"})})]})]})}}]),a}(c.Component),R=(a(63),function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",bg:"transparent",expand:"lg",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"",target:"_blank"}),Object(p.jsx)(j.b,{to:"/",className:"navbar-brand",children:"PROJECT-MANAGEMENT"}),Object(p.jsx)("div",{className:"collpase navbar-collapse",children:Object(p.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(j.b,{to:"/",className:"nav-link",children:"DEVELOPERS"})}),Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(j.b,{to:"/create",className:"nav-link",children:"CREATE DEVELOPERS"})}),Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(j.b,{to:"/add/Project",className:"nav-link",children:"CREATE PROJECT"})}),Object(p.jsx)("li",{className:"navbar-item",children:Object(p.jsx)(j.b,{to:"/Project",className:"nav-link",children:" PROJECTS"})})]})})]}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{path:"/",exact:!0,component:_}),Object(p.jsx)(m.a,{path:"/edit/:id",component:O}),Object(p.jsx)(m.a,{path:"/delete/:id",component:f}),Object(p.jsx)(m.a,{path:"/create",component:u}),Object(p.jsx)(m.a,{path:"/add/Project",component:g}),Object(p.jsx)(m.a,{path:"/Project",component:x}),Object(p.jsx)(m.a,{path:"/list/edit/:id",component:C}),Object(p.jsx)(m.a,{path:"/list/delete/:id",component:k})]})})}}]),a}(c.Component)),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),y()}},[[64,1,2]]]);
//# sourceMappingURL=main.501c198e.chunk.js.map