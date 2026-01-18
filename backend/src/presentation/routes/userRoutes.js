const express = require('express');
const { userController } = require('../../config/container');

const router = express.Router();

router.post('/users', (req, res) => userController.create(req, res));
router.post('/auth/login', (req, res) => userController.authenticate(req, res));
router.get('/users/:id', (req, res) => userController.findById(req, res));

module.exports = router;
