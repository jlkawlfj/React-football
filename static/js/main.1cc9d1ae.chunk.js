(this["webpackJsonpfootball-react"]=this["webpackJsonpfootball-react"]||[]).push([[1],{119:function(e,t,n){"use strict";n.r(t);var r,a,c,s,i,o=n(0),u=n.n(o),l=n(19),d=n.n(l),f=(n(77),function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,266)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))}),h=n(5),j=n(37),b=n(25),g=n(45),m=n(3),p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:[Object(m.jsxs)(b.a.Brand,{children:[Object(m.jsx)("i",{className:"fas fa-futbol"}),"React-Football"]}),Object(m.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsx)(g.a,{className:"mr-auto",children:Object(m.jsx)(g.a.Link,{as:j.a,to:"/leagues_page",children:"Leagues"})})})]})})},O=n(70),v=n(14),x=n(4),F=n(29),y=n(11),R=n(7),T=n(30),M=Object(x.b)({name:"teams",initialState:{teams:[],count:0,name:"",filters:{},isTryFetching:!1,isFetching:!1,isRejected:!1,error:null,errorMessage:null},reducers:{},extraReducers:(r={},Object(R.a)(r,T.a.pending,(function(e){e.isFetching=!0,e.errorMessage=null,e.error=null})),Object(R.a)(r,T.a.fulfilled,(function(e,t){var n=t.payload;e.teams=n.teams,e.filters=n.filters,e.name=n.competition.name,e.count=n.count,e.isTryFetching=!0,e.isFetching=!1,e.isRejected=!1})),Object(R.a)(r,T.a.rejected,(function(e,t){var n=t.error,r=n.message.split(" ");e.errorMessage=n.message,e.error=parseInt(r[r.length-1],10),e.isFetching=!1,e.isRejected=!0})),r)}).reducer,w=n(31),I=Object(x.b)({name:"leagues",initialState:{leagues:[],count:0,filters:{},isTryFetching:!1,isFetching:!1,isRejected:!1,error:null,errorMessage:null},reducers:{},extraReducers:(a={},Object(R.a)(a,w.a.pending,(function(e){e.isFetching=!0,e.errorMessage=null,e.error=null})),Object(R.a)(a,w.a.fulfilled,(function(e,t){var n=t.payload;e.leagues=n.competitions,e.filters=n.filters,e.count=n.count,e.isTryFetching=!0,e.isFetching=!1,e.isRejected=!1})),Object(R.a)(a,w.a.rejected,(function(e,t){var n=t.error,r=n.message.split(" ");e.errorMessage=n.message,e.error=parseInt(r[r.length-1],10),e.isFetching=!1,e.isRejected=!0})),a)}).reducer,_=n(32),L=Object(x.b)({name:"league",initialState:{matches:[],count:0,name:"",filters:{},isTryFetching:!1,isFetching:!1,isRejected:!1,error:null,errorMessage:null},reducers:{},extraReducers:(c={},Object(R.a)(c,_.a.pending,(function(e){e.isFetching=!0,e.errorMessage=null,e.error=null})),Object(R.a)(c,_.a.fulfilled,(function(e,t){var n=t.payload;e.matches=n.matches,e.filters=n.filters,e.name=n.competition.name,e.count=n.count,e.isTryFetching=!0,e.isFetching=!1,e.isRejected=!1})),Object(R.a)(c,_.a.rejected,(function(e,t){var n=t.error,r=n.message.split(" ");e.errorMessage=n.message,e.error=parseInt(r[r.length-1],10),e.isFetching=!1,e.isRejected=!0})),c)}).reducer,S=n(33),k=Object(x.b)({name:"teamsList",initialState:{matches:[],count:0,filters:{},isTryFetching:!1,isFetching:!1,isRejected:!1,error:null,errorMessage:null},reducers:{},extraReducers:(s={},Object(R.a)(s,S.a.pending,(function(e){e.isFetching=!0,e.errorMessage=null,e.error=null})),Object(R.a)(s,S.a.fulfilled,(function(e,t){var n=t.payload;e.matches=n.matches,e.filters=n.filters,e.count=n.count,e.isTryFetching=!0,e.isFetching=!1,e.isRejected=!1})),Object(R.a)(s,S.a.rejected,(function(e,t){var n=t.error,r=n.message.split(" ");e.errorMessage=n.message,e.error=parseInt(r[r.length-1],10),e.isFetching=!1,e.isRejected=!0})),s)}).reducer,B=n(34),A=Object(x.b)({name:"teamInfo",initialState:{infoAboutTeam:{crestUrl:"",team:"",area:{name:""},clubColors:"",founded:"",venue:"",website:"",squad:[]},filters:{},isTryFetching:!1,isFetching:!1,isRejected:!1,error:null,errorMessage:null},reducers:{},extraReducers:(i={},Object(R.a)(i,B.a.pending,(function(e){e.isFetching=!0,e.errorMessage=null,e.error=null})),Object(R.a)(i,B.a.fulfilled,(function(e,t){var n=t.payload;e.infoAboutTeam=n,e.isTryFetching=!0,e.isFetching=!1,e.isRejected=!1})),Object(R.a)(i,B.a.rejected,(function(e,t){var n=t.error,r=n.message.split(" ");e.errorMessage=n.message,e.error=parseInt(r[r.length-1],10),e.isFetching=!1,e.isRejected=!0})),i)}).reducer,N=Object(v.c)({teams:M,leagues:I,teamList:k,league:L,teamInfo:A,routerReducer:F.routerReducer}),C=Object(y.a)(),E=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d)(v.a.apply(void 0,[Object(F.routerMiddleware)(C)].concat(Object(O.a)(Object(x.c)())))),P=Object(v.e)(N,E),z=n(50),D=n(49),U=u.a.lazy((function(){return Promise.all([n.e(6),n.e(8)]).then(n.bind(null,270))})),X=u.a.lazy((function(){return n.e(5).then(n.bind(null,271))})),J=u.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,267))})),q=u.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,269))})),V=function(){return Object(m.jsx)(h.c,{history:C,children:Object(m.jsx)(z.b,{ReactRouterRoute:h.b,children:Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)(u.a.Suspense,{fallback:Object(m.jsx)(D.a,{}),children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.b,{exact:!0,path:"/leagues_page",component:U}),Object(m.jsx)(h.b,{exact:!0,path:"/teams_page",component:X}),Object(m.jsx)(h.b,{exact:!0,path:"/league_calendar",component:J}),Object(m.jsx)(h.b,{exact:!0,path:"/team_calendar",component:q}),Object(m.jsx)(h.a,{exact:!0,from:"/",to:"/leagues_page"})]})})})]})})})},G=n(46);d.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(G.a,{store:P,children:Object(m.jsx)(V,{})})}),document.getElementById("root")),f()},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(36),a=n.n(r);a.a.defaults.headers.common["X-Auth-Token"]="".concat("c8110cb6e0924842aa4f5ee28f05b6e9"),a.a.defaults.baseURL="".concat("https://api.football-data.org/","v").concat("2","/");var c=a.a,s={fetchAll:function(e){return c.get("/competitions",{params:{plan:e}})},fetchMatchesById:function(e,t,n,r){return c.get("/competitions/".concat(e,"/matches"),{params:{season:t,dateFrom:n,dateTo:r}})}},i={fetchTeamsByLeague:function(e,t){return c.get("/competitions/".concat(e,"/teams"),{params:{season:t}})},fetchById:function(e){return c.get("/teams/".concat(e))},fetchMatchesById:function(e,t,n){return c.get("/teams/".concat(e,"/matches"),{params:{dateFrom:t,dateTo:n}})},fetchTeamInfo:function(e){return c.get("/teams/".concat(e))}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10),a=n.n(r),c=n(15),s=n(4),i=n(16),o=Object(s.a)("teams/fetchAll",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.season,e.next=3,i.b.fetchTeamsByLeague(n,r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10),a=n.n(r),c=n(15),s=n(4),i=n(16),o=Object(s.a)("leagues/fetchAll",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.plan,e.next=3,i.a.fetchAll(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10),a=n.n(r),c=n(15),s=n(4),i=n(16),o=Object(s.a)("league/fetchLeagueMatches",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.season,c=t.dateFrom,s=t.dateTo,e.next=3,i.a.fetchMatchesById(n,r,c,s);case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10),a=n.n(r),c=n(15),s=n(4),i=n(16),o=Object(s.a)("teamList/fetchAll",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.dateFrom,c=t.dateTo,e.next=3,i.b.fetchMatchesById(n,r,c);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(10),a=n.n(r),c=n(15),s=n(4),i=n(16),o=Object(s.a)("teamInfo/fetchAll",function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,i.b.fetchTeamInfo(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},49:function(e,t,n){"use strict";n(0);var r=n(69),a=n(3);t.a=function(){return Object(a.jsx)("div",{className:"preloader",children:Object(a.jsx)(r.a,{animation:"border"})})}},77:function(e,t,n){}},[[119,2,3]]]);
//# sourceMappingURL=main.1cc9d1ae.chunk.js.map