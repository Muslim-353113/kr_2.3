async function getProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.log("Ошибка:", error);
    }
}
getProducts();