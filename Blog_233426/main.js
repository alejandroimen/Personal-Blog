$(document).ready(function(){
  var alturaMenu = $('.menu').height();
  var anchoCard = $('.flipCard').outerWidth(true);
  var anchoMax = $('.cardsGrid')[0].scrollWidth;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > alturaMenu * 0.5 ){
			$('.menu').addClass('menu-fixed');//añade una clase para que quede pegado arriba
      $('.main').addClass('mainScroll');//añade clase para bajar el main y el cambio de clase anterior no afecte el posicionamiento
      if ( $(window).scrollTop() > alturaMenu * 0.5 ){
        $('.menu-fixed').css('transition','0.5s');//añade una transicion solo despues de haber sido agregado sin transicion
      }
		} else {
			$('.menu').removeClass('menu-fixed');
      $('.main').removeClass('mainScroll');
      $('.menu').css('transition','');
		}//elimina todo lo anterior si el scroll sube
	});

  $('#btn-right').on('click', function(){
    var scrollActual = $('.cardsGrid').scrollLeft();
    if(scrollActual < anchoMax){
      $('.cardsGrid').scrollLeft(scrollActual + anchoCard);
    }
  })
  $('#btn-left').on('click', function(){
    var scrollActual = $('.cardsGrid').scrollLeft();
    if(scrollActual > 0){
      $('.cardsGrid').scrollLeft(scrollActual - anchoCard);
    }
  })

  $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
    
  
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800); // Duración del desplazamiento en milisegundos (800ms en este caso)
      }
    });
  });
  
});