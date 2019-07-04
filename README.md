# Shopping Cart | Full Stack Application
This is a simple application that allows to add items in a shopping cart.

I have built this application to train in developing Full Stack applications and as a challenge.

Users can navigate through a list of seeded products and complete an order after validating the e-mail
## Getting Started
- This app requires you to install MongoDb and Node
- Clone or fork this repository
- You should have a `server/.env` file, with for example the following values:
```
PORT=5000
SESSION_SECRET=anyValue
MONGODB_URI=......

```
## Command lines
- In the command line for the `client` folder

```sh
$ npm init
$ npm install
```
- In the command line for the `server` folder

```sh
$ npm init
$ npm install
```
- Now we have to seed our Database, in the `server`folder
```sh
$ node bin/seeds.js
```

- Use the following command lines to run the server locally:
```sh
$ npm run dev
```
and to run the client locally:
```sh
$ npm start
```
- After both the command lines are used go to the [url] (http://localhost:3000/)

## Stack
- MERN boilerplate
- Mongo DB and Mongoose for database and database operations
- Reactstrap for styling

## Contributions
Are always welcome please submit a well commented pull request with changes or challenges.

<img src='/screenshot.png'>