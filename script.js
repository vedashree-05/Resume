$(document).ready(function() {
    $(".fade").each(function(i) {
        $(this).delay(200 * i).animate({ opacity: 1 }, 800);
    });
});
