(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(t,e,r){var content=r(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6351a700",content,!0,{sourceMap:!1})},196:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],rightDrawer:!1,title:"Vuetify.js"}}},o=r(67),l=r(110),c=r.n(l),d=r(287),v=r(143),f=r(142),m=r(89),_=r(140),h=r(61),w=r(288),x=r(289),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-main",[r("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VIcon:v.a,VList:f.a,VListItem:m.a,VListItemAction:_.a,VListItemContent:h.a,VListItemTitle:h.b,VMain:w.a,VNavigationDrawer:x.a})},202:function(t,e,r){r(203),t.exports=r(204)},229:function(t,e,r){"use strict";r(181)},230:function(t,e,r){var n=r(15)(!1);n.push([t.i,"h1[data-v-07328fea]{font-size:20px}",""]),t.exports=n},52:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(229),r(67)),l=r(110),c=r.n(l),d=r(287),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"07328fea",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[202,6,1,7]]]);