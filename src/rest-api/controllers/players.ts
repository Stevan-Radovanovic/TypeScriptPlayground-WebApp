import { RequestHandler } from "express";
import DataBase from "../database/db";
import Player from "../models/player";

const getPlayers: RequestHandler = (req, res, next) => {
  const newPlayer: Player = {
    id: Math.random().toString(),
    name: req.body.name,
    position: req.body.position,
    jerseyNumber: req.body.jerseyNumber,
  };
  DataBase.push(newPlayer);
  res.status(201).json({ message: "Created a new player.", player: newPlayer });
};

const postPlayer: RequestHandler = (req, res, next) => {};

const updatePlayer: RequestHandler = (req, res, next) => {};

const deletePlayer: RequestHandler = (req, res, next) => {};

export { getPlayers, postPlayer, updatePlayer, deletePlayer };
