$(".wrapper").addClass("loaded");

$(".icon-menu").click(function (event) {
  $(this).toggleClass("active");
  $(".menu__body").toggleClass("active");
  $("body").toggleClass("lock");
});

function ibg() {
  var imageContainers = $(".ibg");
  $.each(imageContainers, function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();
