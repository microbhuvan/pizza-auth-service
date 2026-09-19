import "reflect-metadata";

import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
const app = express();
import logger from "./config/logger.js";
import { HttpError } from "http-errors";
import authRouter from "./routes/auth.js";

app.get("/", (req, res) => {
  return res.send("welcome to auth server");
});

app.use("/auth", authRouter);

//global error handler if four args
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
