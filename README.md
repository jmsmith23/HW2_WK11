# To Do Api - Week 11

## To Do App Design

My to do (todo) app was designed using RESTful practices, the MVC model and utilizes Node.js, MongoDB, Mongoose, Express, Morgan. It was tested with Supertest, Jest and Artillery and uses mongodb memory server in it's test design.

## How To Run

The todo app can be run by using the code in tandem with Postman. Using Postman, you can access the various routes by connecting to localhost:3000/todos. Be sure the server is running by typing "npm run dev" in the terminal. The design of the app allows you to create a new todo item, delete an item, update the information of an item, recall a specific item by it's unique ID number, and/or recall a list of all of the items created. To create an item, using Postman, set the option to "Post" and be sure to select the option below the bar to "body" and also have the text set to JSON from the dropdown menu located all the way to the right. In the body you can create a new todo item by writing a title ("title": "Write README",) and a description ("description: "Write markdown for completed project"). When your todo item is complete press the send button and you will see your item created in the box at the bottom of the screen. You will notice a unique ID has been attached to your item as well as a field called "Completed" which defaults to false and also a time stamp of when the item was created. To update the completion status (or any information of the task) set the option to "Put", paste the items ID into the URL bar after the '/todos/', update any info by typing the updated info in the body and press send to update. You will see the item with the updated info in the box at the bottom of the screen. To recall a list of all of the todo items, simply be sure to not have an ID in the url, set the option to "GET" and press send. The app will return a list of all of your todo items. To recall a specific item perform the same actions as recalling all items with the exception of pasting the items ID number in the URL after '/todos/'. To delete an item, make sure the items ID is in the URL, select the "DELETE" option and press send. The item will be removed from your list.

## How To Test

There are two ways that have been implemented to test this api. The first test is unit testing using supertest and jest. To run a unit test simply type the command "npm run test" in the terminal. This will run through and test each of the five routes attributed to the api. The results will be printed in the terminal. Refer to the "todo.test.js" file to see how the tests were coded and what they expect to pass the tests. The second test is a load test using artillery. To run this test, it's advised to have two terminals open so you can run the server on one and perform the test on the other. In one terminal, start the server by typing "npm run dev". You'll know the server is running when you see the confirmation message in the terminal. In the second terminal, start the artillery test by typing "npm run load". The test will run for 60 seconds and produce the results in the terminal when it is completed.

## Load Testing Results

My artillery test results came back passing. I was testing at 20 hits per second for 60 seconds, testing both get and post results simultaneously and received 2400 (200) codes as a result. This indicates to me that all tests passed and the application is capable of handling an acceptable amount of traffic without any kind of problems arising.

## Routes

| **HTTP Method** | **End Point** |           **Action** |
| :-------------- | :-----------: | -------------------: |
| POST            |    /todos     |       creates a todo |
| GET             |    /todos     |       list all todos |
| GET             |  /todos/:id   | list a specific todo |
| PUT             |  /todos/:id   |        update a todo |
| DELETE          |  /todos/:id   |   delete a todo item |

## Todo List In Postman

Create a todo:
![Imgur](https://i.imgur.com/1ajLs4U.png)/

List All Todos:
![Imgur](https://i.imgur.com/WLqKUG4.png)/

List Specific Todo:
![Imgur](https://i.imgur.com/TcyssBv.png)/

Update Todo:
![Imgur](https://i.imgur.com/r8e9EXU.png)/

Delete Todo:
![Imgur](https://i.imgur.com/fmSwIqf.png)
