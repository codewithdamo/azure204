const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { routes } = require('./routes/routes.js'); // Destructuring the 'routes' property

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
