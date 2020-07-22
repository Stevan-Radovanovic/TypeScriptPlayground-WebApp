import Player from "../models/player";

let database: Player[] = [
  {
    id: Math.random().toString(),
    jerseyNumber: 7,
    name: "Raheem Sterling",
    position: "WF",
  },
  {
    id: Math.random().toString(),
    jerseyNumber: 42,
    name: "Yaya Toure",
    position: "CM",
  },
  {
    id: Math.random().toString(),
    jerseyNumber: 21,
    name: "David Silva",
    position: "CAM",
  },
  {
    id: Math.random().toString(),
    jerseyNumber: 47,
    name: "Phil Foden",
    position: "AM",
  },
];

export { database };
