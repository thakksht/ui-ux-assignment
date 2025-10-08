const galleryImages = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop",
        title: "Maldives",
        description: "Pristine beaches with crystal clear waters and vibrant marine life"
    },
    {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        title: "Nepal",
        description: "Majestic Himalayan mountain ranges and scenic trekking trails"
    },
    {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop",
        title: "Paris",
        description: "Iconic landmarks, rich culture, and romantic atmosphere"
    },
    {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
        title: "Canada",
        description: "Vast wilderness, pristine nature, and diverse wildlife"
    },
    {
        id: 5,
        thumbnail: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=800&fit=crop",
        title: "Switzerland",
        description: "Scenic alpine villages and world-class ski resorts"
    },
    {
        id: 6,
        thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop",
        title: "Bali",
        description: "Tropical paradise with rich culture and stunning beaches"
    },
    {
        id: 7,
        thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop",
        title: "Japan",
        description: "Cherry blossoms, ancient temples, and modern cities"
    },
    {
        id: 8,
        thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
        large: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop",
        title: "Dubai",
        description: "Luxury shopping, modern architecture, and desert adventures"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
    setupModal();
});

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-large', image.large);
        galleryItem.setAttribute('data-title', image.title);
        galleryItem.setAttribute('data-description', image.description);
        
        galleryItem.innerHTML = `
            <img src="${image.thumbnail}" 
                 alt="${image.title}" 
                 class="gallery-image"
                 loading="lazy">
            <div class="gallery-caption">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', function() {
            openModal(this);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

function setupModal() {
    const modal = document.getElementById('imageModal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(galleryItem) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    const largeImageUrl = galleryItem.getAttribute('data-large');
    const title = galleryItem.getAttribute('data-title');
    const description = galleryItem.getAttribute('data-description');
    
    modalImage.src = largeImageUrl;
    modalImage.alt = title;
    modalCaption.innerHTML = `<strong>${title}</strong><br>${description}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
