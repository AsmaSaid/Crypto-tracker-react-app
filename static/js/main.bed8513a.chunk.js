(this["webpackJsonpreact-api-crypto-tracker-v1"]=this["webpackJsonpreact-api-crypto-tracker-v1"]||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),r=t(13),s=t.n(r),i=t(4),o=t(14),l=t.n(o),p=(t(37),t(38),t(0)),j=function(e){var c=e.name,t=e.image,a=e.symbol,n=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(p.jsx)("div",{className:"coin-container",children:Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsxs)("div",{className:"coin",children:[Object(p.jsx)("img",{src:t,alt:"crpyto"}),Object(p.jsx)("h1",{children:c}),Object(p.jsx)("p",{className:"coin-symbol",children:a.toUpperCase()})]}),Object(p.jsxs)("div",{className:"coin-data",children:[Object(p.jsxs)("p",{className:"coin-price",children:[n.toLocaleString()," SAR"]}),Object(p.jsxs)("p",{className:"coin-volume",children:[r.toLocaleString()," SAR"]}),s<0?Object(p.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(p.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),null!=i?Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]}):Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i]})]})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],m=s[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=SAR&order=market_cap_desc&per_page=50&page=1&sparkline=false").then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(p.jsxs)("div",{className:"coin-app",children:[Object(p.jsx)("h4",{className:"app-text",children:" react api crypto tracker v1"}),Object(p.jsxs)("div",{className:"coin-search",children:[Object(p.jsx)("h2",{className:"coin-text",children:" Search a currency"}),Object(p.jsx)("form",{children:Object(p.jsx)("input",{type:"text",plaseholder:"search",onChange:function(e){m(e.target.value)},className:"coin-input"})})]}),d.map((function(e){return Object(p.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h},e.id)}))]})};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bed8513a.chunk.js.map