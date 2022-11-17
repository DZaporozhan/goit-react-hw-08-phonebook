"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{3690:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5705),a=n(8985),i=n.n(a),o=n(7103),c=n(9434),s=n(9273),l=n(4217),u=n(184),d={email:"",password:""},p=o.Ry().shape({email:o.Z_().email().required("Required"),password:o.Z_().required("Required")}),f=function(){var e=(0,c.I0)(),t=(0,c.v9)(l.wU),n=(0,c.v9)(l.AV);return(0,u.jsx)(u.Fragment,{children:!t&&(0,u.jsx)(r.J9,{initialValues:d,onSubmit:function(t){e((0,s.x4)(t))},validationSchema:p,children:(0,u.jsxs)(r.l0,{children:[(0,u.jsxs)("label",{children:["Email",(0,u.jsx)(r.gN,{type:"email",name:"email",placeholder:"Enter your email"}),(0,u.jsx)(r.Bc,{name:"email",component:"span"})]}),(0,u.jsxs)("label",{children:["Password",(0,u.jsx)(r.gN,{type:"password",name:"password",placeholder:"Enter your password"}),(0,u.jsx)(r.Bc,{name:"password",component:"span"})]}),(0,u.jsxs)("button",{type:"submit",children:[" ",n?(0,u.jsx)(i(),{color:"#ffffff",height:25}):(0,u.jsx)(u.Fragment,{children:"Log In"})," "]})]})})})};function m(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("title",{children:"Login"}),(0,u.jsx)(f,{})]})}},8985:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(2791)),l=n(8945),u=(0,n(7074).createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,i=void 0===a?"#000000":a,o=e.speedMultiplier,d=void 0===o?1:o,p=e.cssOverride,f=void 0===p?{}:p,m=e.height,h=void 0===m?35:m,v=e.width,y=void 0===v?4:v,b=e.radius,g=void 0===b?2:b,j=e.margin,w=void 0===j?2:j,_=c(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),O=r({display:"inherit"},f),x=function(e){return{backgroundColor:i,width:(0,l.cssValue)(y),height:(0,l.cssValue)(h),margin:(0,l.cssValue)(w),borderRadius:(0,l.cssValue)(g),display:"inline-block",animation:"".concat(u," ").concat(1/d,"s ").concat(.1*e,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?s.createElement("span",r({style:O},_),s.createElement("span",{style:x(1)}),s.createElement("span",{style:x(2)}),s.createElement("span",{style:x(3)}),s.createElement("span",{style:x(4)}),s.createElement("span",{style:x(5)})):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(o,0),r}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=690.ee5ee6d3.chunk.js.map