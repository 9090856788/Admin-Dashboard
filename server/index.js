const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

const generalRoutes = require("./routes/general");
const clientRoutes = require("./routes/client");
const salesRoutes = require("./routes/sales");
const managementRoutes = require ("./routes/management");

const PORT = 3000;
const app = express();
dotenv.config();

// MongoDB Connection

const MONGODB_URL = `mongodb+srv://Kanhu143:Kanhu143@admin-dashboard.lpbkre3.mongodb.net/?retryWrites=true&w=majority&appName=Admin-Dashboard`;

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("MongDB Database connected Successfully ): ")
}).catch((err) => {
    console.log(err);
});

// Configuration

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));

// app.use("/general", generalRoutes);
// app.use("/client", clientRoutes);
// app.use("/sales", salesRoutes);
// app.use("/management", managementRoutes);

app.listen(PORT, (() => {
    console.log(`Server running on the PORT ${PORT} ): `);
}))