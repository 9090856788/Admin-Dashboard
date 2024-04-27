import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

import generalRoutes from "./routes/general";
import clientRoutes from "./routes/client";
import salesRoutes from "./routes/sales";
import managementRoutes from "./routes/management";


// CONFIGURATION THE APPLICATION
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));

// ROUTES

app.use("/", generalRoutes);
app.use("/", clientRoutes);
app.use("/", salesRoutes);
app.use("/", managementRoutes);

