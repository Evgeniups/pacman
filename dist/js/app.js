!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.createElement("canvas"),o=r.getContext("2d"),i=(((e=110,t=310,n=0,r=0,o=32,i=0,u=0,l=5)=>({x:e,y:t,pacX:n,pacY:r,size:o,dirX:i,dirY:u,speed:l}))(),0),u=0;r.height=window.innerHeight,r.width=window.innerWidth,((e,t,n,r,o,i,u)=>{e.fillStyle="black",e.fillRect(0,0,t.width,t.height),e.font="20px Verbana",e.fillStyle="white",e.fillText(`Человек: ${i}    Сопливчик: ${u}`,2,20)})(o,r,0,0,0,i,u),document.body.appendChild(r)}]);