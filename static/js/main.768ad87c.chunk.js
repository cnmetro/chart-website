(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(283)},132:function(e,t,a){},152:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(49),c=a.n(r),s=(a(132),a(110)),i=a(111),l=a(125),u=a(112),h=a(126),m=a(113),d=a.n(m),f=(a(152),a(288)),p=a(281),y=a(282),g=a(287),E=a(285),v=a(109),w=a(284),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:[],query:"count=30"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"request",value:function(e,t){return d.a.get("http://metro.sinchang.me/api/flows?city=".concat(t,"&").concat(e)).then(function(e){return e.data})}},{key:"requestAll",value:function(e){return Promise.all([this.request(e,"sh"),this.request(e,"bj"),this.request(e,"gz")])}},{key:"formatData",value:function(e){var t=["sh","bj","gz"],a=JSON.parse(JSON.stringify(e[0].data));e.forEach(function(e,n){e.data.forEach(function(e,o){a[o][t[n]]=e.num})}),this.setState({data:a})}},{key:"componentDidMount",value:function(){var e=this;this.requestAll(this.state.query).then(function(t){e.formatData(t)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app container"},o.a.createElement("h2",null,"Shanghai/Beijing/Guangzhou Metro Passenger Flow Chart",o.a.createElement("span",{className:"tip-text"},"(unit: Ten thousand)")),o.a.createElement("select",{className:"custom-select range-select"},o.a.createElement("option",{value:"1"},"The last 30 days")),o.a.createElement(f.a,{width:800,height:400,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5}},o.a.createElement(p.a,{dataKey:"date"}),o.a.createElement(y.a,null),o.a.createElement(g.a,{strokeDasharray:"3 3"}),o.a.createElement(E.a,null),o.a.createElement(v.a,null),o.a.createElement(w.a,{type:"monotone",dataKey:"sh",stroke:"#8884d8"}),o.a.createElement(w.a,{type:"monotone",dataKey:"bj",stroke:"#82ca9d"}),o.a.createElement(w.a,{type:"monotone",dataKey:"gz",stroke:"#1281ca"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,2,1]]]);
//# sourceMappingURL=main.768ad87c.chunk.js.map