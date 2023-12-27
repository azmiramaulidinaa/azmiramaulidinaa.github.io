jQuery(document).ready(function ($) {
  var mastheadheight = $(".arm-header").outerHeight();
  $(".arm-banner,.arm-main-section").css("margin-top", mastheadheight);

  $(window)
    .scroll(function () {
      if ($(window).scrollTop() >= 10) {
        $(".arm-header").addClass("arm-fixed-header");
      } else {
        $(".arm-header").removeClass("arm-fixed-header");
      }
    })
    .scroll();
});

function copyToClipboard(phone) {
  navigator.clipboard.writeText(phone);
  alert("Number Phone Copied");
}
