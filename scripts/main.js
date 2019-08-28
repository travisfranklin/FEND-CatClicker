"use strict";function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,r){var a=[],n=!0,e=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!r||a.length!==r);n=!0);}catch(t){e=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(e)throw o}}return a}function _arrayWithHoles(t){if(Array.isArray(t))return t}function Kitty(t){this.name=t,this.clickCount=0}function renderCat(){var t=!0,r=!1,a=void 0;try{for(var n,e=playPen[Symbol.iterator]();!(t=(n=e.next()).done);t=!0){var o=n.value;$('\n      <li id="'.concat(o.name,'" class="cat hidden">\n        <div  class="cat__previewbox">\n          <div class="cat__overlay"></div>\n          <p class="title">').concat(o.name,'</p>\n          <img src="').concat(o.photo,'" class="cat__preview" alt="photo of ').concat(o.name,' the cat">\n          <p class="count"><span class="').concat(o.name,'clicked">0</span> clicks</p>\n        </div>\n      </li>\n    ')).appendTo(".catList__Container")}}catch(t){r=!0,a=t}finally{try{t||null==e.return||e.return()}finally{if(r)throw a}}}function renderCatList(){var t=!0,r=!1,a=void 0;try{for(var n,e=playPen[Symbol.iterator]();!(t=(n=e.next()).done);t=!0){var o=n.value;$('\n      <li id="'.concat(o.name,'__Link" class="catList__Link">').concat(o.name,"</li>\n    ")).appendTo(".catList__Links")}}catch(t){r=!0,a=t}finally{try{t||null==e.return||e.return()}finally{if(r)throw a}}}var cats=["kiki","buckaroo","lelouche","laHire","cheeky","whiskers","bulgaria","mr_Rogers","dog","bucko","marilyn","indy"],playPen=[],_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,_loop=function(){var t=_slicedToArray(_step3.value,2),r=(t[0],t[1]);Kitty.prototype.update=function(){this.name=r},(r=new Kitty(r)).photo="https://loremflickr.com/200/200/kitten,sleeping/all/?lock=".concat(Math.floor(Math.random()*Math.floor(1e3))),playPen.push(r)},_iterator3=cats.entries()[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0)_loop()}catch(t){_didIteratorError3=!0,_iteratorError3=t}finally{try{_iteratorNormalCompletion3||null==_iterator3.return||_iterator3.return()}finally{if(_didIteratorError3)throw _iteratorError3}}renderCatList(),renderCat(),playPen.forEach(function(t){$("#".concat(t.name)).click(function(){t.clickCount++,$(".".concat(t.name,"clicked")).text(t.clickCount)})}),playPen.forEach(function(t){$("#".concat(t.name,"__Link")).click(function(){playPen.forEach(function(t){$("#".concat(t.name)).hasClass("hidden")||$("#".concat(t.name)).addClass("hidden")}),$("#".concat(t.name)).toggleClass("hidden")})});