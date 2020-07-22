import { RequestHandler } from "express";
import { database } from "../database/db";
import Player from "../models/player";

const postPlayer: RequestHandler = (req, res, next) => {
  const newPlayer: Player = {
    id: Math.random().toString(),
    name: req.body.name,
    position: req.body.position,
    jerseyNumber: req.body.jerseyNumber,
  };
  database.push(newPlayer);
  res.status(201).json({ message: "Created a new player.", player: newPlayer });
};

const getPlayers: RequestHandler = (req, res, next) => {
  res.status(200).json({ players: database });
};

const updatePlayer: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const index = database.findIndex((value) => value.id === id);
  database[index] = {
    id: database[index].id,
    position: database[index].position,
    name: database[index].name,
    jerseyNumber: req.body.jerseyNumber,
  };
  res.status(201).json({ newPlayer: database[index] });
};

const deletePlayer: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  database.filter((value) => value.id !== id);
  res.status(201).json({ message: "Deleted a player." });
};

export { getPlayers, postPlayer, updatePlayer, deletePlayer };
