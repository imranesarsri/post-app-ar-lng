const changeFontColor = () => {
  const getContrastYIQ = (rgbColor) => {
    const rgb = rgbColor.slice(4, -1).split(', ');
    const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return yiq >= 128 ? 'dark' : 'light';
  };
  const rootElem = document.documentElement;
  const subscribeBtn = document.querySelector('.gh-header .gh-accent-button');
  if (subscribeBtn) {
    const subscribeBtnColor = window.getComputedStyle(subscribeBtn).backgroundColor;
    const fontColor = getContrastYIQ(subscribeBtnColor);
    rootElem.classList.add(`gh-btns-font-color-${fontColor}`);
  }
};

export { changeFontColor };
