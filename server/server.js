var express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

var routes = require('./api/routes/employeeRoutes');
routes(app);

app.listen(port);

console.log('REST API server started on port: ' + port);
