// Retrieve the selected payment method
var paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

// Store the order details and payment method in session storage
sessionStorage.setItem('productName', productName);
sessionStorage.setItem('productPrice', productPrice);
sessionStorage.setItem('productQuantity', quantity);
sessionStorage.setItem('paymentMethod', paymentMethod);
document.addEventListener('DOMContentLoaded', function() {
    const placeOrderBtn = document.getElementById('place-order-btn');
  
    placeOrderBtn.addEventListener('click', function() {
      // Redirect to the placeorder.html page
      window.location.href = 'placeorder.html';
    });
  });
  