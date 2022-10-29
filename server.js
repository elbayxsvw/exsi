
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/*", (request, response) => {
  response.sendFile(__dirname + "/404.html");
});

// open a port with 3000 
const listener = app.listen(`3000`, () => {
    console.log("Your app is listening on port " + listener.address().port);
    }
);


// read all the files in the public folder and render them
app.get("/public/*", (request, response) => {
    response.sendFile(__dirname + request.params[0]);
    }
);
