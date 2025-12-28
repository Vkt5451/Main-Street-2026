const menuData = [
  {
    category: "Bagels",
    items: [
      {
        name: "Plain",
        desc: "Freshly baked plain bagel",
        price: "$1.50",
        image: "../images/breakfast_bacon.png"
      },
      {
        name: "Sesame",
        desc: "Sesame seed bagel",
        price: "$1.75",
        image: "images/sesame.jpg"
      }
    ]
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Latte",
        desc: "Smooth espresso latte",
        price: "$4.50",
        image: "images/latte.jpg"
      }
    ]
  }
];

function renderMenu() {
  const container = document.getElementById("menu-container");

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category";

    section.innerHTML = `
      <h2 class="category-title">${category.category}</h2>
      <div class="menu-grid">
        ${category.items.map(item => `
          <div class="menu-item">
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

renderMenu();
