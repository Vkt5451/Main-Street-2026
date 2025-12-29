const popularItems = [
  { img: "/images/bagel/breakfast_ham.jpg", title: "Breakfast Ham Egg Cheese Bagel", desc: "Bagel with ham, egg, and cheese" },
  { img: "/images/bagel/breakfast_bacon.jpg", title: "Breakfast Bacon Bagel", desc: "Bagel with crispy bacon and egg" },
  { img: "/images/bagel/breakfast_sausage.jpg", title: "Breakfast Sausage Bagel", desc: "Bagel with savory sausage and egg" },
  { img: "/images/sandwich/crossaint_ham.jpg", title: "Ham Croissant Sandwich", desc: "Flaky croissant with ham and cheese" },
  { img: "/images/bagel/nova_lox.jpg", title: "Nova Lox Bagel", desc: "Bagel with smoked salmon and cream cheese" },
  { img: "/images/sandwich/turkey_bacon_avacado_sandwich.jpg", title: "Turkey Bacon Avocado Sandwich", desc: "Sandwich with turkey, bacon, and avocado" },
  { img: "/images/drinks/thai_tea_snow_smoothie.jpg", title: "Thai Tea Snow Smoothie", desc: "Iced Thai tea blended into a smoothie" },
  { img: "/images/drinks/lava_flow_smoothie.jpg", title: "Lava Flow Smoothie", desc: "Strawberry and banana blended smoothie" },
  { img: "/images/drinks/vietnamese_coffee.jpg", title: "Vietnamese Coffee", desc: "Rich and sweet iced coffee" }
];


// Target the grid container
const grid = document.getElementById("popular-grid");

// Generate HTML for each item
popularItems.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("popular-item");
  div.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <div class="popular-info">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
  grid.appendChild(div);
});
