"use strict";function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(n,t){var a=[],i=!0,e=!1,c=void 0;try{for(var o,r=n[Symbol.iterator]();!(i=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(n){e=!0,c=n}finally{try{i||null==r.return||r.return()}finally{if(e)throw c}}return a}function _arrayWithHoles(n){if(Array.isArray(n))return n}function Kitty(n){this.name=n,this.clickCount=0}var playPen=[],view={init:function(){!function(){for(var n=0,t=playPen;n<t.length;n++){var a=t[n];$('\n          <li id="'.concat(a.name,'" class="cat hidden">\n            <div  class="cat__previewbox">\n              <div class="cat__overlay"></div>\n              <p class="title">').concat(a.name,'</p>\n              <img src="').concat(a.photo,'" class="cat__preview" alt="photo of ').concat(a.name,' the cat">\n              <p class="count"><span class="').concat(a.name,'clicked">0</span> clicks</p>\n            </div>\n          </li>\n        ')).appendTo(".catList__Container")}}(),function(){for(var n=0,t=playPen;n<t.length;n++){var a=t[n];$('\n          <li id="'.concat(a.name,'__Link" class="catList__Link">').concat(a.name,"</li>\n        ")).appendTo(".catList__Links")}}()}},controller={init:function(){var n=!0,t=!1,a=void 0;try{for(var i,e=function(){var n=_slicedToArray(i.value,2),t=(n[0],n[1]);Kitty.prototype.update=function(){this.name=t},(t=new Kitty(t)).photo="https://loremflickr.com/200/200/kitten,sleeping/all/?lock=".concat(Math.floor(Math.random()*Math.floor(1e3))),playPen.push(t)},c=["kiki","buckaroo","lelouche","laHire","cheeky","whiskers","bulgaria","mr_Rogers","dog","bucko","marilyn","indy"].entries()[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)e()}catch(n){t=!0,a=n}finally{try{n||null==c.return||c.return()}finally{if(t)throw a}}view.init(),playPen.forEach(function(n){$("#".concat(n.name)).click(function(){n.clickCount++,$(".".concat(n.name,"clicked")).text(n.clickCount)})}),playPen.forEach(function(n){$("#".concat(n.name,"__Link")).click(function(){playPen.forEach(function(n){$("#".concat(n.name)).hasClass("hidden")||$("#".concat(n.name)).addClass("hidden")}),$("#".concat(n.name)).toggleClass("hidden")})})}};controller.init();