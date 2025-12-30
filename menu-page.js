function parsePrice(priceStr) {
  return parseFloat(priceStr.replace("$", ""));
}

function formatPrice(num) {
  return `$${num.toFixed(2)}`;
}


const OPTION_PRESETS = {
  sandwich: [
    {
      title: "Bread Choice (Required)",
      type: "radio",
      choices: [
        { label: "Plain roll", price: 1.00},
        { label: "Score garlic parmesan roll", price: 1.00 },
        { label: "Jalapeno Score garlic parmesan roll", price: 1.00 },
        { label: "Cheddar roll", price: 1.00},
        { label: "Croissant", price: 2.00 },
        { label: "Bagel", price: 0 }
      ]
    }
  ],

  milkTeaToppings: [
    {
      title: "Add-ons",
      type: "checkbox",
      choices: [
        { label: "Tapioca Pearl", price: 0.75 },
        { label: "Lychee Jelly", price: 0.75 },
        { label: "Rainbow Jelly", price: 0.75 },
        { label: "Coffee Jelly", price: 0.75 },
        { label: "Mango Jelly", price: 0.75 },
        { label: "Crystal white pearls", price: 1.00 },
        { label: "Mango popping", price: 1.00 }
      ]
    }
  ],

  classicBagelwithCream: [
    {
      title: "Bagel Choice (Required)",
      type: "radio",
      choices: [
        { label: "Plain bagel", price: 0 },
        { label: "Everything bagel", price: 0 },
        { label: "Cinnamon Crunch bagel", price: 0 },
        { label: "Sesame bagel", price: 0 },
        { label: "Strawberry Bagel", price: 0 },
        { label: "Cinnamon Raisin bagel", price: 0 },
        { label: "Salt bagel", price: 0 },
        { label: "Sourdough bagel", price: 0 },
        { label: "Onion bagel", price: 0 },
        { label: "Garlic bagel", price: 0 },
        { label: "Whole Wheat Raisin bagel", price: 0 },
        { label: "Poppy bagel", price: 0 },
        { label: "Blueberry bagel", price: 0 },
        { label: "Cranberry bagel", price: 0 }
      ]
    },
  ],

  gourmetBagelwithCream: [
    {
      title: "Bagel Choice (Required)",
      type: "radio",
      choices: [
        { label: "Blue Berry Crunch bagel", price: 0 },
        { label: "Score Garlic bagel", price: 0 },
        { label: "Asiago bagel", price: 0 },
        { label: "Chocolate Chip bagel", price: 0 },
        { label: "Spinach Parmesan bagel", price: 0 },
        { label: "Jalapeno Cheddar bagel", price: 0 },
        { label: "Cheddar Cheese bagel", price: 0 }
      ]
    },
  ],

  specialBagelwithCream: [
    {
      title: "Bagel Choice (Required)",
      type: "radio",
      choices: [
        { label: "Spinach Mushroom Provolone bagel", price: 0 },
        { label: "Score Garlic Jalapeno Bagel", price: 0 },
        { label: "Bacon Jalapeno bagel", price: 0 },
        { label: "Cheddar Bacon bagel", price: 0 }
      ]
    },
  ],


  bagelWithCreamCheese: [
    {
      title: "Bagel Choice (Required)",
      type: "radio",
      choices: [
        { label: "Plain bagel", price: 0 },
        { label: "Everything bagel", price: 0 },
        { label: "Cinnamon Crunch bagel", price: 0 },
        { label: "Sesame bagel", price: 0 },
        { label: "Strawberry Bagel", price: 0 },
        { label: "Cinnamon Raisin bagel", price: 0 },
        { label: "Salt bagel", price: 0 },
        { label: "Sourdough bagel", price: 0 },
        { label: "Onion bagel", price: 0 },
        { label: "Garlic bagel", price: 0 },
        { label: "Whole Wheat Raisin bagel", price: 0 },
        { label: "Poppy bagel", price: 0 },
        { label: "Blueberry bagel", price: 0 },
        { label: "Cranberry bagel", price: 0 },
                { label: "Blue Berry Crunch bagel", price: 0 },
        { label: "Score Garlic bagel", price: 0 },
        { label: "Asiago bagel", price: 0 },
        { label: "Chocolate Chip bagel", price: 0 },
        { label: "Spinach Parmesan bagel", price: 0 },
        { label: "Jalapeno Cheddar bagel", price: 0 },
        { label: "Cheddar Cheese bagel", price: 0 },
                { label: "Spinach Mushroom Provolone bagel", price: 0 },
        { label: "Score Garlic Jalapeno Bagel", price: 0 },
        { label: "Bacon Jalapeno bagel", price: 0 },
        { label: "Cheddar Bacon bagel", price: 0 }
      ]
    },
    {
      title: "With Cream Cheese (Required)",
      type: "radio",
      choices: [
        { label: "Peanut butter", price: 0 },
        { label: "Green onions cream cheese", price: 0 },
        { label: "Garlic herb cream cheese", price: 0 },
        { label: "Sundries tomatoes cream cheese", price: 0 },
        { label: "Veggie cream cheese", price: 0 },
        { label: "Blueberry cream cheese", price: 0 },
        { label: "Spinach and garlic cream cheese", price: 0 }
      ]
    }
  ],

  breakfastBagel: [
    {
      title: "Additional Extras",
      type: "checkbox",
      choices: [
        { label: "Extra meat", price: 3.50 },
        { label: "Sprouts", price: 1.50 },
        { label: "Tomatoes", price: 1.25 },
        { label: "Onion", price: 1.25 },
        { label: "Cucumbers", price: 1.25 },
        { label: "Butter", price: 1.50 },
        { label: "Spinach & Mushrooms", price: 1.50}
      ]
    },

    {
      title: "Other Choices",
      type: "checkbox",
      choices: [
        { label: "Cheddar Cheese", price: .25 },
        { label: "Jack Cheese", price: .25 },
        { label: "Add Extra Eggs", price: 1.50 },
        { label: "Substitute to Egg Whites", price: 2.50 }
      ]
    }
  ],

  breakfastCroissant: [
    {
      title: "Protein Choices (Required)",
      type: "radio",
      choices: [
        { label: "Bacon", price: 0},
        { label: "Ham", price: 0},
        { label: "Sausage", price: 0},
        { label: "Turkey", price: 0 }
      ]
    },
    {
      title: "Additional Extras",
      type: "checkbox",
      choices: [
        { label: "Extra meat", price: 3.50 },
        { label: "Sprouts", price: 1.50 },
        { label: "Tomatoes", price: 1.25 },
        { label: "Onion", price: 1.25 },
        { label: "Cucumbers", price: 1.25 },
        { label: "Butter", price: 1.50 },
        { label: "Spinach & Mushrooms", price: 1.50}
      ]
    }
  ]
};

