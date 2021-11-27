$(document).ready(function () {
  const $kitty = $(".kitty-js");
  const $body = $("body");

  $(window).on("scroll", () => {
    const scrollTop = $(window).scrollTop();
    $kitty.css("background-position-y", -scrollTop / 2);
    $body.css("background-position-y", -scrollTop / 2.5);
  });
  // Bubbles////////////////
  $(window).on("mousemove", (e) => {
    // console.log(e);
    // console.log(e.pageX, e.pageY);
    //to do destruction//
    // const { pageX, pageY } = e;
    // console.log(pageX, pageY);
    ////or
    const { pageX: x, pageY: y } = e;
    const size = Math.random() * 10;
    const $bubble = $('<div class="bubble"></div>').css({
      left: x,
      top: y,
      width: size + "em",
      height: size + "em",
    });
    $bubble.appendTo("body");
    $bubble.animate({ top: -200 }, 4000, () => {
      $bubble.remove();
    });
  });
});
