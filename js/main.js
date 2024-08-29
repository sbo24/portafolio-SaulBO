$(document).ready(function () {
    const $navbar = $('.navbar');
    const scrollOffset = 50;

    // Efecto de scroll suave
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const $target = $(target);

        // Verifica si el objetivo existe
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 500, 'linear');
        }
    });

    // Cambiar color de la navbar al hacer scroll
    $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();
        $navbar.toggleClass('scrolled', scrollTop > scrollOffset);

        // Agregar clase 'scrolling' cuando el usuario se desplaza
        $navbar.toggleClass('scrolling', scrollTop > 0);
    });
});


