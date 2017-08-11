(function ($) {
  Drupal.behaviors.applyBootstrapDataTable = {
    attach: function (context, settings) {
      $('#example, .bootstrap-data-table-view table', context).DataTable();
    }
  }

})(jQuery);
