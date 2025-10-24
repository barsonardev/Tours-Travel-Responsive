$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav-bar-right').toggleClass('nav-bar-right-toggle');
    });

}); 