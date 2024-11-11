// JavaScript files are compiled and minified during the build process to the assets/built folder.
// See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS

import {
    openMenuBtn,
    closeMenuBtn,
    openMobileMenu,
    closeMobileMenu,
    overlay,
    mobileMenu,
    scrollHandler,
    toggleOverlayAnimation,
} from "./header";
import {
    switchTheme,
    switchThemeBtn,
    defineIconTheme,
    changeTwitterCardTheme,
} from "./darkMode";
import { loadMore } from "./loadMore";
import { copyToClipboard } from "./copyToClipBoard";
import { calcHeight } from "./membershipCards";
import { togglePlan } from "./membershipToggle";
import { scrollTop, scrollTopAlign } from "./scrollToTopBtn";
import { changeFontColor } from "./btnFontColor";
import { insertWidget } from "./widget";
import { initMobileSubMenu } from "./mobileSubMenu";

// Function that responsible for changing color of the buttons with accent color background
changeFontColor();

// Function responsible for loading more posts
loadMore();

// Function that copies page's URL to clipboard
copyToClipboard();

// Script that handles Dark Mode Button toggling
if (switchThemeBtn) {
    defineIconTheme();
    switchThemeBtn.addEventListener("click", switchTheme);
}

// Script that handles opening mobile menu
if (openMenuBtn) {
    openMenuBtn.addEventListener("click", openMobileMenu);
}

// Script that handles closing mobile menu
if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMobileMenu);
}

// Script that handles closing mobile menu on outside click
if (overlay) {
    overlay.addEventListener("click", closeMobileMenu);
    overlay.addEventListener("animationend", toggleOverlayAnimation);
}

if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => e.stopPropagation());
}

// Function that scroll page to the top on scroll-to-top button click and fills up progress circle inside scroll to top button
scrollTop();

// Function that toggles yearly/monthly plan on membership page
togglePlan();

// Function that calculates height of the tier cards description on the membership page so descriptions height is the same
calcHeight();

// Function that moves scroll-to-top button if page has Portal button
window.addEventListener("load", scrollTopAlign);

// Function that changes twitter embed cards theme based on website theme
window.addEventListener("load", changeTwitterCardTheme);

window.addEventListener("scroll", scrollHandler);

// Function that add custom widget
insertWidget();

// Function that init mobile submenu
initMobileSubMenu();
