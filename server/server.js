import express from "express";
import cors from "cors";
import productRoute from "./routes/productsRoute.js";
import dbconnection from "./db.js";
const app = express();

const corsOptions = {
  origin: "https://super-duper-capybara-9vxwrwqrj4p2p79g-5173.app.github.dev/", // Replace with your frontend URL
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
