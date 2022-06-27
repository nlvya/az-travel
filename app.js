const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
//allow files to be accessed within the views folder
app.use("/views", express.static(__dirname + "/views"));

//move routing to a separate file
app.use("/", require("./routes/navigation"));

//define which port for development testing and for deployment
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(
    `The application started on port ${
      server.address().port
    }, http://localhost:${server.address().port}`
  );
});
