document.addEventListener('DOMContentLoaded', function() {
    highlightActiveNav();
});

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        const parentButton = link.closest('button');
        
        if (linkPage === currentPage) {
            if (parentButton) {
                parentButton.classList.add('active');
            }
        } else {
            if (parentButton) {
                parentButton.classList.remove('active');
            }
        }
    });
}

const packagesData = [
    {
        id: 1,
        destination: "Maldives",
        durationDays: 5,
        basePrice: 799,
        season: "summer",
        description: "Pristine beaches with crystal clear waters"
    },
    {
        id: 2,
        destination: "Nepal",
        durationDays: 7,
        basePrice: 599,
        season: "winter",
        description: "Trek through breathtaking mountain landscapes"
    },
    {
        id: 3,
        destination: "Paris",
        durationDays: 4,
        basePrice: 899,
        season: "spring",
        description: "Discover iconic landmarks and rich culture"
    },
    {
        id: 4,
        destination: "Canada",
        durationDays: 6,
        basePrice: 699,
        season: "autumn",
        description: "Experience pristine wilderness and wildlife"
    },
    {
        id: 5,
        destination: "Switzerland",
        durationDays: 8,
        basePrice: 1299,
        season: "winter",
        description: "Ski resorts and scenic alpine villages"
    },
    {
        id: 6,
        destination: "Bali",
        durationDays: 5,
        basePrice: 649,
        season: "summer",
        description: "Tropical paradise with rich culture"
    },
    {
        id: 7,
        destination: "Japan",
        durationDays: 7,
        basePrice: 1099,
        season: "spring",
        description: "Cherry blossoms and ancient temples"
    },
    {
        id: 8,
        destination: "Dubai",
        durationDays: 4,
        basePrice: 999,
        season: "winter",
        description: "Luxury shopping and desert adventures"
    }
];

function calculateFinalPrice(basePrice, season, durationDays) {
    let finalPrice = basePrice;
    let seasonMultiplier = 1;
    
    switch(season) {
        case 'summer':
            seasonMultiplier = 1.3;
            break;
        case 'winter':
            seasonMultiplier = 1.2;
            break;
        case 'spring':
            seasonMultiplier = 1.15;
            break;
        case 'autumn':
            seasonMultiplier = 1.1;
            break;
        default:
            seasonMultiplier = 1;
    }
    
    finalPrice = basePrice * seasonMultiplier;
    
    if (durationDays >= 7) {
        finalPrice += 100;
    }
    
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
        finalPrice += 50;
    }
    
    return Math.round(finalPrice);
}
