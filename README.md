# Paradise Nursery

Paradise Nursery is a responsive React plant-shop experience for discovering indoor plants and managing a shopping cart.

## Project features
- Landing page with the Paradise Nursery name and a **Get Started** call to action.
- About Us section describing the nursery and its mission.
- Product catalogue grouped by plant category.
- Add-to-cart, remove-from-cart, and quantity update actions.
- Redux Toolkit cart state using `addItem`, `removeItem`, and `updateQuantity` reducers.
- Cart subtotal and item count calculations.
- Responsive layout for desktop, tablet, and mobile screens.

## Built with
- React
- Vite
- Redux Toolkit
- React Redux
- CSS

## Run locally
1. Install Node.js (LTS).
2. Clone this repository.
3. In the project directory, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

To create a production build:
```bash
npm run build
```

## Project structure
```
src/
  components/
    AboutUs.jsx
    CartItem.jsx
    ProductList.jsx
  data/
    plants.js
  features/
    cart/
      CartSlice.jsx
  store/
    store.js
  App.jsx
  App.css
  main.jsx
```
