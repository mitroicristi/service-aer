// Script simplu de inițializare pentru meniul dropdown
document.addEventListener('DOMContentLoaded', function() {
    console.log('Menu initialization started...');
    
    // Verifică dacă Bootstrap este disponibil
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap nu este încărcat!');
        return;
    }
    
    console.log('Bootstrap este disponibil:', bootstrap);
    
    // Inițializează toate dropdown-urile folosind data attributes
    const dropdownToggles = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    console.log('Găsite dropdown-uri:', dropdownToggles.length);
    
    // Bootstrap 5 ar trebui să inițializeze automat dropdown-urile
    // dar să verificăm dacă funcționează
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            console.log('Dropdown clicked:', this.textContent);
        });
    });
    
    console.log('Menu initialization completed.');
});
