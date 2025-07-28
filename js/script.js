// Sample product data
const cars = [
  { id: 1, name: "Toyota Hilux", category: "Truck", image: "assets/img/Hilux front.jpeg", description: "Reliable and fuel efficient." },
  { id: 2, name: "Land Rover Discovery", category: "SUV", image: "assets/img/landrover.2.jpeg", description: "Perfect for off-road adventures." },
  { id: 3, name: "Subaru", category: "Sedan", image: "assets/img/Impreza1.jpeg", description: "Built for hauling heavy loads." }
];

// Load products
const productList = document.getElementById("product-list");

function loadProducts(data) {
  productList.innerHTML = "";
  data.forEach(car => {
    productList.innerHTML += `
      <div class="col-md-4 mb-4 product-item" data-category="${car.category}">
        <div class="card">
          <img src="${car.image}" class="card-img-top" alt="${car.name}">
          <div class="card-body">
            <h5 class="card-title product-title">${car.name}</h5>
            <p class="card-text">${car.description}</p>
            <button class="btn btn-dark" onclick="showDetails(${car.id})">View Details</button>
          </div>
        </div>
      </div>
    `;
  });
}
loadProducts(cars);

// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  document.querySelectorAll('.product-item').forEach(product => {
    let title = product.querySelector('.product-title').textContent.toLowerCase();
    product.style.display = title.includes(filter) ? 'block' : 'none';
  });
});

// Category Filter
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    document.querySelectorAll('.product-item').forEach(item => {
      item.style.display = category === "All" || item.dataset.category === category ? "block" : "none";
    });
  });
});

// Placeholder function for product details
function showDetails(id) {
  alert(`You clicked on product ID: ${id}`);
}
