const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//routes
//create a todo
app.post("/todos", async(req, res) => {
  try {
    
    const {description} = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
    
    res.json(newTodo.rows[0]);
    
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos
app.get("/todos", async(req, res) => {
  try {
    
    const allTodos = await pool.query("SELECT * FROM todo");
    
    res.json(allTodos.rows);
    
  } catch {
    console.log(err.message);
  }
});

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