const menuData = [
  { category: "Most Popular", items: [
      { name: "Breakfast Egg Ham Cheese Bagel", desc: "Bagel with ham, cheese and egg", price: "$8.25", image: "images/bagel/breakfast_ham.jpg", optionsPreset: "breakfastBagel" },
      { name: "Breakfast Egg Sausage Cheese Bagel", desc: "Bagel with sausage, cheese and egg", price: "$8.25", image: "images/bagel/breakfast_sausage.jpg",optionsPreset: "breakfastBagel" },
      { name: "Breakfast Egg Bacon Cheese Bagel", desc: "Bagel with crispy bacon, cheese and egg", price: "$8.25", image: "images/bagel/breakfast_bacon.jpg",optionsPreset: "breakfastBagel"},
      { name: "Breakfast Egg with Meat & Cheese Croissant", desc: "Flaky croissant with egg, cheese and meat", price: "$9.75", image: "images/sandwich/crossaint_ham.jpg", optionsPreset: "breakfastCroissant" },
      { name: "Nova Lox Bagel", desc: "Bagel with smoked salmon and cream cheese topped with onions and tomatoes", price: "$10.99", image: "images/bagel/nova_lox.jpg", optionsPreset: "breakfastBagel"},
      { name: "Vietnamese Coffee", desc: "Rich and sweet iced coffee", price: "$6.50", image: "images/drinks/vietnamese_coffee.jpg", optionsPreset: "milkTeaToppings"}
    ]
  },
  { category: "Bagels", items: [
      { name: "Classic Bagel with Plain Cream Cheese", desc: "Freshly baked classic bagels", price: "$4.00", image: "images/bagel/bagel_cream_cheese2.jpg", optionsPreset: "classicBagelwithCream" },
      { name: "Gourmet Bagel with Plain Cream Cheese", desc: "Topped with extra toppings for more flavor", price: "$4.30", image: "images/bagel/bagel_cream_cheese2.jpg", optionsPreset: "gourmetBagelwithCream" },
      { name: "Special Bagel with Plain Cream Cheese", desc: "Unique flavors baked fresh daily", price: "$4.50", image: "images/bagel/bagel_cream_cheese2.jpg",optionsPreset: "specialBagelwithCream" },
      { name: "Any Bagel with Any Flavor Cream Cheese", desc: "Unique flavors baked fresh daily", price: "$4.99", image: "images/bagel/bagel_cream_cheese2.jpg",optionsPreset: "bagelWithCreamCheese" },
        { name: "Classic Bagel with No Cream Cheese", desc: "Freshly baked classic bagels", price: "$1.95", image: "images/bagel/classic_bagel.jpg", optionsPreset: "classicBagelwithCream" },
        { name: "Gourmet Bagel with No Cream Cheese", desc: "Topped with extra toppings for more flavor", price: "$2.05", image: "images/bagel/gourmet_bagel.jpg", optionsPreset: "gourmetBagelwithCream" },
        { name: "Special Bagel with No Cream Cheese", desc: "Unique flavors baked fresh daily", price: "$2.20", image: "images/bagel/special_bagel.jpg",optionsPreset: "specialBagelwithCream" },
         { name: "Bakers Dozen", desc: "Choose up to 13 bagels", price: "$25.50", image: "images/bagel/bakersdozen.jpg",optionsPreset: "bakersDozen" },
    ]
  }, 


  { category: "Sandwiches", items: [
      { name: "Main Street Club Sandwich", desc: "Classic club sandwich with turkey, bacon and vegetables on fresh bread", price: "$9.75", image: "images/sandwich/main_street_special_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Main Street Special", desc: "Signature sandwich with fresh vegetables on fresh bread", price: "$9.25", image: "images/sandwich/main_street_special_sandwich.jpg", optionsPreset: "sandwich"},
      { name: "Pastrami Sandwich", desc: "Savory pastrami with mustard on fresh bread and vegetables on fresh bread", price: "$8.75", image: "images/sandwich/pastrami_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Roast Beef Sandwich", desc: "Tender roast beef with cheese and vegetables on fresh bread", price: "$8.75", image: "images/sandwich/roast_beef_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Tuna Salad Sandwich", desc: "Fresh tuna salad and vegetables on fresh bread", price: "$8.75", image: "images/sandwich/tuna_salad_sandwich.jpg",optionsPreset: "sandwich" },
      { name: "Turkey Bacon Avocado Sandwich", desc: "Turkey, bacon, avocado, and vegetables on fresh bread", price: "$9.75", image: "images/sandwich/turkey_bacon_avacado_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Avocado Veggie Sandwich", desc: "Avocado and vegetables on fresh bread", price: "$8.25", image: "images/sandwich/avacado_veggies.jpg",optionsPreset: "sandwich"},
      { name: "Grilled Chicken Club", desc: "Grilled Chicken, and vegetables on fresh bread", price: "$8.25", image: "images/sandwich/grilled_chicken_club.jpg",optionsPreset: "sandwich"},
      { name: "Turkey Sandwich", desc: "Turkey and vegetables on fresh bread", price: "$8.75", image: "images/sandwich/turkey_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Ham Sandwich", desc: "Ham and vegetables on fresh bread", price: "$8.75", image: "images/sandwich/ham_sandwich.jpg",optionsPreset: "sandwich"},
      { name: "Turkey Cranberry Sandwich", desc: "Turkey, cranberry and vegetables on fresh bread", price: "$9.75", image: "images/sandwich/turkey_cranberry_sandwich.jpg",optionsPreset: "sandwich"}
    ]
  },

  { category: "Specialty", items: [
    { name: "Pepperoni Pizza Bagel", desc: "Bagel topped with pepperoni, marinara, and cheese", price: "$4.50", image: "images/specialty/pep_pizza_bagel.jpg" },
    { name: "Plain Bagel Dog", desc: "Classic hot dog wrapped in a fresh plain bagel", price: "$4.75", image: "images/specialty/plain_bagel_dog.jpg" },
    { name: "Jalapeño Bagel Dog", desc: "Hot dog wrapped in a jalapeño-flavored bagel", price: "$5.25", image: "images/specialty/jalapeno_bagel_dog.jpg" },
    { name: "Parmesan Bagel Dog", desc: "Hot dog wrapped in a parmesan cheese bagel", price: "$5.25", image: "images/specialty/parmesan_bagel_dog.jpg" },
    { name: "Butter Croissant", desc: "Flaky, buttery croissant baked fresh", price: "$3.25", image: "images/specialty/butter_croissant.jpg" },
    { name: "Strawberry Scone", desc: "Sweet scone made with real strawberries", price: "$4.00", image: "images/specialty/strawberry_scone.jpg" },
    { name: "Blueberry Scone", desc: "Soft baked scone with fresh blueberries", price: "$4.00", image: "images/specialty/blueberry_scone.jpg" },
    { name: "Chocolate Chip Scone", desc: "Classic scone loaded with chocolate chips", price: "$4.00", image: "images/specialty/chocolate_chip_scone.jpg" },
    { name: "Cinnamon Roll", desc: "Soft cinnamon roll with sweet icing", price: "$5.25", image: "images/specialty/cinnamon_roll.jpg" }
    ]
  },

{ category: "Hot Drinks", items: [
  { name: "Latte", desc: "16 oz Smooth Hot latte", price: "$4.25", image: "images/drinks/latte.jpg" },
  { name: "Mocha", desc: "16 oz Creamy hot mocha drink", price: "$5.25", image: "images/drinks/mocha.jpg" },
  { name: "Hot Tea", desc: "16 oz Freshly brewed hot tea", price: "$3.50", image: "images/drinks/hot_tea.jpg" }
]},
{ category: "Iced Drinks", items: [
  { name: "Vietnamese Coffee", desc: "Rich iced Vietnamese coffee", price: "$6.50", image: "images/drinks/vietnamese_coffee.jpg" },
  { name: "Blended Latte", desc: "Iced latte blended with ice", price: "$6.00", image: "images/drinks/blended_latte.jpg" },
  { name: "Blended Mocha", desc: "Chocolate mocha iced blended drink", price: "$6.00", image: "images/drinks/blended_mocha.jpg" },
  { name: "Blended Vietnamese Coffee", desc: "Iced Vietnamese coffee blended with ice", price: "$7.50", image: "images/drinks/vietnamese_coffee.jpg" },
  { name: "Ice Black Vietnamese Coffee", desc: "Iced strong black coffee", price: "$4.50", image: "images/drinks/vietnamese_coffee.jpg" },
  { name: "Iced Mocha", desc: "Chocolate mocha on ice", price: "$5.25", image: "images/drinks/vietnamese_coffee.jpg" },
  { name: "Iced Latte", desc: "Iced latte with smooth milk", price: "$4.25", image: "images/drinks/vietnamese_coffee.jpg" }
]},
{ category: "Smoothies", items: [
  { name: "Banana Berry Smoothie", desc: "Banana and mixed berries blended", price: "$6.50", image: "images/drinks/banana_berry_smoothie.jpg", optionsPreset: "milkTeaToppings"},
  { name: "Berry Sunrise Smoothie", desc: "Strawberry and berry blend", price: "$6.50", image: "images/drinks/banana_berry_smoothie.jpg", optionsPreset: "milkTeaToppings"},
  { name: "Chocolate Shake Smoothie", desc: "Chocolate smoothie shake", price: "$6.50", image: "images/drinks/chocolate_shake_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Mocha Blast Smoothie", desc: "Chocolate coffee smoothie", price: "$6.50", image: "images/drinks/mocha_blast_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Jamaican Dream Smoothie", desc: "Tropical fruit smoothie", price: "$6.50", image: "images/drinks/mango_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Lemony Raspberry Smoothie", desc: "Lemon and raspberry blended", price: "$6.50", image: "images/drinks/lemony_rasberry_smoothie.jpg", optionsPreset: "milkTeaToppings"},
  { name: "Orange Dream Smoothie", desc: "Orange citrus smoothie", price: "$6.50", image: "images/drinks/mango_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Oreo Blast Smoothie", desc: "Chocolate Oreo blended smoothie", price: "$6.50", image: "images/drinks/coconut_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Peanut Butter Smoothie", desc: "Peanut butter smoothie blend", price: "$6.50", image: "images/drinks/coconut_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Purple Rain Smoothie", desc: "Berry and grape smoothie", price: "$6.50", image: "images/drinks/purple_rain_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Lava Flow Smoothie", desc: "Strawberry and banana smoothie", price: "$6.50", image: "images/drinks/lava_flow_smoothie.jpg", optionsPreset: "milkTeaToppings"}
]},
{ category: "Snow Smoothies", items: [
  { name: "Honeydew Snow Smoothie", desc: "Honeydew blended with ice", price: "$6.50", image: "images/drinks/honeydew_snow_smoothie.jpg", optionsPreset: "milkTeaToppings"},
  { name: "Mango Snow Smoothie", desc: "Fresh mango blended icy", price: "$6.50", image: "images/drinks/mango_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Coconut Snow Smoothie", desc: "Coconut blended icy smoothie", price: "$6.50", image: "images/drinks/coconut_snow_smoothie.jpg", optionsPreset: "milkTeaToppings"},
  { name: "Avocado Snow Smoothie", desc: "Creamy avocado icy blend", price: "$6.50", image: "images/drinks/avacado_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Coffee Snow Smoothie", desc: "Iced coffee blended with ice", price:"$6.50", image: "images/drinks/coffee_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Matcha Green Tea Snow Smoothie", desc: "Iced matcha green tea blend", price:"$6.50", image: "images/drinks/matcha_green_tea_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Taro Snow Smoothie", desc: "Sweet taro blended icy", price: "$6.50", image: "images/drinks/taro_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Thai Tea Snow Smoothie", desc: "Iced Thai tea blend", price: "$6.50", image: "images/drinks/thai_tea_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"}
]},
{ category: "Bubble Milk Tea", items: [
  { name: "Thai Milk Tea", desc: "Classic Thai milk tea", price: "$5.75", image: "images/drinks/thai_tea_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Milk Tea", desc: "Smooth milk tea with boba", price: "$5.75", image: "images/drinks/milk_tea.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Coconut Milk Tea", desc: "Coconut flavored milk tea", price: "$5.75", image: "images/drinks/coconut_milk_tea.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Coffee Milk Tea", desc: "Coffee infused milk tea", price: "$5.75", image: "images/drinks/coffee_milk_tea.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Taro Milk Tea", desc: "Sweet taro milk tea", price: "$5.75", image: "images/drinks/taro_milk_tea.jpg" , optionsPreset: "milkTeaToppings"},
  { name: "Matcha Milk Tea", desc: "Iced matcha milk tea", price: "$5.75", image: "images/drinks/matcha_green_tea_snow_smoothie.jpg" , optionsPreset: "milkTeaToppings"}
]},

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
  cartCountEl.textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}
