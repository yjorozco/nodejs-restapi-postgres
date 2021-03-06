"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var router = express_1.Router();
router.get('/users', index_controller_1.getUsers);
router.get('/users/:id', index_controller_1.getUserById);
router.post('/users', index_controller_1.createUser);
router.put('/users/:id', index_controller_1.updateUser);
router.delete('/users/:id', index_controller_1.deleteUser);
exports.default = router;
