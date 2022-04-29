const express = require('express');
const app = express();

const cors = require('cors');

const connectToDB = require('./db');
connectToDB();

const Todo = require('./model/Todo');

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  console.log(todos);
  res.status(200).json(todos);
});

app.post('/todo/new', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  await todo.save();
  console.log(todo);
  res.status(201).json(todo);
});

app.put('/todo/complete/:complete_id', async (req, res) => {
  const todo = await Todo.findById(req.params.complete_id);
  todo.complete = !todo.complete;
  await todo.save();
  res.status(200).json(todo);
});

app.delete('/todo/delete/:del_id', async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.del_id);
  console.log(result);
  res.status(200).json(result);
});

//-----------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server is running on Port:', PORT));
