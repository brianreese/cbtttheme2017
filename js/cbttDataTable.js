(function ($) {

  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $('#example').DataTable();
    }
  }

})(jQuery);
