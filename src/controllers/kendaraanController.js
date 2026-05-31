let data = require("../data/kendaraan.js");

const getFlattenedData = () => [...data.motor, ...data.mobil];

const findDataById = (id) => {
  const motorIndex = data.motor.findIndex((i) => i.id === id);
  if (motorIndex > -1) {
    return { category: "motor", index: motorIndex, item: data.motor[motorIndex] };
  }

  const mobilIndex = data.mobil.findIndex((i) => i.id === id);
  if (mobilIndex > -1) {
    return { category: "mobil", index: mobilIndex, item: data.mobil[mobilIndex] };
  }

  return null;
};

const getAllData = (req, res) => {
  const flattened = getFlattenedData();
  res.json({
    success: true,
    total: flattened.length,
    total_motor: data.motor.length,
    total_mobil: data.mobil.length,
    data: data,
  });
};

const getDataById = (req, res) => {
  const id = parseInt(req.params.id);
  const result = findDataById(id);

  if (result) {
    res.json({
      success: true,
      data: result.item,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Data tidak ditemukan",
    });
  }
};

const createData = (req, res) => {
  const flattened = getFlattenedData();
  const newId = flattened.length > 0 ? Math.max(...flattened.map((i) => i.id)) + 1 : 1;
  const newItem = {
    id: newId,
    ...req.body,
  };

  const isMotor = String(newItem.jenis_kendaraan || "").toLowerCase() === "motor";
  if (isMotor) {
    data.motor.push(newItem);
  } else {
    data.mobil.push(newItem);
  }

  res.status(201).json({
    success: true,
    data: newItem,
  });
};

const updateData = (req, res) => {
  const id = parseInt(req.params.id);
  const result = findDataById(id);

  if (result) {
    const updatedItem = { ...result.item, ...req.body };
    const isMotor = String(updatedItem.jenis_kendaraan || "").toLowerCase() === "motor";
    const targetCategory = isMotor ? "motor" : "mobil";

    data[result.category].splice(result.index, 1);
    data[targetCategory].push(updatedItem);

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
  const id = parseInt(req.params.id);
  const result = findDataById(id);

  if (result) {
    data[result.category].splice(result.index, 1);
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
