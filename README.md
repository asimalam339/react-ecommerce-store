# React Ecommerce Store

A responsive and modern Ecommerce web application built using **React + Vite**.  
This project includes full product browsing, individual product pages, cart features, and a clean UI built with reusable components.  
It is optimized for performance and deployed on Vercel.

---

## 🚀 Live Demo

Explore the live deployed version:

**https://react-ecommerce-store-one.vercel.app/**

---

## 📌 Features

- Modern homepage with hero section  
- Product listing with grid layout  
- Product detail pages  
- Add to cart / remove from cart  
- Persistent cart using LocalStorage  
- Cart summary with quantity updates  
- Clean and modular folder/component structure  
- React Router for smooth navigation  
- Reusable components for UI and layout  
- Fast performance using Vite  

---

## 🛠️ Tech Stack

**Frontend:**  
- React  
- Vite  
- React Router  
- CSS (App.css + component styling)

**State Management:**  
- Context API (`CartContext.jsx`)  
- LocalStorage persistence  

**Deployment:**  
- Vercel  

---

## 📂 Project Folder Structure (Matches Your Screenshot)

```
ecommerce-react-app/
│
├── public/
│   ├── index.html
│   ├── react.svg
│   └── (assets)
│
├── src/
│   ├── assets/
│   │   └── react.svg
│
│   ├── components/
│   │   ├── cart/
│   │   │   └── Cart.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   └── ui/
│   │       └── ProductList.jsx
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Products.jsx
│
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│
│   ├── context/
│   │   └── CartContext.jsx
│
│   ├── data/
│   │   └── products.js
│
│   ├── hooks/
│   └── lib/
│
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

This structure is clean, modular, and easy for recruiters to understand.

---

## 📷 Screenshots (Add for Better Presentation)

1. Create a folder:  
```
public/screenshots
```

2. Add screenshots:  
- `home.png`  
- `products.png`  
- `product-detail.png`  
- `cart.png`

3. Add this section after uploading:

```markdown
## 📸 Screenshots

![Home Page](public/screenshots/home.png)
![Products Page](public/screenshots/products.png)
![Product Detail](public/screenshots/product-detail.png)
![Cart Page](public/screenshots/cart.png)
```

---

## 🧪 Running the Project Locally

### 1. Clone the repository
```
git clone https://github.com/asimalam339/react-ecommerce-store.git
```

### 2. Install dependencies
```
npm install
```

### 3. Start development server
```
npm run dev
```
App runs at:  
**http://localhost:5173** (default Vite port)

### 4. Build for production
```
npm run build
```

### 5. Preview production build
```
npm run preview
```

---

## 🌐 Deployment (Vercel)

This project is live on Vercel.

Build settings:

- **Build Command:** `npm run build`  
- **Output Directory:** `dist`  
- **Framework:** Vite  

To redeploy, push updates to GitHub — Vercel redeploys automatically.

---

## 📈 Future Improvements

- Add product search  
- Add category filters  
- Add price filters  
- Add login/signup (JWT / Firebase)  
- Wishlist functionality  
- Admin panel for product management  
- Responsive UI enhancements  

---

## 👤 Author

**Mohammad Asim Alam**  
GitHub Profile: https://github.com/asimalam339  
Live Demo: https://react-ecommerce-store-one.vercel.app/

---

## 📜 License

This project is licensed under the **MIT License**.
