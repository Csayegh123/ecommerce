

TESTING BACKEND WITH INSONMIA VIDEO: https://drive.google.com/file/d/12LQoZhvNUbV9Eg9u2Jg4Ytmin4W4_n-h/view?usp=sharing
PICTURE OF tabs in Mysql workbench: https://drive.google.com/file/d/1MC60rwVG8IfKqYFdFWhW7EmYmXR_biZI/view?usp=sharing

# 13 Object-Relational Mapping: E-Commerce Back End

## Description

Build the back end for an e-commerce site by modifying starter code. You’ll configure a working **Express.js** API to use **Sequelize** to interact with a **MySQL** database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

The application features the use of **Database Models** to define the logical structure of the database using **Sequelize** and **MySQL**.

Four models are shipped with this version of the application: **Categories**, **Products**, **Tags**, and **ProductTag**. Each of these models have data attributes that follow common constraints, validations, and rules found in a production environment, including, primary keys, referential integrity, and not null constraints, and auto increment and default rules.

Referential integrity is managed through the use of **Associations** in **Sequelize**. These associations are converted and executed against the database dialect when the application starts. The following associations are featured with the application:

- Product to Category - A Product belongs to a single Category, but multiple Products can have the same Category. (One to many relationship.)
- Product to Tag - A Product can have more than one Tag, and a Tag can have more than one Product. This relationship is modeled through a **junction** model, ProductTag, which holds the primary key for Product and Tag. (Many to many relationship.)

RESTful API routes are used to handle the CRUD operations for the models. These routes feature the logic to **GET**, **POST**, **PUT**, and **DELETE** Categories, Products, and Tags, including ProductTags, using **Sequelize** and **Express**.

An important feature of the application is that it is not only able to perform operations on the direct models, but also on the related ones; for example, the POST method on the Product model is used to insert a new product along with its Tag records by passing a JSON object representing an abstraction of the associated models.

## Installation

This application requires [Node.js](https://nodejs.org/en/) Runtime Library, and [Express.js](https://www.npmjs.com/package/express), [Sequelize](https://www.npmjs.com/package/sequelize), [DotEnv](https://www.npmjs.com/package/dotenv), and [MySQL2](https://www.npmjs.com/package/mysql2) libraries.

A JSON file containing these dependencies is included with this project. To set up the development environment for the application, simply run the following command:

```bash
npm install
```

Alternatively, you can run the following commands in any order:

```bash
npm i express
npm i sequelize
npm i dotenv
npm i mysql2
```

Next, review the database connection parameters contained in the **.env** file and adjust them appropriately. A video demonstrating the structure of this file is provided 

Using MySQL console, or a tool like MySQL Workbench, run the **schema.sql** script to create the **ecommerce_db** database; the file can be located in the following location:

```bash
db/schema.sql
```



Finally, the following command must be run to seed the database with sample data:

```bash
npm run seed
```

Or,

```bash
node seeds/index.js
```



Once the database is created and seeded with sample data, run the following command to start the application:

```bash
node server.js
```



## Usage

The application has been coded to perform CRUD operations against a live database using the most common HTTP methods for REST APIs: _GET_, _POST_, _PUT_, and _DELETE_. Therefore, make sure to follow the [Installation](#installation) instructions above if you want to test the application in your development environment.

As stated before, the application only includes _backend_ features; so, to test these features in real time, you will need to use any tool for API testing similar to **Insomnia Core**.

Examples of how to use the application are provided in the following videos:



## License

This project is licensed under The MIT License. Refer to https://opensource.org/licenses/MIT for more information of what you can and cannot do with this project. See contact information below if you have questions, comments, or suggestions for the project.

## Contributing Guidelines

Want to contribute to this project? You may clone or fork the project in GitHub. Note the licesing information referred in this file.

## Contact Information

For questions, comments, or suggestions, please contact me by E-Mail:

sayegh.topher@gmail.com
