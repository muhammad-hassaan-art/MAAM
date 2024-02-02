/**
 * @file
 * Global utilities.
 */
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.maam = {
    attach: function (context, settings) {
      const navbar = $(".header", context)[0];

      $(window, context).scroll(function () {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 0) {
          $(navbar).addClass("scrolling-up");
        } else {
          $(navbar).removeClass("scrolling-up");
        }
      });
    },
  };
})(jQuery, Drupal);
