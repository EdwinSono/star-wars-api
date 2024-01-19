import express, { Request, Response, NextFunction, Router } from "express";
import { people } from "./routes";

const api = express();

api.use(express.json());
api.use("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send('API REST: Star wars');
});
api.use("/people", people);

api.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

api.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send();
});

export { api };
