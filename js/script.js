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
    name: "Ford Ranger", 
    category: "Truck", 
    images: [
      "assets/img/ford-ranger.jpeg",
      "assets/img/ranger-interior.jpeg",
      "assets/img/ranger-side.jpeg"
    ],
    description: "Powerful truck built for tough jobs.",
    price: "3,200,000 KSH",
    features: ["4WD", "Turbo Diesel", "Automatic", "Double Cab"]
  },
  { 
    id: 3, 
    name: "Isuzu D-Max", 
    category: "Truck", 
    images: [
      "assets/img/isuzu-dmax.jpeg",
      "assets/img/dmax-interior.jpeg",
      "assets/img/dmax-side.jpeg"
    ],
    description: "Durable and dependable workhorse.",
    price: "2,800,000 KSH",
    features: ["4WD", "Diesel Engine", "Automatic", "5 Seats"]
  },
  
  // SUVs
  { 
    id: 4, 
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
  { 
    id: 5, 
    name: "Toyota Land Cruiser", 
    category: "SUV", 
    images: [
      "assets/img/landcruiser.jpeg",
      "assets/img/landcruiser-interior.jpeg",
      "assets/img/landcruiser-side.jpeg"
    ],
    description: "The ultimate off-road vehicle.",
    price: "8,000,000 KSH",
    features: ["4WD", "V8 Engine", "Automatic", "7 Seats"]
  },
  { 
    id: 6, 
    name: "BMW X5", 
    category: "SUV", 
    images: [
      "assets/img/bmw-x5.jpeg",
      "assets/img/x5-interior.jpeg",
      "assets/img/x5-side.jpeg"
    ],
    description: "Luxury SUV with premium features.",
    price: "10,500,000 KSH",
    features: ["AWD", "Turbocharged Engine", "Automatic", "5 Seats"]
  },
  
  // Sedans
  { 
    id: 7, 
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
    id: 8, 
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
    id: 9, 
    name: "Honda Accord", 
    category: "Sedan", 
    images: [
      "assets/img/honda-accord.jpeg",
      "assets/img/accord-interior.jpeg",
      "assets/img/accord-side.jpeg"
    ],
    description: "Spacious and efficient midsize sedan.",
    price: "2,500,000 KSH",
    features: ["FWD", "Petrol Engine", "Automatic", "5 Seats"]
  }
];

// Featured cars for homepage (first 6 cars)
const featuredCars = cars.slice(0, 6);

// Function to load and display products
function loadProducts(products) {
  const productList = document.getElementById("product-list");
  if (!productList) return;
  
  productList.innerHTML = "";
  
  products.forEach(car => {
    const productCard = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${car.images[0]}" class="card-img-top" alt="${car.name}">
          <div class="card-body">
            <h5 class="card-title">${car.name}</h5>
            <p class="card-text">${car.description}</p>
            <p class="text-muted">Category: ${car.category}</p>
            <a href="car-detail.html?id=${car.id}" class="btn btn-outline-dark">View Details</a>
          </div>
        </div>
      </div>
    `;
    productList.innerHTML += productCard;
  });
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
    const imageCarousel = car.images ? car.images.map((img, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100 car-detail-img" alt="${car.name}">
      </div>
    `).join('') : `
      <div class="carousel-item active">
        <img src="${car.image || car.images[0]}" class="d-block w-100 car-detail-img" alt="${car.name}">
      </div>
    `;

    carDetail.innerHTML = `
      <!-- Main Car Detail Section -->
      <div class="col-lg-7 mb-4">
        <div id="carImageCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner rounded">
            ${imageCarousel}
          </div>
          ${car.images && car.images.length > 1 ? `
            <!-- Navigation Arrows -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carImageCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carImageCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            
            <!-- Indicator Dots -->
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
            <span class="price">${car.price || 'Contact for Price'}</span>
          </div>
          
          <p class="car-description mb-4">${car.description}</p>
          
          <div class="car-specs mb-4">
            <h5>Specifications</h5>
            <ul class="specs-list">
              <li><strong>Category:</strong> ${car.category}</li>
              ${car.features ? car.features.map(feature => `<li>${feature}</li>`).join('') : ''}
            </ul>
          </div>
          
          <div class="action-buttons">
            <a href="product.html" class="btn btn-outline-light me-2">
              <i class="bi bi-arrow-left"></i> Back to Products
            </a>
            <a href="#" class="btn btn-warning btn-lg">
              <i class="bi bi-telephone"></i> Contact Us
            </a>
          </div>
        </div>
      </div>

      <!-- Related Cars Section -->
      <div class="col-12">
        <div class="related-cars-section mt-5 py-5">
          <div class="container">
            <h2 class="text-center mb-4">More ${car.category}s You Might Like</h2>
            <div class="row">
              ${relatedCars.map(relatedCar => `
                <div class="col-md-4 mb-4">
                  <div class="card h-100">
                    <img src="${relatedCar.images ? relatedCar.images[0] : relatedCar.image}" class="card-img-top" alt="${relatedCar.name}">
                    <div class="card-body">
                      <h5 class="card-title">${relatedCar.name}</h5>
                      <p class="card-text">${relatedCar.description}</p>
                      <p class="text-warning fw-bold">${relatedCar.price || 'Contact for Price'}</p>
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
    `;
  }
}

// Category filtering functionality
document.addEventListener('DOMContentLoaded', function() {
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