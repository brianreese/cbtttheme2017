(function ($, Drupal) {
  Drupal.behaviors.toggleOffCanvas = {
    attach: function (context, settings) {
      console.log('behavior');
      $('[data-toggle="offcanvas"]', context).each(function () {
        $(this).click(function(){
          // @todo: This could probably be improved by finding the .row-offcanvas element relative to this.
          $('.row-offcanvas').toggleClass('active');
          console.log('working');
        });
      });
    }
  };
})(jQuery, Drupal);
