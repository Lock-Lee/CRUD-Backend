"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUser = exports.delteUser = exports.updateUser = exports.createUser = void 0;
const connectDB_1 = __importDefault(require("../config/connectDB"));
const createUser = (req, res) => {
    const { username, email, password } = req.body;
    let sql = `INSERT INTO user (username,email,password) VALUES
    ('${username}','${email}','${password}');
    `;
    connectDB_1.default.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required: false
            });
        }
        else {
            res.status(201).json({
                data: [],
                message: "Success",
                required: true
            });
        }
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id, username, email, password } = req.body;
    let sql = `UPDATE user SET
     username = '${username}',
     email = '${email}',
     password = '${password}'
     WHERE id = '${id}'   
     `;
    connectDB_1.default.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required: false
            });
        }
        else {
            res.status(201).json({
                data: [],
                message: "Success",
                required: true
            });
        }
    });
};
exports.updateUser = updateUser;
const delteUser = (req, res) => {
    const { id } = req.body;
    let sql = `DELETE FROM user  WHERE id = ${id} `;
    connectDB_1.default.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required: false
            });
        }
        else {
            res.status(201).json({
                data: [],
                message: "Success",
                required: true
            });
        }
    });
};
exports.delteUser = delteUser;
const getUser = (req, res) => {
    const { id } = req.params;
    let sql = `SELECT * FROM user WHERE id = '${id}'`;
    connectDB_1.default.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required: false
            });
        }
        else {
            res.status(200).json({
                data: rows,
                message: "Success",
                required: true
            });
        }
    });
};
exports.getUser = getUser;
const getAllUsers = (req, res) => {
    let sql = `SELECT * FROM user `;
    connectDB_1.default.all(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                data: [],
                message: err.message,
                required: false
            });
        }
        else {
            res.status(200).json({
                data: rows,
                message: "Success",
                required: true
            });
        }
    });
};
exports.getAllUsers = getAllUsers;
