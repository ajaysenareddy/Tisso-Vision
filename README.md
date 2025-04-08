# Ajaysenareddy-Jagapathi

# Tisso Vision - Shopify Project

This project simulates a simplified Shopify store for "Tisso Vision", focusing on sustainable and ethically made activewear. It allows users to browse products, select colors and sizes, add items to a cart, and view/manage their cart.

## Features

-   **Product Gallery:** Displays a grid of products with images.
-   **Product Selection:** Users can select colors and sizes for each product.
-   **Add to Cart:** Allows users to add selected items to their shopping cart.
-   **Cart Management:** Users can view and remove items from their cart.
-   **Responsive Design:** The website is designed to be responsive and work on various screen sizes.
-   **Local Storage:** Cart data is stored in the browser's local storage to persist across sessions.

## Technologies Used

-   **HTML:** For the structure of the web pages.
-   **CSS:** For styling and layout.
-   **JavaScript:** For interactivity and dynamic content.
-   **Font Awesome:** For icons.
-   **Google Fonts:** For custom fonts.

## Project Structure

Tisso-Vision/src
├── index.html       # Main product gallery page
├── index.js         # JavaScript for the main page
├── index.css        # CSS styles for the main page
├── cart.html        # Shopping cart page
├── cart.js          # JavaScript for the cart page
├── products.js      # Product data
└── images/          # Image assets
├── 1.jpg
├── 2.jpg
├── 3.jpg
├── 4.jpg
├── 5.jpg
├── 6.jpg
├── 7.jpg
├── 8.jpg
└── Frame.jpg

## Usage

-   **Browsing Products:**
    -   On the `index.html` page, you will see a gallery of products.
    -   Click the "+" button on a product to open the product details form.
-   **Selecting Product Details:**
    -   In the form, select a color and size for the product.
    -   Click "ADD TO CART" to add the item to your cart.
    -   Click the "x" button to close the form.
-   **Viewing Cart:**
    -   Click the shopping cart icon in the header to navigate to the `cart.html` page.
    -   On the cart page, you can see the items you have added.
-   **Removing Items from Cart:**
    -   Click the "Remove" button next to an item in the cart to remove it.
-   **Returning to Shop:**
    -   Click the "Back to Shop" link on the cart page to return to the product gallery.

## Notes

-   This is a simplified simulation and does not include actual payment or order processing functionality.
-   Product data is stored in `products.js`.
-   Cart data is stored in the browser's local storage.
