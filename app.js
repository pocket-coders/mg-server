var express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(process.env.PORT || 4000, function () {
    console.log("listening to port 4000");
});
