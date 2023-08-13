import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error.js";

//import routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use('/api', userRoutes);
//error middleware
app.use(errorHandler);

//database connection
const startServer = async () => {
  try {
    //connect to database..
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Database connected");
      });

    app.listen(9000, () => {
      console.log("server is listening at port no. 9000");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
