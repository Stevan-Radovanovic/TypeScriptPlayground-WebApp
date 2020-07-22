import express from "express";
import playerRoutes from "./routes/players";

const app = express();

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
