const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');
const menuLinks = document.querySelectorAll('.menu-link');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const faqBody = document.querySelector('.faq-body');
    const faqItems = faqBody.querySelectorAll('.faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                faqItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, index * 150);
                });

                observer.unobserve(faqBody);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(faqBody);
});



document.addEventListener("DOMContentLoaded", function () {


    const header = document.querySelector('.header');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                header.classList.add('visible');
                observer.unobserve(header);
            }
        },
        {
            threshold: 0.1,
        }
    );

    observer.observe(header);



});




document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight + 20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.footer-nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight + 20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.functional-screens .screen');
    let current = 0;

    function showNextScreen() {
        screens.forEach(screen => screen.classList.remove('active'));
        screens[current].classList.add('active');
        current = (current + 1) % screens.length;
    }

    showNextScreen();

    setInterval(showNextScreen, 4000);
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.review-more');
    const items = document.querySelector('.reviews-items');
    const decor = document.querySelector('.reviews-body-decor');

    toggleBtn.addEventListener('click', () => {
        items.classList.toggle('active');
        decor.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });
});