(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"name":"Bob Fossil","image":"https://i.imgur.com/7C8PJjt.jpg"},{"id":2,"name":"Crack Fox","image":"https://i.imgur.com/hWcj3dq.jpg"},{"id":3,"name":"Vince & Howard","image":"https://i.imgur.com/EYagLSp.jpg"},{"id":4,"name":"The Mighty Boosh","image":"https://i.imgur.com/OXEPZ57.jpg"},{"id":5,"name":"Milky Joe","image":"https://i.imgur.com/lMAMEWf.jpg"},{"id":6,"name":"Naboo & Bollo","image":"https://i.imgur.com/TptKQWT.jpg"},{"id":7,"name":"Old Gregg","image":"https://i.imgur.com/ew1gRwy.jpg"},{"id":8,"name":"Saboo","image":"https://i.imgur.com/eiBhEef.jpg"},{"id":9,"name":"Spirit of Jazz","image":"https://i.imgur.com/4VKYYTr.jpg"},{"id":10,"name":"The Hitcher","image":"https://i.imgur.com/1Ug2JT7.jpg"},{"id":11,"name":"The Moon","image":"https://i.imgur.com/0JIiqpa.jpg"},{"id":12,"name":"Tony Harrison","image":"https://i.imgur.com/UVwusvg.jpg"}]')},24:function(e,a,t){e.exports=t.p+"static/media/boosh-monkey-head.dc521149.png"},25:function(e,a,t){e.exports=t.p+"static/media/github-logo.1f673426.svg"},32:function(e,a,t){e.exports=t(47)},37:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),c=t.n(i),o=t(21),s=t(22),m=t(31),l=t(27),g=t(29),u=(t(37),t(30)),h=function(e){return r.a.createElement("div",{className:"card-props",key:e.id,onClick:function(){return e.handleClicked(e.id,e.clicked,e.name,e.src,e.image)}},r.a.createElement(u.a.Img,{className:"card-image",src:e.image,id:e.name,alt:e.name,name:e.name}))},d=(t(38),t(18)),p=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={characters:d,name:d.name,message:"Click a character to begin!",submessage:"Pick all twelve characters without repeating to win the game.",score:0,highestScore:0},e.handleClicked=function(a,t,n){var r=e.state.characters;if(t)return r.forEach((function(e,a){r[a].clicked=!1})),e.setState({message:"You already picked ".concat(n),submessage:"Click another character to begin again.",image:r.sort((function(){return Math.random()-.5})),score:0});r.forEach((function(e,t){a===e.id&&(r[t].clicked=!0)}));var i=e.state,c=i.highestScore,o=i.score+1,s=o>c?o:c;return e.setState({message:"Good choice!",submessage:"Pick another character to continue.",image:r.sort((function(){return Math.random()-.5})),score:o,highestScore:s})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"message text-center"},r.a.createElement("h1",null,this.state.message),r.a.createElement("p",null,this.state.submessage)),r.a.createElement(g.a,{className:"scores-wrapper"},r.a.createElement("div",{className:"score current-score"},r.a.createElement("p",null,"Current Score"),r.a.createElement("p",{className:"score-number",idname:"current-score"},this.state.score)),r.a.createElement("div",{className:"score highest-score"},r.a.createElement("p",{className:"score-number",idname:"highest-score"},this.state.highestScore),r.a.createElement("p",null,"Highest Score"))),r.a.createElement("div",{className:"cards"},this.state.characters.map((function(a){return r.a.createElement(h,{className:"card",key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.image,handleClicked:e.handleClicked})}))))}}]),t}(n.Component),f=(t(44),t(28)),v=t(13),k=t(24),E=t.n(k),w=function(){return r.a.createElement(f.a,{className:"Navbar",bg:"dark",variant:"dark"},r.a.createElement(v.a,{href:"#home"},r.a.createElement("img",{alt:"Boosh Monkey Head",src:E.a})," ","Mighty Boosh Clicky Game"))},b=(t(45),t(25)),y=t.n(b),j=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"footer-image",href:"https://github.com/ashleyallphin/clicky-game",target:"_blank",rel:"noopener noreferrer",cursor:"pointer"},r.a.createElement("img",{alt:"Github Logo",src:y.a})))},N=(t(46),function(){return r.a.createElement("div",{className:"page"},r.a.createElement(w,null),r.a.createElement(p,null),r.a.createElement(j,null))}),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=t(26);t.n(M).a.load({google:{families:["Orbitron:400","Manrope:400","Manrope:800","sans-serif"]}}),c.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-clicky-game","/service-worker.js");C?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):S(e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.6e401f20.chunk.js.map