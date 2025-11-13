
// ============================================
// CART FUNCTIONALITY
// ============================================

// Global cart array to store items
let cartItems = [];

// Load cart from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    loadCart();
    updateCartCount();
    initializePage();
    
    // Small delay to ensure DOM is fully ready
    setTimeout(function() {
        initializeTheme();
        loadQuote();
        
        // Attach new quote button
        const newQuoteBtn = document.getElementById('newQuoteBtn');
        if (newQuoteBtn) {
            newQuoteBtn.addEventListener('click', loadQuote);
        }
    }, 100);
});

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Add item to cart
function addToCart(id, name, price) {
    // Check if item already exists
    const existingItem = cartItems.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showMessage(name + ' added to cart!');
}

// Remove item from cart
function removeFromCart(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    saveCart();
    updateCartCount();
    showMessage('Item removed from cart');
}

// Update cart count in navigation
function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        
        // Show/hide cart badge
        if (totalItems > 0) {
            cartCountElement.style.display = 'inline-block';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

// Get cart total
function getCartTotal() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Clear entire cart
function clearCart() {
    cartItems = [];
    saveCart();
    updateCartCount();
    showMessage('Cart cleared');
}

// ============================================
// FORM VALIDATION
// ============================================

// Validate contact form
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return false;
    
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    clearFormErrors();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showFieldError('fullName', 'Name is required');
        isValid = false;
    }
    
    // Validate email
    if (email === '') {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showFieldError('message', 'Message is required');
        isValid = false;
    }
    
    if (isValid) {
        showMessage('Thank you! Your message has been sent.');
        form.reset();
    }
    
    return false; // Prevent form submission for demo
}

// Check if email is valid
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Show error message for specific field
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-danger mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    field.classList.add('is-invalid');
}

// Clear all form errors
function clearFormErrors() {
    const errorMessages = document.querySelectorAll('.text-danger');
    errorMessages.forEach(error => error.remove());
    
    const invalidFields = document.querySelectorAll('.is-invalid');
    invalidFields.forEach(field => field.classList.remove('is-invalid'));
}

// ============================================
// PRODUCT FILTERING
// ============================================

// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('.card-title').textContent.toLowerCase();
        
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// ============================================
// UI ENHANCEMENTS
// ============================================

// Show message to user
function showMessage(message) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'alert alert-success position-fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.textContent = message;
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Initialize page-specific features
function initializePage() {
    // Initialize carousel
    initializeCarousel();
    
    // Initialize smooth scrolling
    initializeSmoothScroll();
    
    // Initialize scroll effects
    initializeScrollEffects();
}

// Initialize carousel (jQuery)
function initializeCarousel() {
    if (typeof $ !== 'undefined' && $('.carousel').length > 0) {
        $('.carousel').carousel({
            interval: 5000,
            wrap: true
        });
    }
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

// Toggle wishlist
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showMessage('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showMessage('Added to wishlist');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
}

// Update wishlist UI
function updateWishlistUI() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        const productId = button.getAttribute('data-product-id');
        const icon = button.querySelector('i');
        
        if (wishlist.includes(productId)) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#e74c3c';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
        }
    });
}

// Change product image in gallery
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// Update cart quantity
function updateQuantity(id, newQuantity) {
    const item = cartItems.find(item => item.id === id);
    
    if (item && newQuantity > 0) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
        updateCartDisplay();
    }
}

// Update cart display (for cart page)
function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
        return;
    }
    
    let cartHTML = '';
    cartItems.forEach(item => {
        cartHTML += `
            <div class="cart-item d-flex justify-content-between align-items-center border-bottom py-3">
                <div>
                    <h6>${item.name}</h6>
                    <span class="text-muted">$${item.price}</span>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="mx-3">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="btn btn-sm btn-danger ms-3" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = cartHTML;
    
    // Update totals
    const subtotal = getCartTotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// JQUERY ANIMATIONS (when jQuery is available)
// ============================================

$(document).ready(function() {
    // Fade in cards on scroll
    $(window).scroll(function() {
        $('.product-card').each(function() {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < viewportBottom - 50) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });
    
    // Smooth hover effects
    $('.product-card').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format price
function formatPrice(price) {
    return '$' + price.toFixed(2);
}

// Generate random ID
function generateId() {
    return Date.now().toString();
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}

// ============================================
// DARK/LIGHT THEME TOGGLE (localStorage)
// ============================================

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.log('Theme toggle button not found!');
        return;
    }

    console.log('Theme toggle button found, initializing...');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Toggle theme
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Theme button clicked!');
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        console.log('Theme is now:', isDark ? 'dark' : 'light');
    });
}

// ============================================
// API INTEGRATION - Fetch Random Quote
// ============================================

async function loadQuote() {
    const quoteText = document.getElementById('quoteText');
    if (!quoteText) return;

    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.innerHTML = `"${data.content}" <br><small class="text-muted">— ${data.author}</small>`;
    } catch (error) {
        quoteText.textContent = '"Innovation distinguishes between a leader and a follower." — Steve Jobs';
    }
}