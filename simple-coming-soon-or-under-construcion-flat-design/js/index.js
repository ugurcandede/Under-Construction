$(document).ready(function() {
  $('#send').click(function(e) {
    e.preventDefault();
    $(this).addClass('animated fadeOutRight');
    $('.box form').addClass('animated fadeOut');

    $(this, '.box form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd  oanimationend animationend', function() {
      $(this).hide();
      $('.box form').hide();
      $('.thanks').show().addClass('animated zoomIn');
      $('.box').height('auto');
    });

  })

})