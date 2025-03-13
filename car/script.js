// Slider functionality
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Google Maps
function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Example: New York
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 12,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Fuel Calculator
function calculateFuel() {
    const distance = parseFloat(document.getElementById('distance').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    
    if (distance && mileage && fuelPrice) {
        const fuelNeeded = distance / mileage;
        const totalCost = fuelNeeded * fuelPrice;
        document.getElementById('result').textContent = 
            `Fuel Needed: ${fuelNeeded.toFixed(2)}L, Total Cost: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter all values';
    }
}

// Vehicle Owner Finder (Mock implementation)
function findOwner() {
    const vehicleNumber = document.getElementById('vehicleNumber').value;
    if (vehicleNumber) {
        // This would typically be an API call to a vehicle registration database
        document.getElementById('ownerResult').textContent = 
            `Searching for owner of ${vehicleNumber}... (Mock Result: John Doe)`;
    } else {
        document.getElementById('ownerResult').textContent = 'Please enter a vehicle number';
    }
}

// Auto-slide every 5 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlider();
}, 5000);