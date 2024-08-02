const images = $('ul li img');

const email = $('input[type="email"]');

const select = $('select');

console.log(select.value);

const submit = $('input[type="submit"]');

images.hover()
    .on('mouseenter', function () {
        $(this).css('transform', 'scale(1.1)');
    })
    .on('mouseleave', function () {
        $(this).css('transform', 'scale(1)');
    });

$('.voir_heros').click(function () {
    $('html, body').animate({
        scrollTop: $('#heros').offset().top
    }, 1000);
});

$('.voir_ennemis').click(function () {
    $('html, body').animate({
        scrollTop: $('#ennemis').offset().top
    }, 1000);
});
/*

function check_formulaire() {
    if (email.val() === '' || select.val() === '') {
        submit.prop('disabled', true);
    } else {
        submit.prop('disabled', false);
    }
}

check_formulaire();*/

const body = document.querySelector("body");

console.log(body.children);
