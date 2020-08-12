$(document).ready(function(){

  jQuery(function($){
    $('.navbar-toggle').click(function(){
    $('.navbar-collapse').toggleClass('right');
    $('.navbar-toggle').toggleClass('indexcity');
    });
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#collapse-icon').toggleClass('fa-chevron-circle-left fa-chevron-circle-right');
    
  });

  $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    margin: 25,
    responsive: {
      0: {
          items: 1
      },
      500: {
          items: 2
      },
      900: {
          items: 3
      },
      1200: {
          items: 4
      },
      1600: {
          items: 5
      }
    }
  });
    
});