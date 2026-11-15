# Paradise Nursery Shopping Application

Paradise Nursery is a React shopping application for an online houseplant nursery. Customers can explore houseplants grouped into categories, add plants to a shopping cart, change quantities, remove items, and view the cart total.

## Features

### Landing page
- Paradise Nursery company name and introduction
- Full-width background image
- **Get Started** button that opens the product listing

### Product listing
- Nine houseplants organized into three categories
- Product image, name, description, and price
- Add to Cart button with an added/disabled state
- Dynamic cart count in the navigation bar

### Shopping cart
- Displays each selected plant with thumbnail, name, unit price, and line total
- Increase and decrease quantity controls
- Delete action for each item
- Dynamic item count and total cost
- Continue Shopping controls and Checkout alert

## Technology
- React 18
- Vite
- Redux Toolkit and React Redux
- CSS

## Main project files
- `src/App.jsx` — application navigation and landing page
- `src/App.css` — page layout, landing background, and responsive styles
- `src/AboutUs.jsx` — company information
- `src/CartSlice.jsx` — Redux reducers: `addItem`, `removeItem`, and `updateQuantity`
- `src/ProductList.jsx` — categorized plant catalogue
- `src/CartItem.jsx` — shopping cart interface
- `src/plants.js` — plant catalogue data
- `src/store/store.js` — Redux store configuration

## Run locally
```bash
npm install
npm run dev
``

Create a production build with:
```bash
npm run build
``
