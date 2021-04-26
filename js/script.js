// Activación de transición del menú principal

  
$('nav#menu a, aside#menu-responsive nav a').bind('click',function(event){
    var $anchor = $(this);  
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000,'easeOutExpo');
    event.preventDefault();
});

// Función Abrir- Cerrar del menú mobile

$("#abrir").click(function(){
  $("#menu-responsive").animate({
      right:0
  });

  $("#abrir").hide();
  $("#cerrar").show();
  event.preventDefault();

});

$("#cerrar,#profile").click(function( ){
    $("#menu-responsive").animate({
      right:-290
});

$("#cerrar").hide();
$("#abrir").show();
event.preventDefault();

});

 
