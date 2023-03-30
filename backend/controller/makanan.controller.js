const Model = require("../models/makanan.model");

const showMakanan = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const showMakananById = async (req, res) => {
  try {
    const data = await Model.findOne({ _id: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMakanan = async (req, res) => {
  const data = new Model({
    name: req.body.name,
    origin: req.body.origin,
    description: req.body.description,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMakanan = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMakanan = async (req, res) => {
  try {
    const data = await Model.deleteOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  showMakanan,
  showMakananById,
  createMakanan,
  updateMakanan,
  deleteMakanan,
};
