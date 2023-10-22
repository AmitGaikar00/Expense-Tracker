// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import { errorResponserHandler } from "./middleware/errorHandler";

// routes
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

//----------
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("server is running... ");
});

app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

// error handler
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
