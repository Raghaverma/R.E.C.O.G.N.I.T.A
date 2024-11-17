export function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);

    setTimeout(() => errorDiv.remove(), 5000); // Hide error after 5 seconds
}
