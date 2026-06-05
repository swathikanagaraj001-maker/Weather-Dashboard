const products = [
    {id:1, name:"Laptop", price:50000},
    {id:2, name:"Mobile", price:20000},
    {id:3, name:"Headphones", price:1500},
    {id:4, name:"Smart Watch", price:3000},
    {id:5, name:"Keyboard", price:800}
];

let cart = {};

function displayProducts(productList){

    const container =
    document.getElementById("productContainer");

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `
        <div class="product">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
            Add to Cart
            </button>
        </div>
        `;
    });
}

function addToCart(id){

    if(cart[id]){
        cart[id].qty++;
    }
    else{
        const product =
        products.find(p => p.id === id);

        cart[id] = {
            ...product,
            qty:1
        };
    }

    updateCart();
}

function increaseQty(id){
    cart[id].qty++;
    updateCart();
}

function decreaseQty(id){

    cart[id].qty--;

    if(cart[id].qty <= 0){
        delete cart[id];
    }

    updateCart();
}

function updateCart(){

    const cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    Object.values(cart).forEach(item => {

        const subtotal =
        item.price * item.qty;

        total += subtotal;

        cartItems.innerHTML += `
        <div class="cart-item">

            <h4>${item.name}</h4>

            <button class="qty-btn"
            onclick="decreaseQty(${item.id})">-</button>

            ${item.qty}

            <button class="qty-btn"
            onclick="increaseQty(${item.id})">+</button>

            <p>Subtotal: ₹${subtotal}</p>

        </div>
        `;
    });

    document.getElementById("totalAmount")
    .innerText = total;
}

function searchProducts(){

    const value =
    document.getElementById("search")
    .value.toLowerCase();

    const filtered =
    products.filter(product =>
        product.name.toLowerCase()
        .includes(value)
    );

    displayProducts(filtered);
}

displayProducts(products);