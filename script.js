$(function() {
  $('nav.mobile') .click(function() {
      $(this).find('ul').show();
      $(this).find('.icon-mobile').css('display', 'flex');
  });
  $('.icon-mobile').click(function() {
    $('.mobile ul').fadeOut();
  });
  $('nav a').click(function() {
      var href = $(this).attr('href');
      var offSetTop = $(href).offset().top;

      $('html,body').animate({'scrollTop':offSetTop});
      return false;
  })

    
})