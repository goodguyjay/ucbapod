/*document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 992) {
        window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var bgParallax = document.querySelector('.masthead');
            var limit = bgParallax.offsetTop + bgParallax.offsetHeight;

            if (scrollPosition <= limit) {
                bgParallax.style.backgroundPositionY = (50 - 10 * scrollPosition / limit) + '%';
            }
        });
    }
}); deixei o código aí só pra deixar, mas não descomenta pelo amor de deus pq esse código tá pesadíssimo no navegador -- jay*/


// esse aí é o parallax muito mais otimizado
//eu coloquei especificadamente pra SÓ funcionar em desktop, celular não vai rodar o parallax pq eu não quero essa dor de cabeça -- jay
/*
function parallaxScroll() {
    var scrollPosition = window.scrollY;
    var bgParallax = document.querySelector('.masthead');
    var limit = bgParallax.offsetTop + bgParallax.offsetHeight;

    if (scrollPosition <= limit) {
        bgParallax.style.backgroundPositionY = (50 - 10 * scrollPosition / limit) + '%';
    }
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(parallaxScroll);
});
*/

function parallaxScroll() {
    let scrollPosition = window.scrollY;

    // Efeito para o cabeçalho
    let bgParallaxHeader = document.querySelector('.masthead');
    let limitHeader = bgParallaxHeader.offsetTop + bgParallaxHeader.offsetHeight;
    if (scrollPosition <= limitHeader) {
        bgParallaxHeader.style.backgroundPositionY = (50 - 10 * scrollPosition / limitHeader) + '%';
    }

    // Efeito para a seção #locale
    let bgParallaxLocale = document.getElementById('locale');
    let limitLocale = bgParallaxLocale.offsetTop + bgParallaxLocale.offsetHeight;
    if (scrollPosition <= limitLocale) {
        bgParallaxLocale.style.backgroundPositionY = (50 - 10 * scrollPosition / limitLocale) + '%';
    }
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(parallaxScroll);
});
