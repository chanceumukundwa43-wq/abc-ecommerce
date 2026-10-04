# ABC E-commerce ReactJS Project

A functional ReactJS e-commerce frontend for ABC, an online business company in Kayonza District, Eastern Province, Rwanda.

## Features

- React + Vite
- React Router v6
- Navbar and Footer
- Home, Products, Cart and User Profile pages
- `/home` redirects to `/`
- Product filtering using URL search parameters:
  - `/products?category=electronics`
  - `/products?price=low`
- Product details:
  - `/products/:id`
  - `/products/:id/reviews`
  - `/products/:id/specs`
- Nested routes with `<Outlet />`
- 404 NotFound page
- Responsive UI
- No full page reload during navigation

## Installation

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally:

```text
http://localhost:5173
```

## GitHub

After testing, create a GitHub repository and run:

```bash
git init
git add .
git commit -m "Build ABC e-commerce React Router project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/abc-ecommerce-react.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Suggested screenshots for submission

1. Home page
2. Products page
3. Filtered products (`?category=electronics`)
4. Product details
5. Product reviews nested route
6. Product specifications nested route
7. 404 page
8. Navbar and Footer visible
