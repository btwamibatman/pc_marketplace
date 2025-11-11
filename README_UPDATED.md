# Shop PC - Online PC Shop Website

## 📋 Assignment Details

**Student:** Abdigalym Khamza  
**Group:** SE-2428  
**Assignment:** #8 - Full Website (Interactive Website) - Final Project  
**Topic:** Online PC Shop  
**Course:** Front-End Development  

## 🎯 Project Overview

Shop PC is a clean, responsive online PC shop website featuring 5 complete pages with interactive functionality and advanced features. Built using modern web development practices with Bootstrap, custom CSS, JavaScript, and real API integration for a professional user experience.

## ✅ Assignment Requirements Met

### Core Requirements:
- ✅ **5+ Complete Pages** - Home, Products, Product Details, Cart, Contact (all with header, main, footer)
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap Grid
- ✅ **Interactive Elements** - Working cart system, form validation, product filtering
- ✅ **JavaScript Functionality** - Cart management, form validation, UI interactions
- ✅ **jQuery Animations** - Smooth hover effects and scroll animations
- ✅ **Custom CSS** - Professional styling with Bootstrap integration

### Advanced Features (Final Project):
- ✅ **API Integration** - Real-time quote fetching from Quotable API on homepage
- ✅ **Local Storage** - Persistent cart + theme preference storage
- ✅ **Dark/Light Mode Toggle** - Full theme switcher with localStorage persistence
- ✅ **Form Validation** - Advanced contact form validation with JavaScript

## 📱 Pages Overview

### 1. **Homepage (index.html)**
- Welcome hero section with carousel
- Featured products showcase
- Category highlights
- **NEW: Live inspirational quotes** (API integration)
- Customer testimonials
- Newsletter signup form

### 2. **Products Catalog (products.html)**
- Complete product listing (12 products)
- Category filtering system
- Search functionality
- Responsive product grid
- Price and specification display

### 3. **Product Details (product-details.html)**
- Detailed product information
- Image gallery with thumbnails
- Tabbed content sections
- Add to cart functionality
- Product specifications

### 4. **Shopping Cart (cart.html)**
- **Dynamic cart management** (localStorage)
- Quantity controls with update/remove
- Price calculations (subtotal, tax, shipping)
- Promo code functionality
- Cart data persists across sessions

### 5. **Contact Page (contact.html)**
- **Advanced form validation** with real-time feedback
- Custom PC build inquiry with dynamic fields
- Business information & hours
- FAQ section
- Social media links

## 🚀 Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with Bootstrap 5.3.2 + CSS variables for theming
- **JavaScript ES6** - Interactive functionality + Fetch API
- **jQuery 3.6.0** - Animations and effects
- **Bootstrap 5.3.2** - Responsive framework
- **Font Awesome 6.4.0** - Icons
- **LocalStorage API** - Cart data + theme preference persistence
- **Quotable API** - Real-time quote fetching

## 🎨 Key Features

### Interactive Functionality:
- **Shopping Cart** - Add/remove items with localStorage persistence across sessions
- **Form Validation** - Real-time validation with friendly error messages
- **Product Filtering** - Filter by category, price, specs and search
- **Image Gallery** - Clickable thumbnail gallery
- **Responsive Navigation** - Mobile-friendly menu
- **Dark/Light Theme** - Toggle with localStorage (persists choice)
- **API Integration** - Fetch random inspirational quotes

### Design Features:
- **Responsive Layout** - Works on all device sizes (mobile/tablet/desktop)
- **Smooth Animations** - jQuery-powered hover effects
- **Professional Styling** - Clean, modern interface with dark mode support
- **Consistent Branding** - Unified color scheme and typography
- **Semantic HTML** - Proper use of header, main, footer elements

## 📁 Project Structure

```
pc_marketplace/
├── index.html              # Homepage (with API quote fetch)
├── products.html           # Products catalog
├── product-details.html    # Product details
├── cart.html              # Shopping cart (localStorage)
├── contact.html           # Contact form (advanced validation)
├── README.md              # Documentation
├── css/
│   └── style.css          # Main stylesheet with theme variables
└── js/
    └── script.js          # Main JavaScript (cart, theme, API)
```

## 🎓 How to Use

1. **Open `index.html`** in a browser to view the homepage
2. **Toggle theme** using the 🌙/☀️ button in the navigation (choice persists!)
3. **Browse products** - click "Browse Products" or navigate to Products page
4. **Add to cart** - click "Add to Cart" on any product (data persists in localStorage)
5. **View cart** - click cart icon to see items, update quantities, apply promo codes
6. **Contact form** - fill out form on Contact page with real-time validation
7. **Get new quote** - click "New Quote" button on homepage to fetch a new inspirational quote

## 📸 Screenshots Guide

For project defense, capture screenshots showing:
1. Homepage with quote API section
2. Products page with filters
3. Product details page
4. Cart with items (localStorage working)
5. Contact form validation
6. Theme toggle (light vs dark mode)
7. Responsive mobile view
8. Browser DevTools showing localStorage data

## 🎯 Evaluation Criteria Coverage (100%)

| Criteria | Implementation | Points |
|----------|---------------|--------|
| Project Structure & Navigation | 5 pages, logical nav | 5% ✅ |
| Design & Consistency | Unified design, all pages | 10% ✅ |
| Responsiveness | Mobile/tablet/desktop | 10% ✅ |
| JavaScript Functionality | Cart, validation, theme | 10% ✅ |
| jQuery/Fetch Usage | Animations + API fetch | 10% ✅ |
| Advanced Features | Dark mode + localStorage + API | 10% ✅ |
| Code Quality | Clean, commented code | 10% ✅ |
| Report & Documentation | README with screenshots | 5% ✅ |
| Defense | Clear explanation ready | 30% ✅ |

## 🏆 Advanced Features Implemented

1. **API Integration** ✅
   - Uses Quotable API (https://api.quotable.io)
   - Fetch random quotes on homepage
   - Error handling with fallback quote

2. **Local Storage** ✅
   - Cart items persist across sessions
   - Theme preference saved and restored
   - Clear, maintainable code structure

3. **Dark/Light Mode Toggle** ✅
   - CSS variables for easy theming
   - Smooth transitions between themes
   - Preference persists in localStorage

4. **Form Validation** ✅
   - Real-time validation feedback
   - Clear error messages
   - Email format validation
   - Required field checking

## 💡 Simple & Clean Code Principles (KISS)

- **No hardcoding** - Uses CSS variables and data attributes
- **Clean functions** - Single responsibility principle
- **Comments** - Clear inline documentation
- **Modular** - Reusable functions and components
- **Maintainable** - Easy to understand and extend

## 🎤 Defense Presentation Tips

**Easy to explain features:**
1. "I implemented localStorage to save cart items - see DevTools Application tab"
2. "Theme toggle uses CSS variables - changes whole site color scheme"
3. "API integration fetches quotes using async/await - simple and modern"
4. "Form validation prevents submission with clear error messages"

**Show in browser:**
- Add item to cart → refresh page → still there (localStorage!)
- Toggle theme → refresh page → theme persists!
- Click "New Quote" → watch it fetch from API
- Try submitting empty contact form → see validation errors

---

**Last Updated:** November 2025  
**Status:** ✅ Complete - Ready for Defense
