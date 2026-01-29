import {settings} from "./settings";

const reproduction = {
    init() {
        this.getHtmlElements();
        this.initData();
        this.manageMobileNavMenu();
        this.addHeroCarouselNav();
        this.manageTickerScroll();
        this.addTickerNav();
        this.addProductsNav();
        this.manageFooterTickerScroll();
        this.addToClipboard();
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
        this.offset = 0;
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

    manageTickerScroll() {
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.querySelector(settings.tickerTrackSelector);
            const items = [...track.children];
            this.fillTicker(track, items);
            window.addEventListener('resize', this.fillTicker);
        });
    },

    fillTicker(track, items) {
        const viewportWidth = window.innerWidth;
        while (track.scrollWidth < viewportWidth * 2) {
            items.forEach((item) => {
                track.appendChild(item.cloneNode(true));
            });
        }
    },

    addTickerNav() {
        document.addEventListener('DOMContentLoaded', () => {
            const previous = document.querySelector(settings.tickerPreviousSelector);
            const next = document.querySelector(settings.tickerNextSelector);
            next.addEventListener('click', () => this.moveViewport(-1));
            previous.addEventListener('click', () => this.moveViewport(1));
        });
    },

    moveViewport(direction) {
        const inner = document.querySelector(settings.tickerInnerSelector);
        const item = document.querySelector(settings.tickerItemSelector);
        const itemWidth = item.offsetWidth + parseFloat(getComputedStyle(item).columnGap);
        this.offset += direction * itemWidth;
        if ((this.offset > window.innerWidth / 4) || (this.offset < -window.innerWidth / 4)) {
            this.offset = 0;
        }
        inner.style.transform = `translateX(${this.offset}px)`;
    },

    addProductsNav() {
        const track = document.querySelector(settings.productsTrackSelector);
        const previous = document.querySelector(settings.productsPreviousSelector);
        const next = document.querySelector(settings.productsNextSelector);
        let index = 0;
        previous.addEventListener('click', () => {
            if (index > 0) {
                index--;
                this.updateProductsCarousel(index, track);
            }
        });
        next.addEventListener('click', () => {
            const visibleCards = this.getVisibleCards();
            if (index < visibleCards.length - 1) {
                index++;
                this.updateProductsCarousel(index, track);
            }
        });
        document.querySelectorAll(settings.filterInputSelector).forEach(input => {
            input.addEventListener('change', () => {
                index = 0;
                this.updateProductsCarousel(index, track);
            });
        });
        window.addEventListener('resize', this.updateProductsCarousel);
    },

    getVisibleCards() {
        return [...document.querySelectorAll(settings.productCardSelector)].filter(card => getComputedStyle(card).display !== 'none');
    },

    updateProductsCarousel(index, track) {
        const visibleCards = this.getVisibleCards();
        if (visibleCards.length === 0) {
            return;
        }
        const cardWidth = visibleCards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(visibleCards[0]).marginRight);
        const offset = -(index * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
    },

    manageFooterTickerScroll() {
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.querySelector(settings.footerTickerTrackSelector);
            const items = [...track.children];
            this.fillTicker(track, items);
            window.addEventListener('resize', this.fillTicker);
        });
    },

    addToClipboard() {
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.querySelector(settings.emailButtonSelector);
            button.addEventListener('click', () => {
                navigator.clipboard.writeText(button.dataset.copy).then(() => {
                    button.classList.add(settings.copiedClass);
                    button.textContent = settings.emailButtonText;
                    setTimeout(() => {
                        button.classList.remove(settings.copiedClass);
                        button.textContent = button.dataset.copy;
                    }, 1500);
                });
            });
        });
    }
};

reproduction.init();