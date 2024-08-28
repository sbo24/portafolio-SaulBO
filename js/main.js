$(document).ready(function () {
    const $navbar = $('.navbar');
    const scrollOffset = 50;

    // Efecto de scroll suave
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Cambiar color de la navbar al hacer scroll
    $(window).on('scroll', function () {
        $navbar.toggleClass('scrolled', $(this).scrollTop() > scrollOffset);
    });
});