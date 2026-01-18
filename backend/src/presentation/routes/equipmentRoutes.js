const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { equipmentController } = require('../../config/container');

const router = express.Router();

// Apenas admin pode cadastrar equipamentos
router.post('/equipment', authMiddleware, (req, res) =>
  equipmentController.create(req, res)
);

// Lista pode ser livre ou autenticada (depende da regra)
router.get('/equipment', authMiddleware, (req, res) =>
  equipmentController.list(req, res)
);

module.exports = router;
