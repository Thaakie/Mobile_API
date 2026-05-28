let data = require("../data/kendaraan.js");

const getAllData = (req, res) => {
  res.json({
    success: true,
    total: data.length,
    data: data,
  });
};

const getDataById = (req, res) => {
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
};

const createData = (req, res) => {
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
};

const updateData = (req, res) => {
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
};

const deleteData = (req, res) => {
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
};

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
};
