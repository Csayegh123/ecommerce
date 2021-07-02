# 13_ECommerce

## Your Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

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

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Links to Application](#Links)
- [Mock-Up](#Mock-Up)
- [Install](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test](#test)
- [Questions](#questions)

## Links

Below are links to access the deployed video link and repository.

Github Repository: https://github.com/Csayegh123/ecommerce

Deployed Video Link: 

## Mock-Up

The following gif shows the web application's appearance and functionality:

![.](./images/ecommerce.gif)

## Installation

The user will be required to use the dotenv/express/sequelize/mysql2 dependencies. The user will input the following in their command line to install the neccessary packages:

```bash
npm i sequelize
npm i mysql2
npm i express
npm i dotenv
```

![alt text](images/dependencies.png)

## Usage

The user will seed the database by using the pre-seeded files. The files will be seeded by using the following command:

```bash
node seeds/index.js
```

The user will begin the process by invoking the application in NodeJS. The application will be invoked by using the following command:

```bash
node server.js
```

![alt text](images/node.png)

Below is the code for our models that will help structure the database:

![alt text](images/models.png)

![alt text](images/categories.png)

![alt text](images/category2.png)

## Tests

Testing: no testing is required

## Questions

Here is a link to my github for more information: [Github]: https://github.com/csayegh123

You can reach me with any additional questions by email: sayegh.topher@gmail.com
