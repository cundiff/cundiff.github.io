import Chaffle from './chaffle.js'

var elements = document.querySelectorAll("[data-chaffle]");
Array.prototype.forEach.call(elements, function (el) {
  var chaffle = new Chaffle(el, { ang: "en", speed: 20, delay: 100 });
  chaffle.init();
});
