export const header = document.querySelector(".gh-header");
export const overlay = document.querySelector(".gh-mobile-overlay");
export const mobileMenu = document.querySelector(".gh-mobile-menu");
export const openMenuBtn = document.querySelector("#open-mobile-menu");
export const closeMenuBtn = document.querySelector("#close-mobile-menu");
const navList = document.querySelectorAll(".gh-nav-list-item");

export const openMobileMenu = () => {
    overlay.classList.remove("gh-mobile-overlay--close");
    overlay.classList.add("gh-mobile-overlay--open");
    overlay.classList.add("gh-mobile-overlay--animation-open");

    mobileMenu.classList.remove("gh-mobile-menu--close");
    mobileMenu.classList.add("gh-mobile-menu--open");

    document.documentElement.classList.add("gh-lock-scroll");

    header.classList.add("gh-header--mobile-menu-open");
};

export const closeMobileMenu = () => {
    mobileMenu.classList.remove("gh-mobile-menu--open");
    mobileMenu.classList.add("gh-mobile-menu--close");

    overlay.classList.remove("gh-mobile-overlay--animation-open");
    overlay.classList.add("gh-mobile-overlay--animation-close");

    document.documentElement.classList.remove("gh-lock-scroll");

    header.classList.remove("gh-header--mobile-menu-open");
};

export const scrollHandler = (() => {
    let prevScrollYPos = 0;

    return () => {
        if (window.scrollY > 200) {
            if (window.scrollY > prevScrollYPos) {
                header.classList.add("gh-header--hidden");
                navList.forEach((item) => {
                    item.classList.remove("active");
                });
            } else {
                header.classList.remove("gh-header--hidden");
            }
        }
        prevScrollYPos = window.scrollY;
    };
})();

export const toggleOverlayAnimation = () => {
    if (overlay.classList.contains("gh-mobile-overlay--animation-close")) {
        overlay.classList.remove("gh-mobile-overlay--open");
        overlay.classList.remove("gh-mobile-overlay--animation-close");
        overlay.classList.add("gh-mobile-overlay--close");
    }
};
