const express = require("express");
const router = express.Router();
const {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
} = require("../controllers/kendaraanController.js");

/**
 * @swagger
 * /api/kendaraan:
 *   get:
 *     summary: Ambil data kendaraan
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data kendaraan
 */
router.get("/", getAllData);

/**
 * @swagger
 * /api/kendaraan/{id}:
 *   get:
 *     summary: Ambil data kendaraan berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data kendaraan
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Berhasil mendapatkan data kendaraan
 *       404:
 *         description: Data tidak ditemukan
 */
router.get("/:id", getDataById);

/**
 * @swagger
 * /api/kendaraan:
 *   post:
 *     summary: Tambah data kendaraan baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               merk:
 *                 type: string
 *               model:
 *                 type: string
 *               tahun:
 *                 type: integer
 *               cc:
 *                 type: integer
 *               jenis_kendaraan:
 *                 type: string
 *               transmisi:
 *                 type: string
 *               jenis_bensin:
 *                 type: string
 *               kapasitas_tangki_liter:
 *                 type: number
 *               warna:
 *                 type: string
 *               harga:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Data berhasil ditambahkan
 */
router.post("/", createData);

/**
 * @swagger
 * /api/kendaraan/{id}:
 *   put:
 *     summary: Update data kendaraan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data kendaraan
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               merk:
 *                 type: string
 *               model:
 *                 type: string
 *               tahun:
 *                 type: integer
 *               cc:
 *                 type: integer
 *               jenis_kendaraan:
 *                 type: string
 *               transmisi:
 *                 type: string
 *               jenis_bensin:
 *                 type: string
 *               kapasitas_tangki_liter:
 *                 type: number
 *               warna:
 *                 type: string
 *               harga:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Data berhasil diperbarui
 *       404:
 *         description: Data tidak ditemukan
 */
router.put("/:id", updateData);

/**
 * @swagger
 * /api/kendaraan/{id}:
 *   delete:
 *     summary: Hapus data kendaraan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID data kendaraan
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
