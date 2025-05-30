# 🛒 Whatbytes Frontend Assignment

A responsive e-commerce frontend application built with **Next.js** and **Tailwind CSS**, implementing product listing, filtering, cart logic, and product detail pages. This project adheres strictly to the assignment specifications.

## 🚀 Live Demo

👉 [View Live on Vercel](https://whatbytes-frontend-assignment-scda-bu25kh85i.vercel.app)

## 📁 Project Structure

- `/` – Home Page with product listing and filters
- `/product/[id]` – Dynamic Product Detail Page
- `/cart` – (Bonus) Cart Page with price summary and quantity controls

## ✨ Features

### ✅ Home Page (`/`)
- Header with logo, search bar, cart icon (with badge), and avatar
- Sidebar with:
  - Category filter
  - Price range slider
  - Optional brand filter
- Product grid:
  - Responsive layout (3 columns desktop → 1 column mobile)
  - Product cards with image, title, price, rating (optional), and quick "Add to Cart"
- Footer with social icons and copyright

### ✅ Product Detail Page (`/product/[id]`)
- Large product image or carousel
- Product details: title, price, description, category
- Quantity selector and "Add to Cart" button
- Optional reviews section

### ✅ Bonus – Cart Page (`/cart`)
- List of products added to cart
- Quantity update & remove functionality
- Price summary

## 🧠 Logic Implemented

- Category and price range filtering
- URL-based filtering (`?category=...&price=...`)
- Search filter (case-insensitive string match)
- Cart state management via **React Context / Zustand / Redux**
- Cart persistence with `localStorage`
- Conditional rendering for empty states
- Dynamic routing with Next.js

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Icons:** [lucide-react](https://lucide.dev/)
- **State Management:** React Context / Zustand / Redux (choose one)
- **Deployment:** Vercel

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/whatbytes-frontend.git
cd whatbytes-frontend

# Install dependencies
npm install

# Run the dev server
npm run dev
