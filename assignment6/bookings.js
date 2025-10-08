document.addEventListener('DOMContentLoaded', function() {
    populatePackageDropdown();
    setupBookingForm();
    setMinDate();
});

function populatePackageDropdown() {
    const packageSelect = document.getElementById('package');
    
    packagesData.forEach(pkg => {
        const option = document.createElement('option');
        option.value = pkg.id;
        option.textContent = `${pkg.destination} - ${pkg.durationDays} days - $${pkg.basePrice}`;
        option.setAttribute('data-base-price', pkg.basePrice);
        option.setAttribute('data-season', pkg.season);
        option.setAttribute('data-duration', pkg.durationDays);
        packageSelect.appendChild(option);
    });
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').setAttribute('min', today);
    document.getElementById('checkOut').setAttribute('min', today);
}

function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const packageSelect = document.getElementById('package');
    const guestsInput = document.getElementById('guests');
    const promoCodeInput = document.getElementById('promoCode');
    const submitBtn = document.getElementById('submitBtn');
    
    const inputs = [nameInput, emailInput, checkInInput, checkOutInput, packageSelect, guestsInput];
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateForm();
            calculateEstimate();
        });
        
        input.addEventListener('change', function() {
            validateForm();
            calculateEstimate();
        });
    });
    
    promoCodeInput.addEventListener('input', function() {
        calculateEstimate();
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('Booking submitted successfully!');
            form.reset();
            calculateEstimate();
            submitBtn.disabled = true;
        }
    });
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const packageValue = document.getElementById('package').value;
    const guests = document.getElementById('guests').value;
    
    let isValid = true;
    
    if (!validateName(name)) {
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        isValid = false;
    }
    
    if (!validateDates(checkIn, checkOut)) {
        isValid = false;
    }
    
    if (!packageValue) {
        document.getElementById('packageError').textContent = 'Please select a package';
        document.getElementById('package').classList.add('error');
        document.getElementById('package').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('packageError').textContent = '';
        document.getElementById('package').classList.remove('error');
        document.getElementById('package').classList.add('valid');
    }
    
    if (!guests || guests < 1 || guests > 10) {
        document.getElementById('guestsError').textContent = 'Guests must be between 1 and 10';
        document.getElementById('guests').classList.add('error');
        document.getElementById('guests').classList.remove('valid');
        isValid = false;
    } else {
        document.getElementById('guestsError').textContent = '';
        document.getElementById('guests').classList.remove('error');
        document.getElementById('guests').classList.add('valid');
    }
    
    document.getElementById('submitBtn').disabled = !isValid;
    
    return isValid;
}

function validateName(name) {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameInput.classList.add('error');
        nameInput.classList.remove('valid');
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Name can only contain letters';
        nameInput.classList.add('error');
        nameInput.classList.remove('valid');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
        nameInput.classList.add('valid');
        return true;
    }
}

function validateEmail(email) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        emailInput.classList.remove('valid');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        emailInput.classList.add('valid');
        return true;
    }
}

function validateDates(checkIn, checkOut) {
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const checkInError = document.getElementById('checkInError');
    const checkOutError = document.getElementById('checkOutError');
    
    if (!checkIn) {
        checkInError.textContent = 'Please select check-in date';
        checkInInput.classList.add('error');
        checkInInput.classList.remove('valid');
        return false;
    } else {
        checkInError.textContent = '';
        checkInInput.classList.remove('error');
        checkInInput.classList.add('valid');
    }
    
    if (!checkOut) {
        checkOutError.textContent = 'Please select check-out date';
        checkOutInput.classList.add('error');
        checkOutInput.classList.remove('valid');
        return false;
    }
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (checkInDate < today) {
        checkInError.textContent = 'Check-in date cannot be in the past';
        checkInInput.classList.add('error');
        checkInInput.classList.remove('valid');
        return false;
    }
    
    if (checkOutDate <= checkInDate) {
        checkOutError.textContent = 'Check-out must be after check-in';
        checkOutInput.classList.add('error');
        checkOutInput.classList.remove('valid');
        return false;
    } else {
        checkOutError.textContent = '';
        checkOutInput.classList.remove('error');
        checkOutInput.classList.add('valid');
    }
    
    return true;
}

function calculateEstimate() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const packageSelect = document.getElementById('package');
    const guests = parseInt(document.getElementById('guests').value) || 0;
    const promoCode = document.getElementById('promoCode').value.trim().toUpperCase();
    
    if (!checkIn || !checkOut || !packageSelect.value) {
        document.getElementById('basePrice').textContent = '$0';
        document.getElementById('nights').textContent = '0';
        document.getElementById('guestMultiplier').textContent = '0%';
        document.getElementById('promoDiscount').textContent = '0%';
        document.getElementById('totalPrice').textContent = '$0';
        return;
    }
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) {
        document.getElementById('nights').textContent = '0';
        document.getElementById('totalPrice').textContent = '$0';
        return;
    }
    
    const selectedOption = packageSelect.options[packageSelect.selectedIndex];
    const basePrice = parseInt(selectedOption.getAttribute('data-base-price')) || 0;
    
    let subtotal = basePrice * nights;
    
    document.getElementById('basePrice').textContent = `$${basePrice}`;
    document.getElementById('nights').textContent = nights;
    
    let guestMultiplierPercent = 0;
    if (guests > 2) {
        guestMultiplierPercent = (guests - 2) * 10;
        subtotal += subtotal * (guestMultiplierPercent / 100);
    }
    document.getElementById('guestMultiplier').textContent = `+${guestMultiplierPercent}%`;
    
    let promoDiscountPercent = 0;
    let promoInfo = '';
    
    switch(promoCode) {
        case 'EARLYBIRD':
            promoDiscountPercent = 10;
            promoInfo = '✓ Early bird discount applied!';
            break;
        case 'SUMMER25':
            promoDiscountPercent = 15;
            promoInfo = '✓ Summer special discount!';
            break;
        case 'FAMILY20':
            promoDiscountPercent = 20;
            promoInfo = '✓ Family package discount!';
            break;
        case 'WELCOME10':
            promoDiscountPercent = 10;
            promoInfo = '✓ Welcome discount applied!';
            break;
        default:
            if (promoCode) {
                promoInfo = '✗ Invalid promo code';
                document.getElementById('promoInfo').style.color = '#e74c3c';
            } else {
                promoInfo = '';
            }
    }
    
    if (promoDiscountPercent > 0) {
        subtotal -= subtotal * (promoDiscountPercent / 100);
        document.getElementById('promoInfo').style.color = '#27ae60';
    }
    
    document.getElementById('promoInfo').textContent = promoInfo;
    document.getElementById('promoDiscount').textContent = `-${promoDiscountPercent}%`;
    
    const total = Math.round(subtotal);
    document.getElementById('totalPrice').textContent = `$${total}`;
}