updateCartCount();

// ===========================
// BAKER'S DOZEN PRESET
// ===========================
const BAKER_DOZEN_PRESET = [
  {
    title: "Select 13 Bagels (Required)",
    choices: [
      "Plain Bagel","Everything Bagel","Sesame Bagel","Cinnamon Crunch Bagel",
      "Blueberry Bagel","Onion Bagel","Garlic Bagel","Salt Bagel","Cranberry Bagel",
      "Poppy Bagel","Strawberry Bagel","Cheddar Bagel","Spinach Bagel","Asiago Bagel",
      "Chocolate Chip Bagel","Jalapeno Cheddar Bagel","Sourdough Bagel","Cinnamon Raisin Bagel",
      "Garlic Herb Bagel","Whole Wheat Bagel"
    ]
  }
];

// ===========================
// UPDATE ADD TO CART BUTTON
// ===========================
function updateAddToCartButton(modalOptions, addToCartBtn) {
  const bakerItems = modalOptions.querySelectorAll(".bakers-dozen-item");
  if (bakerItems.length) {
    // Baker's Dozen logic
    const total = Array.from(modalOptions.querySelectorAll(".qty-value"))
      .reduce((sum, el) => sum + parseInt(el.textContent), 0);
    const remaining = 13 - total;
    if (remaining > 0) {
      addToCartBtn.textContent = `Please add ${remaining} more`;
      addToCartBtn.disabled = true;
    } else if (remaining < 0) {
      addToCartBtn.textContent = `Remove ${-remaining} bagels`;
      addToCartBtn.disabled = true;
    } else {
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.disabled = false;
    }
  } else {
    // Required options logic
    const requiredGroups = modalOptions.querySelectorAll(".modal-options-list[data-required='true']");
    let allSelected = true;
    requiredGroups.forEach(group => {
      if (group.querySelectorAll("input:checked").length === 0) allSelected = false;
    });
    if (!allSelected) {
      addToCartBtn.textContent = "Please make required selections";
      addToCartBtn.disabled = true;
    } else {
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.disabled = false;
    }
  }
}

