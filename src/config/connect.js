const mongoose = require("mongoose");
require("dotenv").config();

url = process.env.MONGO_DB_URL;

const connectDB = () => {
	return mongoose.connect(
		url,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		console.log("Connected to Mongo DB Successfully")
	);
};

module.exports = connectDB;
