(function(){
  var bin = atob(window.__kyunB64||"");
  var bytes = new Uint8Array(bin.length);
  for (var i=0;i<bin.length;i++) bytes[i]=bin.charCodeAt(i);
  if (!window.DecompressionStream) { console.error("Need DecompressionStream"); return; }
  var ds = new Response(bytes).body.pipeThrough(new DecompressionStream("gzip"));
  new Response(ds).arrayBuffer().then(function(buf){
    var code = new TextDecoder().decode(buf);
    var s = document.createElement("script");
    s.textContent = code;
    document.body.appendChild(s);
  });
})();
