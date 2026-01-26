import {settings} from "./settings";

const reproduction = {
    init() {
        this.getHtmlElements();
        this.manageMobileNavMenu();
    },

    getHtmlElements() {
        this.mobileLinks = document.querySelectorAll(settings.mobileMenuLinkSelector);
        this.menuToggle = document.getElementById(settings.menuToggleId);
        this.submenuCheckboxes = document.querySelectorAll(settings.submenuCheckboxSelector);
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
};

reproduction.init();