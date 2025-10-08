# Assignment 6 - Enhanced Travel Website with JavaScript

This is an enhanced version of Assignment 2 with advanced JavaScript functionality.

## Features Implemented

### 1. **Packages Table with Dynamic Data (loops + functions)**
- Array of package objects with properties: id, destination, durationDays, basePrice, season
- Dynamic table rendering using loops
- Final price calculation using operators and control flow
- Seasonal multiplier logic:
  - Summer: 30% increase
  - Winter: 20% increase
  - Spring: 15% increase
  - Autumn: 10% increase
- Weekend surcharge: +$50
- Long stay bonus: +$100 for trips ≥7 days
- Season-based filtering

### 2. **Booking Price Estimator (form + control flow)**
- Real-time price calculation
- Date math for calculating nights between check-in and check-out
- Guest multiplier: +10% per guest above 2
- Promo code support with switch/case:
  - EARLYBIRD: -10%
  - SUMMER25: -15%
  - FAMILY20: -20%
  - WELCOME10: -10%
- Live total updates
- Form validation:
  - Name: Must be at least 2 characters, letters only
  - Email: Valid email format
  - Dates: Check-out must be after check-in, no past dates
  - Package: Required selection
  - Guests: Between 1-10
- Submit button disabled until all fields are valid

### 3. **Gallery with Attribute-Driven Modal**
- Thumbnails with data-large attribute for large images
- data-title and data-description attributes
- Click to open modal with large image
- Modal displays image with title and description
- Close modal via:
  - X button
  - Clicking outside the modal
  - ESC key
- Smooth animations

### 4. **Navigation Highlight (CSS via JS)**
- Active page detection
- Dynamic class addition/removal
- Active nav link styling

## File Structure

```
assignment6/
├── index.html          - Home page
├── packages.html       - Packages with dynamic table
├── bookings.html       - Booking form with price estimator
├── gallery.html        - Gallery with modal
├── styles.css          - All styles
├── script.js           - Shared functions and data
├── packages.js         - Packages page logic
├── bookings.js         - Booking form logic
├── gallery.js          - Gallery and modal logic
└── README.md           - This file
```

## JavaScript Concepts Used

### Variables & Data Types
- Arrays for package data and gallery images
- Objects for structured data
- Constants for configuration
- Let for mutable variables

### Operators
- Arithmetic operators for price calculations
- Comparison operators for validation
- Logical operators for conditions
- Ternary operators for conditional values

### Control Flow
- if/else statements for validation
- switch/case for promo codes and seasonal pricing
- for loops for rendering items
- forEach for array iteration

### Functions
- calculateFinalPrice() - Price calculation with business logic
- validateForm() - Form validation
- validateName() - Name validation
- validateEmail() - Email validation
- validateDates() - Date validation
- calculateEstimate() - Real-time price estimation
- renderPackagesTable() - Dynamic table rendering
- renderGallery() - Dynamic gallery rendering
- openModal()/closeModal() - Modal control

### DOM Manipulation
- Reading/modifying attributes (getAttribute, setAttribute)
- Creating elements (createElement)
- Adding/removing classes (classList.add/remove)
- Event listeners (addEventListener)
- Style updates via JS

### Array Methods
- forEach() - Iteration
- filter() - Filtering by season
- map() - Data transformation

### Date Objects
- new Date() for current date
- Date math for calculating nights
- Date validation

## How to Use

1. Open index.html to start
2. Navigate using the navigation menu
3. View packages with dynamic pricing on packages.html
4. Book a trip on bookings.html:
   - Fill in all required fields
   - Watch live price updates
   - Try promo codes: EARLYBIRD, SUMMER25, FAMILY20, WELCOME10
5. View gallery on gallery.html:
   - Click any image to see full size
   - Close modal with X, ESC, or click outside

## Promo Codes
- EARLYBIRD: 10% discount
- SUMMER25: 15% discount
- FAMILY20: 20% discount
- WELCOME10: 10% discount
