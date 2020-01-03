(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,a){e.exports=a(87)},62:function(e,t,a){},63:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(62),a(20)),i=a(16),s=(a(35),a(63),a(29)),u=a.n(s),m=a(14),p=a(18),d=a(10),E=a(90),g=a(91),h=a(100),f=a(92),b=function(){var e=localStorage.getItem("token");return u.a.create({headers:{authorization:e}})},v=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)([]),i=Object(d.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){b().get("/tracks").then((function(e){console.log(e),e.data.authorized&&c(e.data.tracks)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("div",{className:"playlist-cont"},l.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Track"),l.a.createElement("th",null,"Artist"))),s.map((function(e){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,e.track),l.a.createElement("td",null,e.artist)))}))),r.map((function(e){return l.a.createElement(g.a,null,l.a.createElement(h.a,{key:e._id,inline:!0,style:{display:"flex",flexDirection:"row"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Track: ",e.track),l.a.createElement(h.a.Text,null,"Artist: ",e.artist)),l.a.createElement(f.a,{onClick:function(){var t;t=e._id,b().post("/postSong",{id:t}).then((function(e){u(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}},"Add to playlist")))})))},y=(a(49),function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(d.a)(c,2),s=o[0],u=o[1],E=function(e){r(Object(p.a)({},a,Object(m.a)({},e.target.name,e.target.value))),console.log("New credentials from SignupForm",a)},g=Object(i.g)();return l.a.createElement("div",null,l.a.createElement("form",{name:"signupForm",onSubmit:function(e){e.preventDefault(),u(!0),b().post("/signup",a).then((function(e){console.log(e.data),!0===e.data.saved?g.push("/login"):alert("This account has already been created.")})).catch((function(e){return console.log(e)}))}},l.a.createElement("input",{type:"firstName",name:"firstName",placeholder:"First Name",value:a.firstName,onChange:E,required:!0}),l.a.createElement("input",{type:"lastName",name:"lastName",placeholder:"Last Name",value:a.lastName,onChange:E,required:!0}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:E,required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:E,required:!0}),l.a.createElement("button",null,"Sign up"),s&&"Signing up..."))}),j=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(d.a)(c,2),s=o[0],u=o[1],E=Object(n.useState)(""),g=Object(d.a)(E,2),h=g[0],f=g[1],v=function(e){r(Object(p.a)({},a,Object(m.a)({},e.target.name,e.target.value))),console.log("New credentials from LoginForm",a)},y=Object(i.g)();return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(!0),b().post("/login",a).then((function(e){console.log(e.data),e.data.token?(localStorage.setItem("token",e.data.token),y.push("/tracks")):f(e.data.msg)})).catch((function(e){return console.log(e)}))}},l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:v,required:!0}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:v,required:!0}),l.a.createElement("button",null,"Log in"),s&&"Logging in..."),l.a.createElement("p",null,h||null))},O=a(97),k=a(98),S=a(99),w=a(55);function N(){return l.a.createElement("div",null,l.a.createElement(O.a,{bg:"light",expand:"lg"},l.a.createElement(O.a.Brand,{href:"/"},"Soundsky"),l.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(k.a,{className:"mr-auto"},l.a.createElement(k.a.Link,{href:"/"},"Home"),l.a.createElement(k.a.Link,{href:"/tracks"},"Tracks"),l.a.createElement(k.a.Link,{href:"/playlists"},"Playlists")),l.a.createElement(S.a,{inline:!0},l.a.createElement(w.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(f.a,{variant:"outline-success"},"Search")))))}var x=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],c=(a[1],Object(n.useState)({track:"",artist:"",duration:"",_id:""})),o=Object(d.a)(c,2),i=o[0];o[1];return Object(n.useEffect)((function(){b().get("/playlist").then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),console.log(i),l.a.createElement("div",null,r.map((function(e){return l.a.createElement("p",{key:e.id},"Song Title: ",e.title," | Artist: ",e.artist," | Album: ",e.album," | Duration: ",e.duration," | Genre: ",e.genre)})))},C=a(93),L=a(94),T=a(56),q=a(48),A=a(95),D=a(96),F=function(){return l.a.createElement(C.a,null,l.a.createElement(L.a,null,l.a.createElement(T.a,{xs:"4"},l.a.createElement(h.a,{inverse:!0},l.a.createElement(q.a,{width:"100%",src:"https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"Card image cap"}),l.a.createElement(A.a,null,l.a.createElement(D.a,null,"Melodic"))),l.a.createElement(h.a,{inverse:!0},l.a.createElement(q.a,{width:"100%",src:"https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"Card image cap"}),l.a.createElement(A.a,null,l.a.createElement(D.a,null,"Melodic")))),l.a.createElement(T.a,{xs:"8"},l.a.createElement("h1",null,"Welcome to Soundsky"),l.a.createElement("br",null),l.a.createElement(f.a,{href:"/login",variant:"secondary",inverse:!0,style:{width:"30%"}},"Log in"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{href:"/signup",variant:"secondary",inverse:!0,style:{width:"30%"}},"Sign up"))))};var B=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:F}),l.a.createElement(i.b,{path:"/tracks",component:v}),l.a.createElement(i.b,{path:"/login",component:j}),l.a.createElement(i.b,{path:"/playlists",component:x}),l.a.createElement(i.b,{path:"/signup",component:y}))))};c.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8c200461.chunk.js.map