const popularItems = [
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Everything Bagel",
    desc: "Sesame, poppy, garlic, onion & salt"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Sesame Bagel",
    desc: "Classic toasted sesame seeds"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Blueberry Bagel",
    desc: "Sweet and fruity, perfect for breakfast"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Cheddar Bacon Bagel",
    desc: "Savory cheddar with crispy bacon bits"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Cinnamon Swirl Bagel",
    desc: "Warm cinnamon flavor with a sweet glaze"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Jalapeño Bagel",
    desc: "Spicy kick with fresh jalapeños"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Garlic Bagel",
    desc: "Bold garlic flavor, a fan favorite"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Plain Bagel",
    desc: "Simple, classic, and perfect with any spread"
  },
  {
    img: "images/bagel/breakfast_bacon.jpg",
    title: "Strawberry Bagel",
    desc: "Sweet strawberry bits baked inside"
  }
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
