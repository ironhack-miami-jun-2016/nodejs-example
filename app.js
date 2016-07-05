var mongoose = require("mongoose");
var express = require("express");

mongoose.connect("mongodb://localhost/blah");

var Booking = mongoose.model("Booking", { people: Number, time: Date });


var app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  Booking.find(function (error, results) {
    if (error) {
      throw error;
    }

    response.render("home", { bookings: results });
  });
});

app.get("/bookings/new", function (request, response) {
  response.render("bookings/new");
});

app.post("/bookings", function (request, response) {
  var peeps = Math.floor(5 * Math.random()) + 1;
  var theBooking = new Booking({ people: peeps, time: new Date(2016, 7, 6) });

  theBooking.save(function (err) {
    if (err) {
      throw err;
    } else {
      response.redirect("/");
    }
  });
});

app.listen(3000);

console.log("Listening on port 3000")
