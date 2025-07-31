// Sample product data with multiple images
const cars = [
  // Trucks
  { 
    id: 1, 
    name: "Toyota Hilux", 
    category: "Truck", 
    images: [
      "assets/img/Hilux front.jpeg",
      "assets/img/Hilux back.jpeg"
    ],
    description: "Reliable and fuel efficient pickup truck.",
    price: "2,500,000 KSH",
    features: ["4WD", "Diesel Engine", "Manual Transmission", "5 Seats"]
  },
  { 
    id: 2, 
    name: "Toyota Kluger", 
    category: "Truck", 
    images: [
       "assets/img/Toyota Kluger front.jpeg",
      "assets/img/Toyota Kluger back.jpeg",
    ],
    description: "Powerful truck built for tough jobs.",
    price: "3,200,000 KSH",
    features: ["4WD", "Turbo Diesel", "Automatic", "Double Cab"]
  },
  
  // SUVs
  { 
    id: 3, // Changed from 4 to 3
    name: "Land Rover Discovery", 
    category: "SUV", 
    images: [
      "assets/img/landrover.2.jpeg",
      "assets/img/landrover1.jpeg",
      "assets/img/landrover.4.jpeg",
      "assets/img/landrover.3.jpeg",
      "assets/img/landrover.5.jpeg"
    ],
    description: "Perfect for off-road adventures.",
    price: "5,800,000 KSH",
    features: ["AWD", "V6 Engine", "7 Seats", "Terrain Response"]
  },
  
  // Sedans
  { 
    id: 4, // Changed from 7 to 4
    name: "Subaru Impreza", 
    category: "Sedan", 
    images: [
      "assets/img/Impreza1.jpeg",
      "assets/img/Impreza2.jpeg",
      "assets/img/Impreza3.jpeg",
      "assets/img/Impreza4.jpeg",
      "assets/img/Impreza5.jpeg",
      "assets/img/Impreza7.jpeg",
      "assets/img/Impreza8.jpeg",
      "assets/img/Impreza9.jpeg",
      "assets/img/Impreza10.jpeg",
      "assets/img/Impreza11.jpeg",
      "assets/img/Impreza12.jpeg",
      "assets/img/Impreza13.jpeg"
    ],
    description: "Reliable all-wheel drive sedan.",
    price: "1,800,000 KSH",
    features: ["AWD", "Petrol Engine", "Manual Transmission", "5 Seats"]
  },
  { 
    id: 5, // Changed from 8 to 5
    name: "juke Toyota Camry", 
    category: "Sedan", 
    images: [
      "assets/img/juke1.jpeg",
      "assets/img/juke2.jpeg",
      "assets/img/juke3.jpeg",
      "assets/img/juke4.jpeg",
      "assets/img/juke5.jpeg",
      "assets/img/juke6.jpeg",
      "assets/img/juke7.jpeg",
      "assets/img/juke8.jpeg",
      "assets/img/juke9.jpeg",
      "assets/img/juke10.jpeg",
      "assets/img/juke11.jpeg",
      "assets/img/juke12.jpeg",
      "assets/img/juke13.jpeg",
      "assets/img/juke14.jpeg",
    ],
    description: "Popular family sedan with excellent fuel economy.",
    price: "2,200,000 KSH",
    features: ["FWD", "Hybrid Engine", "Automatic", "5 Seats"]
  },
  { 
    id: 6, // Changed from 9 to 6
    name: "kulger", 
    category: "Sedan", 
    images: [
      "assets/img/kulger2.jpeg",
      "assets/img/kulger3.jpeg",
      "assets/img/Kulger 1.jpeg",
      "assets/img/kulger4.jpeg",
    ],
    description: "Spacious and efficient midsize sedan.",
    price: "2,500,000 KSH",
    features: ["FWD", "Petrol Engine", "Automatic", "5 Seats"]
  },
  { 
    id: 7, // Changed from 10 to 7
    name: "Premio", 
    category: "Sedan", 
    images: [
      "assets/img/Premio front.jpeg",
      "assets/img/Premio back.jpeg",
    ],
    description: "Premium midsize sedan with advanced safety features and excellent fuel economy.",
    price: "3,800,000 KSH",
    features: ["FWD", "Turbo Engine", "CVT Automatic", "5 Seats", "Honda Sensing"]
  },
  { 
    id: 8, // Changed from 11 to 8
    name: "probox", 
    category: "Sedan", 
    images: [
      "assets/img/Probox front.jpeg",
      "assets/img/Probox back.jpeg",
    ],
    description: "Luxury sports sedan with premium interior and dynamic driving performance.",
    price: "6,500,000 KSH",
    features: ["RWD", "Turbo Engine", "8-Speed Automatic", "5 Seats", "BMW ConnectedDrive"]
  }
];

