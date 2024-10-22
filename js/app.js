const initialDishes = [
    {
        name: "Shaverma (Oddiy)",
        type: "Oddiy",
        price: 19000,
        image: "./images/shaverma1.jpg",
    },
    {
        name: "Shaverma (Pishloq)",
        type: "Pishloq",
        price: 22000,
        image: "./images/shaverma2.jpg",
    },
    {
        name: "Shaverma (Двойной)",
        type: "Двойной yoki kattasi",
        price: 26000,
        image: "./images/shaverma3.jpg",
    },
    {
        name: "Shaverma (Pishloqli va Двойной)",
        type: "Pishloqli va Двойной",
        price: 29000,
        image: "./images/shaverma4.jpg",
    },
    {
        name: "CHICKENBURGER (Oddiy)",
        type: "Oddiy",
        price: 16000,
        image: "./images/chickenburger1.jpg",
    },
    {
        name: "CHICKENBURGER (Pishloq)",
        type: "Pishloq",
        price: 19000,
        image: "./images/chickenburger2.jpg",
    },
    {
        name: "CHIZBURGER (Oddiy)",
        type: "Oddiy",
        price: 22000,
        image: "./images/cheeseburger1.jpg",
    },
    {
        name: "CHIZBURGER (Двойной)",
        type: "Двойной",
        price: 32000,
        image: "./images/cheeseburger2.jpg",
    },
    {
        name: "Gamburger (Oddiy)",
        type: "Oddiy",
        price: 19000,
        image: "./images/hamburger1.jpg",
    },
    {
        name: "Gamburger (Двойной)",
        type: "Двойной",
        price: 29000,
        image: "./images/hamburger2.jpg",
    },
    {
        name: "XOT-DOG (Oddiy)",
        type: "Oddiy",
        price: 9000,
        image: "./images/hotdog1.jpg",
    },
    {
        name: "XOT-DOG (Двойной)",
        type: "Двойной",
        price: 15000,
        image: "./images/hotdog2.jpg",
    },
    {
        name: "XOT-DOG (Pishloq)",
        type: "Pishloq",
        price: 12000,
        image: "./images/hotdog3.jpg",
    },
    {
        name: "XOT-DOG (Двойной va pishloq)",
        type: "Двойной va pishloq",
        price: 18000,
        image: "./images/hotdog4.jpg",
    },
    {
        name: "КРЫЛЫШКИ (Порция)",
        type: "Порция 1",
        price: 17000,
        image: "./images/kfc1.jpg",
    },
    {
        name: "КРЫЛЫШКИ (Порция)",
        type: "Порция 1.5",
        price: 25000,
        image: "./images/kfc2.jpg",
    },
    {
        name: "FRI (SOUS)",
        type: "Oddiy",
        price: 12000,
        image: "./images/fries.jpg",
    },
    {
        name: "BURRITO (Oddiy)",
        type: "Oddiy",
        price: 22000,
        image: "./images/burrito1.jpg",
    },
    {
        name: "BURRITO (Pishloq)",
        type: "Pishloq",
        price: 26000,
        image: "./images/burrito2.jpg",
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

// Qidiruv funksiyasi
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const results = initialDishes.filter(dish => 
        dish.name.toLowerCase().startsWith(searchTerm) // Faqat nom boshidan mos kelishini tekshirish
    );
    
    displayResults(results);
});



// Natijalarni ko'rsatish
function displayResults(results) {
    const dishesContainer = document.getElementById('dishes');
    dishesContainer.innerHTML = ''; // Eski natijalarni tozalash

    if (results.length > 0) {
        results.forEach(dish => {
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
    } else {
        dishesContainer.innerHTML = '<p>Mahsulot topilmadi.</p>';
    }
}

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