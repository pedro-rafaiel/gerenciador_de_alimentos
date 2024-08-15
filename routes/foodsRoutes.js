const express = require('express');
const router = express.Router();
const {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood
} = require("../controllers/foodController");

// Rota para listar os alimentos
router.get('/', getAllFoods);

// Rota para buscar um alimento específico pelo ID
router.get('/:id', getFoodById);

// Rota para adicionar novo alimento
router.post('/', createFood);

// Rota para atualizar alimento existente
router.put('/:id', updateFood);

// Rota para excluir um alimento
router.delete('/:id', deleteFood);

module.exports = router;
