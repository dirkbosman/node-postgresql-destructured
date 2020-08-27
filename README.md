# node-postgresql-destructured

#### [Part 1](https://github.com/dirkbosman/node-postgresql-unstructured) and [Part 2](https://github.com/dirkbosman/node-postgresql-destructured) to use as a boilerplate to set-up a:

- node express server, middleware and apis
- postgresql relational database

# node-SQL-boilerplate

Node SQL sample project

1. Move the order routes to the `./api/orders.js` file. You will need the same imports in the `./api/users.js` routes. When you are done, you can delete the commented order routes in the `server.js`

2. Create `post`, `delete` and `put` routes for orders like it's been done for users.

3. Make sure the order routes are using the error handling middleware by calling the `next` function in every `catch` statement, like it's done for users.
