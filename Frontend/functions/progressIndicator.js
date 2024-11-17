export function showProgressIndicator() {
    const progress = document.createElement('div');
    progress.id = 'progress-indicator';
    progress.innerHTML = '<div class="spinner"></div> Processing...';
    document.body.appendChild(progress);
}

export function hideProgressIndicator() {
    const progress = document.getElementById('progress-indicator');
    if (progress) progress.remove();
}
