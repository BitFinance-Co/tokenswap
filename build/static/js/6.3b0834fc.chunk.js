(this["webpackJsonpnordicenergy-uniswap"]=this["webpackJsonpnordicenergy-uniswap"]||[]).push([[6],{957:function(e,t,n){e.exports=n.p+"static/media/arrow-down-blue.c0dedd2f.svg"},958:function(e,t,n){e.exports=n.p+"static/media/arrow-down-grey.c0dedd2f.svg"},962:function(e,t,n){"use strict";var r=n(36),i=n(47),a=n(44),u=n(20),c=n(43),o=n(4),l=n(0),s=n.n(l),m=n(5),f=n(961),d=n.n(f),b=n(963),h=n.n(b);function p(){var e=Object(o.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return p=function(){return e},e}function v(){var e=Object(o.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return v=function(){return e},e}function g(){var e=Object(o.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return g=function(){return e},e}var y=m.d.div(g(),(function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray})),j=m.d.div(v(),(function(e){return e.theme.concreteGray})),O=m.d.div(p(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.royalBlue})),E=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(n=Object(a.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showDetails:!1},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?s.a.createElement(j,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,i=t.contextualInfo,a=t.isError;return i?s.a.createElement(y,{error:a},i):s.a.createElement(s.a.Fragment,null,s.a.createElement(O,{onClick:function(){return e.setState((function(e){return{showDetails:!e.showDetails}}))}},this.state.showDetails?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,r),s.a.createElement("img",{src:h.a,alt:"dropup"})):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,n),s.a.createElement("img",{src:d.a,alt:"dropdown"}))),this.renderDetails())}}]),t}(l.Component);E.defaultProps={openDetailsText:"Transaction Details",closeDetailsText:"Hide Details",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=E},963:function(e,t,n){e.exports=n.p+"static/media/dropup-blue.895d3eda.svg"},973:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ee}));var r=n(18),i=n.n(r),a=n(42),u=n(11),c=n(4),o=n(0),l=n.n(o),s=n(59),m=n(123),f=n(10),d=n(14),b=n(5),h=n(26),p=n(959),v=n(962),g=n(956),y=n(957),j=n.n(y),O=n(958),E=n.n(O),w=n(71),x=n(86),N=n(106),T=n(174),k=n(6);function D(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return D=function(){return e},e}function S(){var e=Object(c.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return C=function(){return e},e}function H(){var e=Object(c.a)(["\n  margin-top: 1rem;\n"]);return H=function(){return e},e}function M(){var e=Object(c.a)(["\n  ","\n  padding: 1rem 0;\n"]);return M=function(){return e},e}function R(){var e=Object(c.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0;\n"]);return R=function(){return e},e}function W(){var e=Object(c.a)(["\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  padding: 1rem 0.75rem;\n"]);return W=function(){return e},e}function q(){var e=Object(c.a)(["\n  ","\n  min-height: 3.5rem;\n"]);return q=function(){return e},e}function z(){var e=Object(c.a)(["\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n"]);return z=function(){return e},e}function L(){var e=Object(c.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return L=function(){return e},e}function Z(){var e=Object(c.a)(["\n  color: ",";\n"]);return Z=function(){return e},e}var B=d.ethers.utils.bigNumberify(200),I=d.ethers.utils.bigNumberify(1e3),P=b.d.span(Z(),(function(e){return e.theme.royalBlue})),A=b.d.div(L(),(function(e){return e.theme.flexRowNoWrap})),F=b.d.img(z()),G=b.d.div(q(),(function(e){return e.theme.flexRowNoWrap})),U=b.d.div(W()),V=b.d.div(R()),J=b.d.div(M(),(function(e){return e.theme.flexColumnNoWrap})),K=b.d.div(H()),Q=b.d.div(C(),(function(e){return e.theme.flexRowNoWrap}),(function(e){return e.theme.doveGray})),X=b.d.span(S(),(function(e){return e.theme.chaliceGray})),Y=b.d.div(D());function $(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var a=d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18));return i?e.mul(a).div(n).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))):n.mul(a).div(e).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r)))}}catch(u){}}function _(e){if(e){var t=e.mul(B).div(d.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(d.ethers.constants.Zero)?d.ethers.constants.Zero:n,maximum:r.gt(d.ethers.constants.MaxUint256)?d.ethers.constants.MaxUint256:r}}return{}}function ee(){var e=Object(f.useWeb3Context)(),t=e.library,n=e.account,r=e.active,c=Object(s.b)().t,b=Object(x.e)(),y=Object(o.useState)(""),O=Object(u.a)(y,2),D=O[0],S=O[1],C=Object(o.useState)(""),H=Object(u.a)(C,2),M=H[0],R=H[1],W=Object(o.useState)(),q=Object(u.a)(W,2),z=q[0],L=q[1],Z=Object(o.useState)(),B=Object(u.a)(Z,2),ee=B[0],te=B[1];Object(o.useEffect)((function(){try{var e=d.ethers.utils.parseUnits(M,18);te(e)}catch(t){""!==M&&L(c("inputNotValid"))}return function(){L(),te()}}),[c,M]);var ne=Object(N.c)(D),re=ne.symbol,ie=ne.decimals,ae=ne.exchangeAddress,ue=Object(o.useState)(),ce=Object(u.a)(ue,2),oe=ce[0],le=ce[1],se=Object(T.b)(n,ae),me=Object(T.b)(ae,"ETH"),fe=Object(T.b)(ae,D);Object(o.useEffect)((function(){ee&&se&&(ee.gt(se)?L(c("insufficientBalance")):L(null))}),[se,c,ee]);var de=Object(w.e)(ae),be=se&&oe&&!oe.isZero()?se.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(oe):void 0,he=be&&Object(k.a)(be,16,4),pe=me&&be&&me.mul(be).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),ve=fe&&be&&fe.mul(be).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))),ge=me&&oe&&!oe.isZero()?me.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(oe):void 0,ye=fe&&oe&&!oe.isZero()?fe.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(oe):void 0,je=ge&&ee?ge.mul(ee).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Oe=ye&&ee?ye.mul(ee).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Ee=je?_(je).minimum:void 0,we=Oe?_(Oe).minimum:void 0,xe=Object(o.useCallback)((function(){de&&de.totalSupply().then((function(e){le(e)}))}),[de]);function Ne(){return(Ne=Object(a.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.a.event({category:"Pool",action:"RemoveLiquidity"}),t=Math.ceil(Date.now()/1e3)+900,e.next=4,de.estimate.removeLiquidity(ee,Ee,we,t);case 4:n=e.sent,de.removeLiquidity(ee,Ee,we,t,{gasLimit:Object(k.b)(n,I)}).then((function(e){b(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(o.useEffect)((function(){return xe(),t.on("block",xe),function(){t.removeListener("block",xe)}}),[xe,t]);var Te=function(e){return l.a.createElement(P,null,e)};function ke(){return m.a.event({category:"TransactionDetail",action:"Open"}),l.a.createElement("div",null,l.a.createElement("div",null,c("youAreRemoving")," ",Te("".concat(Object(k.a)(je,18,4)," ETH"))," ",c("and")," ",Te("".concat(Object(k.a)(Oe,ie,Math.min(ie,4))," ").concat(re))," ",c("outPool")),l.a.createElement(K,null,c("youWillRemove")," ",Te(Object(k.a)(ee,18,4))," ",c("liquidityTokens")),l.a.createElement(K,null,c("totalSupplyIs")," ",Te(Object(k.a)(oe,18,4))),l.a.createElement(K,null,c("tokenWorth")," ",Te(Object(k.a)(ge,18,4))," ETH ",c("and")," ",Te(Object(k.a)(ye,ie,Math.min(4,ie)))," ",re))}var De=r&&n,Se=null===z,Ce=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return $(e,18,t,n,r)}(me,fe,ie);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:c("poolTokens"),extraText:se&&function(e){return"Balance: ".concat(e)}(Object(k.a)(se,18,4)),extraTextClickHander:function(){if(se){var e=se;e.gt(d.ethers.constants.Zero)&&R(Object(k.a)(e,18,18,!1))}},onCurrencySelected:S,onValueChange:R,value:M,errorMessage:z,selectedTokenAddress:D}),l.a.createElement(g.a,null,l.a.createElement(A,null,l.a.createElement(F,{src:De?j.a:E.a,alt:"arrow"}))),l.a.createElement(p.a,{title:c("output"),description:je&&Oe?"(".concat(c("estimated"),")"):"",key:"remove-liquidity-input",renderInput:function(){return je&&Oe?l.a.createElement(G,null,l.a.createElement(U,null,"".concat(Object(k.a)(je,18,4,!1)," ETH")),l.a.createElement(V,null," + "),l.a.createElement(U,null,"".concat(Object(k.a)(Oe,ie,Math.min(4,ie))," ").concat(re))):l.a.createElement(G,null)},disableTokenSelect:!0,disableUnlock:!0}),l.a.createElement(g.a,{key:"remove-liquidity-input-under",hideBottom:!0},l.a.createElement(J,null,l.a.createElement(Q,null,l.a.createElement(X,null,c("exchangeRate")),Ce?l.a.createElement("span",null,"1 ETH = ".concat(Object(k.a)(Ce,18,4)," ").concat(re)):" - "),l.a.createElement(Q,null,l.a.createElement(X,null,c("currentPoolSize")),me&&fe&&ie?l.a.createElement("span",null,"".concat(Object(k.a)(me,18,4)," ETH + ").concat(Object(k.a)(fe,ie,Math.min(ie,4))," ").concat(re)):" - "),l.a.createElement(Q,null,l.a.createElement(X,null,c("yourPoolShare")," (",he&&he,"%)"),pe&&ve?l.a.createElement("span",null,"".concat(Object(k.a)(pe,18,4)," ETH + ").concat(Object(k.a)(ve,ie,Math.min(ie,4))," ").concat(re)):" - "))),function(){var e="",t=!1;return z?(e=z,t=!0):D&&"ETH"!==D?ee?n||(e=c("noWallet"),t=!0):e=c("enterValueCont"):e=c("selectTokenCont"),l.a.createElement(v.a,{key:"context-info",openDetailsText:c("transactionDetails"),closeDetailsText:c("hideDetails"),contextualInfo:e,isError:t,renderTransactionDetails:ke})}(),l.a.createElement(Y,null,l.a.createElement(h.b,{disabled:!Se,onClick:function(){return Ne.apply(this,arguments)}},c("removeLiquidity"))))}}}]);
//# sourceMappingURL=6.3b0834fc.chunk.js.map