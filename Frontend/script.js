// Get elements from the DOM
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');
const processBtn = document.getElementById('process-btn');
const outputText = document.getElementById('output-text');

// Event Listener: Display image preview when an image is uploaded
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image file.');
    }
});

// Event Listener: Process the image when the "Process" button is clicked
processBtn.addEventListener('click', async function() {
    const file = fileInput.files[0];
    if (!file) {
        alert('Please upload an image first!');
        return;
    }

    try {
        // Prepare the form data to send to the backend
        const formData = new FormData();
        formData.append('image', file);

        // Send a POST request to the backend
        const response = await fetch('http://localhost:5000/recognize', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            outputText.value = data.text;
        } else {
            outputText.value = 'Error: Unable to recognize text.';
        }
    } catch (error) {
        console.error('Error:', error);
        outputText.value = 'Error: Something went wrong.';
    }
});
