app.get("/transactions", async (req, res) => {
  try {
    const trans = await pool.query("SELECT * FROM transaction");
    res.json(trans.rows);
  } catch (err) {
    console.log(err);
  };
});