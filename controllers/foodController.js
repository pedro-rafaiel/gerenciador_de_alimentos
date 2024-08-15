const Food = require("../models/Food");

// Lista os alimentos
const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods.map(food => ({
      id: food._id,
      name: food.name,
      category: food.category,
      quantity: food.quantity,
      expirationDate: food.expirationDate,
      price: food.price
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Busca um alimento específico pelo ID
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: "Alimento não encontrado" });
    }
    res.json({
      id: food._id,
      name: food.name,
      category: food.category,
      quantity: food.quantity,
      expirationDate: food.expirationDate,
      price: food.price
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adiciona um novo alimento
const createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json({
      id: food._id,
      name: food.name,
      category: food.category,
      quantity: food.quantity,
      expirationDate: food.expirationDate,
      price: food.price
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualiza um alimento que já existe
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndUpdate(id, req.body, { new: true });
    if (!food) {
      return res.status(404).json({ message: "Alimento não encontrado" });
    }
    res.json({
      id: food._id,
      name: food.name,
      category: food.category,
      quantity: food.quantity,
      expirationDate: food.expirationDate,
      price: food.price
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Exclui um alimento
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findByIdAndDelete(id);
    if (!food) {
      return res.status(404).json({ message: "Alimento não encontrado" });
    }
    res.json({ message: "Alimento excluído com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood
};
