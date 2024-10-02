document.getElementById('show-image-btn').addEventListener('click', function() {
    var imageContainer = document.getElementById('image-container');
    // Create an img element
    var image = document.createElement('img');
    // Set the source attribute to the URL of the diagnosed image
    image.src = 'diagnosed_image.jpg'; // Replace 'diagnosed_image.jpg' with the URL of your diagnosed image
    // Set any additional attributes or styles as needed
    image.style.maxWidth = '100%';
    // Append the image to the image container
    imageContainer.appendChild(image);
});
