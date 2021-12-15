(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(n){n.exports=JSON.parse('[{"name":"Annie Copeland","id":"","number":""},{"name":"Rosie Simpson","id":"","number":""},{"name":"Cherish Bautista","id":"","number":""},{"name":"Ezequiel Hayden","id":"","number":""},{"name":"Ada Garcia","id":"","number":""},{"name":"Everett Smith","id":"","number":""},{"name":"Izayah Carey","id":"","number":""},{"name":"Giselle Alvarez","id":"","number":""},{"name":"Rayne Duffy","id":"","number":""},{"name":"Davin Archer","id":"","number":""},{"name":"Dorian Sosa","id":"","number":""},{"name":"Willow Olson","id":"","number":""}]')},24:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var a,r,o,i=t(1),c=t.n(i),s=t(13),l=t.n(s),d=(t(24),t(19)),u=t(4),b=t(5),h=t(8),m=t(7),p=t(2),f=t(3),j=t(0),x=f.a.section(a||(a=Object(p.a)(["\n  padding: 0 20px;\n  margin: 0;\n"]))),g=function(n){var e=n.children,t=n.className;return t?Object(j.jsxs)(x,{className:t,children:[" ",e]}):Object(j.jsx)(x,{children:e})},v=f.a.div(r||(r=Object(p.a)(["\n  padding: 0 10px;\n  margin: 0 auto;\n"]))),O=function(n){var e=n.children,t=n.className;return t?Object(j.jsx)(v,{className:t,children:e}):Object(j.jsx)(v,{children:e})},y=function(n){var e=n.title,t=n.className;return t?Object(j.jsx)(I,{className:t,children:e}):Object(j.jsx)(I,{children:e})};y.defaultProps={title:"Section title"};var w,C,S,k,z,A,N,D,M,F,I=f.a.h2(o||(o=Object(p.a)(["\n  color: var(--yellow);\n  font-size: 32px;\n  font-family: var(--big);\n  text-align: center;\n"]))),J=y,B=t(17),E=function(n){Object(h.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handleInputChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(B.a)({},a,r))},n.handleFormSubmit=function(e){var t=n.props.onSubmit;e.preventDefault(),t(n.state),n.handleReset()},n.handleReset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(j.jsx)(g,{children:Object(j.jsxs)(O,{children:[Object(j.jsx)(J,{title:"Phonebook"}),Object(j.jsxs)(R,{autoComplete:"off",onSubmit:this.handleFormSubmit,children:[Object(j.jsxs)(q,{children:["Name",Object(j.jsx)(H,{type:"text",name:"name",value:e,placeholder:"Enter fullname",onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(j.jsxs)(q,{children:["Number",Object(j.jsx)(H,{type:"tel",name:"number",value:t,placeholder:"Enter phone number",onChange:this.handleInputChange,minLength:"7",maxLength:"9",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(j.jsx)(L,{type:"submit",disabled:""===e||""===t,children:"Add contact"})]})]})})}}]),t}(i.Component),R=f.a.form(w||(w=Object(p.a)(["\n  padding: 5px;\n  margin: 0 auto;\n  width: 250px;\n  font-family: var(--font);\n"]))),L=f.a.button(C||(C=Object(p.a)(["\n  margin: 0;\n  width: 100%;\n  border: 1px solid rgb(255, 252, 252);\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  border-radius: 10px;\n  background-color: rgb(245, 250, 245);\n  padding: 5px 20px;\n\n  font-family: var(--font);\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n    background-color: var(--green);\n    border: 1px solid var(--blue);\n  }\n\n  :disabled:hover {\n    cursor: not-allowed;\n    color: var(--red);\n    background-color: var(--white);\n    border: 1px solid var(--red);\n  }\n"]))),q=f.a.label(S||(S=Object(p.a)(["\n  margin: 0 0 2px 0;\n  font-family: var(--font);\n  font-size: 18px;\n  font-weight: 600;\n"]))),H=f.a.input(k||(k=Object(p.a)(["\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  width: 100%;\n  border-radius: 10px;\n"]))),P=E,Z=f.a.label(z||(z=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),G=f.a.p(A||(A=Object(p.a)(["\n  margin: 5px 0;\n  color: var(--white);\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n"]))),T=f.a.span(N||(N=Object(p.a)(["\n  color: var(--yellow);\n"]))),U=f.a.input(D||(D=Object(p.a)(["\n  color: var(--blue);\n"]))),W=function(n){var e=n.value,t=n.onChange;return Object(j.jsx)(i.Fragment,{children:Object(j.jsxs)(Z,{children:[Object(j.jsxs)(G,{children:["Find contacts by ",Object(j.jsx)(T,{children:"name"})]}),Object(j.jsx)(U,{type:"search",name:"search",value:e,onChange:t})]})})},$=f.a.li(M||(M=Object(p.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  list-style: circle;\n  align-items: baseline;\n  width: 350px;\n  padding: 5px;\n\n  font-family: var(--font);\n  font-size: 18px;\n  line-height: 1.5;\n\n  ::before {\n    content: '';\n    display: block;\n    height: 7px;\n    width: 7px;\n    background-color: var(--yellow);\n    border-radius: 50%;\n  }\n"]))),K=f.a.button(F||(F=Object(p.a)(["\n  margin: 5px 0 5px 10px;\n  border: 1px solid rgb(255, 252, 252);\n  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);\n  border-radius: 6px;\n  background-color: rgb(245, 250, 245);\n  padding: 3px 10px 3px 10px;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  transition: all 250ms ease-in;\n\n  :hover {\n    cursor: pointer;\n    color: var(--white);\n    background-color: var(--blue);\n    border: 1px solid var(--dark);\n  }\n"]))),Q=function(n){var e=n.contacts,t=n.onDeleteButtonClick;return Object(j.jsx)("ul",{children:e.map((function(n){return Object(j.jsxs)($,{children:[n.name," : ",n.number,Object(j.jsx)(K,{type:"button",onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))})},V=t(9),X=function(n){return n.map((function(n){return n.id=Object(V.a)(),n.number=Math.floor(899*Math.random()+100)+"-"+Math.floor(89*Math.random()+10)+"-"+Math.floor(89*Math.random()+10),n}))},Y=t(18),_=function(n){Object(h.a)(t,n);var e=Object(m.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:X(Y),filter:""},n.formSubmitHandler=function(e){var t=n.state.contacts;n.validateContact(e,t)&&(e.id=Object(V.a)(),n.setState((function(n){var t=n.contacts;return{contacts:[e].concat(Object(d.a)(t))}})))},n.validateContact=function(n,e){return e.some((function(e){return e.name===n.name}))?(alert("".concat(n.name," is already in contacts!")),!1):!e.some((function(e){return e.number===n.number}))||(alert("".concat(n.number," is already in contacts!")),!1)},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.handleSearch=function(e){n.setState({filter:e.currentTarget.value})},n}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.contacts;t!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"getFiltredContacts",value:function(){var n=this.state,e=n.contacts,t=n.filter.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}},{key:"render",value:function(){var n=this.state.filter,e=this.getFiltredContacts();return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(P,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(g,{children:Object(j.jsxs)(O,{children:[Object(j.jsx)(J,{title:"Contacts"}),Object(j.jsx)(W,{value:n,onChange:this.handleSearch}),Object(j.jsx)(Q,{contacts:e,onDeleteButtonClick:this.deleteContact})]})})]})}}]),t}(i.Component),nn=_;l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(nn,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ae89bad9.chunk.js.map