import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

const PORT = 4000;

const handleListening = () =>
  console.log(`🤩 Listening on: http://localhost:${PORT}`);


app.listen(PORT, handleListening);