// Featured cars for homepage (first 6 cars)
const featuredCars = cars.slice(0, 6);

// Function to load and display products
function loadProducts(products) {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  
  // Show loading
  productList.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  
  // Simulate loading delay for better UX
  setTimeout(() => {
    productList.innerHTML = "";
    
    if (products.length === 0) {
      productList.innerHTML = `
        <div class="col-12 text-center">
          <h3>No vehicles found</h3>
          <p>Try adjusting your search criteria.</p>
        </div>
      `;
      return;
    }
    
    products.forEach(car => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${car.images[0]}" class="card-img-top" alt="${car.name}" loading="lazy">
            <div class="card-body">
              <h5 class="card-title">${car.name}</h5>
              <p class="card-text">${car.description}</p>
              <p class="text-warning fw-bold">${car.price}</p>
              <p class="text-muted">Category: ${car.category}</p>
              <a href="car-detail.html?id=${car.id}" class="btn btn-warning w-100 mb-2">View Details</a>
              <a href="https://wa.me/254791734605?text=Hi+Auto+Hustle%2C+I%27m+interested+in+the+${car.name.replace(/ /g, '+')}+priced+at+${car.price.replace(/ /g, '+')}" target="_blank" class="btn btn-outline-warning w-100">
                <i class="bi bi-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }, 300);
}

// Check which page we're on and load appropriate cars
const productList = document.getElementById("product-list");
const carDetail = document.getElementById("car-detail");

// Homepage: Load featured cars only
if (productList && window.location.pathname.includes('index.html')) {
  loadProducts(featuredCars);
}

// Product page: Load all cars
else if (productList && window.location.pathname.includes('product.html')) {
  loadProducts(cars);
  setupSearch();
}

// Enhanced Car detail page with related cars
else if (carDetail) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const car = cars.find(c => c.id === id);

  if (car) {
    // Get related cars (same category, excluding current car)
    const relatedCars = cars.filter(c => c.category === car.category && c.id !== car.id).slice(0, 3);
    
    // Create image carousel
    const imageCarousel = car.images.map((img, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100 car-detail-img" alt="${car.name}" loading="lazy">
      </div>
    `).join('');

    carDetail.innerHTML = `
      <!-- Main Car Detail Section -->
      <div class="col-lg-7 mb-4">
        <div id="carImageCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner rounded">
            ${imageCarousel}
          </div>
          ${car.images.length > 1 ? `
            <button class="carousel-control-prev" type="button" data-bs-target="#carImageCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carImageCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators">
              ${car.images.map((_, index) => `
                <button type="button" data-bs-target="#carImageCarousel" data-bs-slide-to="${index}" 
                        ${index === 0 ? 'class="active" aria-current="true"' : ''} 
                        aria-label="Slide ${index + 1}"></button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
      
      <div class="col-lg-5">
        <div class="car-detail-info">
          <h1 class="car-title mb-3">${car.name}</h1>
          <div class="price-badge mb-3">
            <span class="price">${car.price}</span>
          </div>
          
          <p class="car-description mb-4">${car.description}</p>
          
          <div class="car-specs mb-4">
            <h5>Specifications</h5>
            <ul class="specs-list">
              <li><strong>Category:</strong> ${car.category}</li>
              ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </div>
          
          <div class="action-buttons">
            <a href="product.html" class="btn btn-outline-light me-2">
              <i class="bi bi-arrow-left"></i> Back to Products
            </a>
            <a href="https://wa.me/254791734605?text=Hi+Auto+Hustle%2C+I%27m+interested+in+the+${car.name.replace(/ /g, '+')}+priced+at+${car.price.replace(/ /g, '+')}" target="_blank" class="btn btn-warning btn-lg">
              <i class="bi bi-whatsapp"></i> Contact Us
            </a>
          </div>
        </div>
      </div>

      <!-- Related Cars Section -->
      ${relatedCars.length > 0 ? `
      <div class="col-12">
        <div class="related-cars-section mt-5 py-5">
          <div class="container">
            <h2 class="text-center mb-4">More ${car.category}s You Might Like</h2>
            <div class="row">
              ${relatedCars.map(relatedCar => `
                <div class="col-md-4 mb-4">
                  <div class="card h-100">
                    <img src="${relatedCar.images[0]}" class="card-img-top" alt="${relatedCar.name}" loading="lazy">
                    <div class="card-body">
                      <h5 class="card-title">${relatedCar.name}</h5>
                      <p class="card-text">${relatedCar.description}</p>
                      <p class="text-warning fw-bold">${relatedCar.price}</p>
                      <a href="car-detail.html?id=${relatedCar.id}" class="btn btn-warning">View Details</a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <div class="text-center mt-4">
              <a href="product.html" class="btn btn-outline-light btn-lg">View All Vehicles</a>
            </div>
          </div>
        </div>
      </div>
      ` : ''}
    `;
  } else {
    carDetail.innerHTML = `
      <div class="col-12 text-center">
        <h2 class="text-danger">Car not found</h2>
        <p>The vehicle you're looking for doesn't exist.</p>
        <a href="product.html" class="btn btn-outline-light">Back to Products</a>
      </div>
    `;
  }
}

// Enhanced search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredCars = cars.filter(car => 
      car.name.toLowerCase().includes(searchTerm) ||
      car.description.toLowerCase().includes(searchTerm) ||
      car.category.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredCars);
  });
}

// Homepage search functionality 
function setupHomepageSearch() {
  const searchInput = document.getElementById('homeSearchInput');
  const searchBtn = document.getElementById('homeSearchBtn');
  const budgetButtons = document.querySelectorAll('.budget-filter');
  
  let selectedBudget = null;
  
  // Budget filter selection
  budgetButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active from all
      budgetButtons.forEach(btn => {
        btn.classList.remove('btn-warning');
        btn.classList.add('btn-outline-secondary');
      });
      
      // Make this one active
      this.classList.remove('btn-outline-secondary');
      this.classList.add('btn-warning');
      
      selectedBudget = {
        min: this.dataset.min,
        max: this.dataset.max
      };
    });
  });
  
  // Search button click
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchTerm = searchInput ? searchInput.value : '';
      let url = 'product.html';
      
      if (searchTerm || selectedBudget) {
        url += '?';
        if (searchTerm) url += `search=${searchTerm}`;
        if (selectedBudget) {
          if (searchTerm) url += '&';
          url += `min=${selectedBudget.min}&max=${selectedBudget.max}`;
        }
      }
      
      window.location.href = url;
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById("product-list");
  const carDetail = document.getElementById("car-detail");

  if (productList && window.location.pathname.includes('index.html')) {
    loadProducts(featuredCars);
    setupHomepageSearch(); // ADD THIS LINE
  } else if (productList && window.location.pathname.includes('product.html')) {
    // Check for search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    const min = urlParams.get('min');
    const max = urlParams.get('max');
    
    let filteredCars = cars;
    
    // Filter by search term
    if (search) {
      filteredCars = filteredCars.filter(car => 
        car.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Filter by price range
    if (min && max) {
      filteredCars = filteredCars.filter(car => {
        const price = parseInt(car.price.replace(/[^\d]/g, ''));
        return price >= parseInt(min) && price <= parseInt(max);
      });
    }
    
    loadProducts(filteredCars);
    setupSearch();
  } else if (carDetail) {
    loadCarDetail();
  }

  // Category filtering
  const categoryButtons = document.querySelectorAll('.category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      if (category === 'All') {
        loadProducts(cars);
      } else {
        const filteredCars = cars.filter(car => car.category === category);
        loadProducts(filteredCars);
      }
    });
  });
});

// Mobile touch improvements
document.addEventListener('DOMContentLoaded', function() {
  // Improve touch interactions on mobile
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
  
  // Prevent horizontal scroll on mobile
  document.body.style.overflowX = 'hidden';
});