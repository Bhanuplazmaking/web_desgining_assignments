document.addEventListener('DOMContentLoaded', function() {
    const buyNowButton = document.getElementById('buy-now-button');
  
    buyNowButton.addEventListener('click', function() {
      // Perform actions when the "Buy Now" button is clicked
      // For example, redirect the user to a checkout page or initiate a purchase process
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const continueShoppingButton = document.getElementById('continue-shopping-button');
  
    continueShoppingButton.addEventListener('click', function() {
      // Perform actions when the "Continue Shopping" button is clicked
      // For example, redirect the user to the homepage or a product listing page
      window.location.href = "index.html";
    });
  });
  document.getElementById('buy-now-button').addEventListener('click', function() {
    // Get the necessary order details from the selected product
    var productName = document.getElementById('product-name').textContent;
    var productPrice = document.getElementById('product-price').textContent;
    var productQuantity = 1; // Assuming the quantity is always 1

    // Store the order details in session storage
    sessionStorage.setItem('productName', productName);
    sessionStorage.setItem('productPrice', productPrice);
    sessionStorage.setItem('productQuantity', productQuantity);
  });
  // Submit review form
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the review input value
  const reviewInput = document.getElementById('review-input');
  const reviewText = reviewInput.value;

  // Create a new review item
  const reviewItem = document.createElement('li');
  reviewItem.textContent = reviewText;

  // Add the new review item to the review list
  const reviewList = document.getElementById('review-list');
  reviewList.appendChild(reviewItem);

  // Clear the review input
  reviewInput.value = '';
});
