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

      document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(function (counter) {
          const targetValue = parseInt(counter.textContent.trim());
          startCounter(counter, targetValue);
        });

        function startCounter(element, targetValue) {
          let currentValue = 0;
          const duration = 5000;

          function updateCounter(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );
            currentValue = Math.ceil(progress * targetValue);

            element.textContent = currentValue;

            if (progress < 1) {
              window.requestAnimationFrame(updateCounter);
            }
          }

          let startTimestamp = null;
          window.requestAnimationFrame(updateCounter);
        }
      });
    },
  };
})(jQuery, Drupal);
console.log("hello world");
