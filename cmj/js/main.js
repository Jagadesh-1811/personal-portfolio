/* Main JS */
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-pag');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800); // Wait for transition
        }, 1200); // Let the animation play a bit before hiding
    }
});

document.addEventListener('DOMContentLoaded', () => {

    /* Typed.js Init */
    if (typeof Typed !== 'undefined') {
        const typedElement = document.querySelector('.typing');
        if (typedElement) {
            new Typed('.typing', {
                strings: ['AI Full Stack Developer', 'Cybersecurity Enthusiast', 'AI Solutions Architect', 'Lifelong Learner'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }
    }

    /* AOS Init */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 150,
        });
    }

    /* Navbar Toggle */
    const menuBtn = document.querySelector('#menu-btn');
    const header = document.querySelector('.header');
    if (menuBtn && header) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('fa-times');
            header.classList.toggle('active');
        });
    }

    /* Smooth Scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (window.innerWidth < 991 && header && menuBtn) {
                    menuBtn.classList.remove('fa-times');
                    header.classList.remove('active');
                }
            }
        });
    });

    /* Theme Toggle */
    const darkModeBtn = document.querySelector('#darkMode');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light')) {
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            }
        });
    }

    /* Custom Slider Init */
    const slides = document.querySelectorAll('.custom-slide');
    const paginationContainer = document.querySelector('.custom-pagination');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slides.length > 0) {
        console.log(`Custom Slider Init: Found ${slides.length} slides`);
        let currentSlide = 0;
        let slideInterval;

        // Create pagination dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('custom-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            if (paginationContainer) paginationContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.custom-dot');

        const updateSlider = () => {
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)) {
                    slide.classList.add('prev');
                } else if (index === currentSlide + 1 || (currentSlide === slides.length - 1 && index === 0)) {
                    slide.classList.add('next');
                }
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
            resetInterval();
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
            resetInterval();
        };

        const goToSlide = (index) => {
            currentSlide = index;
            updateSlider();
            resetInterval();
        };

        const startInterval = () => {
            slideInterval = setInterval(nextSlide, 3500);
        };

        const resetInterval = () => {
            clearInterval(slideInterval);
            startInterval();
        };

        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // Initialize wrapper 
        updateSlider();
        startInterval();
    }
});
