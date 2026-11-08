async function getLocalProducts() {
    try {
        const response = await fetch("./products.json");
        if (!response.ok) {
            throw new Error("Ошибка загрузки товаров");
        }
        const data = await response.json();
        const availableProducts = data.filter(product => {
            return product.inStock === true;
        });
        const container = document.querySelector("#products");
        availableProducts.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            const title = document.createElement("h3");
            title.textContent = product.name;
            const price = document.createElement("p");
            price.textContent = "Цена: " + product.price + " сом";
            card.append(title, price);
            container.append(card);
        });
    } catch (error) {
        console.log("Ошибка:", error);
    }
}
getLocalProducts();