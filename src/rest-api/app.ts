import express from "express";
import playerRoutes from "./routes/players";
import { json } from "body-parser";
const app = express();

app.use(json());

app.use(playerRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res.status(666).json({ message: err.message });
  }
);

app.listen(3000);
