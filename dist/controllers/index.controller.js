"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
var database_1 = require("../database");
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_1.pool.query('SELECT * FROM users')];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, res.status(500).json('Internal Server Error')];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                console.log(id);
                return [4 /*yield*/, database_1.pool.query('SELECT * FROM users WHERE id = $1', [id])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
        }
    });
}); };
exports.getUserById = getUserById;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, response, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, req.body];
            case 1:
                _a = _b.sent(), name = _a.name, email = _a.email;
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, database_1.pool.query('INSERT INTO users(name,email) VALUES ($1,$2)', [name, email])];
            case 3:
                response = _b.sent();
                return [2 /*return*/, res.status(200).json({ message: 'User created Successfully', body: { user: { name: name, email: email } } })];
            case 4:
                e_2 = _b.sent();
                console.log(e_2);
                return [2 /*return*/, res.status(500).json('Internal Server Error')];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, email, response, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, req.body];
            case 1:
                _a = _b.sent(), name_1 = _a.name, email = _a.email;
                return [4 /*yield*/, database_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name_1, email, id])];
            case 2:
                response = _b.sent();
                return [2 /*return*/, res.status(200).json({ message: 'User updated Successfully', body: { user: { id: id, name: name_1, email: email } } })];
            case 3:
                e_3 = _b.sent();
                console.log(e_3);
                return [2 /*return*/, res.status(500).json('Internal Server Error')];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = parseInt(req.params.id);
                console.log(id);
                return [4 /*yield*/, database_1.pool.query('DELETE FROM users WHERE id = $1', [id])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json('User ${id} deleted Successfully')];
        }
    });
}); };
exports.deleteUser = deleteUser;
