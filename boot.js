(function(){
  var parts = window.__kyunParts || [];
  var code = parts.join("");
  var s = document.createElement("script");
  s.textContent = code;
  document.body.appendChild(s);
})();
