const Todo = require('../models/todo');

// New Todo
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Index Todos
exports.getAllTodos = async (req, res) => {
  try {
    const getAllTodos = await Todo.find({});
    res.json(getAllTodos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Item Deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update Todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    const updates = Object.keys(req.body);
    updates.forEach((update) => (todo[update] = req.body[update]));
    await todo.save();
    res.status(200).json({ todo, message: `user info is updated` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Specific Todo
exports.getSpecificTodo = async (req, res) => {
  try {
    const getSpecificTodo = await Todo.find({ _id: req.params.id });
    res.json(getSpecificTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
