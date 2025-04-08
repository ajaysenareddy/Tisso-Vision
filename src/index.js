import products from "./products.js";

document.addEventListener("DOMContentLoaded", function () {
    const productGallery = document.getElementById("product-gallery");

    if (!productGallery) return;

    productGallery.innerHTML = products.map((product, index) => `
        <div class="image-with-icon">
            <button class="add-btn">+</button>
            <img src="${product.imgSrc}" alt="${product.name}">
            <div class="form-container hidden" style="display: none;"></div>
        </div>
    `).join("");

    document.querySelectorAll(".add-btn").forEach((addBtn, index) => {
        addBtn.addEventListener("click", function () {
            const parentDiv = this.closest(".image-with-icon");
            const formContainer = parentDiv.querySelector(".form-container");

            if (!formContainer.classList.contains("hidden")) {
                formContainer.classList.add("hidden");
                formContainer.style.display = "none";
                this.style.display = "block";
                return;
            }

            this.style.display = "none";
            const product = products[index];
            const colorButtons = product.colors.map(color => `
                <button type="button" class="color-btn" data-color="${color}" style="border-left: 4px solid ${color === 'White' ? '#ccc' : color};">${color}</button>
            `).join("");

            formContainer.innerHTML = `
                <div class="form-content">
                    <div class="image-with-details">
                        <img class="form-image" src="${product.imgSrc}" alt="${product.name}">
                        <div class="clothing-details">
                            <p><strong>${product.name}</strong></p>
                            <p>980,00€</p>
                            <p>This one-piece swimsuit is crafted from jersey featuring an allover micro Monogram motif in relief.</p>
                        </div>
                        <button class="close-btn">x</button>
                    </div>
                    <label>Color</label>
                    <div class="btn-group">${colorButtons}</div>
                    <label>Choose Size:</label>
                    <select class="choose-size">
                        <option value="" disabled selected>Choose your size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <button type="button" class="add-to-cart-btn">ADD TO CART</button>
                </div>
            `;

            formContainer.classList.remove("hidden");
            formContainer.style.display = "block";

            formContainer.querySelectorAll(".color-btn").forEach(colorBtn => {
                colorBtn.addEventListener("click", function () {
                    formContainer.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("selected"));
                    this.classList.add("selected");
                });
            });

            formContainer.querySelector(".close-btn").addEventListener("click", function () {
                formContainer.classList.add("hidden");
                formContainer.style.display = "none";
                addBtn.style.display = "block";
            });

            formContainer.querySelector(".add-to-cart-btn").addEventListener("click", function () {
                const selectedColor = formContainer.querySelector(".color-btn.selected")?.dataset.color;
                const selectedSize = formContainer.querySelector(".choose-size").value;

                if (!selectedColor) {
                    alert("Please select a color before adding to cart.");
                    return;
                }

                if (!selectedSize) {
                    alert("Please select a size before adding to cart.");
                    return;
                }

                const cartItem = {
                    name: product.name,
                    price: "980,00€",
                    image: product.imgSrc,
                    color: selectedColor,
                    size: selectedSize
                };

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(cartItem);
                localStorage.setItem("cart", JSON.stringify(cart));

                alert("Item has been added to the cart!");
            });
        });
    });
});
