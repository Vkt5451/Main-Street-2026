const menuData = [
  { category: "Most Popular", items: [
      { name: "Breakfast Ham Bagel", desc: "Bagel with ham, perfect for breakfast", price: "$1.50", image: "/images/bagel/breakfast_ham.jpg" },
      { name: "Breakfast Sausage Bagel", desc: "Bagel with sausage, savory and delicious", price: "$1.75", image: "images/bagel/breakfast_sausage.jpg" },
      { name: "Breakfast Bacon Bagel", desc: "Bagel with crispy bacon", price: "$1.75", image: "images/bagel/breakfast_bacon.jpg" },
      { name: "Ham Croissant", desc: "Flaky croissant with ham", price: "$1.75", image: "images/crossaint_ham.jpg" },
      { name: "Nova Lox Bagel", desc: "Bagel with smoked salmon", price: "$1.75", image: "images/nova_lox.jpg" },
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" }
    ]
  },
  { category: "Bagels", items: [
      { name: "Classic Plain Bagel", desc: "Freshly baked classic bagels", price: "$1.50", image: "images/bagel/classic_bagel.jpg" },
      { name: "Gourmet Bagel", desc: "Topped with extra toppings for more flavor", price: "$1.75", image: "images/bagel/gourmet_bagel.jpg" },
      { name: "Special Bagel", desc: "Unique flavors baked fresh daily", price: "$1.75", image: "images/bagel/special_bagel.jpg" }
    ]
  },
  { category: "Sandwiches", items: [
      { name: "Main Street Club Sandwich", desc: "Classic club sandwich with turkey and bacon", price: "$1.50", image: "images/sandwich/main_street_club_sandwich.jpg" },
      { name: "Main Street Special", desc: "Signature sandwich with fresh ingredients", price: "$1.50", image: "images/sandwich/main_street_special_sandwich.jpg" },
      { name: "Pastrami Sandwich", desc: "Savory pastrami with mustard on fresh bread", price: "$1.50", image: "images/sandwich/pastrami_sandwich.jpg" },
      { name: "Roast Beef Sandwich", desc: "Tender roast beef with cheese", price: "$1.50", image: "images/sandwich/roast_beef_sandwich.jpg" },
      { name: "Tuna Salad Sandwich", desc: "Fresh tuna salad on a soft roll", price: "$1.50", image: "images/sandwich/tuna_salad_sandwich.jpg" },
      { name: "Turkey Bacon Avocado Sandwich", desc: "Turkey, bacon, and avocado on fresh bread", price: "$1.50", image: "images/sandwich/turkey_bacon_avacado_sandwich.jpg" }
    ]
  },
  { category: "Drinks", items: [
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$1.75", image: "images/vietnamese_coffee.jpg" },
      { name: "Sesame Milk Drink", desc: "Creamy sesame-flavored milk beverage", price: "$1.75", image: "images/sesame.jpg" }
    ]
  },
  { category: "Other", items: [
      { name: "Pepperoni Pizza Bagel", desc: "Bagel topped with pepperoni and cheese", price: "$1.50", image: "images/other/pep_pizza_bagel.jpg" },
      { name: "Plain Bagel Dog", desc: "Bagel wrapped around a hot dog", price: "$1.75", image: "images/other/plain_bagel_dog.jpg" }
    ]
  },
];

// ===========================
// CART SETUP
// ===========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountEl = document.createElement("span");
cartCountEl.id = "cart-count";
cartCountEl.style.marginLeft = "5px";

// Add cart icon to nav
const nav = document.querySelector(".nav");
const cartIcon = document.createElement("div");
cartIcon.id = "cart-icon";
cartIcon.innerHTML = "🛒";
cartIcon.appendChild(cartCountEl);
cartIcon.style.cursor = "pointer";
cartIcon.style.display = "inline-block";
cartIcon.style.marginLeft = "15px";
nav.appendChild(cartIcon);

function updateCartCount() {
  cartCountEl.textContent = cart.reduce((sum,item)=>sum+(item.quantity||1),0);
}
updateCartCount();

// ===========================
// RENDER MENU
// ===========================
function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = ""; // Clear first

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category";
    const sectionId = category.category.toLowerCase().replace(/\s+/g, "-");
    section.id = sectionId;

    section.innerHTML = `
      <h2 class="category-title">${category.category}</h2>
      <div class="menu-grid">
        ${category.items.map((item, index) => `
          <div class="menu-item" data-category="${category.category}" data-index="${index}">
            <div class="item-text">
              <h4 class="item-name">${item.name}</h4>
              <p class="item-desc">${item.desc}</p>
              <span class="item-price">${item.price}</span>
            </div>
            <div class="item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(section);
  });
}

