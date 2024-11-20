document.addEventListener('DOMContentLoaded', () => {
    const placeholderElement = document.querySelector('.pointer-events-none.absolute');
    if (placeholderElement) {
        placeholderElement.textContent = 'ابدأ بكتابة منشورك...';
    } else {
        console.error('Element not found');
    }
});