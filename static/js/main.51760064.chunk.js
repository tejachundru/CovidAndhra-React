(this["webpackJsonpcovidandhra-react"]=this["webpackJsonpcovidandhra-react"]||[]).push([[0],{49:function(e,t,a){e.exports=a(89)},54:function(e,t,a){},55:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(54),a(55),a(8)),i=a(2),s=a(42),m=a(14),u=a(15),d=a(18),h=a(20),p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerOpen:!1},e.drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(u.a)(a,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(g,{click:this.backdropClickHandler})),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(E,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(b,{show:this.state.sideDrawerOpen}),e,r.a.createElement("main",{style:{marginTop:"64px"}}))}}]),a}(n.Component),E=function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(v,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"COVID-19"),r.a.createElement("div",{className:"title_caption"},"Andhra Pradesh")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About"))))))},b=function(e){return r.a.createElement("nav",{className:e.show?"side-drawer open":"side-drawer"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"About"))))},v=function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))},g=function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})},f=a(3),w=a.n(f),y=a(25),k=(a(61),a(26)),O=function(){var e=Object(y.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.request)("https://covidstat.info/graphql",'query {\n    state(countryName: "India", stateName: "Andhra Pradesh") {\n      state\n      cases\n      deaths\n      districts {\n        district\n        cases\n        active\n        deaths\n        recovered\n        todayCases\n        todayDeaths\n        todayRecovered\n      }\n    }\n  }',{}).catch((function(e){return t(e,null)}));case 2:a=e.sent,t(null,a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(a(19),a(27),a(17),a(7),{elementType:["line","area","bar","bubble"],primaryAxisType:["linear","time","log","ordinal"],secondaryAxisType:["linear","time","log","ordinal"],primaryAxisPosition:["top","left","right","bottom"],secondaryAxisPosition:["top","left","right","bottom"],secondaryAxisStack:[!0,!1],primaryAxisShow:[!0,!1],secondaryAxisShow:[!0,!1],grouping:["single","series","primary","secondary"],tooltipAnchor:["closest","top","bottom","left","right","center","gridTop","gridBottom","gridLeft","gridRight","gridCenter","pointer"],tooltipAlign:["auto","top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight","center"],snapCursor:[!0,!1]});Object.keys(A);a(46);a(47);var N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){O((function(e,t){n.setState({error:e,response:t.state,loading:!1})}))},n.state={loading:!0,error:null,response:null},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,!this.state.loading&&this.state.response&&r.a.createElement("div",null,r.a.createElement("table",{className:"responsive-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"District"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deaths"))),r.a.createElement("tbody",null,this.state.response.districts.map((function(e){return r.a.createElement("tr",{key:e.district},r.a.createElement("td",{"data-label":"District"},e.district),r.a.createElement("td",{"data-label":"Total"},e.cases),r.a.createElement("td",{"data-label":"Active"},e.active),r.a.createElement("td",{"data-label":"Recovered"},e.recovered),r.a.createElement("td",{"data-label":"Deaths"},e.deaths))}))))))}}]),a}(n.Component),C={"@context":"http://schema.org/",name:"Coronavirus Outbreak in Andhra",alternateName:"COVID-19 Andhra Tracker",url:"https://www.covidandhra.com/"};function D(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(C))),r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(i.Switch,null,r.a.createElement(i.Route,{path:"/about"},r.a.createElement(j,null)),r.a.createElement(i.Route,{path:"/"},r.a.createElement(_,null))))))}function _(){return r.a.createElement(N,null)}function j(){return r.a.createElement("h2",null,"About")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(48),T=a.n(x);c.a.render(r.a.createElement(T.a,{basename:"."},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.51760064.chunk.js.map