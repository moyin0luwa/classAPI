const express = require("express");
const { json } = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./config/connect");
connectDB();

app.use(json());

app.get("/api", (req, res) => {
	res.status(200).json({ message: "Server initialized" });
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
