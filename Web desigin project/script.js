document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform login logic
      // You can add your own code here to handle the login process, such as sending the login credentials to the server for verification
  
      // Reset the login form
      loginForm.reset();
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform login logic
      // You can add your own code here to handle the login process, such as sending the login credentials to the server for verification
  
      // Assume login is successful
      // Redirect to the homepage
      window.location.href = "index.html";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Assume product data is fetched from a server or database
    const product = {
      name: 'Product Name',
      description: 'Product Description',
      price: '$19.99',
      imageUrl: 'product-image.jpg'
    };
    document.addEventListener('DOMContentLoaded', function() {
        const buyNowButton = document.getElementById('buy-now-button');
      
        buyNowButton.addEventListener('click', function() {
          // Perform actions when the "Buy Now" button is clicked
          // For example, redirect the user to a checkout page or initiate a purchase process
        });
      });
      
  
    // Update the product details on the page
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Price: ${product.price}`;
    document.getElementById('product-image').style.backgroundImage = `url(${product.imageUrl})`;
  });
// JavaScript for toolbar functionality, product filtering and sorting, registration, and product rating
document.addEventListener('DOMContentLoaded', function() {
    const toolbar = document.getElementById('toolbar');
    const toolbarLinks = toolbar.getElementsByTagName('a');
    const searchForm = document.getElementById('search-form');
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');
    const productDetailsContent = document.getElementById('product-details-content');
    const productImage = document.getElementById('product-image');
  const productInfo = document.getElementById('product-info');
    const backToProductsBtn = document.getElementById('back-to-products');
    const registrationForm = document.getElementById('registration-form');
    const ratingSelect = document.getElementById('rating-select');
    const ratingSubmit = document.getElementById('rating-submit');
    
    // Event listener for toolbar links
    for (let i = 0; i < toolbarLinks.length; i++) {
      toolbarLinks[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        if (current.length > 0) {
          current[0].classList.remove('active');
        }
        this.classList.add('active');
      });
    }
    
    // Event listener for search form submission
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const searchTerm = document.getElementById('search-input').value;
      
      // Perform search logic
      // You can add your own code here to handle the search, such as filtering the product list based on the search term
      
      // Reset the search input
      document.getElementById('search-input').value = "";
    });
    
    // Event listener for product item click
    productList.addEventListener('click', function(event) {
      if (event.target.classList.contains('product-item')) {
        const productId = event.target.dataset.id;
        
        // Perform logic to retrieve and display the product details
        // You can add your own code here to fetch the product details and populate the product details section
        
        // Show the product details section
        productDetails.style.display = 'block';
      }
    });
    
    // Event listener for back to products button
    backToProductsBtn.addEventListener('click', function() {
      productDetails.style.display = 'none';
    });
    
    // Event listener for registration form submission
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Perform registration logic
      // You can add your own code here to handle the registration, such as sending the registration data to a server
      
      // Reset the registration form
      document.getElementById('username').value = "";
      document.getElementById('password').value = "";
    });
    
    // Event listener for rating select change
    ratingSelect.addEventListener('change', function() {
      ratingSubmit.disabled = false;
    });
    
    // Event listener for rating submit
    ratingSubmit.addEventListener('click', function() {
      const rating = ratingSelect.value;
      
      // Perform rating submission logic
      // You can add your own code here to handle the rating submission, such as sending the data to a server or updating the product's rating
      
      // Reset the rating select and disable the submit button
      ratingSelect.value = "";
      ratingSubmit.disabled = true;
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the product data from your backend or predefined list
    const products = [
      { id: 1, name: 'Product 1', price: 10.99, description: 'Description of Product 1' },
      { id: 2, name: 'Product 2', price: 19.99, description: 'Description of Product 2' },
      { id: 3, name: 'Product 3', price: 14.99, description: 'Description of Product 3' },
      // Add more products as needed
    ];
  
    // Get the product list container
    const productList = document.getElementById('product-list');
  
    // Generate the HTML for the product items
    const productItemsHtml = products.map(function(product) {
      return `
        <li>
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <a href="product.html?id=${product.id}">View Details</a>
        </li>
      `;
    }).join('');
  
    // Update the product list with the generated HTML
    productList.innerHTML = productItemsHtml;
  });