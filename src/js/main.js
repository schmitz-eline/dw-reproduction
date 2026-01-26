import {settings} from "./settings";

const reproduction = {
    init() {
        this.getHtmlElements();
        this.initData();
        this.manageMobileNavMenu();
        this.addHeroCarouselNav()
    },

    getHtmlElements() {
        this.mobileLinks = document.querySelectorAll(settings.mobileMenuLinkSelector);
        this.menuToggle = document.getElementById(settings.menuToggleId);
        this.submenuCheckboxes = document.querySelectorAll(settings.submenuCheckboxSelector);
        this.heroSlides = document.querySelectorAll(settings.heroSlideSelector);
        this.heroPreviousSlide = document.querySelector(settings.heroPreviousSelector);
        this.heroNextSlide = document.querySelector(settings.heroNextSelector);
    },

    initData() {
        this.heroSlideIndex = 0;
    },

    manageMobileNavMenu() {
        this.mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                this.menuToggle.checked = false;
            });
        });

        this.submenuCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    this.submenuCheckboxes.forEach(other => {
                        if (other !== checkbox) {
                            other.checked = false;
                        }
                    });
                }
            });
        });
    },
    addHeroCarouselNav() {
        this.heroPreviousSlide.addEventListener('click', () => {
            this.heroSlideIndex = (this.heroSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
            this.displayHeroSlide(this.heroSlideIndex);
        });

        this.heroNextSlide.addEventListener('click', () => {
            this.heroSlideIndex = (this.heroSlideIndex + 1) % this.heroSlides.length;
            this.displayHeroSlide(this.heroSlideIndex);
        });
    },

    displayHeroSlide(index) {
        this.heroSlides.forEach((slide) => {
            slide.classList.remove(settings.isActiveClass);
        });
        this.heroSlides[index].classList.add(settings.isActiveClass);
    },
};

reproduction.init();