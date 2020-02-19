(this["webpackJsonpnordicenergy-uniswap"]=this["webpackJsonpnordicenergy-uniswap"]||[]).push([[9],{960:function(e,n,t){"use strict";t.d(n,"a",(function(){return W}));var r=t(11),a=t(4),o=t(0),c=t.n(o),u=t(5),i=t(59),l=t(10),d=t(16),s=t(6),f=t(71);function m(){var e=Object(a.a)(["\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n  transition: color 200ms ease-in-out;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ::placeholder {\n    color: ",";\n  }\n"]);return m=function(){return e},e}function v(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  padding: 0.25rem 0.85rem 0.75rem;\n"]);return v=function(){return e},e}function b(){var e=Object(a.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return b=function(){return e},e}function h(){var e=Object(a.a)(["\n  ","\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem;\n"]);return h=function(){return e},e}function p(){var e=Object(a.a)(["\n  flex: 1;\n"]);return p=function(){return e},e}function j(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  box-shadow: 0 0 0 0.5px ",";\n  background-color: ",";\n  transition: box-shadow 200ms ease-in-out;\n"]);return j=function(){return e},e}function O(){var e=Object(a.a)(["\n  ","\n  box-shadow: 0 4px 8px 0 ",";\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",";\n  z-index: 1;\n"]);return O=function(){return e},e}var E=u.d.div(O(),(function(e){return e.theme.flexColumnNoWrap}),(function(e){var n=e.theme;return Object(d.b)(.9,n.royalBlue)}),(function(e){return e.theme.white})),x=u.d.div(j(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.mercuryGray}),(function(e){return e.theme.white})),g=u.d.div(p()),w=u.d.div(h(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),y=u.d.div(b()),C=u.d.div(v(),(function(e){return e.theme.flexRowNoWrap})),k=u.d.input(m(),(function(e){var n=e.error,t=e.theme;return n?t.salmonRed:t.royalBlue}),(function(e){return e.theme.chaliceGray}));function W(e){var n=e.title,t=e.initialInput,a=void 0===t?"":t,u=e.onChange,d=void 0===u?function(){}:u,m=e.onError,v=void 0===m?function(){}:m,b=Object(i.b)().t,h=Object(l.useWeb3Context)().library,p=Object(o.useState)(a),j=Object(r.a)(p,2),O=j[0],W=j[1],A=Object(f.c)(O,150),S=Object(o.useState)({address:void 0,name:void 0}),z=Object(r.a)(S,2),G=z[0],N=z[1],R=Object(o.useState)(!1),B=Object(r.a)(R,2),I=B[0],J=B[1];return Object(o.useEffect)((function(){d({address:G.address,name:G.name})}),[d,G.address,G.name]),Object(o.useEffect)((function(){v(I)}),[v,I]),Object(o.useEffect)((function(){var e=!1;return Object(s.n)(A)?h.lookupAddress(A).then((function(n){e||(n?W(n):(N({address:A,name:""}),J(null)))})).catch((function(){N({address:A,name:""}),J(null)})):""!==A&&h.resolveName(A).then((function(n){e||(n?(N({address:n,name:A}),J(null)):J(!0))})).catch((function(){J(!0)})),function(){e=!0}}),[A,h,d,v]),c.a.createElement(E,null,c.a.createElement(x,{error:""!==O&&I},c.a.createElement(g,null,c.a.createElement(w,null,c.a.createElement(y,null,c.a.createElement("span",null,n||b("recipientAddress")))),c.a.createElement(C,null,c.a.createElement(k,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"0x1234...",error:""!==O&&I,onChange:function(e){void 0===G.address&&void 0===G.name||N({address:void 0,name:void 0}),void 0!==I&&J();var n=e.target.value,t=Object(s.n)(n);W(t||n)},value:O})))))}},974:function(e,n,t){"use strict";t.r(n);var r=t(18),a=t.n(r),o=t(42),c=t(11),u=t(4),i=t(0),l=t.n(i),d=t(68),s=t(10),f=t(14),m=t(5),v=t(59),b=t(123),h=t(26),p=t(960),j=t(956),O=t(71),E=t(106),x=t(86);function g(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return g=function(){return e},e}function w(){var e=Object(u.a)(["\n  font-size: 0.75rem;\n  color: ",";\n"]);return w=function(){return e},e}function y(){var e=Object(u.a)(["\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return y=function(){return e},e}function C(){var e=Object(u.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return C=function(){return e},e}function k(){var e=Object(u.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return k=function(){return e},e}function W(){var e=Object(u.a)(["\n  ",";\n  padding: 1rem 0;\n"]);return W=function(){return e},e}var A=m.d.div(W(),(function(e){return e.theme.flexColumnNoWrap})),S=m.d.div(k(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),z=m.d.span(C(),(function(e){return e.theme.chaliceGray})),G=m.d.div(y(),(function(e){return e.theme.doveGray})),N=m.d.div(w(),(function(e){var n=e.error,t=e.theme;return n&&t.salmonRed})),R=m.d.div(g());n.default=Object(d.g)((function(e){var n=e.history,t=e.location,r=Object(v.b)().t,u=Object(s.useWeb3Context)().account,d=Object(O.f)(),m=Object(i.useState)({address:"",name:""}),g=Object(c.a)(m,2),w=g[0],y=g[1],C=Object(i.useState)(),k=Object(c.a)(C,2),W=k[0],B=k[1],I=Object(E.c)(w.address),J=I.name,T=I.symbol,D=I.decimals,F=I.exchangeAddress,L=Object(x.e)();Object(i.useEffect)((function(){t.state&&n.replace(t.pathname)}),[]);var P=Object(i.useState)(!u&&r("noWallet")),Z=Object(c.a)(P,2),q=Z[0],H=Z[1];function K(){return(K=Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.estimate.createExchange(w.address);case 2:n=e.sent,d.createExchange(w.address,{gasLimit:n}).then((function(e){b.a.event({category:"Pool",action:"CreateExchange"}),L(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){return W?H(r("invalidTokenAddress")):void 0===T||void 0===D||void 0===F?H():null===T?H(r("invalidSymbol")):null===D?H(r("invalidDecimals")):F!==f.ethers.constants.AddressZero?H(r("exchangeExists")):H(u?null:r("noWallet")),function(){H()}}),[w.address,T,D,F,u,r,W]);var M=null===q;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:r("tokenAddress"),initialInput:t.state&&t.state.tokenAddress||"",onChange:y,onError:B}),l.a.createElement(j.a,{hideBottom:!0},l.a.createElement(A,null,l.a.createElement(S,null,l.a.createElement(z,null,r("name")),l.a.createElement("span",null,J||" - ")),l.a.createElement(S,null,l.a.createElement(z,null,r("symbol")),l.a.createElement("span",null,T||" - ")),l.a.createElement(S,null,l.a.createElement(z,null,r("decimals")),l.a.createElement("span",null,D||0===D?D:" - ")))),l.a.createElement(G,null,l.a.createElement(N,null,q||r("enterTokenCont"))),l.a.createElement(R,null,l.a.createElement(h.b,{disabled:!M,onClick:function(){return K.apply(this,arguments)}},r("createExchange"))))}))}}]);
//# sourceMappingURL=9.43c5e8af.chunk.js.map