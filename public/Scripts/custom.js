$(document).ready(function() {

  // Dropdown Hover Fix
  $('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150)
  });

  $('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

});