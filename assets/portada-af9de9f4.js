import "./modulepreload-polyfill-3cfb730f.js";

$(document).ready(function() {
    // Utiliza setTimeout dentro de este bloque
    var timeout = setTimeout(function() { 
      $(".preloader-2").hide(); 
      $(".content").show(); 
    }, 1900);
  });