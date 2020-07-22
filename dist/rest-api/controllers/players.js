"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.updatePlayer = exports.postPlayer = exports.getPlayers = void 0;
const db_1 = require("../database/db");
const postPlayer = (req, res, next) => {
    const newPlayer = {
        id: Math.random().toString(),
        name: req.body.name,
        position: req.body.position,
        jerseyNumber: req.body.jerseyNumber,
    };
    db_1.database.push(newPlayer);
    res.status(201).json({ message: "Created a new player.", player: newPlayer });
};
exports.postPlayer = postPlayer;
const getPlayers = (req, res, next) => {
    res.status(200).json({ players: db_1.database });
};
exports.getPlayers = getPlayers;
const updatePlayer = (req, res, next) => {
    const id = req.params.id;
    const index = db_1.database.findIndex((value) => value.id === id);
    db_1.database[index] = {
        id: db_1.database[index].id,
        position: db_1.database[index].position,
        name: db_1.database[index].name,
        jerseyNumber: req.body.jerseyNumber
            ? req.body.jerseyNumber
            : db_1.database[index].jerseyNumber,
    };
    res.status(201).json({ newPlayer: db_1.database[index] });
};
exports.updatePlayer = updatePlayer;
const deletePlayer = (req, res, next) => {
    const id = req.params.id;
    const index = db_1.database.findIndex((value) => value.id === id);
    db_1.database.splice(index, 1);
    res.status(201).json({ message: "Deleted a player." });
};
exports.deletePlayer = deletePlayer;
