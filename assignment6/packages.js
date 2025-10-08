document.addEventListener('DOMContentLoaded', function() {
    renderPackagesTable(packagesData);
    setupSeasonFilter();
});

function renderPackagesTable(packages) {
    const tbody = document.getElementById('packagesBody');
    tbody.innerHTML = '';
    
    packages.forEach(pkg => {
        const row = document.createElement('tr');
        const finalPrice = calculateFinalPrice(pkg.basePrice, pkg.season, pkg.durationDays);
        
        row.innerHTML = `
            <td>${pkg.id}</td>
            <td><strong>${pkg.destination}</strong></td>
            <td>${pkg.durationDays}</td>
            <td>$${pkg.basePrice}</td>
            <td><span class="season-badge season-${pkg.season}">${capitalizeFirstLetter(pkg.season)}</span></td>
            <td class="price-highlight">$${finalPrice}</td>
            <td>${pkg.description}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function setupSeasonFilter() {
    const filterSelect = document.getElementById('seasonFilter');
    
    filterSelect.addEventListener('change', function() {
        const selectedSeason = this.value;
        
        if (selectedSeason === 'all') {
            renderPackagesTable(packagesData);
        } else {
            const filteredPackages = packagesData.filter(pkg => pkg.season === selectedSeason);
            renderPackagesTable(filteredPackages);
        }
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
