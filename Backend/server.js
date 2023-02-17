const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./settings/routes");
routes(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
