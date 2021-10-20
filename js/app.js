let burger = document.querySelector('.burger');
let headerNav = document.querySelector('.header__nav-active');
let burgerActive = document.querySelector('.burger-active');

burger.addEventListener('click', () => {
    headerNav.classList.add('header__nav-active-fixed');
    burger.classList.add('burger-close');
});

burgerActive.addEventListener('click', () => {
    headerNav.classList.remove('header__nav-active-fixed');
    burger.classList.remove('burger-close');
});

(function() {
    let header = document.querySelector('.header');

    window.onscroll = () => {
        if(window.pageYOffset > 525) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    };
}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');

        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
                headerNav.classList.remove('header__nav-active-fixed');
                burger.classList.remove('burger-close');
            });
        });
    };
    scrollTo();
}());