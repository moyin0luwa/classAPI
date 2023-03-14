const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
	res.send( "Server initialized" );
    
});

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
