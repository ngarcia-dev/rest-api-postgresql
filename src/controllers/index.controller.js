const { Pool } = require("pg");

const config = {
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "apidb",
};

const pool = new Pool(config);

const getUser = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  console.log(response.rows);
  res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
  //res.send('User ID '+req.params.id)
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(response.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const response = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email]
  );
  console.log(response);
  res.json({
    message: "User Added Succesfully",
    body: {
      user: { name, email },
    },
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  console.log(response);
  res.json(`User ${id} deleted successfully`);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const response = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id]
  );
  console.log(response);
  res.json("User Updated successfully");
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
