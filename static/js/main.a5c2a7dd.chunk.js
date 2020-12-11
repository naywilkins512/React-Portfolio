(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),s=a.n(i),c=a(22),l=a.n(c),r=(a(61),a(8)),o=a(12),d=a(10),b=a(9),j=(a(62),a(24)),u=a(6),m=a(49),h=a(25),O=a(55),x=a(89),p=a(50);var f=function(){return Object(n.jsx)("footer",{className:"mt-5",children:Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsxs)(x.a,{className:"border-top justify-content-between p-3",children:[Object(n.jsx)(p.a,{className:"p-0",md:3,sm:12,children:"Nay Wilkins"}),Object(n.jsx)(p.a,{className:"p-0 d-flex justify-content-end",md:3,children:"This site was made by Nay Wilkins"})]})})})},g=a(21),v=a(39);var k=function(e){var t=Object(v.b)({opacity:1,from:{opacity:0}});return Object(n.jsxs)(v.a.div,{className:"g-card-info",style:t,children:[Object(n.jsx)("p",{className:"g-card-title",children:e.title}),Object(n.jsx)("p",{className:"g-card-sub-title",children:e.subTitle}),Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var y=function(e){return Object(n.jsxs)("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)},children:[Object(n.jsx)("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(n.jsx)(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},S=a.p+"static/media/bigpic.a724c846.png",N=a.p+"static/media/dayplanner.d45dc1c4.png",C=a.p+"static/media/weatherdashboard.956dc8de.png",T=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(g.a)(i.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:a})},i.makeItems=function(e){return e.map((function(e){return Object(n.jsx)(y,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"Texas Parks Refactor",subTitle:"A fun reimagination of the Texas National Parks",imgSrc:S,link:"https://youtube.com",selected:!1},{id:1,title:"Day Planner",subTitle:"A Day Planner",imgSrc:N,link:"https://youtube.com",selected:!1},{id:1,title:"Weather Dashboard",subTitle:"A Weather Dash",imgSrc:C,link:"https://facebook.com",selected:!1}]},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(x.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component),w=a(90);var W=function(e){return Object(n.jsx)(w.a,{className:"bg-transparent jumbotron-fluid ",children:Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(x.a,{className:"justify-content-center py-5",children:Object(n.jsxs)(p.a,{md:8,sm:12,children:[e.title&&Object(n.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(n.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.subSubTitle&&Object(n.jsx)("h3",{className:"lead font-weight-light",children:e.subSubTitle})]})})})})};var A=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W,{title:e.title,subTitle:e.subTitle,subSubTitle:e.subSubTitle}),Object(n.jsx)(T,{})]})};var F=function(e){return Object(n.jsx)(m.a,{fluid:!0,children:Object(n.jsx)(x.a,{className:"justify-content-center",children:Object(n.jsx)(p.a,{md:8,children:e.children})})})};var I=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W,{title:e.title}),Object(n.jsxs)(F,{children:[Object(n.jsx)("p",{children:"Hello, my name is Nay Wilkins. I'm a mern stack engineer with experience in React, Express JS, Node JS, SQL, and Mongo, as well as GSAP animation."}),Object(n.jsx)("p",{children:"With a decade of managing, directing, and booking a full-staff music venue and world-touring band under my belt, I have learned to adapt with my constantly changing environment and meet every task with optimism and excitement."}),Object(n.jsx)("p",{children:"I take pride in creating meaningful user experiences, bridging the gap between user and client. "}),Object(n.jsx)("p",{children:"At the core of my work is a passion for community and the spirit of collaboration, something that makes me a reliable teammate in any scenario. "})]})]})},D=a(20),L=a(92),P=a(91),E=a(51),M=a.n(E),G=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,i=t.name;n.setState(Object(D.a)({},i,a))},n.handleSumbit=function(e){e.preventDefault(),n.setState({disabled:!0}),M.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W,{title:this.props.title}),Object(n.jsx)(F,{children:Object(n.jsxs)(L.a,{onSubmit:this.handleSumbit,children:[Object(n.jsxs)(L.a.Group,{children:[Object(n.jsx)(L.a.Label,{htmlFor:"full-name",children:"Full Name"}),Object(n.jsx)(L.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(n.jsxs)(L.a.Group,{children:[Object(n.jsx)(L.a.Label,{htmlFor:"email",children:"Email"}),Object(n.jsx)(L.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(n.jsxs)(L.a.Group,{children:[Object(n.jsx)(L.a.Label,{htmlFor:"message",children:"Message"}),Object(n.jsx)(L.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})]}),Object(n.jsx)(P.a,{className:"d-inline block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send"}),!0===this.state.emailSent&&Object(n.jsx)("p",{className:"d-inline success-msg",children:" Email Sent!"}),!1===this.state.emailSent&&Object(n.jsx)("p",{className:"d-inline err-msg",children:" Email Not Sent!"})]})})]})}}]),a}(s.a.Component),H=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={title:"Nay Wilkins",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Hi!",subTitle:"I'm a Web Developer",subSubTitle:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Contact Me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(j.a,{children:Object(n.jsxs)(m.a,{className:"p-0",fluid:!0,children:[Object(n.jsxs)(h.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(n.jsx)(h.a.Brand,{children:"Nay Wilkins"}),Object(n.jsx)(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(n.jsx)(h.a.Collapse,{id:"navbar-toggle",children:Object(n.jsxs)(O.a,{className:"ml-auto",children:[Object(n.jsx)(j.b,{className:"nav-link",to:"/",children:"Home"}),Object(n.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"}),Object(n.jsx)(j.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]}),Object(n.jsx)(u.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,subSubTitle:e.state.home.subSubTitle})}}),Object(n.jsx)(u.a,{path:"/about",render:function(){return Object(n.jsx)(I,{title:e.state.about.title})}}),Object(n.jsx)(u.a,{path:"/contact",render:function(){return Object(n.jsx)(G,{title:e.state.contact.title})}}),Object(n.jsx)(f,{})]})})}}]),a}(s.a.Component),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};a(86);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),J()}},[[87,1,2]]]);
//# sourceMappingURL=main.a5c2a7dd.chunk.js.map