const loadBtn = document.querySelector("#load");
const searchInput = document.querySelector("#search");
const container = document.querySelector("#products");
let products = [];
async function getProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        if (!response.ok) {
            throw new Error("Ошибка загрузки товаров");
        }
        products = await response.json();
        showProducts(products);
    } catch (error) {
        console.log("Ошибка:", error);
        container.textContent = "Ошибка загрузки товаров";
    }
}
function showProducts(data) {
    container.innerHTML = "";
    data.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        const title = document.createElement("h3");
        title.textContent = product.title;
        const price = document.createElement("p");
        price.textContent = "Цена: $" + product.price;
        const rating = document.createElement("p");
        rating.textContent = "Рейтинг: " + product.rating.rate;
        card.append(title, price, rating);
        container.append(card);
    });
}

loadBtn.addEventListener("click", getProducts);
searchInput.addEventListener("input", function() {
    const value = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(value);

    });
    showProducts(filteredProducts);
});