// Express dependency
var express = require("express");

var app = express();

var a;
var b;

  var result;

  app.get("/:operation/:a/:b/", function(req, res) {

    var operation = req.params.operation;
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {

    case "add":
        result = a + b;
      break;
    case "subtract":
          result = a - b;
      break;
    case "multiply":
        result = a * b;
      break;
    case "divide":
      result = a/b;
      break;
    default:
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
console.log("listening " + app.listen(3002));
