const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const server = app.listen(8080, () => console.log('Is this thing on?'));
const Todo = require('../models/todo');
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  mongoServer.stop();
  server.close();
});

describe('Test the todo endpoints', () => {
  test('It should create a new todo item', async () => {
    const response = await request(app).post('/todos').send({
      title: 'Take out trash',
      description: 'Check all garbage',
      completed: true,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toEqual('Take out trash');
    expect(response.body.description).toEqual('Check all garbage');
    expect(response.body.completed).toEqual(true);
    expect(response.body).toHaveProperty('createdAt');
  });

  test('It should delete a todo', async () => {
    const todo = new Todo({
      title: 'Random to do',
      description: 'complete this chore',
      completed: true,
    });
    await todo.save();
    const response = await request(app).delete(`/todos/${todo.id}`);
    expect(response.body.message).toBe('Item Deleted');
  });

  test('It should update a todo', async () => {
    const todo = new Todo({
      title: 'Clean up after everyone',
      description: 'Chores for days',
      completed: true,
    });
    await todo.save();

    const response = await request(app).put(`/todos/${todo.id}`).send({
      title: 'Clean up after yourself',
      description: 'You are actually the biggest slob',
      completed: true,
    });
    const foundTodo = await Todo.findOne({ _id: todo._id });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(`todo info is updated`);
  });
});
