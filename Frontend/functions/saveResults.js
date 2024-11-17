export function saveResult(text) {
    const timestamp = new Date().toISOString();
    const results = JSON.parse(localStorage.getItem('recognitionResults')) || [];
    results.push({ timestamp, text });
    localStorage.setItem('recognitionResults', JSON.stringify(results));
}

export function loadSavedResults() {
    return JSON.parse(localStorage.getItem('recognitionResults')) || [];
}
