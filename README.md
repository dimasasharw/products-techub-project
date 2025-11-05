# Essay Answers

A. Pemahaman saya mengenai Props dengan TypeScript

Props di React berfungsi untuk mengirim data dari satu komponen ke komponen lainnya. Dengan TypeScript, kita bisa menentukan tipe data dari props agar komponen lebih aman dan terkontrol. Misalnya, saat membuat komponen ProductCard, saya bisa menentukan props seperti berikut:

```bash
type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};
```

Dengan cara ini, TypeScript akan membantu memastikan bahwa data yang dikirim ke komponen selalu sesuai tipe yang sudah didefinisikan. Jadi kesalahan bisa terdeteksi lebih awal saat pengembangan, bukan di runtime.
pros-nya menjamin keamanan atau kecocokan type data serta menghindari error karena type data, cons-nya perlu setup atau definisi types yang termasuk effort lebih ketika akan mengirim/menerima data

B. Pemahaman saya mengenai TanStack

TanStack adalah library untuk mengelola data asynchronous di React, terutama saat mengambil data dari API.
TanStack membantu menangani proses seperti fetching, caching, refetching, loading state, dan error handling secara otomatis.
Dengan begitu, kita tidak perlu lagi menulis banyak useEffect atau state manual untuk setiap request API.
Selain itu, data yang sudah di-fetch akan di-cache, jadi performa aplikasi jadi lebih cepat dan efisien.
Dalam konteks project ini, saya menggunakan useQuery dari TanStack untuk mengambil data product, dan detail product agar manajemen datanya lebih terstruktur dan mudah di-maintain.
pros-nya membantu interaksi dengan backend yang mudah, rapih dan otomatis dengan hook, cons-nya perlu setup lebih meski tidak serumit redux

# 🛍️ Techub Products

A simple React + TypeScript web app that displays a list of beauty product brands, their products, and product details.  
This project was created as part of a technical test for **K-style tech**, focusing on clean code, API integration, and modern frontend practices.

---

## 🚀 Features

- **Brand list** with pagination
- **Product list** filtered by brand
- **Product detail page**
- **data loading** and **data caching** using TanStack Query
- Built with **React + Vite + TypeScript + Tailwind CSS + Flowbite UI**

---

## 🧠 Tech Stack

| Category      | Tools                                                                              |
| ------------- | ---------------------------------------------------------------------------------- |
| Framework     | [React 18](https://react.dev) + [Vite](https://vitejs.dev)                         |
| Language      | [TypeScript](https://www.typescriptlang.org/)                                      |
| Styling       | [Tailwind CSS](https://tailwindcss.com/) + [Flowbite](https://flowbite-react.com/) |
| Data Fetching | [TanStack Query (React Query)](https://tanstack.com/query/latest)                  |
| HTTP Client   | [Axios](https://axios-http.com/)                                                   |
| API Source    | [DummyJSON API](https://dummyjson.com/products)                                    |
| Routing       | [React Router v6](https://reactrouter.com/en/main)                                 |

---

## 📦 Installation & Setup

### Clone Repository

```bash
git clone https://github.com/dimasasharw/products-techub-project.git
cd products-techub-project
```

### Install Project

```bash
npm install
```

### Run Project

```bash
npm run dev
```

### Open on Browser

```bash
http://localhost:5173
```

---

## 🧭 Routing

| Path      | Component           | Description         |
| --------- | ------------------- | ------------------- |
| '/'       | [ProductListPage]   | Show Product List   |
| '/detail' | [ProductDetailPage] | Show Product Detail |

---
