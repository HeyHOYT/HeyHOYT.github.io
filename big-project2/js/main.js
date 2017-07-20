$(document).ready(function() {
    let owl = $(".owl-carousel"),
        prev = $("#left"),
        next = $("#right");


    owl.owlCarousel({
        items: 1,
        nav: true,
        loop: true
    });
    next.on("click", () => {
        owl.trigger("next.owl.carousel");
    });
    prev.on("click", () => {
        owl.trigger("next.owl.carousel");
    });
});