# bank-operation

A simple banking operation

```
BANKING OPERATION - is a simple app that allows user creates an account based on some given account types (Savings, Current,..), retrieve information on his account based on a generated account number and also view olist of all created account
```

## Code structure explanation

This project work contains the follwing folders.

- config: A folder that contains a db file that contains functions used to establish connection to our mongoDB database
- middleware: user notFound handler
- model: Bank models
- service: bank route
- middleware: validation route
- controller: bank controller
- model: bank model
- util: functionDispatcher

#### Routes ⚡

| Routes               | HTTP Methods | Description                    |
| :------------------- | :----------- | :----------------------------- |
| localhost:5000/api/user/register   | POST         | User registration route        |
| localhost:5000/api/userbankdetails | GET          | Extract a user account details |
| localhost:5000/api/bankdetails/    | GET          | Get all user account details   |


```
Project is created with:
```

<p>
<img src="https://img.shields.io/badge/-MongoDB%20-1AA121?style=for-the-badge&logo=mongodb&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express"> 
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
</p>


- Node
- Express
- Mongoose
- MongoDB Atlas

### Setup

To run this project locally, clone repo and add an `.env` file in the root:

```
MONGODB_URI='mongodb+srv://username:password@cluster0.eetsx.mongodb.net/database_name'
```

Then execute in command prompt:

```
$ cd bankingoperation
$ npm install
$ node app.js
```
