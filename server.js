const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wisata API",
      version: "1.0.0",
      description: "API wisata Indonesia",
    },
    servers: [
      {
        url: "https://mobile-api-beryl.vercel.app",
        description: "Vercel Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
  },
  apis: ["./server.js"],
};

const specs = swaggerJsdoc(options);

app.get("/api-docs/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, { swaggerUrl: "/api-docs/swagger.json" }));

app.get("/", (req, res) => {
  res.send("YO WISH THIS DEVELOPER CAN MAKE A BETTER API THAN THIS HAHAHAHA");
});

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Ambil data wisata
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data wisata
 */

let data = [
  {
    id: 1,
    nama: "Pantai Kuta",
    kategori: "Pantai",
    kota: "Badung",
    provinsi: "Bali",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    nama: "Candi Borobudur",
    kategori: "Budaya",
    kota: "Magelang",
    provinsi: "Jawa Tengah",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    nama: "Danau Toba",
    kategori: "Danau",
    kota: "Toba",
    provinsi: "Sumatera Utara",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    nama: "Raja Ampat",
    kategori: "Laut",
    kota: "Waisai",
    provinsi: "Papua Barat",
    rating: 5.0,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    nama: "Gunung Bromo",
    kategori: "Gunung",
    kota: "Probolinggo",
    provinsi: "Jawa Timur",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    nama: "Kawah Ijen",
    kategori: "Gunung",
    kota: "Banyuwangi",
    provinsi: "Jawa Timur",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    nama: "Pantai Parangtritis",
    kategori: "Pantai",
    kota: "Bantul",
    provinsi: "DI Yogyakarta",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    nama: "Taman Mini Indonesia Indah",
    kategori: "Taman",
    kota: "Jakarta Timur",
    provinsi: "DKI Jakarta",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    nama: "Monas",
    kategori: "Monumen",
    kota: "Jakarta Pusat",
    provinsi: "DKI Jakarta",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    nama: "Pantai Pink",
    kategori: "Pantai",
    kota: "Lombok",
    provinsi: "NTB",
    rating: 4.8,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    nama: "Pulau Komodo",
    kategori: "Pulau",
    kota: "Labuan Bajo",
    provinsi: "NTT",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    nama: "Labuan Bajo",
    kategori: "Laut",
    kota: "Manggarai Barat",
    provinsi: "NTT",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    nama: "Malioboro",
    kategori: "Wisata Kota",
    kota: "Yogyakarta",
    provinsi: "DI Yogyakarta",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    nama: "Keraton Yogyakarta",
    kategori: "Budaya",
    kota: "Yogyakarta",
    provinsi: "DI Yogyakarta",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    nama: "Tangkuban Perahu",
    kategori: "Gunung",
    kota: "Bandung",
    provinsi: "Jawa Barat",
    rating: 4.6,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    nama: "Kebun Raya Bogor",
    kategori: "Taman",
    kota: "Bogor",
    provinsi: "Jawa Barat",
    rating: 4.7,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    nama: "Pantai Pangandaran",
    kategori: "Pantai",
    kota: "Pangandaran",
    provinsi: "Jawa Barat",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    nama: "Bunaken",
    kategori: "Laut",
    kota: "Manado",
    provinsi: "Sulawesi Utara",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    nama: "Wakatobi",
    kategori: "Laut",
    kota: "Wangi-Wangi",
    provinsi: "Sulawesi Tenggara",
    rating: 4.9,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    nama: "Pantai Losari",
    kategori: "Pantai",
    kota: "Makassar",
    provinsi: "Sulawesi Selatan",
    rating: 4.5,
    gambar: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

app.get("/api/data", (req, res) => {
  res.json({
    success: true,
    total: data.length,
    data: data,
  });
});

/**
 * @swagger
 * /api/data/{id}:
 *   get:
 *     summary: Ambil data wisata berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data wisata
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data wisata
 *       404:
 *         description: Data tidak ditemukan
 */
app.get("/api/data/:id", (req, res) => {
  const item = data.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.json({
      success: true,
      data: item,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
    });
  }
});

/**
 * @swagger
 * /api/data:
 *   post:
 *     summary: Tambah data wisata baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               kategori:
 *                 type: string
 *               kota:
 *                 type: string
 *               provinsi:
 *                 type: string
 *               rating:
 *                 type: number
 *               gambar:
 *                 type: string
 *     responses:
 *       201:
 *         description: Data berhasil ditambahkan
 */
app.post("/api/data", (req, res) => {
  const newId = data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1;
  const newItem = {
    id: newId,
    ...req.body,
  };
  data.push(newItem);
  res.status(201).json({
    success: true,
    data: newItem,
  });
});

/**
 * @swagger
 * /api/data/{id}:
 *   put:
 *     summary: Update data wisata
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data wisata
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               kategori:
 *                 type: string
 *               kota:
 *                 type: string
 *               provinsi:
 *                 type: string
 *               rating:
 *                 type: number
 *               gambar:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data berhasil diperbarui
 *       404:
 *         description: Data tidak ditemukan
 */
app.put("/api/data/:id", (req, res) => {
  const itemIndex = data.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex > -1) {
    const updatedItem = { ...data[itemIndex], ...req.body };
    data[itemIndex] = updatedItem;
    res.json({
      success: true,
      data: updatedItem,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
    });
  }
});

/**
 * @swagger
 * /api/data/{id}:
 *   delete:
 *     summary: Hapus data wisata
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data wisata
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data berhasil dihapus
 *       404:
 *         description: Data tidak ditemukan
 */
app.delete("/api/data/:id", (req, res) => {
  const itemIndex = data.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex > -1) {
    data.splice(itemIndex, 1);
    res.json({
      success: true,
      message: "Data berhasil dihapus",
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
    });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
