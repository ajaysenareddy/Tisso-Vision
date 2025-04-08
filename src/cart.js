document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;

    renderCart();

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <p><strong>${item.name}</strong></p>
                <p><span class="cart-label">Price:</span> ${item.price}</p>
                <p><span class="cart-label">Color:</span> <span class="color-preview" style="background-color: ${item.color};"></span> ${item.color}</p>
                <p><span class="cart-label">Size:</span> ${item.size}</p>
                <button class="remove-from-cart-btn" data-index="${index}">Remove</button>
            </div>
        `).join("");

        document.querySelectorAll(".remove-from-cart-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.dataset.index;
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
});
