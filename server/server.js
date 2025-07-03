import express from "express";
import cors from "cors";
import productRoute from "./routes/productsRoute.js";
import dbconnection from "./db.js";
const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Remove trailing slash
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