// ===========================
// RENDER BAKER'S DOZEN
// ===========================
function renderBakersDozen(modalOptions, addToCartBtn) {
  const preset = BAKER_DOZEN_PRESET[0];
  modalOptions.innerHTML = `
  <h4>${preset.title}</h4>
  <hr style="margin: 10px 0; border: 1px solid var(--brown);">
  `;

  preset.choices.forEach((bagel, index) => {
    const div = document.createElement("div");
    div.className = "bakers-dozen-item";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "5px";
    div.innerHTML = `
    
      <span class="bagel-name">${bagel}</span>
      <div class="bagel-qty-controls">
        <button class="qty-btn decrease" data-index="${index}">-</button>
        <span class="qty-value" data-index="${index}">0</span>
        <button class="qty-btn increase" data-index="${index}">+</button>
      </div>
    `;
    modalOptions.appendChild(div);
  });

  modalOptions.addEventListener("click", e => {
    if (!e.target.classList.contains("qty-btn")) return;
    const index = parseInt(e.target.dataset.index);
    const span = modalOptions.querySelector(`.qty-value[data-index="${index}"]`);
    let value = parseInt(span.textContent);

    if (e.target.classList.contains("increase")) value++;
    else if (e.target.classList.contains("decrease")) value = Math.max(0, value - 1);

    span.textContent = value;
    updateAddToCartButton(modalOptions, addToCartBtn);
  });

  updateAddToCartButton(modalOptions, addToCartBtn); // initialize
}

