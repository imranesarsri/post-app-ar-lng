const insertWidget = () => {
  const widgetRoot = document.querySelector('#sidebar-custom-widget');

  if (widgetRoot) {
    const textInput = widgetRoot.textContent;
    widgetRoot.innerHTML = textInput;
  }
};

export { insertWidget };
