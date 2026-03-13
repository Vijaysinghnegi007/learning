const products = [
  {
    name: "Nike Air Zoom Pegasus",
    headlines: "Responsive running shoes built for daily training.",
    price: 11999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Adidas Ultraboost 22",
    headlines: "High-performance running shoes with boost cushioning.",
    price: 13999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
  },
  {
    name: "Puma Velocity Nitro",
    headlines: "Lightweight running shoes with nitro foam technology.",
    price: 9999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    name: "Nike Metcon 8",
    headlines: "Stable training shoes perfect for gym workouts.",
    price: 12499,
    image: "https://images.unsplash.com/photo-1634624943305-4c8f49ba7226?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Under Armour HOVR Phantom",
    headlines: "Energy returning cushioning for long runs.",
    price: 11499,
    image: "https://images.unsplash.com/photo-1584735175097-719d848f8449",
  },
  {
    name: "Reebok Nano X3",
    headlines: "Versatile training shoes built for strength and agility.",
    price: 10999,
    image: "https://images.unsplash.com/photo-1726317219474-7f8a98b53743?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Asics Gel-Kayano 30",
    headlines: "Premium stability running shoes for marathon runners.",
    price: 14999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
  },
  {
    name: "New Balance Fresh Foam X",
    headlines: "Soft cushioning and breathable design for comfort.",
    price: 10499,
    image: "https://images.unsplash.com/photo-1651255122187-d49ae6f41736?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const popular = [
  {
    name: "Nike Air Zoom Pegasus",
    headlines: "Responsive running shoes built for daily training.",
    price: 11999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Adidas Ultraboost 22",
    headlines: "High-performance running shoes with boost cushioning.",
    price: 13999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
  },

  {
    name: "Under Armour HOVR Phantom",
    headlines: "Energy returning cushioning for long runs.",
    price: 11499,
    image: "https://images.unsplash.com/photo-1584735175097-719d848f8449",
  },
  {
    name: "Puma Velocity Nitro",
    headlines: "Lightweight running shoes with nitro foam technology.",
    price: 9999,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },

  {
    name: "Asics Gel-Kayano 30",
    headlines: "Premium stability running shoes for marathon runners.",
    price: 14999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
// cart
let cart = [];

const showProducts = products
  .map((product, index) => {
    return `
    <div class="product w-[15rem] flex-shrink-0 rounded-xl p-2 bg-white">
      
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}">
      </div>

      <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight truncate w-full">
          ${product.name}
        </h1>

        <div class="flex justify-between w-full items-center mt-2">
          
          <div class="w-1/2">
            <h3 class="font-semibold opacity-20 truncate w-full">
              ${product.headlines}
            </h3>

            <h4 class="font-semibold mt-2">
              ₹${product.price}
            </h4>
          </div>

          <button class="cart-button w-10 h-10 rounded-full shader text-yellow-400" data-index="${index}">
            <i class="ri-add-line cart-button" data-index="${index}"></i>
          </button>

        </div>
      </div>

    </div>
  `;
  })
  .join("");

document.querySelector(".products").innerHTML = showProducts;

const showPopular = popular
  .map((popular) => {
    return `
    <div class="popular bg-white p-3 rounded-2xl flex items-start gap-3 w-fit  flex-shrink-0">
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${popular.image}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${popular.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
               ${popular.headlines}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
            </div>
      </div>`;
  })
  .join("");

document.querySelector(".populars").innerHTML = showPopular;

function addToCart() {
  document.querySelector(".products").addEventListener("click", (e) => {
    // alert("item added to cart")
    if (e.target.classList.contains("cart-button")) {
      cart.push(products[e.target.dataset.index]);
      console.log(cart);
    }
  });
}

addToCart();

function showCart() {
  document.querySelector(".carticon").addEventListener("click", () => {
    const cartExpand = document.querySelector(".cartexpnd");

    cartExpand.classList.toggle("hidden");

    if (cart.length > 0) {
      const cartItems = cart
        .map((product) => {
          return `
          <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
              <img class="w-full h-full object-cover" src="${product.image}" />
            </div>
            <div>
              <h3 class="font-semibold text-sm">${product.name}</h3>
              <h3 class="text-xs opacity-70">₹${product.price}</h3>
            </div>
          </div>
          `;
        })
        .join("");

      cartExpand.innerHTML = cartItems;

    } else {

      cartExpand.innerHTML = `
        <div class="text-center py-4 text-sm border-2 border-black z-10">
          Your cart is empty
        </div>
      `;
    }
  });
}
showCart();
