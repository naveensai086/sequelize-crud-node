var express = require("express");
var userRouter = require("./routes/userRouter");

var app = express();

//app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/userapi", userRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500).send("wrong api ");
// });

app.listen(3002, () => {
  console.log("server listening on 3002");
});

module.exports = app;
