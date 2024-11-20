class GhostLanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('ghost-admin-language') || 'en';
        this.loadingOverlay = document.querySelector('.loading-overlay');
        this.langButton = document.getElementById('langButton');
        this.langText = this.langButton.querySelector('.lang-text');
        this.scripts = {
            en: 'assets/ghost-7ab268fc7cd7884eef525145d5fbb501.js',
            ar: 'assets/translate-arabic/ghost.js'
        };
        this.init();
    }

    init() {
        this.setLanguage(this.currentLang);
        this.langButton.addEventListener('click', () => this.toggleLanguage());
    }

    showLoading() {
        this.loadingOverlay.classList.add('active');
    }

    hideLoading() {
        this.loadingOverlay.classList.remove('active');
    }

    async loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.id = 'ghost-admin-script';
            script.src = src;
            script.onload = resolve;
            script.onerror = () => {
                console.error(`Failed to load script: ${src}`);
                reject(new Error(`Script load failed: ${src}`));
            };
            document.body.appendChild(script);
        });
    }

    removeCurrentScript() {
        const existingScript = document.getElementById('ghost-admin-script');
        if (existingScript) {
            existingScript.remove();
        }
    }

    async setLanguage(lang) {
        try {
            // Update DOM
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.body.className = lang;

            // Update button text
            this.langText.textContent = lang === 'en' ? 'العربية' : 'English';

            // Update stylesheet
            const stylesheet = document.getElementById('custom-stylesheet');
            stylesheet.href = lang === 'ar' ? 'assets/admin-custom-styles/custom-admin.css' : '';

            // Load appropriate script
            this.removeCurrentScript();
            await this.loadScript(this.scripts[lang]);

            // Save preference
            this.currentLang = lang;
            localStorage.setItem('ghost-admin-language', lang);

        } catch (error) {
            console.error('Language switch failed:', error);
            if (lang !== 'en') {
                await this.setLanguage('en');
            }
        }
    }

    async toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        await this.setLanguage(newLang);
        // Reload the page after the language has been toggled
        window.location.reload();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.ghostLanguageManager = new GhostLanguageManager();
});