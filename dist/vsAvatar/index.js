/*!
  * Vuesax v4.0.2-alpha-e.2 🖖 (https://lusaxweb.github.io/vuesax/)
  * Forged by Luis Daniel Rovira, edited by ElBuenAnvita
  * Released under the MIT License.
  * Donate to Luis Daniel Rovira: https://www.patreon.com/bePatron?c=1567892
  * © 2019, Lusaxweb. (https://lusaxweb.net)
  */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.vsAvatar=e(require("vue")):t.vsAvatar=e(t.Vue)}("undefined"!=typeof self?self:this,function(n){return(o={},i.m=r={0:function(t,e,n){"use strict";var r=n(4),s=n.n(r),l="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(n,r,i){(i?Reflect.getOwnMetadataKeys(r,i):Reflect.getOwnMetadataKeys(r)).forEach(function(t){var e=i?Reflect.getOwnMetadata(t,r,i):Reflect.getOwnMetadata(t,r);i?Reflect.defineMetadata(t,e,n,i):Reflect.defineMetadata(t,e,n)})}var u={__proto__:[]}instanceof Array;function a(i){return function(t,e,n){var r="function"==typeof t?t:t.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof n&&(n=void 0),r.__decorators__.push(function(t){return i(t,e,n)})}}var d=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function i(t,r){void 0===r&&(r={}),r.name=r.name||t._componentTag||t.name;var i=t.prototype;Object.getOwnPropertyNames(i).forEach(function(e){if("constructor"!==e)if(-1<d.indexOf(e))r[e]=i[e];else{var n=Object.getOwnPropertyDescriptor(i,e);void 0!==n.value?"function"==typeof n.value?(r.methods||(r.methods={}))[e]=n.value:(r.mixins||(r.mixins=[])).push({data:function(){var t;return(t={})[e]=n.value,t}}):(n.get||n.set)&&((r.computed||(r.computed={}))[e]={get:n.get,set:n.set})}}),(r.mixins||(r.mixins=[])).push({data:function(){return function(r,t){var e=t.prototype._init;t.prototype._init=function(){var t=this,e=Object.getOwnPropertyNames(r);if(r.$options.props)for(var n in r.$options.props)r.hasOwnProperty(n)||e.push(n);e.forEach(function(e){"_"!==e.charAt(0)&&Object.defineProperty(t,e,{get:function(){return r[e]},set:function(t){r[e]=t},configurable:!0})})};var n=new t;t.prototype._init=e;var i={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(i[t]=n[t])}),i}(this,t)}});var e=t.__decorators__;e&&(e.forEach(function(t){return t(r)}),delete t.__decorators__);var n=Object.getPrototypeOf(t.prototype),o=n instanceof s.a?n.constructor:s.a,a=o.extend(r);return function(i,o,a){Object.getOwnPropertyNames(o).forEach(function(t){if(!p[t]){var e=Object.getOwnPropertyDescriptor(i,t);if(!e||e.configurable){var n=Object.getOwnPropertyDescriptor(o,t);if(!u){if("cid"===t)return;var r=Object.getOwnPropertyDescriptor(a,t);if(!function(t){var e=typeof t;return null==t||"object"!=e&&"function"!=e}(n.value)&&r&&r.value===n.value)return}0,Object.defineProperty(i,t,n)}}})}(a,t,o),l&&function(e,n){c(e,n),Object.getOwnPropertyNames(n.prototype).forEach(function(t){c(e.prototype,n.prototype,t)}),Object.getOwnPropertyNames(n).forEach(function(t){c(e,n,t)})}(a,t),a}var p={prototype:!0,arguments:!0,callee:!0,caller:!0};function o(e){return"function"==typeof e?i(e):function(t){return i(t,e)}}o.registerHooks=function(t){d.push.apply(d,t)};var f=o;n.d(e,"b",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"a",function(){return f});var b="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function g(t,e,n){b&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function h(n){return void 0===n&&(n={}),function(t,e){g(n,t,e),a(function(t,e){(t.props||(t.props={}))[e]=n})(t,e)}}function v(r,t){void 0===t&&(t={});var e=t.deep,i=void 0!==e&&e,n=t.immediate,o=void 0!==n&&n;return a(function(t,e){"object"!=typeof t.watch&&(t.watch=Object.create(null));var n=t.watch;"object"!=typeof n[r]||Array.isArray(n[r])?void 0===n[r]&&(n[r]=[]):n[r]=[n[r]],n[r].push({handler:e,deep:i,immediate:o})})}},1:function(t,e){t.exports=function(n,r,t,e,i){var o={};return Object.keys(e).forEach(function(t){o[t]=e[t]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce(function(t,e){return e(n,r,t)||t},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(n,r,o),o=null),o}},10:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},2:function(t,e){t.exports=function(t,e,n,r){n&&Object.defineProperty(t,e,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}},25:function(t,e,n){},3:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},4:function(t,e){t.exports=n},5:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}},54:function(t,e,n){"use strict";n.r(e);n(25);var r,i,o,a,s,l,c,u,d,p,f,b,g,h,v,y,m,w,O,x,j,_,P,C,z,B,L=n(10),k=n.n(L),$=n(2),R=n.n($),S=n(6),A=n.n(S),M=n(3),E=n.n(M),D=n(5),H=n.n(D),N=n(1),T=n.n(N),I=(n(8),n(0)),q=n(9),V=n(7);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach(function(t){k()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var W=(r=Object(I.b)({default:null}),i=Object(I.b)({default:!1,type:Boolean}),o=Object(I.b)({default:!1,type:Boolean}),a=Object(I.b)({default:!1,type:Boolean}),s=Object(I.b)({default:!1,type:Boolean}),l=Object(I.b)({default:!1,type:Boolean}),c=Object(I.b)({default:!1,type:Boolean}),u=Object(I.b)({default:!1,type:Boolean}),d=Object(I.b)({default:!1,type:Boolean}),p=Object(I.b)({default:"",type:String}),f=Object(I.b)({default:"",type:String}),b=Object(I.c)("$slots.text"),g=Object(I.c)("badgeColor"),Object(I.a)((v=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t=i.call.apply(i,[this].concat(n))||this,R()(t,"badgePosition",y,E()(t)),R()(t,"pointer",m,E()(t)),R()(t,"circle",w,E()(t)),R()(t,"square",O,E()(t)),R()(t,"history",x,E()(t)),R()(t,"loading",j,E()(t)),R()(t,"historyGradient",_,E()(t)),R()(t,"writing",P,E()(t)),R()(t,"badge",C,E()(t)),R()(t,"badgeColor",z,E()(t)),R()(t,"size",B,E()(t)),t.textLength=0,t.countPlus=0,t.index=null,t}H()(t,i);var e=t.prototype;return e.getParent=function(){return this.$parent.vsAvatarGroup&&this.$parent},e.handleSlotText=function(){console.log("cambio el slot")},e.handleBadgeColor=function(){Object(V.c)("badge",this.badgeColor,this.$el),this.$el.classList.add("vs-change-color-badge")},e.mounted=function(){Object(V.c)("badge",this.badgeColor,this.$el),this.$el.classList.add("vs-change-color-badge"),this.getParent()&&(this.index=this.getParent().avatars.length,this.getParent().avatars.push(this))},e.render=function(t){var e,n,r,i,o,a,s,l,c,u=t("div",{staticClass:"vs-avatar__points"},[t("div",{staticClass:"vs-avatar__points__point"}),t("div",{staticClass:"vs-avatar__points__point"}),t("div",{staticClass:"vs-avatar__points__point"})]),d=t("div",{staticClass:"vs-avatar__badge",class:[{isSlot:this.$slots.badge,writing:this.writing},this.badgePosition]},[this.writing?u:this.$slots.badge]),p=t("div",{staticClass:"vs-avatar",class:(e={},e["vs-avatar--letter--"+this.textLength]=2<this.textLength,e)},[this.$slots.text&&this.getText,this.$slots.default]),f=t("div",{staticClass:"vs-avatar__loading"},[t("div",{staticClass:"vs-avatar__loading__animate"})]),b=t("div",{staticClass:"vs-avatar__latest",directives:[{name:"show",value:this.getParent()&&this.getParent().avatars.length-this.index-1!=0}]},["+"+(this.getParent()&&this.getParent().avatars.length-this.index-1)]),g=t("div",{staticClass:"vs-avatar__icons"},[this.$slots.icons]);return t("div",{staticClass:"vs-avatar-content",attrs:K({},this.$attrs),on:K({},this.$listeners),style:(n={width:this.size+"px",height:this.size+"px",cursor:this.pointer&&"pointer"},n["--vs-color"]=this.color?this.getColor:"",n),class:[(r={history:this.history,"history--gradient":this.historyGradient,"vs-avatar-content--circle":this.circle,"vs-avatar-content--square":this.square,"vs-avatar-content--hidden":this.isHidden,"vs-avatar-content--latest":this.isLatest,"vs-avatar-content--hasIcons":this.$slots.icons},r["vs-avatar-content--size"]=this.size,r),(i={},i["vs-component--primary"]=!!this.primary,i),(o={},o["vs-component--danger"]=!!this.danger,o),(a={},a["vs-component--warn"]=!!this.warn,a),(s={},s["vs-component--success"]=!!this.success,s),(l={},l["vs-component--dark"]=!!this.dark,l),(c={},c["vs-component--is-color"]=!!this.isColor,c)]},[this.loading&&f,p,this.$slots.badge?d:this.badge&&d,this.isLatest&&b,this.$slots.icons&&g])},A()(t,[{key:"getText",get:function(){var t=this.$slots.text[0].text.trim(),e=[t];return 5<t.length?(e=t.split(/\s/g).map(function(t){return t[0]}),this.textLength=e.length):this.textLength=e[0].length,e}},{key:"isHidden",get:function(){return this.getParent()&&this.getParent().max&&this.index>Number(this.getParent().max)-1}},{key:"isLatest",get:function(){return this.getParent()&&this.index==Number(this.getParent().max)-1}}]),t}(q.a),y=T()(v.prototype,"badgePosition",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=T()(v.prototype,"pointer",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=T()(v.prototype,"circle",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=T()(v.prototype,"square",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=T()(v.prototype,"history",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=T()(v.prototype,"loading",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=T()(v.prototype,"historyGradient",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=T()(v.prototype,"writing",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=T()(v.prototype,"badge",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=T()(v.prototype,"badgeColor",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=T()(v.prototype,"size",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T()(v.prototype,"handleSlotText",[b],Object.getOwnPropertyDescriptor(v.prototype,"handleSlotText"),v.prototype),T()(v.prototype,"handleBadgeColor",[g],Object.getOwnPropertyDescriptor(v.prototype,"handleBadgeColor"),v.prototype),h=v))||h);W.install=function(t){t.component("vs-avatar",W)},"undefined"!=typeof window&&window.Vue&&W.install(window.Vue);e.default=W},6:function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},7:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s});function u(t){return["primary","secondary","success","danger","warning","dark","light","warn","facebook","twitter","youtube","pinterest","linkedin","snapchat","whatsapp","tumblr","reddit","spotify","amazon","medium","vimeo","skype","dribbble","slack","yahoo","twitch","discord","telegram","google-plus","messenger"].includes(t)}function d(t,e,n){n?"#comment"!==n.nodeName&&n.style.setProperty("--vs-"+t,e):document.documentElement.style.setProperty("--vs-"+t,e)}var r=function(t,e,n,r){var i,o=/^(rgb|rgba)/.test(e),a=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(e),s=/^(#)/.test(e);if("dark"==e&&n&&r&&n.classList.add("vs-component-dark"),o){var l=e.replace(/[rgba()]/g,"").split(",");i=l[0]+","+l[1]+","+l[2],d(t,i,n),r&&n.classList.add("vs-change-color")}else if(s){var c=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(e);i=c.r+","+c.g+","+c.b,d(t,i,n),r&&n.classList.add("vs-change-color")}else if(u(e)){i=window.getComputedStyle(document.body).getPropertyValue("--vs-"+e),d(t,i,n),r&&n.classList.add("vs-change-color")}else a&&(d(t,e,n),r&&n.classList.add("vs-change-color"))},i=function(t){var e,n=/^(rgb|rgba)/.test(t),r=/^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(t),i=/^(#)/.test(t);if(n){var o=t.replace(/[rgba()]/g,"").split(",");e=o[0]+","+o[1]+","+o[2]}else if(i){var a=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}(t);e=a.r+","+a.g+","+a.b}else if(u(t)){e=window.getComputedStyle(document.body).getPropertyValue("--vs-"+t)}else r&&(e=t);return e},o=function(t,e){var n=e||document.body;n.insertBefore(t,n.lastChild)},a=function(t,e){var n=e.getBoundingClientRect(),r=n.x,i=n.y,o=n.width,a=n.height,s=t.style,l=window.pageYOffset,c=t.clientHeight+n.y+l;l+window.innerHeight-c<30?(s.top=i+l-t.clientHeight-4+"px",s.left=r+"px",s.width=o+"px",t.classList.add("top"),e.classList.add("top")):(s.top=i+l+a-4+"px",s.left=r+"px",s.width=o+"px",t.classList.remove("top"),e.classList.remove("top"))},s=function(t,e,n){var r=e.getBoundingClientRect(),i=r.x,o=r.y,a=r.width,s=r.height,l=t.style,c=window.pageYOffset,u=t.clientHeight+r.y+c,d=c+window.innerHeight;if(i+a+10+t.getBoundingClientRect().width>window.innerWidth&&"right"==n&&(n="left",t.classList.remove("right"),t.classList.add("left")),i-10<t.getBoundingClientRect().width&&"left"==n&&(n="top",t.classList.remove("left"),t.classList.add("top")),d-u<30||"top"==n){l.top=o+c-t.clientHeight-8+"px";var p=i+(a-t.getBoundingClientRect().width)/2;p+t.getBoundingClientRect().width<window.innerWidth?0<p?l.left=p+"px":(l.left="10px",t.classList.add("notArrow")):(l.left="auto",l.right="10px",t.classList.add("notArrow"))}else if("bottom"==n){l.top=o+c+s+8+"px";var f=i+(a-t.getBoundingClientRect().width)/2;f+t.getBoundingClientRect().width<window.innerWidth?0<f?l.left=f+"px":(l.left="10px",t.classList.add("notArrow")):(l.left="auto",l.right="10px",t.classList.add("notArrow"))}else"left"==n?(l.top=o+c+(s-t.getBoundingClientRect().height)/2+"px",l.left=i-t.getBoundingClientRect().width-8+"px"):"right"==n&&(l.top=o+c+(s-t.getBoundingClientRect().height)/2+"px",l.left=i+a+8+"px")}},8:function(t,e){t.exports=function(t,e){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},9:function(t,e,n){"use strict";n.d(e,"a",function(){return M});var r,i,o,a,s,l,c,u,d,p,f,b,g,h,v,y,m,w,O=n(2),x=n.n(O),j=n(6),_=n.n(j),P=n(3),C=n.n(P),z=n(5),B=n.n(z),L=n(1),k=n.n(L),$=(n(8),n(4)),R=n.n($),S=n(0),A=n(7),M=(r=Object(S.b)({type:String,default:null}),i=Object(S.b)({type:Boolean,default:!1}),o=Object(S.b)({type:Boolean,default:!1}),a=Object(S.b)({type:Boolean,default:!1}),s=Object(S.b)({type:Boolean,default:!1}),l=Object(S.b)({type:Boolean,default:!1}),c=Object(S.b)({type:Boolean,default:!1}),Object(S.a)((w=m=function(i){function t(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(t=i.call.apply(i,[this].concat(n))||this).componentColor=null,t.getColor=null,x()(t,"color",p,C()(t)),x()(t,"danger",f,C()(t)),x()(t,"success",b,C()(t)),x()(t,"warn",g,C()(t)),x()(t,"dark",h,C()(t)),x()(t,"primary",v,C()(t)),x()(t,"active",y,C()(t)),t}return B()(t,i),t.prototype.mounted=function(){this.getColor=Object(A.a)(this.color)},_()(t,[{key:"isColorDark",get:function(){return"dark"===this.color||this.dark||"dark"===this.componentColor}},{key:"isColor",get:function(){return!!(this.color||this.primary||this.success||this.warn||this.danger||this.dark)}}]),t}(R.a),m.install=void 0,m.use=void 0,d=w,p=k()(d.prototype,"color",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=k()(d.prototype,"danger",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=k()(d.prototype,"success",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=k()(d.prototype,"warn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=k()(d.prototype,"dark",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=k()(d.prototype,"primary",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=k()(d.prototype,"active",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=d))||u)}},i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=54)).default;function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var r,o});