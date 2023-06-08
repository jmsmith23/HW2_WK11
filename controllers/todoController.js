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
    res.render('/Index', {
      todo: getAllTodos,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    await req.todo.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Item Deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
