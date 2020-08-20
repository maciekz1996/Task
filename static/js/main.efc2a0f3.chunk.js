(this.webpackJsonptaks=this.webpackJsonptaks||[]).push([[0],{45:function(e,t,n){e.exports=n(77)},50:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(22),u=n.n(l),s=(n(50),n(9)),i=n(4),o=n(3),m=n(2),p=n(19),f=n.n(p),d=n(10),h=n(15),E=n.n(h),b=n(20),v=n(14),g=n(21),j=n.n(g),O=Object(v.b)("planets/fetchPlanets",Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://swapi.dev/api/planets/");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))),k=Object(v.c)({name:"planets",initialState:{status:"idle",planets:[],error:null},reducers:{},extraReducers:(a={},Object(d.a)(a,O.pending,(function(e,t){e.status="loading"})),Object(d.a)(a,O.fulfilled,(function(e,t){e.status="succeeded",e.planets=e.planets.concat(t.payload)})),Object(d.a)(a,O.rejected,(function(e,t){e.status="failed",e.error=t.payload})),a)}).reducer,w=function(e){return e.planets.planets},x=n(11);function y(){var e=Object(s.a)(["\n  border-radius: 15px;\n  background-color: #f4f4f4;\n  padding: 2rem;\n  min-width: 10%;\n  text-align: center;\n"]);return y=function(){return e},e}function T(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n"]);return T=function(){return e},e}function N(){var e=Object(s.a)(["\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  color: #fff;\n  background-color: #123abc;\n  font-weight: 600;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return N=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n"]);return S=function(){return e},e}function F(){var e=Object(s.a)(["\n  text-align: center;\n"]);return F=function(){return e},e}function P(){var e=Object(s.a)(["\n  text-align: center;\n  margin-bottom: 4rem;\n"]);return P=function(){return e},e}var B,z,M=x.a.h1(P()),R=x.a.div(F()),V=x.a.div(S()),C=x.a.button(N()),J=x.a.div(T()),L=x.a.div(y()),W=function(){var e,t=Object(m.b)(),n=Object(m.c)(w),a=Object(m.c)((function(e){return e.planets.status})),l=Object(m.c)((function(e){return e.planets.error})),u=function(e){var t=e.planet;return c.a.createElement(V,null,c.a.createElement("p",null,t.name),c.a.createElement(i.b,{to:"/Task/planets/".concat(t.name)},c.a.createElement(C,null,"More info")))};return"loading"===a?e=c.a.createElement(R,null,c.a.createElement(f.a,{size:32,color:"#123abc",loading:"loading"===a})):"succeeded"===a?e=n.map((function(e,t){return c.a.createElement(u,{key:t,planet:e})})):"failed"===a&&(e=l),Object(r.useEffect)((function(){"idle"===a&&t(O())}),[a,t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null,"Planets"),e)},A=function(e){var t=e.match.params.planetName,n=Object(m.c)((function(e){return function(e,t){return e.planets.planets.find((function(e){return e.name===t}))}(e,t)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,t),c.a.createElement(J,null,c.a.createElement(L,null,c.a.createElement("h4",null,n.population),c.a.createElement("p",null,"Population")),c.a.createElement(L,null,c.a.createElement("h4",null,n.diameter),c.a.createElement("p",null,"Diameter")),c.a.createElement(L,null,c.a.createElement("h4",null,n.rotation_period),c.a.createElement("p",null,"Rotation period"))),c.a.createElement(i.b,{to:"/Task/"},c.a.createElement(C,null,"Back")))},D=Object(v.b)("starships/fetchStarships",Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://swapi.dev/api/vehicles/");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))),I=Object(v.c)({name:"starships",initialState:{status:"idle",starships:[],error:null},reducers:{},extraReducers:(B={},Object(d.a)(B,D.pending,(function(e,t){e.status="loading"})),Object(d.a)(B,D.fulfilled,(function(e,t){e.status="succeeded",e.starships=e.starships.concat(t.payload)})),Object(d.a)(B,D.rejected,(function(e,t){e.status="failed",e.error=t.payload})),B)}).reducer,$=function(e){return e.starships.starships},_=function(){var e,t=Object(m.b)(),n=Object(m.c)($),a=Object(m.c)((function(e){return e.starships.status})),l=Object(m.c)((function(e){return e.starships.error})),u=function(e){var t=e.starship;return c.a.createElement(V,null,c.a.createElement("p",null,t.name),c.a.createElement(i.b,{to:"/Task/starships/".concat(t.name)},c.a.createElement(C,null,"More info")))};return"loading"===a?e=c.a.createElement(R,null,c.a.createElement(f.a,{size:32,color:"#123abc",loading:"loading"===a})):"succeeded"===a?e=n.map((function(e,t){return c.a.createElement(u,{key:t,starship:e})})):"failed"===a&&(e=l),Object(r.useEffect)((function(){"idle"===a&&t(D())}),[a,t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null,"Starships"),e)},q=function(e){var t=e.match.params.starshipName,n=Object(m.c)((function(e){return function(e,t){return e.starships.starships.find((function(e){return e.name===t}))}(e,t)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,t),c.a.createElement(J,null,c.a.createElement(L,null,c.a.createElement("h4",null,n.crew),c.a.createElement("p",null,"Crew")),c.a.createElement(L,null,c.a.createElement("h4",null,n.length),c.a.createElement("p",null,"Length")),c.a.createElement(L,null,c.a.createElement("h4",null,n.passengers),c.a.createElement("p",null,"Passengers"))),c.a.createElement(i.b,{to:"/Task/starships"},c.a.createElement(C,null,"Back")))},G=Object(v.b)("vehicles/fetchVehicles",Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://swapi.dev/api/vehicles/");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))),H=Object(v.c)({name:"vehicles",initialState:{status:"idle",vehicles:[],error:null},reducers:{},extraReducers:(z={},Object(d.a)(z,G.pending,(function(e,t){e.status="loading"})),Object(d.a)(z,G.fulfilled,(function(e,t){e.status="succeeded",e.vehicles=e.vehicles.concat(t.payload)})),Object(d.a)(z,G.rejected,(function(e,t){e.status="failed",e.error=t.payload})),z)}).reducer,K=function(e){return e.vehicles.vehicles},Q=function(){var e,t=Object(m.b)(),n=Object(m.c)(K),a=Object(m.c)((function(e){return e.vehicles.status})),l=Object(m.c)((function(e){return e.vehicles.error})),u=function(e){var t=e.vehicle;return c.a.createElement(V,null,c.a.createElement("p",null,t.name),c.a.createElement(i.b,{to:"/Task/vehicles/".concat(t.name)},c.a.createElement(C,null,"More info")))};return"loading"===a?e=c.a.createElement(R,null,c.a.createElement(f.a,{size:32,color:"#123abc",loading:"loading"===a})):"succeeded"===a?e=n.map((function(e,t){return c.a.createElement(u,{key:t,vehicle:e})})):"failed"===a&&(e=l),Object(r.useEffect)((function(){"idle"===a&&t(G())}),[a,t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(M,null,"Vehicles"),e)},U=function(e){var t=e.match.params.vehicleName,n=Object(m.c)((function(e){return function(e,t){return e.vehicles.vehicles.find((function(e){return e.name===t}))}(e,t)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,t),c.a.createElement(J,null,c.a.createElement(L,null,c.a.createElement("h4",null,n.crew),c.a.createElement("p",null,"Crew")),c.a.createElement(L,null,c.a.createElement("h4",null,n.length),c.a.createElement("p",null,"Length")),c.a.createElement(L,null,c.a.createElement("h4",null,n.passengers),c.a.createElement("p",null,"Passengers"))),c.a.createElement(i.b,{to:"/Task/vehicles"},c.a.createElement(C,null,"Back")))};function X(){var e=Object(s.a)(["\n  display: inline-block;\n  color: #fff;\n  margin: 0 2rem;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1a1a1a;\n  padding: 2rem 0;\n"]);return Y=function(){return e},e}var Z=x.a.nav(Y()),ee=x.a.li(X()),te=function(){return c.a.createElement(Z,null,c.a.createElement("ul",null,c.a.createElement(i.b,{to:"/Task/"},c.a.createElement(ee,null,"Planets")),c.a.createElement(i.b,{to:"/Task/starships"},c.a.createElement(ee,null,"Starships")),c.a.createElement(i.b,{to:"/Task/vehicles"},c.a.createElement(ee,null,"Vehicles"))))};function ne(){var e=Object(s.a)(["\n  max-width: 1000px;\n  margin: 2rem auto;\n"]);return ne=function(){return e},e}var ae=x.a.section(ne());var re=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(te,null),c.a.createElement(ae,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/Task/",component:W}),c.a.createElement(o.b,{exact:!0,path:"/Task/planets/:planetName",component:A}),c.a.createElement(o.b,{exact:!0,path:"/Task/starships",component:_}),c.a.createElement(o.b,{exact:!0,path:"/Task/starships/:starshipName",component:q}),c.a.createElement(o.b,{exact:!0,path:"/Task/vehicles",component:Q}),c.a.createElement(o.b,{exact:!0,path:"/Task/vehicles/:vehicleName",component:U}),c.a.createElement(o.a,{to:"/Task"})))))},ce=Object(v.a)({reducer:{planets:k,starships:I,vehicles:H}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:ce},c.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.efc2a0f3.chunk.js.map