// ===========================
// INIT DOM CONTENT
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();

  // Subnav
  const subnav = document.getElementById("menu-subnav");
  const categories = [...new Set(menuData.map(cat => cat.category))];
  categories.forEach(category => {
    const link = document.createElement("a");
    link.href = `#${category.replace(/\s+/g, '-').toLowerCase()}`;
    link.className = "menu-subnav-link";
    link.textContent = category;
    subnav.appendChild(link);
  });

  // Modals
  const modal = document.getElementById("menuModal");
  const closeBtn = document.querySelector(".modal .close");
  const modalName = document.getElementById("modal-item-name");
  const modalDesc = document.getElementById("modal-item-desc");
  const modalPrice = document.getElementById("modal-item-price");
  const modalOptions = document.getElementById("modal-options");
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const modalImage = document.getElementById("modal-item-image");

  const cartModal = document.getElementById("cartModal");
  const closeCartBtn = document.getElementById("close-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  // ===========================
  // RENDER CART
  // ===========================
  function renderCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const priceNum = parseFloat(item.price.replace("$", ""));
      total += priceNum * (item.quantity || 1);

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.style.borderBottom = "1px solid #ddd";
      itemDiv.style.padding = "10px 0";

      itemDiv.innerHTML = `
        <div class="cart-item-top" style="display:flex; align-items:center; gap:10px;">
          <img src="${item.image}" alt="${item.name}" style="width:60px; height:60px; object-fit:cover; border-radius:5px;">
          <div style="flex:1; display:flex; justify-content:space-between; align-items:center;">
            <strong>${item.name}</strong>
            <span class="cart-item-price">${item.price}</span>
          </div>
        </div>
        <div class="cart-item-options" style="margin:5px 0 10px 70px;">
          ${item.options.length ? item.options.join(", ") : "None"}
        </div>
        <div class="cart-item-controls" style="display:flex; align-items:center; justify-content:space-between; margin-left:70px;">
          <div class="cart-item-quantity" style="display:flex; align-items:center; gap:5px;">
            <button class="qty-btn" data-action="decrease" data-index="${index}">-</button>
            <span class="qty-value">${item.quantity || 1}</span>
            <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
          </div>
          <button class="remove-item" data-index="${index}" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
  }



  // ===========================
  // Event Listeners
  // ===========================

  // Menu item click
  document.getElementById("menu-container").addEventListener("click", e=>{
    const item = e.target.closest(".menu-item");
    if(!item) return;

    const category = item.dataset.category;
    const index = item.dataset.index;
    const menuItem = menuData.find(c=>c.category===category).items[index];

    modalName.textContent = menuItem.name;
    modalDesc.textContent = menuItem.desc;
    modalPrice.textContent = menuItem.price;
    modalImage.src = menuItem.image;
    modalImage.alt = menuItem.name;

    modalOptions.innerHTML = `
      <label><input type="checkbox" value="Cheese"> Add Cheese</label>
      <label><input type="checkbox" value="Lettuce"> Add Lettuce</label>
      <label><input type="checkbox" value="Tomato"> Add Tomato</label>
    `;

    modal.style.display = "block";

    addToCartBtn.dataset.category = category;
    addToCartBtn.dataset.index = index;
  });

  // Add to cart
  addToCartBtn.addEventListener("click", ()=>{
    const category = addToCartBtn.dataset.category;
    const index = addToCartBtn.dataset.index;
    const menuItem = menuData.find(c=>c.category===category).items[index];
    const selectedOptions = Array.from(modalOptions.querySelectorAll("input:checked")).map(o=>o.value);

    cart.push({
      name: menuItem.name,
      price: menuItem.price,
      options: selectedOptions,
      image: menuItem.image,
      quantity: 1
    });

    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    modal.style.display = "none";
  });

  // Quantity change
  cartItemsContainer.addEventListener("input", e=>{
    if(e.target.classList.contains("cart-quantity-input")){
      const index = e.target.dataset.index;
      const qty = parseInt(e.target.value);
      if(qty<1) { e.target.value = 1; return; }
      cart[index].quantity = qty;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
      updateCartCount();
    }
  });

  cartItemsContainer.addEventListener("click", e => {
  if(e.target.classList.contains("qty-btn")){
    const index = e.target.dataset.index;
    if(e.target.dataset.action === "increase"){
      cart[index].quantity = (cart[index].quantity || 1) + 1;
    } else if(e.target.dataset.action === "decrease"){
      cart[index].quantity = Math.max(1, (cart[index].quantity || 1) - 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
});


  // Remove item
  cartItemsContainer.addEventListener("click", e=>{
    if(e.target.classList.contains("remove-item")){
      const index = e.target.dataset.index;
      cart.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }
  });

  // Cart modal
  cartIcon.addEventListener("click", ()=>{
    renderCart();
    cartModal.style.display = "block";
  });

  // Close modals
  closeBtn.onclick = ()=>modal.style.display="none";
  closeCartBtn.onclick = ()=>cartModal.style.display="none";
  window.onclick = e=>{
    if(e.target===modal) modal.style.display="none";
    if(e.target===cartModal) cartModal.style.display="none";
  };
});
