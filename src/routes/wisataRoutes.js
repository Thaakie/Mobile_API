const express = require("express");
const router = express.Router();
const {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
} = require("../controllers/wisataController.js");

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Ambil data wisata
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data wisata
 */
router.get("/", getAllData);

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
router.get("/:id", getDataById);

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
router.post("/", createData);

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
router.put("/:id", updateData);

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
router.delete("/:id", deleteData);

module.exports = router;
