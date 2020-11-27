require("dotenv").config();
let axios = require("axios");
let express = require("express");

const AVWX_API_URL = process.env.AVWX_API_URL;
const AVWX_API_TOKEN = process.env.AVWX_API_TOKEN;

let router = express.Router();

// Get station (by ICAO)
router.get("/:icao", async (req, res) => {
  console.log(`[INFO] ${req.ip} => ${req.originalUrl}`);

  let headers = {
    Authorization: AVWX_API_TOKEN,
    "Content-Type": "application/json",
  };
  
  try {
    let station = await axios.get(
      `${AVWX_API_URL}/station/${req.params.icao}?format=json`,
      {
        headers,
      }
    );

    console.log(`[INFO] 200 OK.`);
    res.status(200).send(station.data);
  } catch (error) {
    console.error("[ERROR] Get station by ICAO failed. See error below.");
    console.debug(error);

    res.status(500);

    if (error.response) {
      console.error(`[ERROR] ${error.response.data}`);
      console.error(`[ERROR] Status: ${error.response.status}`);
      res.send(error.response.data);
    } else {
      res.send(
        "An internal server occurred while trying to retrieve station info."
      );
    }
  }
});

module.exports = router;
