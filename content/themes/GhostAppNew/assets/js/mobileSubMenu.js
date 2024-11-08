const initMobileSubMenu = () => {
    const submenuItems = document.querySelectorAll(".gh-mobile-menu-button");

    if (!submenuItems.length) {
        return;
    }

    const clickHandler = (btn) => {
        const submenu = btn.parentElement;
        const submenuItems = submenu.querySelectorAll(
            ".gh-mobile-submenu__item"
        );
        const submenuItemsList = submenu.querySelector(".gh-mobile-submenu");

        if (submenu.classList.contains("active")) {
            submenu.classList.remove("active");
            submenuItemsList.style.height = "0px";
        } else {
            submenu.classList.add("active");

            const submenuHeight = Array.from(submenuItems).reduce(
                (accumulator, currentValue) =>
                    accumulator + currentValue.offsetHeight,
                0
            );
            submenuItemsList.style.height = `${submenuHeight}px`;
        }
    };

    submenuItems.forEach((btn) => {
        btn.addEventListener("click", () => clickHandler(btn));
    });
};

export { initMobileSubMenu };
