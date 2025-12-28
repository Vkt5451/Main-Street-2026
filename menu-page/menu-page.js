// Menu data
const menuData = [
  {
    category: "Bagels",
    items: [
      { name: "Plain", price: "$1.50" },
      { name: "Sesame", price: "$1.75" },
      { name: "Everything", price: "$1.75" },
      { name: "Cinnamon Swirl", price: "$2.00" },
      { name: "Jalapeño", price: "$2.00" },
      { name: "Garlic", price: "$1.75" },
      { name: "Cheddar Bacon", price: "$2.50" },
      { name: "Blueberry", price: "$2.00" }
    ]
  },
  {
    category: "Cream Cheese Spreads",
    items: [
      { name: "Plain Cream Cheese", price: "$1.00" },
      { name: "Strawberry", price: "$1.25" },
      { name: "Chive & Onion", price: "$1.25" },
      { name: "Veggie", price: "$1.50" },
      { name: "Lox Spread", price: "$2.00" }
    ]
  },
  {
    category: "Breakfast Sandwiches",
    items: [
      { name: "Egg & Cheese", price: "$5.50" },
      { name: "Bacon, Egg & Cheese", price: "$7.00" },
      { name: "Sausage, Egg & Cheese", price: "$7.00" },
      { name: "Lox Bagel", price: "$12.00" },
      { name: "Avocado Toast Bagel", price: "$8.00" }
    ]
  },
  {
    category: "Coffee & Espresso",
    items: [
      { name: "Drip Coffee", price: "$2.50" },
      { name: "Americano", price: "$3.50" },
      { name: "Latte", price: "$4.50" },
      { name: "Cappuccino", price: "$4.50" },
      { name: "Vietnamese Ice Coffee", price: "$5.00" }
    ]
  },
  {
    category: "Smoothies & Milk Teas",
    items: [
      { name: "Lava Flow Smoothie", price: "$6.00" },
      { name: "Strawberry Banana", price: "$5.50" },
      { name: "Mango Madness", price: "$5.50" },
      { name: "Taro Milk Tea", price: "$5.00" },
      { name: "Thai Milk Tea", price: "$5.00" }
    ]
  }
];

// Function to generate menu
function renderMenu() {
  const menuContainer = document.getElementById("menu-container");

  menuData.forEach(category => {
    // Category section
    const section = document.createElement("section");
    section.className = "menu-category";

    // Category title
    const h2 = document.createElement("h2");
    h2.className = "category-title";
    h2.textContent = category.category;
    section.appendChild(h2);

    // Items grid
    const grid = document.createElement("div");
    grid.className = "menu-grid";

    category.items.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const nameSpan = document.createElement("span");
      nameSpan.className = "item-name";
      nameSpan.textContent = item.name;

      const priceSpan = document.createElement("span");
      priceSpan.className = "item-price";
      priceSpan.textContent = item.price;

      itemDiv.appendChild(nameSpan);
      itemDiv.appendChild(priceSpan);
      grid.appendChild(itemDiv);
    });

    section.appendChild(grid);
    menuContainer.appendChild(section);
  });
}

// Call the function
renderMenu();
