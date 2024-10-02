// Get elements
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const submitBtn = document.getElementById('submit-btn');

// Add event listener to the upload button
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

// Add event listener to the file input
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Add event listener to the submit button
submitBtn.addEventListener('click', () => {
    // Submit image for diagnosis (add your logic here)
    alert('Image submitted for diagnosis');
});
