$(document).ready(function() {
    $('#card_thanks').hide();

    $('.rating button').on('click', function() {
        if ($('.rating button').hasClass('active')) {
            $('.rating button').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).addClass('active');
        }
        $('#rating_number').text($(this).text());
    })

    

    $('#btn_submit').on('click', function() {
        $('#card_thanks').show();
        $('#card_start').hide();
    });
});