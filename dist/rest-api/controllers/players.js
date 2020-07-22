"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.updatePlayer = exports.postPlayer = exports.getPlayers = void 0;
const db_1 = __importDefault(require("../database/db"));
const getPlayers = (req, res, next) => {
    const newPlayer = {
        id: Math.random().toString(),
        name: req.body.name,
        position: req.body.position,
        jerseyNumber: req.body.jerseyNumber,
    };
    db_1.default.push(newPlayer);
    res.status(201).json({ message: "Created a new player.", player: newPlayer });
};
exports.getPlayers = getPlayers;
const postPlayer = (req, res, next) => { };
exports.postPlayer = postPlayer;
const updatePlayer = (req, res, next) => { };
exports.updatePlayer = updatePlayer;
const deletePlayer = (req, res, next) => { };
exports.deletePlayer = deletePlayer;
