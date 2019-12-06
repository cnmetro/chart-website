(this["webpackJsonpchart-website"]=this["webpackJsonpchart-website"]||[]).push([[0],{161:function(e,t,a){e.exports=a.p+"static/media/logo.cd5e6a7c.svg"},206:function(e,t,a){e.exports=a(418)},211:function(e,t,a){},212:function(e,t,a){},229:function(e,t,a){},415:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(65),o=a.n(c),l=(a(211),a(35)),i=a(36),s=a(41),u=a(37),m=a(42),h=(a(212),a(161)),v=a.n(h),d=a(175),p=a(66),y=a.n(p),g=a(171),f=a(176),b=a(174),E=(a(229),a(10)),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],query:"count=30"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"request",value:function(e,t){return y.a.get("http://metro.sinchang.me/api/flows?city=".concat(t,"&").concat(e)).then((function(e){return e.data}))}},{key:"requestAll",value:function(e){return Promise.all([this.request(e,"sh"),this.request(e,"bj"),this.request(e,"gz")])}},{key:"lastThirtyDays",value:function(){return Object(d.a)(new Array(30)).map((function(e,t){return Object(b.a)(Object(f.a)(Object(g.a)(),t),"yyyy-MM-dd")}))}},{key:"getDayNum",value:function(e,t){var a=0;return e.forEach((function(e){e.date===t&&(a=e.num)})),a}},{key:"formatData",value:function(e){var t=this,a=[];this.lastThirtyDays().forEach((function(n){a.push({date:n,Shanghai:t.getDayNum(e[0].data,n),Beijing:t.getDayNum(e[1].data,n),Guangzhou:t.getDayNum(e[2].data,n)})})),this.setState({data:a.reverse()})}},{key:"componentDidMount",value:function(){var e=this;this.requestAll(this.state.query).then((function(t){e.formatData(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(E.d,{width:1e3,height:500,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(E.f,{dataKey:"date"}),r.a.createElement(E.g,null),r.a.createElement(E.a,{strokeDasharray:"3 3"}),r.a.createElement(E.e,null),r.a.createElement(E.b,null),r.a.createElement(E.c,{type:"monotone",dataKey:"Shanghai",stroke:"#8884d8"}),r.a.createElement(E.c,{type:"monotone",dataKey:"Beijing",stroke:"#82ca9d"}),r.a.createElement(E.c,{type:"monotone",dataKey:"Guangzhou",stroke:"#1281ca"})))}}]),t}(n.Component),j=(a(415),{sh:"#8884d8",bj:"#82ca9d",gz:"#1281ca"}),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",query:"count=30",data:[],sortedData:[]},a.handleChange=function(e){a.fetchData(null,e.target.value)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"request",value:function(e,t){return y.a.get("http://metro.sinchang.me/api/flows?city=".concat(t,"&").concat(e)).then((function(e){return e.data}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.name;this.fetchData(t),this.request("sort=desc",t).then((function(t){e.setState({sortedData:t.data})}))}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.match.params.name;a!==this.state.name&&(this.fetchData(a),this.request("sort=desc",a).then((function(e){t.setState({sortedData:e.data})})))}},{key:"fetchData",value:function(e,t){var a=this;e=e||this.state.name,t=t||this.state.query,this.request(t,e).then((function(n){a.setState({data:n.data.reverse(),name:e,query:t})}))}},{key:"render",value:function(){var e=this.state.sortedData[0],t=this.state.sortedData[this.state.sortedData.length-1];return r.a.createElement("div",null,r.a.createElement("select",{className:"form-control type-select",value:this.state.query,onChange:this.handleChange},r.a.createElement("option",{value:"count=30"},"The last 30 Days"),r.a.createElement("option",{value:"count=10&sort=desc"},"Top10"),r.a.createElement("option",{value:"year=2019"},"2019 Year"),r.a.createElement("option",{value:"year=2018"},"2018 Year"),r.a.createElement("option",{value:"year=2017"},"2017 Year"),r.a.createElement("option",{value:"year=2016"},"2016 Year"),r.a.createElement("option",{value:"year=2015"},"2015 Year")),r.a.createElement(E.d,{width:1e3,height:500,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(E.f,{dataKey:"date"}),r.a.createElement(E.g,null),r.a.createElement(E.a,{strokeDasharray:"3 3"}),r.a.createElement(E.e,null),r.a.createElement(E.b,null),r.a.createElement(E.c,{type:"monotone",dataKey:"num",stroke:j[this.state.name]})),r.a.createElement("div",null,e&&r.a.createElement("span",null,"Highest: ",e.num," in ",e.date)," | ",t&&r.a.createElement("span",null,"Lowest: ",t.num," in ",t.date)))}}]),t}(n.Component),w=a(45),D=a(25),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"activeEvent",value:function(e,t){return!!e&&(e.url===t.pathname||void 0)}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:v.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(w.b,{className:"nav-item nav-link",to:"/",activeClassName:"active",isActive:this.activeEvent},"Home"),r.a.createElement(w.b,{className:"nav-item nav-link",to:"/city/sh",activeClassName:"active"},"Shanghai"),r.a.createElement(w.b,{className:"nav-item nav-link",to:"/city/bj",activeClassName:"active"},"Beijing"),r.a.createElement(w.b,{className:"nav-item nav-link",to:"/city/gz",activeClassName:"active"},"Guangzhou")))),r.a.createElement("p",{className:"tip-text"},"(unit: Ten thousand)"),r.a.createElement(D.a,{exact:!0,path:"/",component:k}),r.a.createElement(D.a,{exact:!0,path:"/city/:name",component:N}),r.a.createElement("p",{align:"center",className:"sponsor"},r.a.createElement("h3",null,"Sponsor"),r.a.createElement("a",{href:"https://www.jetbrains.com/?from=cnmetro"},r.a.createElement("img",{src:"https://www.jetbrains.com/company/brand/img/jetbrains_logo.png",width:"128",alt:"JetBrains logo"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[206,1,2]]]);
//# sourceMappingURL=main.c4474eef.chunk.js.map