(function($){
  Drupal.behaviors.stellarNavInit = {
    attach: function (context, settings) {
      $('.stellarnav').each(function(){
        $(this).stellarNav({
          theme: 'light'
        });
      });
    }
  };
})(jQuery)
