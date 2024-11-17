export function createLanguageSelector() {
    const languageSelector = document.createElement('select');
    languageSelector.id = 'language-selector';

    const languages = ['en', 'es', 'fr', 'de', 'it'];
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang.toUpperCase();
        languageSelector.appendChild(option);
    });

    return languageSelector;
}

export function getSelectedLanguage() {
    const selector = document.getElementById('language-selector');
    return selector ? selector.value : 'en'; // Default to 'en'
}
