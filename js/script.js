console.log("App started");
$(function () {
    $('.news__card_grid').flickity({
        groupCells: true
    });

    $('.theme__block_item').click(function () {
        $('.theme__block_item.is-toggle-active').removeClass('is-toggle-active');
        $(this).addClass('is-toggle-active');
        var id = $(this).attr('data-tab');
        $('.theme__block_single_content').removeClass('is-content-active');
        $(`.${id}`).addClass('is-content-active');
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.main_logo').addClass('active');
            $('.navbar .navbar-nav').addClass('active');
        } else {
            $('.main_logo').removeClass('active');
            $('.navbar .navbar-nav').removeClass('active');
        }
    })
});