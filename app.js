import express, { json } from "express";
import userRoutes from "./src/routes/userRoutes.js";
const app = express();

app.use(json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/users", userRoutes);

export default app;
