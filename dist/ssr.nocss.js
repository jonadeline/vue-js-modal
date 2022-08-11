!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-js-modal"]=e():t["vue-js-modal"]=e()}(global,function(){return n=[function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i,o=n(0);for(i in o)["default"].indexOf(i)<0&&!function(t){n.d(e,t,function(){return o[t]})}(i)},function(t,e,n){"use strict";n.r(e);var i,o=n(1);for(i in o)["default"].indexOf(i)<0&&!function(t){n.d(e,t,function(){return o[t]})}(i)},function(t,e,n){"use strict";n.r(e);var i,o=n(2);for(i in o)["default"].indexOf(i)<0&&!function(t){n.d(e,t,function(){return o[t]})}(i)},function(P,t,n){"use strict";n.r(t),n.d(t,"Modal",function(){return ft}),n.d(t,"Dialog",function(){return mt}),n.d(t,"version",function(){return Ot});function e(){var e=this,t=e.$createElement,t=e._self._c||t;return e.visible?t("div",{class:e.containerClass},[t("transition",{attrs:{name:e.guaranteedOverlayTransition},on:{"before-enter":e.beforeOverlayTransitionEnter,"after-enter":e.afterOverlayTransitionEnter,"before-leave":e.beforeOverlayTransitionLeave,"after-leave":e.afterOverlayTransitionLeave}},[e.visibility.overlay?t("div",{staticClass:"vm--overlay",attrs:{"data-modal":e.name,"aria-expanded":e.visibility.overlay.toString()},on:{click:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),e.onOverlayClick(t))}}},[t("div",{staticClass:"vm--top-right-slot"},[e._t("top-right")],2)]):e._e()]),e._v(" "),t("transition",{attrs:{name:e.guaranteedModalTransition},on:{"before-enter":e.beforeModalTransitionEnter,"after-enter":e.afterModalTransitionEnter,"before-leave":e.beforeModalTransitionLeave,"after-leave":e.afterModalTransitionLeave}},[e.visibility.modal?t("div",{ref:"modal",class:e.modalClass,style:e.modalStyle,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true"}},[e._t("default"),e._v(" "),e.resizable&&!e.isAutoHeight?t("resizer",{attrs:{"min-width":e.minWidth,"min-height":e.minHeight,"max-width":e.maxWidth,"max-height":e.maxHeight,"viewport-height":e.viewportHeight,"viewport-width":e.viewportWidth,"resize-indicator":e.resizeIndicator,"resize-edges":e.resizeEdges},on:{resize:e.onModalResize}}):e._e()],2):e._e()])],1):e._e()}function i(){var t=this,e=t.$createElement;return(e=t._self._c||e)("div",[this.resizeEdges.includes("t")?e("div",{staticClass:"vue-modal-top"}):t._e(),t._v(" "),this.resizeEdges.includes("b")?e("div",{staticClass:"vue-modal-bottom"}):t._e(),t._v(" "),this.resizeEdges.includes("l")?e("div",{staticClass:"vue-modal-left"}):t._e(),t._v(" "),this.resizeEdges.includes("r")?e("div",{staticClass:"vue-modal-right"}):t._e(),t._v(" "),this.resizeEdges.includes("tr")?e("div",{staticClass:"vue-modal-topRight"}):t._e(),t._v(" "),this.resizeEdges.includes("tl")?e("div",{staticClass:"vue-modal-topLeft"}):t._e(),t._v(" "),this.resizeEdges.includes("br")?e("div",{class:t.className,attrs:{id:t.getID}}):t._e(),t._v(" "),this.resizeEdges.includes("bl")?e("div",{staticClass:"vue-modal-bottomLeft"}):t._e()])}function l(t,e,n){return n<t?t:e<n?e:n}i._withStripped=e._withStripped=!0;function o(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function u(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}function c(t){return t.touches&&0<t.touches.length?t.touches[0]:t}var H=["INPUT","TEXTAREA","SELECT"],W=function(t){var e=0<arguments.length&&void 0!==t?t:0;return function(){return(e++).toString()}}();function d(t,e,n,i,o,r,s,a){var l,u,c="function"==typeof t?t.options:t;return e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l&&(c.functional?(c._injectStyles=l,u=c.render,c.render=function(t,e){return l.call(e),u(t,e)}):(e=c.beforeCreate,c.beforeCreate=e?[].concat(e,l):[l])),{exports:t,options:c}}var N=d({name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},viewportWidth:{type:Number,required:!0},viewportHeight:{type:Number,required:!0},resizeIndicator:{type:Boolean,default:!0},resizeEdges:{type:Array,required:!0}},data:function(){return{clicked:!1,targetClass:"",size:{},initialX:0,initialY:0}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return["vue-modal-bottomRight",{clicked:this.clicked}]},getID:function(){return this.resizeIndicator?"vue-modal-triangle":""}},methods:{start:function(t){this.targetClass=t.target.className,this.clicked=!0,this.initialX=t.clientX,this.initialY=t.clientY,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,this.clicked=!1,this.targetClass="",this.initialX=0,this.initialY=0,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement,n=t.clientX,i=t.clientY,o=parseInt(e.style.width.replace("px","")),r=parseInt(e.style.height.replace("px",""));if(!(t.clientX>this.viewportWidth||t.clientX<0)&&!(t.clientY>this.viewportHeight||t.clientY<0)&&e){switch(this.targetClass){case"vue-modal-right":n-=e.offsetLeft,i=r;break;case"vue-modal-left":i=r,n=o+(this.initialX-t.clientX);break;case"vue-modal-top":n=o,i=r+(this.initialY-t.clientY);break;case"vue-modal-bottom":n=o,i-=e.offsetTop;break;case"vue-modal-bottomRight":n-=e.offsetLeft,i-=e.offsetTop;break;case"vue-modal-topRight":n-=e.offsetLeft,i=r+(this.initialY-t.clientY);break;case"vue-modal-bottomLeft":n=o+(this.initialX-t.clientX),i-=e.offsetTop;break;case"vue-modal-topLeft":n=o+(this.initialX-t.clientX),i=r+(this.initialY-t.clientY);break;default:console.error("Incorrrect/no resize direction.")}var s=Math.min(u(),this.maxWidth),a=Math.min(window.innerHeight,this.maxHeight),n=l(this.minWidth,s,n),i=l(this.minHeight,a,i),s=(this.initialX=t.clientX,this.initialY=t.clientY,this.size={width:n,height:i},{width:n-o,height:i-r});e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size,direction:this.targetClass,dimGrowth:s})}}}},i,[],!1,function(t){var e=n(3);e.__inject__&&e.__inject__(t)},null,"349486ae").exports;function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){switch(h(t)){case"number":return{type:"px",value:t};case"string":return X(t);default:return{type:"",value:t}}}function p(t){var e;return"string"==typeof t?("%"===(e=f(t)).type||"px"===e.type)&&0<e.value:0<=t}var m="[-+]?[0-9]*.?[0-9]+",I=[{name:"px",regexp:new RegExp("^".concat(m,"px$"))},{name:"%",regexp:new RegExp("^".concat(m,"%$"))},{name:"px",regexp:new RegExp("^".concat(m,"$"))}],X=function(e){if("auto"===e)return{type:e,value:0};var t=I.find(function(t){return t.regexp.test(e)});return t?{type:t.name,value:parseFloat(e)}:{type:"",value:e}},v="undefined"!=typeof Map?Map:(Object.defineProperty(y.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),y.prototype.get=function(t){t=b(this.__entries__,t),t=this.__entries__[t];return t&&t[1]},y.prototype.set=function(t,e){var n=b(this.__entries__,t);~n?this.__entries__[n][1]=e:this.__entries__.push([t,e])},y.prototype.delete=function(t){var e=this.__entries__,t=b(e,t);~t&&e.splice(t,1)},y.prototype.has=function(t){return!!~b(this.__entries__,t)},y.prototype.clear=function(){this.__entries__.splice(0)},y.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];t.call(e,o[1],o[0])}},y);function b(t,n){var i=-1;return t.some(function(t,e){return t[0]===n&&(i=e,!0)}),i}function y(){this.__entries__=[]}var g="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,w="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),B="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(w):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},Y=2;var G=["top","right","bottom","left","width","height","size","weight"],V="undefined"!=typeof MutationObserver,F=(_.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},_.prototype.removeObserver=function(t){var e=this.observers_,t=e.indexOf(t);~t&&e.splice(t,1),!e.length&&this.connected_&&this.disconnect_()},_.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},_.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),0<t.length},_.prototype.connect_=function(){g&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),V?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},_.prototype.disconnect_=function(){g&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},_.prototype.onTransitionEnd_=function(t){var t=t.propertyName,e=void 0===t?"":t;G.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},_.getInstance=function(){return this.instance_||(this.instance_=new _),this.instance_},_.instance_=null,_);function _(){function t(){r&&(r=!1,i()),s&&n()}function e(){B(t)}function n(){var t=Date.now();if(r){if(t-a<Y)return;s=!0}else s=!(r=!0),setTimeout(e,o);a=t}var i,o,r,s,a;this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=(i=this.refresh.bind(this),s=r=!(o=20),a=0,n)}var E=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},O=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||w},T=j(0,0,0,0);function S(t){return parseFloat(t)||0}function x(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.reduce(function(t,e){return t+S(n["border-"+e+"-width"])},0)}function q(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return T;var i=O(t).getComputedStyle(t),o=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=t["padding-"+o];e[o]=S(r)}return e}(i),r=o.left+o.right,s=o.top+o.bottom,a=S(i.width),l=S(i.height);return"border-box"===i.boxSizing&&(Math.round(a+r)!==e&&(a-=x(i,"left","right")+r),Math.round(l+s)!==n&&(l-=x(i,"top","bottom")+s)),t!==O(t).document.documentElement&&(i=Math.round(a+r)-e,t=Math.round(l+s)-n,1!==Math.abs(i)&&(a-=i),1!==Math.abs(t)&&(l-=t)),j(o.left,o.top,a,l)}var U="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof O(t).SVGGraphicsElement}:function(t){return t instanceof O(t).SVGElement&&"function"==typeof t.getBBox};function K(t){return g?U(t)?j(0,0,(e=(e=t).getBBox()).width,e.height):q(t):T;var e}function j(t,e,n,i){return{x:t,y:e,width:n,height:i}}M.prototype.isActive=function(){var t=K(this.target);return(this.contentRect_=t).width!==this.broadcastWidth||t.height!==this.broadcastHeight},M.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var J=M;function M(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=j(0,0,0,0),this.target=t}var Q=function(t,e){n=(e=e).x,i=e.y,r=e.width,e=e.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,o=Object.create(o.prototype),E(o,{x:n,y:i,width:r,height:e,top:i,right:n+r,bottom:e+i,left:n});var n,i,o,r=o;E(this,{target:t,contentRect:r})},Z=(L.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new J(t)),this.controller_.addObserver(this),this.controller_.refresh())}},L.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},L.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},L.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},L.prototype.broadcastActive=function(){var t,e;this.hasActive()&&(t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new Q(t.target,t.broadcastRect())}),this.callback_.call(t,e,t),this.clearActive())},L.prototype.clearActive=function(){this.activeObservations_.splice(0)},L.prototype.hasActive=function(){return 0<this.activeObservations_.length},L);function L(t,e,n){if(this.activeObservations_=[],this.observations_=new v,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}var z=new("undefined"!=typeof WeakMap?WeakMap:v),k=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=F.getInstance(),e=new Z(e,n,this);z.set(this,e)},m=(["observe","unobserve","disconnect"].forEach(function(e){k.prototype[e]=function(){var t;return(t=z.get(this))[e].apply(t,arguments)}}),void 0!==w.ResizeObserver?w.ResizeObserver:k),tt="undefined"!=typeof window&&window.ResizeObserver?ResizeObserver:m;function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function et(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function nt(t){return e='button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])',et(t.querySelectorAll(e)||[]);var e}function C(t){return t==document.activeElement}var it=function(){function t(){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var e,n,i;return e=t,(n=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(t){var e;"Tab"!==(e=t).key&&9!==e.keyCode||(t.shiftKey&&C(this.firstElement())?(this.lastElement().focus(),t.preventDefault()):document.activeElement&&!C(this.lastElement())||(this.firstElement().focus(),t.preventDefault()))}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(t){t&&(this.root=t,this.elements=nt(this.root),(t=this.firstElement())&&t.focus(),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&A(e.prototype,n),i&&A(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ot(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function rt(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ot(Object(o),!0).forEach(function(t){var e,n;e=i,n=o[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):ot(Object(o)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))})}return i}function st(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,r=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(i=n.next()).done)&&(r.push(i.value),!e||r.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return at(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var lt="vm-transition--default",ut="enter",ct="entering",R="leave",dt="leavng";function ht(){var n=this,t=n.$createElement,i=n._self._c||t;return i(n.$modal.context.componentName,{tag:"component",attrs:{name:"dialog",height:"auto",classes:["vue-dialog",n.params.class],width:n.width,"shift-y":.3,adaptive:!0,"focus-trap":!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function(t){return n.$emit("opened",t)},closed:function(t){return n.$emit("closed",t)}}},[i("div",{staticClass:"vue-dialog-content"},[n.params.title?i("div",{staticClass:"vue-dialog-content-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(t,e){return i("button",{key:e,class:t.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button",tabindex:"0"},domProps:{innerHTML:n._s(t.title)},on:{click:function(t){return t.stopPropagation(),n.click(e,t)}}},[n._v(n._s(t.title))])}),0):i("div",{staticClass:"vue-dialog-buttons-none"})])}var ft=d({name:"VueJsModal",props:{name:{required:!0,type:String},resizable:{type:Boolean,default:!1},resizeEdges:{default:function(){return["r","br","b","bl","l","tl","t","tr"]},validator:function(e){return["r","br","b","bl","l","tl","t","tr"].filter(function(t){return-1!==e.indexOf(t)}).length===e.length},type:Array},centerResize:{type:Boolean,default:!0},resizeIndicator:{type:Boolean,default:!0},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},focusTrap:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"vm-transition--overlay"},transition:{type:String,default:"vm-transition--modal"},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:function(){return[]}},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:function(t){return"auto"===t||p(t)}},height:{type:[Number,String],default:300,validator:function(t){return"auto"===t||p(t)}},shiftX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},shiftY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:N},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,shiftLeft:0,shiftTop:0,modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0}},created:function(){this.setInitialSize()},beforeMount:function(){this.$modal.subscription.$on("toggle",this.onToggle),window.addEventListener("resize",this.onWindowResize),window.addEventListener("orientationchange",this.onWindowResize),this.onWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.clickToClose&&window.addEventListener("keyup",this.onEscapeKeyUp)},mounted:function(){var e=this;this.resizeObserver=new tt(function(t){0<t.length&&(t=st(t,1)[0],e.modal.renderedHeight=t.contentRect.height)}),this.$focusTrap=new it},beforeDestroy:function(){this.$modal.subscription.$off("toggle",this.onToggle),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("orientationchange",this.onWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.onEscapeKeyUp),document.body.classList.remove("vm--block-scroll")},computed:{guaranteedOverlayTransition:function(){return this.overlayTransition||lt},guaranteedModalTransition:function(){return this.transition||lt},isAutoHeight:function(){return"auto"===this.modal.heightType},position:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.shiftX,r=this.shiftY,s=this.trueModalWidth,a=this.trueModalHeight,e=e-s,s=Math.max(t-a,0),t=i+r*s;return{left:parseInt(l(0,e,n+o*e)),top:!a&&this.isAutoHeight?void 0:parseInt(l(0,s,t))}},trueModalWidth:function(){var t=this.viewportWidth,e=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,e="%"===e.widthType?t/100*e.width:e.width;return n?(n=Math.max(i,Math.min(t,o)),l(i,n,e)):e},trueModalHeight:function(){var t=this.viewportHeight,e=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,r=this.maxHeight,e="%"===e.heightType?t/100*e.height:e.height;return n?this.modal.renderedHeight:i?(n=Math.max(o,Math.min(t,r)),l(o,n,e)):e},autoHeight:function(){return this.adaptive&&this.modal.renderedHeight>=this.viewportHeight?Math.max(this.minHeight,this.viewportHeight)+"px":"auto"},containerClass:function(){return["vm--container",this.scrollable&&this.isAutoHeight&&"scrollable"]},modalClass:function(){return["vm--modal",this.classes]},stylesProp:function(){return"string"==typeof this.styles?this.styles.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var e=D(e,2),n=e[0],e=e[1];return r(r({},t),{},s({},n,e))},{}):this.styles},modalStyle:function(){return"ltr"===(documentDir=document.dir)?[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?this.autoHeight:this.trueModalHeight+"px"}]:[this.stylesProp,{top:this.position.top+"px",right:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?this.autoHeight:this.trueModalHeight+"px"}]},isComponentReadyToBeDestroyed:function(){return this.overlayTransitionState===R&&this.modalTransitionState===R}},watch:{isComponentReadyToBeDestroyed:function(t){t&&(this.visible=!1)}},methods:{startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},beforeOverlayTransitionEnter:function(){this.overlayTransitionState=ct},afterOverlayTransitionEnter:function(){this.overlayTransitionState=ut},beforeOverlayTransitionLeave:function(){this.overlayTransitionState=dt},afterOverlayTransitionLeave:function(){this.overlayTransitionState=R},beforeModalTransitionEnter:function(){var t=this;this.modalTransitionState=ct,this.$nextTick(function(){t.resizeObserver.observe(t.$refs.modal)})},afterModalTransitionEnter:function(){this.modalTransitionState=ut,this.draggable&&this.addDraggableListeners(),this.focusTrap&&this.$focusTrap.enable(this.$refs.modal);var t=this.createModalEvent({state:"opened"});this.$emit("opened",t)},beforeModalTransitionLeave:function(){this.modalTransitionState=dt,this.resizeObserver.unobserve(this.$refs.modal),this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalTransitionLeave:function(){this.modalTransitionState=R;var t=this.createModalEvent({state:"closed"});this.$emit("closed",t)},onToggle:function(t,e,n){this.name===t&&(t=void 0===e?!this.visible:e,this.toggle(t,n))},setInitialSize:function(){var t=f(this.width),e=f(this.height);this.modal.width=t.value,this.modal.widthType=t.type,this.modal.height=e.value,this.modal.heightType=e.type},onEscapeKeyUp:function(t){27===t.which&&this.visible&&this.$modal.hide(this.name)},onWindowResize:function(){this.viewportWidth=u(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(){return rt({name:this.name,ref:this.$refs.modal||null},0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})},onModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height,this.centerResize||(this.shiftLeft=this.getResizedShiftLeft(t),this.shiftTop=this.getResizedShiftTop(t));t=this.modal.size;this.$emit("resize",this.createModalEvent({size:t}))},getResizedShiftLeft:function(t){this.viewportHeight,this.viewportWidth,this.trueModalWidth,this.trueModalHeight;var e=this.shiftLeft;switch(t.direction){case"vue-modal-topRight":case"vue-modal-bottomRight":case"vue-modal-right":e+=.5*t.dimGrowth.width;break;case"vue-modal-bottomLeft":case"vue-modal-topLeft":case"vue-modal-left":e-=.5*t.dimGrowth.width;break;case"vue-modal-top":case"vue-modal-bottom":break;default:console.error("Could not Find Resize Direction In ShiftLeft")}return e},getResizedShiftTop:function(t){this.viewportHeight,this.viewportWidth,this.trueModalWidth,this.trueModalHeight;var e=this.shiftTop;switch(t.direction){case"vue-modal-bottom":case"vue-modal-bottomRight":case"vue-modal-bottomLeft":e+=.5*t.dimGrowth.height;break;case"vue-modal-top":case"vue-modal-topRight":case"vue-modal-topLeft":e-=.5*t.dimGrowth.height;break;case"vue-modal-left":case"vue-modal-right":break;default:console.error("Could not Find Resize Direction In ShiftTop")}return e},open:function(t){var e=this,n=(this.reset&&(this.setInitialSize(),this.shiftLeft=0,this.shiftTop=0),this.scrollable&&document.body.classList.add("vm--block-scroll"),!1),t=this.createModalEvent({cancel:function(){n=!0},state:"before-open",params:t});this.$emit("before-open",t),n?this.scrollable&&document.body.classList.remove("vm--block-scroll"):("undefined"!=typeof document&&document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),this.visible=!0,this.$nextTick(function(){e.startTransitionEnter()}))},close:function(t){this.scrollable&&document.body.classList.remove("vm--block-scroll");var e=!1,t=this.createModalEvent({cancel:function(){e=!0},state:"before-close",params:t});this.$emit("before-close",t),e||this.startTransitionLeave()},toggle:function(t,e){this.visible!==t&&(t?this.open(e):this.close(e))},getDraggableElement:function(){return!0===this.draggable?this.$refs.modal:"string"==typeof this.draggable?this.$refs.modal.querySelector(this.draggable):null},onOverlayClick:function(){this.clickToClose&&this.toggle(!1)},addDraggableListeners:function(){var i,o,r,s,t,n,a,l=this,e=this.getDraggableElement();e&&(s=r=o=i=0,n=function(t){var e=c(t),n=e.clientX,e=e.clientY;l.shiftLeft=r+n-i,l.shiftTop=s+e-o,t.preventDefault()},a=function t(e){l.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",n),document.removeEventListener("touchmove",n),document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t),e.preventDefault()},e.addEventListener("mousedown",t=function(t){var e=t.target;(e=e)&&-1!==H.indexOf(e.nodeName)||(t=(e=c(t)).clientX,e=e.clientY,document.addEventListener("mousemove",n),document.addEventListener("touchmove",n),document.addEventListener("mouseup",a),document.addEventListener("touchend",a),i=t,o=e,r=l.shiftLeft,s=l.shiftTop)}),e.addEventListener("touchstart",t))},ensureShiftInWindowBounds:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shiftLeft,i=this.shiftTop,o=this.shiftX,r=this.shiftY,s=this.trueModalWidth,a=this.trueModalHeight,e=e-s,s=Math.max(t-a,0),t=n+o*e,a=i+r*s;this.shiftLeft-=t-l(0,e,t),this.shiftTop-=a-l(0,s,a)}}},e,[],!1,function(t){var e=n(4);e.__inject__&&e.__inject__(t)},null,"ee80f350").exports;ht._withStripped=!0;function pt(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(e){return i("modal",n._g(n._b({key:e.id,on:{closed:function(t){return n.remove(e.id)}}},"modal",e.modalAttrs,!1),e.modalListeners),[i(e.component,n._g(n._b({tag:"component",on:{close:function(t){return n.$modal.hide(e.modalAttrs.name,t)}},scopedSlots:n._u([n._l(e.componentSlots,function(e,n){return{key:n,fn:function(t){return[i("VNode",{key:n,attrs:{node:e,scope:t}})]}}})],null,!0)},"component",e.componentAttrs,!1),n.$listeners))],1)}),1)}var mt=d({name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String}},data:function(){return{params:{}}},computed:{buttons:function(){return this.params.buttons||[]},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){this.params={},this.$emit("before-closed",t)},click:function(t,e){var n=this.buttons[t],n=null==n?void 0:n.handler;"function"==typeof n&&n(t,e,{source:2<arguments.length&&void 0!==arguments[2]?arguments[2]:"click"})}}},ht,[],!1,function(t){var e=n(5);e.__inject__&&e.__inject__(t)},null,"d53872a6").exports;pt._withStripped=!0;m=d({name:"VNode",props:{node:{type:[Object,Function],required:!0},scope:{type:Object,default:function(){return{}}}},render:function(){return"function"==typeof this.node?this.node(this.scope):this.node}},void 0,void 0,!1,null,null,"b47dd47a").exports;function vt(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function bt(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(o),!0).forEach(function(t){var e,n;e=i,n=o[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):vt(Object(o)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))})}return i}var yt=d({data:function(){return{modals:[]}},components:{VNode:m},created:function(){this.$root.__modalContainer=this},mounted:function(){var t=this;this.$modal.subscription.$on("hide-all",function(){t.modals=[]})},methods:{add:function(t){var e=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=W(),a=o.name||"dynamic_modal_"+s;this.modals.push({id:s,modalAttrs:bt(bt({},o),{},{name:a}),modalListeners:r,component:t,componentAttrs:n,componentSlots:i}),this.$nextTick(function(){e.$modal.show(a)})},remove:function(e){var t=this.modals.findIndex(function(t){return t.id===e});-1!==t&&this.modals.splice(t,1)}}},pt,[],!1,null,null,"1cefbca6").exports;function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function wt(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function _t(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?wt(Object(o),!0).forEach(function(t){var e,n;e=i,n=o[t=t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):wt(Object(o)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))})}return i}var Et=function(n){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=new n,l={root:null,componentName:a.componentName||"Modal"};return{context:l,subscription:o,show:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0];switch(gt(i)){case"string":!function(t,e){o.$emit("toggle",t,!0,e)}.apply(void 0,e);break;case"object":case"function":!function(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=4<arguments.length?arguments[4]:void 0,r=null==(r=l.root)?void 0:r.__modalContainer,s=a.dynamicDefaults||{};null!=r&&r.add(t,e,n,_t(_t({},s),i),o)}.apply(void 0,e);break;default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",i)}},hide:function(t,e){o.$emit("toggle",t,!1,e)},hideAll:function(){o.$emit("hide-all")},toggle:function(t,e){o.$emit("toggle",t,void 0,e)},setDynamicModalContainer:function(t){l.root=t;e=document.createElement("div"),document.body.appendChild(e);var e;new n({parent:t,render:function(t){return t(yt)}}).$mount(e)}}},Ot="__VERSION__";t.default={install:function(e){var n,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$modal||(n=new Et(e,t),Object.defineProperty(e.prototype,"$modal",{get:function(){var t;return this instanceof e&&(t=this.$root,n.context.root||n.setDynamicModalContainer(t)),n}}),e.component(n.context.componentName,ft),t.dialog&&(t=t.dialogComponentName||"VDialog",e.component(t,mt)))}}}],i={},o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=6);function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,i});