let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let stations = require("./routes/api/stations");

const PORT = process.env.PORT || 5000;

// Express
let app = express();
// Middleware
app.use(bodyParser.json());
// TODO: Investigate configuring CORS in a robust way
app.use(cors());
// Proxy API routes
app.use("/api/stations", stations);

app.listen(PORT, () =>
  console.log(`[INFO] AeroPhix server listening on port ${PORT}.`)
);
