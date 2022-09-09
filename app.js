const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config;

const PORT = process.env.PORT || 1338;
const app = express();
connectDB();

// Templating Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
if (process.env.NODE_ENV === "DEV") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
}

// Routes
app.get("/", (_req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/api/files", require("./routes/files"));
app.use("/api/pages", require("./routes/pages"));

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});