(this.webpackJsonpflocrypto=this.webpackJsonpflocrypto||[]).push([[0],{19:function(e,n,a){e.exports={App:"App_App__16ZpL"}},3:function(e,n,a){e.exports={container:"Coin_container__3ZMvP",image:"Coin_image__3YeZ5",name:"Coin_name__1koD0",symbol:"Coin_symbol__3jwz-",currentPrice:"Coin_currentPrice__3JT5y",greenPriceChange:"Coin_greenPriceChange__1dl8L",redPriceChange:"Coin_redPriceChange__2KjbE",marketCap:"Coin_marketCap__35Wz3"}},44:function(e,n,a){},45:function(e,n,a){"use strict";a.r(n);var r=a(2),t=a.n(r),c=a(17),i=a.n(c),s=a(4),o=a.n(s),p=a(5),u=a(8),l=a(18),m=a.n(l),j=function(){var e=Object(p.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=250&page=1&sparkline=false");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=a(6),d=a.n(_),h=a(3),b=a.n(h),g=a(0),f=function(e){var n=e.name,a=e.image,r=e.symbol,t=e.price,c=e.marketCap,i=e.priceChange;return Object(g.jsxs)("div",{className:b.a.container,children:[Object(g.jsx)("img",{className:b.a.image,src:a,alt:n}),Object(g.jsx)("span",{className:b.a.name,children:n}),Object(g.jsx)("span",{className:b.a.symbol,children:r.toUpperCase()}),Object(g.jsxs)("span",{className:b.a.currentPrice,children:["$ ",t.toLocaleString()]}),Object(g.jsx)("span",{className:i>0?b.a.greenPriceChange:b.a.redPriceChange,children:i.toFixed(2)}),Object(g.jsxs)("span",{className:b.a.marketCap,children:["$ ",c.toLocaleString()]})]})},x=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),a=n[0],t=n[1],c=Object(r.useState)(""),i=Object(u.a)(c,2),s=i[0],l=i[1];Object(r.useEffect)((function(){(function(){var e=Object(p.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,console.log(n),t(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=a.filter((function(e){return e.name.includes(s)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:d.a.main,children:[Object(g.jsx)("div",{className:d.a.headerContainer,children:Object(g.jsx)("input",{type:"text",placeholder:"Search",value:s,onChange:function(e){l(e.target.value)}})}),Object(g.jsx)("div",{className:d.a.container,children:m.map((function(e){return Object(g.jsx)(f,{name:e.name,image:e.image,symbol:e.symbol,price:e.current_price,marketCap:e.market_cap,priceChange:e.price_change_24h},e.id)}))})]})})},C=a(19),O=a.n(C);var v=function(){return Object(g.jsx)("div",{className:O.a.App,children:Object(g.jsx)(x,{})})};a(44);i.a.render(Object(g.jsx)(t.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root"))},6:function(e,n,a){e.exports={main:"Landing_main__1l8A9",header:"Landing_header__1ghvM"}}},[[45,1,2]]]);
//# sourceMappingURL=main.b38dc2c5.chunk.js.map