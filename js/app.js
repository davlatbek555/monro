const initialDishes = [
    {
        name: "Shaverma (Oddiy)",
        type: "Oddiy",
        price: 19000,
        image: "http://www.monro.uz/assets/imgs/shaverma1.jpg",
    },
    {
        name: "Shaverma (Pishloq)",
        type: "Pishloq",
        price: 22000,
        image: "http://www.monro.uz/assets/imgs/shaverma2.jpg",
    },
    {
        name: "Shaverma (Двойной)",
        type: "Двойной yoki kattasi",
        price: 26000,
        image: "http://www.monro.uz/assets/imgs/shaverma3.jpg",
    },
    {
        name: "Shaverma (Pishloqli va Двойной)",
        type: "Pishloqli va Двойной",
        price: 29000,
        image: "http://www.monro.uz/assets/imgs/shaverma4.jpg",
    },
    {
        name: "CHICKENBURGER (Oddiy)",
        type: "Oddiy",
        price: 16000,
        image: "http://www.monro.uz/assets/imgs/chickenburger1.jpg",
    },
    {
        name: "CHICKENBURGER (Pishloq)",
        type: "Pishloq",
        price: 19000,
        image: "http://www.monro.uz/assets/imgs/chickenburger2.jpg",
    },
    {
        name: "CHIZBURGER (Oddiy)",
        type: "Oddiy",
        price: 22000,
        image: "http://www.monro.uz/assets/imgs/cheeseburger1.jpg",
    },
    {
        name: "CHIZBURGER (Двойной)",
        type: "Двойной",
        price: 32000,
        image: "http://www.monro.uz/assets/imgs/cheeseburger2.jpg",
    },
    {
        name: "Gamburger (Oddiy)",
        type: "Oddiy",
        price: 19000,
        image: "http://www.monro.uz/assets/imgs/hamburger1.jpg",
    },
    {
        name: "Gamburger (Двойной)",
        type: "Двойной",
        price: 29000,
        image: "http://www.monro.uz/assets/imgs/hamburger2.jpg",
    },
    {
        name: "XOT-DOG (Oddiy)",
        type: "Oddiy",
        price: 9000,
        image: "http://www.monro.uz/assets/imgs/hotdog1.jpg",
    },
    {
        name: "XOT-DOG (Двойной)",
        type: "Двойной",
        price: 15000,
        image: "http://www.monro.uz/assets/imgs/hotdog2.jpg",
    },
    {
        name: "XOT-DOG (Pishloq)",
        type: "Pishloq",
        price: 12000,
        image: "http://www.monro.uz/assets/imgs/hotdog3.jpg",
    },
    {
        name: "XOT-DOG (Двойной va pishloq)",
        type: "Двойной va pishloq",
        price: 18000,
        image: "http://www.monro.uz/assets/imgs/hotdog4.jpg",
    },
    {
        name: "КРЫЛЫШКИ (Порция)",
        type: "Порция 1",
        price: 17000,
        image: "http://www.monro.uz/assets/imgs/kfc1.jpg",
    },
    {
        name: "КРЫЛЫШКИ (Порция)",
        type: "Порция 1.5",
        price: 25000,
        image: "http://www.monro.uz/assets/imgs/kfc2.jpg",
    },
    {
        name: "FRI (SOUS)",
        type: "Oddiy",
        price: 12000,
        image: "http://www.monro.uz/assets/imgs/fries.jpg",
    },
    {
        name: "BURRITO (Oddiy)",
        type: "Oddiy",
        price: 22000,
        image: "http://www.monro.uz/assets/imgs/burrito1.jpg",
    },
    {
        name: "BURRITO (Pishloq)",
        type: "Pishloq",
        price: 26000,
        image: "http://www.monro.uz/assets/imgs/burrito2.jpg",
    }
];

// Taomlarni chiqarish
const dishesContainer = document.getElementById("dishes");

initialDishes.forEach(dish => {
    const dishElement = document.createElement("div");
    dishElement.className = "dish";

    dishElement.innerHTML = `
        <h3>${dish.name}</h3>
        <img src="${dish.image}" alt="${dish.name}">
        <p class="price-product">Narxi: ${dish.price} so'm</p>
        <button class="detail-btn" data-name="${dish.name}">Batafsil</button>
    `;

    dishesContainer.appendChild(dishElement);
});

// "Batafsil" tugmasiga bosilganda product.html sahifasiga o'tish
dishesContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("detail-btn")) {
        const productName = event.target.getAttribute("data-name");
        window.location.href = `product.html?name=${encodeURIComponent(productName)}`; // product.html sahifasini ochish
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.order-button');
    const backButton = document.querySelector('.back-button');

    // Buyurtma tugmasi
    if (orderButton) { // Bu yerda orderButton bo'lsa
        orderButton.addEventListener('click', () => {
            const confirmation = confirm("Online buyurtma berish hozircha mavjud emas. Telefon qilib yoki murojaat qilib buyurtma qilishga rozimisiz?");
            if (confirmation) {
                window.location.href = 'tel:+998918624343'; // Telefon raqamiga qo'ng'iroq
            }
        });
    }

    // Orqaga tugmasi
    if (backButton) { // Bu yerda backButton bo'lsa
        backButton.addEventListener('click', () => {
            window.history.back(); // Orqaga qaytish
        });
    }
});
