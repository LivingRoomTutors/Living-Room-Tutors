const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get("/", (req, res) => {
  const query = `SELECT * FROM matches
  JOIN tutors ON matches.tutor_id = tutors.id
  JOIN tutees ON matches.tutee_id = tutees.id
  ORDER BY match_timestamp ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;