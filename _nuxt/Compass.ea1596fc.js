import{_ as n}from"./nuxt-link.169461bc.js";import{_,o as i,c as d,a as o,b as a,w as e,d as c,p as l,e as r}from"./entry.17d72be7.js";const p=s=>(l("data-v-6823aa7c"),s=s(),r(),s),h={class:"compass hover:scale-105 transition shadow-lg hover:shadow-2xl border-2"},m={class:"compass-inner"},u={class:"north"},v={class:"east"},k={class:"west"},w={class:"south"},x=p(()=>o("div",{class:"main-arrow"},[o("div",{class:"arrow-up"}),o("div",{class:"arrow-down"})],-1)),f={__name:"Compass",props:{link:String},setup(s){return(y,C)=>{const t=n;return i(),d("div",h,[o("div",m,[o("div",u,[a(t,{to:{path:"/compass/n",query:{link:s.link}}},{default:e(()=>[c("N")]),_:1},8,["to"])]),o("div",v,[a(t,{to:{path:"/compass/e",query:{link:s.link}}},{default:e(()=>[c("E")]),_:1},8,["to"])]),o("div",k,[a(t,{to:{path:"/compass/w",query:{link:s.link}}},{default:e(()=>[c("W")]),_:1},8,["to"])]),o("div",w,[a(t,{to:{path:"/compass/s",query:{link:s.link}}},{default:e(()=>[c("S")]),_:1},8,["to"])]),x])])}}},q=_(f,[["__scopeId","data-v-6823aa7c"]]);export{q as C};