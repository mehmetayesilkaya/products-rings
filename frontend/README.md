📚 Proje Hakkında
Backend: Ürün verisini products.json dosyasından okur.

Frontend: Ürünleri bir carousel içinde gösterir, renk seçici, yıldız skoru, fiyat formatlama gibi özellikler içerir.


## 🚀 Kurulum ve Çalıştırma

### 1. Backend’i başlat

## 📦 Proje Yapısı

├── product-api # Backend (Express veya benzeri)
│ ├── src/
│ │ └── data/products.json
│ │ └── routes/products.ts
│ ├── index.ts
│ └── package.json
└── frontend # Frontend (Vite + React)
├── public/
│ └── index.html
├── src/
│ ├── App.jsx
│ └── ProductCarousel.jsx
├── package.json
└── vite.config.js

---

## 🚀 Kurulum ve Çalıştırma

### 1. Backend’i başlat

```bash
cd product-api
npm install
npm run dev      # veya `npm start` (script’ine göre)
```

API, http://localhost:4000/products endpoint’inden ürün listesini dönecek.

----

2. Frontend’i başlat
```
cd frontend
npm install
npm run dev
```

Tarayıcıda http://localhost:5173 adresini aç. Ürünler backend’den çekilip sayfada listelenecek.





