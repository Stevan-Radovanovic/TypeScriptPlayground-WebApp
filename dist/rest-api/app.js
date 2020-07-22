"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("./routes/players"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json());
app.use(players_1.default);
app.use((err, req, res, next) => {
    return res.status(666).json({ message: err.message });
});
app.listen(3000);
