// async and await since interacting with external PostgresSQL db
app.post("/transactions", async (req, res) => {
  try{
    const { item, price, record_time } = req.body;
    // To interact with db
    const newTrans = await pool.query(
      "INSERT INTO transactions (item, price, record_time) VALUES ($1, $2, $3) RETURNING *", [item, price, record_time]
    );
    // To display the results
    res.json(newTrans.rows[0]);
  } catch (err) {
    console.log(err);
  };
});