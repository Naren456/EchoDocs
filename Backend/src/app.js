import express from "express";

import cors from "cors";

import uploadRoutes
from "./routes/upload.route.js";

import chatRoutes from "./routes/chat.route.js";
import fs from "fs";

const app = express();

// Ensure uploads directory exists (Mandatory for Render/Railway)
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(cors());

app.use(express.json());

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/chat",
  chatRoutes
);

export default app;