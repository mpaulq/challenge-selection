const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./app/models");
db.sequelize.sync();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method == 'OPTIONS'){
      res.header(
          'Access-Control-Allow-Methods', 
          'PUT, POST, PATCH, DELETE, GET'
      );
      return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API" });
});

require("./app/routes/post.routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
