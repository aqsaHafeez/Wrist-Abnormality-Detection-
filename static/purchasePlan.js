document.addEventListener('DOMContentLoaded', function() {
    var purchaseButtons = document.querySelectorAll('.purchase-btn');
    purchaseButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Perform purchase action here
            alert('Purchase button clicked!');
        });
    });
});
