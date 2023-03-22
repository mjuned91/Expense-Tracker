app.delete("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transToDelete = await pool.query("DELETE FROM transactions WHERE trans_id = $1", [id]);
    console.log("Transaction is deleted.");
  } catch (err) {
    console.log(err);
  };
});