import express from 'express';
import cors from 'cors';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from 'dotenv';

const app = express()

dotenv.config()

connectDB()

app.use(cors())

app.use(express.json());
// To log data
//app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/note", noteRoutes);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to NoteMaking app</h1>");
  });

  
  //PORT
  const PORT = process.env.PORT || 8080;
  
  //run listen
  app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
        
    );
  });