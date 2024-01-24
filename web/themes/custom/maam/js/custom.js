/**
 * @file
 * Global utilities.
 */
(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.maam = {
    attach: function (context, settings) {
      const navbar = $(".header", context)[0];
      let lastScrollTop = 0;

      $(window, context).scroll(function () {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        const distance = scrollTop - lastScrollTop;
        const currentTop = parseInt(navbar.style.top) || 0;

        let amount = Math.max(
          Math.min(
            currentTop +
              (distance < 0 ? Math.abs(distance) : -Math.abs(distance)) * 40,
            0
          ),
          -80
        );

        navbar.style.top = `${amount}px`;
        if (amount === -80) {
          $(navbar).addClass("hidden");
        } else {
          $(navbar).removeClass("hidden");
        }

        if (distance < 0 && scrollTop > 0) {
          $(navbar).addClass("scrolling-up");
        } else {
          $(navbar).removeClass("scrolling-up");
        }

        lastScrollTop = scrollTop;
      });
    },
  };
})(jQuery, Drupal);
