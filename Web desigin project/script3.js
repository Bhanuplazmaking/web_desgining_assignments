// script.js
document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');
  
    // Retrieve the blog data from local storage
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  
    // Generate the HTML for each blog post
    const blogPostsHtml = blogs.map(function(blog) {
      return `
        <div class="blog-post">
          <h2>${blog.title}</h2>
          <p>Author: <span class="author">${blog.author}</span></p>
          <p>${blog.content}</p>
        </div>
      `;
    }).join('');
  
    // Update the blog container with the generated HTML
    blogContainer.innerHTML = blogPostsHtml;
  });
  