// ===========================
// RENDER MENU
// ===========================
function renderMenu() {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

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

  const subnav = document.getElementById("menu-subnav");
  const categories = [...new Set(menuData.map(cat => cat.category))];
  categories.forEach(category => {
    const link = document.createElement("a");
    link.href = `#${category.replace(/\s+/g, '-').toLowerCase()}`;
    link.className = "menu-subnav-link";
    link.textContent = category;
    subnav.appendChild(link);
  });

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
  // MENU ITEM CLICK
  // ===========================
  document.getElementById("menu-container").addEventListener("click", e => {
    const item = e.target.closest(".menu-item");
    if (!item) return;

    const category = item.dataset.category;
    const index = item.dataset.index;
    const menuItem = menuData.find(c => c.category === category).items[index];

    modalName.textContent = menuItem.name;
    modalDesc.textContent = menuItem.desc;
    modalPrice.textContent = menuItem.price;
    modalImage.src = menuItem.image;
    modalImage.alt = menuItem.name;

    modalOptions.innerHTML = "";

    if(menuItem.optionsPreset === "bakersDozen") {
      renderBakersDozen(modalOptions, addToCartBtn);
    } else {
      const optionGroups = OPTION_PRESETS[menuItem.optionsPreset] || [];
      if(optionGroups.length === 0){
        modalOptions.innerHTML = "<p>No customizations available</p>";
      } else {
        optionGroups.forEach((group, groupIndex)=>{
          const groupDiv = document.createElement("div");
          groupDiv.className = "modal-option-group";
          groupDiv.innerHTML = `
            <hr style="margin: 10px 0; border: 1px solid var(--brown);">
            <h4 class="modal-options-title">${group.title}</h4>
            <div class="modal-options-list" data-required="${group.type === 'radio' ? 'true' : 'false'}" data-group-index="${groupIndex}">
              ${group.choices.map(choice => `
                <label class="option-label">
                  <span class="option-left">
                    <input type="${group.type}" name="option-group-${groupIndex}" data-price="${choice.price || 0}" value="${choice.label}">
                    ${choice.label}
                  </span>
                  ${choice.price > 0 ? `<span class="option-price">+${formatPrice(choice.price)}</span>` : ""}
                </label>
              `).join("")}
            </div>
          `;
          modalOptions.appendChild(groupDiv);
        });
      }
      // Add event listener to update button when selecting options
      modalOptions.addEventListener("change", ()=>updateAddToCartButton(modalOptions, addToCartBtn));
      updateAddToCartButton(modalOptions, addToCartBtn); // initialize
    }
      // Add special instructions text area
      const specialDiv = document.createElement("div");
      specialDiv.style.marginTop = "10px";
      specialDiv.innerHTML = `
        <label for="special-instructions">Special instructions:</label>
        <textarea id="special-instructions" rows="3" style="width:100%;"></textarea>
      `;
      modalOptions.appendChild(specialDiv);



    modal.style.display = "block";
    addToCartBtn.dataset.category = category;
    addToCartBtn.dataset.index = index;
  });

  // ===========================
  // ADD TO CART BUTTON
  // ===========================
addToCartBtn.addEventListener("click", () => {
  const category = addToCartBtn.dataset.category;
  const index = addToCartBtn.dataset.index;
  const menuItem = menuData.find(c => c.category === category).items[index];

  let selectedOptions = [];

  // Get special instructions text
  const specialInstructionsValue = document.getElementById("special-instructions")?.value || "";

  if(menuItem.optionsPreset === "bakersDozen") {
    const bagelInputs = modalOptions.querySelectorAll(".qty-value");
    bagelInputs.forEach((el, idx)=>{
      const qty = parseInt(el.textContent) || 0;
      if(qty>0) selectedOptions.push(`${BAKER_DOZEN_PRESET[0].choices[idx]} x${qty}`);
    });

    const total = Array.from(bagelInputs).reduce((sum, el) => sum + parseInt(el.textContent), 0);
    if(total !== 13) return; // prevent adding unless exactly 13

    cart.push({
      name: menuItem.name,
      price: formatPrice(25),
      basePrice: 25,
      extraPrice: 0,
      options: selectedOptions,
      specialInstructions: specialInstructionsValue, // store it
      image: menuItem.image,
      quantity: 1
    });

  } else {
    // Regular menu item with options
    const checkedInputs = Array.from(modalOptions.querySelectorAll("input:checked"));
    const extraPrice = checkedInputs.reduce((sum,input)=>sum + parseFloat(input.dataset.price || 0),0);
    const basePrice = parsePrice(menuItem.price);
    const finalPrice = basePrice + extraPrice;
    selectedOptions = checkedInputs.map(i => i.value);

    // Validate required radio groups
    const requiredGroups = modalOptions.querySelectorAll(".modal-options-list[data-required='true']");
    for(const group of requiredGroups){
      if(group.querySelectorAll("input:checked").length === 0) return; // prevent add
    }

    cart.push({
      name: menuItem.name,
      price: formatPrice(finalPrice),
      basePrice: basePrice,
      extraPrice: extraPrice,
      options: selectedOptions,
      specialInstructions: specialInstructionsValue, // store it
      image: menuItem.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  modal.style.display = "none";
});


  // ===========================
  // CART MODAL / RENDER
  // ===========================
  function renderCart(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item,index)=>{
      const priceNum = parseFloat(item.price.replace("$",""));
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
          ${item.options.length ? `Notes: ${item.options.join(", ")}` : "Notes: None"}<br>
          ${item.specialInstructions ? `Special instructions: ${item.specialInstructions}` : "Special instructions: None"}
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

  // Cart quantity buttons
  cartItemsContainer.addEventListener("click", e=>{
    if(e.target.classList.contains("qty-btn")){
      const index = e.target.dataset.index;
      if(e.target.dataset.action==="increase"){
        cart[index].quantity = (cart[index].quantity || 1) +1;
      } else if(e.target.dataset.action==="decrease"){
        cart[index].quantity = Math.max(1, (cart[index].quantity ||1) -1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }
  });

  // Remove cart item
  cartItemsContainer.addEventListener("click", e=>{
    if(e.target.classList.contains("remove-item")){
      const index = e.target.dataset.index;
      cart.splice(index,1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      renderCart();
    }
  });

  // Open/close cart modal
  cartIcon.addEventListener("click", ()=>{
    renderCart();
    cartModal.style.display="block";
  });
  closeBtn.onclick = ()=>modal.style.display="none";
  closeCartBtn.onclick = ()=>cartModal.style.display="none";
  window.onclick = e=>{
    if(e.target===modal) modal.style.display="none";
    if(e.target===cartModal) cartModal.style.display="none";
  };
});
