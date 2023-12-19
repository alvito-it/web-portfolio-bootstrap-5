$(window).on('load', function() {
    $('.hero img').addClass('hero-show');
    $('.hero h1').addClass('hero-show');
    $('.hero p').addClass('hero-show');
});

$(window).scroll(function() {
    const parScroll = $(this).scrollTop();

    if(parScroll > $('.about').offset().top - 600) {
        $('.about p').each(function() {
            setTimeout(function() {
                $('.about p').addClass('about-show');
            });
        });
    }
});