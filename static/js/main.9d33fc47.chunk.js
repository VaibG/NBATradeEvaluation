(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{26:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),n=a(21),s=a.n(n),r=(a(26),a(3)),i=a(8),j=a.n(i),d=a(0),b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],n=Object(c.useState)(""),s=Object(r.a)(n,2),i=s[0],b=s[1],u=Object(c.useState)(""),o=Object(r.a)(u,2),h=o[0],O=o[1],x=Object(c.useState)(""),f=Object(r.a)(x,2),v=f[0],p=f[1],m=Object(c.useState)(""),y=Object(r.a)(m,2),g=y[0],N=y[1],P=Object(c.useState)(""),S=Object(r.a)(P,2),C=S[0],w=S[1],I=function(){!function(e){var t=j.a.findPlayer(e).catch((function(){alert("Invalid Player Name Entered")}));j.a.stats.playerStats({PlayerID:t.playerId}).then((function(e){console.log(e);var t=Object.assign(e.commonPlayerInfo[0],e.playerHeadlineStats[0]);console.log(t)}))}(a)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{className:"ui blue center aligned header",style:{fontSize:"4rem"},children:"NBA Trade Evaluator"}),Object(d.jsx)("div",{className:"ui segment center aligned",children:Object(d.jsxs)("form",{className:"ui form",children:[Object(d.jsxs)("div",{className:"two fields",children:[Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("h1",{children:"Team 1 Offers"})}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("h1",{children:"Team 1 Receives"})})]}),Object(d.jsxs)("div",{className:"two fields",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 1"}),Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){return l(e.target.value)},placeholder:"Player 1"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 1"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){return b(e.target.value)},placeholder:"Player 1"})]})]}),Object(d.jsxs)("div",{className:"two fields",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 2"}),Object(d.jsx)("input",{type:"text",value:h,onChange:function(e){return O(e.target.value)},placeholder:"Player 2"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 2"}),Object(d.jsx)("input",{type:"text",value:v,onChange:function(e){return p(e.target.value)},placeholder:"Player 2"})]})]}),Object(d.jsxs)("div",{className:"two fields",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 3"}),Object(d.jsx)("input",{type:"text",value:g,onChange:function(e){return N(e.target.value)},placeholder:"Player 3"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{children:"Player 3"}),Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){return w(e.target.value)},placeholder:"Player 3"})]})]}),Object(d.jsx)("button",{className:"ui blue button",onClick:function(){return I()},children:"Generate Tree"})]})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),n(e),s(e)}))};s.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[81,1,2]]]);
//# sourceMappingURL=main.9d33fc47.chunk.js.map