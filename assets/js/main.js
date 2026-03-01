/* Main JS */

document.addEventListener('DOMContentLoaded', () => {

    /* Loader */
    const loader = document.querySelector('.loading-pag');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 4000);
    }

    /* Dark Mode */
    const darkModeBtn = document.querySelector('#darkMode');
    const body = document.body;

    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark');
            body.classList.toggle('light');

            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    /* Mobile Menu */
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.site-header');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('activar');
        });
    }

    window.onscroll = () => {
        if (navbar) navbar.classList.remove('activar');

        if (window.scrollY > 0) {
            if (header) header.classList.add('activar');
        } else {
            if (header) header.classList.remove('activar');
        }

        /* Scroll To Top Button Visibility */
        const scrollUpBtn = document.querySelector('.cm-up');
        if (scrollUpBtn) {
            if (window.scrollY > 100) {
                scrollUpBtn.style.display = 'flex';
            } else {
                scrollUpBtn.style.display = 'none';
            }
        }
    };

    /* Scroll To Top Action */
    const scrollUpBtn = document.querySelector('.cm-up');
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* AOS Init */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            once: true,
        });
    }

    /* Typewriter Effect (Typed.js) */
    if (typeof Typed !== 'undefined') {
        new Typed('.site-contacto', {
            strings: ['Gmail', 'WhatsApp', 'Instagram', 'Telegram', 'Linkedin', 'Github'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    /* Particles Init */
    // Config 1: Background (particles-css)
    const particlesConfig1 = {
        particles: {
            number: { value: 0, density: { enable: false, value_area: 800 } },
            color: { value: "#1b1e34" },
            shape: {
                type: "image",
                options: {
                    image: [
                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", width: 100, height: 100 },
                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", width: 100, height: 100 },
                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", width: 100, height: 100 },
                        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", width: 100, height: 100 },
                        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ibm/ibm-original.svg", width: 100, height: 100 }
                    ]
                }
            },
            opacity: { value: 0.3, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 160, random: false, anim: { enable: true, speed: 10, size_min: 40, sync: false } },
            line_linked: { enable: false, distance: 200, color: "#ffffff", opacity: 1, width: 2 },
            move: { enable: true, speed: 8, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: false, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    };

    // Config 2: Header (particles-2-css)
    // Left side icons (Front-End skills)
    const leftIcons = [
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", width: 32, height: 32 },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", width: 32, height: 32 },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", width: 32, height: 32 }
    ];

    // Right side icons (Back-End + Cloud skills)
    const rightIcons = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 32, height: 32 },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", width: 32, height: 32 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ibm/ibm-original.svg", width: 32, height: 32 }
    ];

    // Base config for floating particles
    const createParticlesConfig = (icons) => ({
        background: {
            color: "transparent"
        },
        fullScreen: { enable: false },
        particles: {
            number: {
                value: icons.length,
                density: {
                    enable: false
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "image",
                image: icons
            },
            opacity: {
                value: 1
            },
            size: {
                value: 48
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "bounce"
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: false
                },
                onClick: {
                    enable: false
                }
            }
        },
        retina_detect: true
    });

    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particles", particlesConfig1);
    }

    /* Swiper Init */
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

});
