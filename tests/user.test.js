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
    const response = (await request(app).post('/todos')).setEncoding({
      title: 'Take out trash',
      description: 'Check all garbage',
      completed: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.todo.title).toEqual('Take out trash');
    expect(response.body.todo.description).toEqual('Check all garbage cans');
    expect(response.body.todo.completed).toEqual(Boolean);
    expect(response.body..todo.createdAt).toEqual(Date)
  });
});
