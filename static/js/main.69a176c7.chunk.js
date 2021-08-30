(this["webpackJsonpdiary-react-with-redux"]=this["webpackJsonpdiary-react-with-redux"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),l=(n(31),n(32),n(33),n(6)),s=n(13),o=n(16),d=n(20),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},j=(n(39),n(7)),b=n(2),u=n(1),h=function(){return Object(u.jsx)("div",{className:"col-md-12 bg-dark py-2 text-center",children:Object(u.jsx)("nav",{className:"navbar bg-dark navbar-dark",children:Object(u.jsxs)("ul",{className:"nav nav-pills nav-fill",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"navbar-brand ms-5",exact:!0,to:"/diary-react-with-redux/",children:"HOME"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"navbar-brand ms-5",exact:!0,to:"/diary-react-with-redux/adicionar",children:"Adicionar Contato"})})]})})})},x=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-12 my-5 text-center",children:Object(u.jsx)(l.b,{to:"/diary-react-with-redux/adicionar",className:"btn btn-outline-dark",children:"Adicionar Contato!"})}),Object(u.jsx)("div",{className:"col-md-6 mx-auto",children:Object(u.jsx)("h1",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})})]})})},p=n(12),f=n(22),O=n(23),v=n(11),g=n(26),N=n(25),y="ADD_CONTACT",w=function(e){return{type:y,payload:e}},C=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={name:"",email:"",number:"",comentary:""},a.inputHandler=a.inputHandler.bind(Object(v.a)(a)),a.onSubmitForm=a.onSubmitForm.bind(Object(v.a)(a)),a}return Object(O.a)(n,[{key:"onSubmitForm",value:function(e){e.preventDefault();var t=this.props,n=t.list,a=t.handleSubmit,c=t.history,i=this.state,r=i.name,l=i.email,s=i.number,o=i.comentary,d=n.find((function(e){return e.email===l&&l})),m=n.find((function(e){return e.number===s&&s}));if(!l||!s||!r)return j.b.warning("Por favor preencha todos os campos!");if(d)return j.b.error("Esse email j\xe1 existe na sua lista de Contatos!");if(m)return j.b.error("Esse Telefone j\xe1 existe na sua lista de Contatos!");return l.match(/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i)&&0!==l.lenght?s.match(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm)&&0!==s.lenght?(a({id:0===n.length?0:n[n.length-1].id+1,name:r,email:l,number:s,comentary:o}),c.push("/diary-react-with-redux/"),j.b.success("Contato Adicionado com Sucesso!")):j.b.warning("Telefone Inv\xe1lido"):j.b.warning("Email Inv\xe1lido")}},{key:"inputHandler",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(p.a)({},n,a))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.number,c=e.comentary;return Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("h1",{className:"text-center text-dark py-3 display-2",children:"Adicionar Contato:"}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-6 shadow mx-auto p-5",children:Object(u.jsxs)("form",{onSubmit:this.onSubmitForm,children:[Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"Nome",className:"form-control",id:"132123",name:"name",value:t,onChange:this.inputHandler}),Object(u.jsx)("label",{htmlFor:"132123",children:"Nome:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"Email",className:"form-control",id:"floatingInput",name:"email",value:n,onChange:this.inputHandler}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Email:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"N\xfamero do Telefone",className:"form-control",id:"floatingInput",name:"number",value:a,onChange:this.inputHandler}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Telefone:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"Adicionar Coment\xe1rio",className:"form-control",id:"floatingInput",name:"comentary",value:c,onChange:this.inputHandler,maxLength:"30"}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Adicione um coment\xe1rio!"})]}),Object(u.jsxs)("div",{className:"form-group text-center",children:[Object(u.jsx)("input",{type:"submit",value:"Adicionar Contato",className:"btn btn-block btn-dark"}),Object(u.jsx)(l.b,{to:"/diary-react-with-redux/",className:"btn btn-danger my-2 ms-3",children:"Cancelar"})]})]})})})]})}}]),n}(c.a.Component),A=Object(s.b)((function(e){return{list:e}}),(function(e){return{handleSubmit:function(t){return e(w(t))}}}))(C),I=function(){var e=Object(b.f)().id;return Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)("h1",{className:"text-center text-dark py-3 display-2",children:["Atualizar Contato",e]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-6 p-5 mx-auto shadow",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"Nome",className:"form-control",id:"floatingInput"}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Nome:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",id:"floatingInput"}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Email:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"N\xfamero do Telefone",className:"form-control",id:"floatingInput"}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Telefone:"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",placeholder:"Adicionar Coment\xe1rio",className:"form-control",id:"floatingInput"}),Object(u.jsx)("label",{htmlFor:"floatingInput",children:"Adicione um coment\xe1rio!"})]}),Object(u.jsxs)("div",{className:"form-group  text-center",children:[Object(u.jsx)("input",{type:"submit",value:"Atualizar Contato",className:"btn btn-dark"}),Object(u.jsx)(l.b,{to:"/diary-react-with-redux/",className:"btn btn-danger my-2 ms-3",children:"Cancelar"})]})]})})})]})},F=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)(h,{}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/diary-react-with-redux/",component:function(){return Object(u.jsx)(x,{})}}),Object(u.jsx)(b.a,{path:"/diary-react-with-redux/adicionar",component:A}),Object(u.jsx)(b.a,{path:"/diary-react-with-redux/editar/:id",children:Object(u.jsx)(I,{})})]})]})},k=n(24),S=[],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(k.a)(e),[t.payload]);default:return e}},E=Object(o.createStore)(T,Object(d.composeWithDevTools)());r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(s.a,{store:E,children:Object(u.jsx)(l.a,{children:Object(u.jsx)(F,{})})})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.69a176c7.chunk.js.map