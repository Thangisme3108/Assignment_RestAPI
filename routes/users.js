var express = require('express');
var router = express.Router();
const {Schema, model, Mongoose} = require("mongoose");
const mongoose = require("mongoose");
// const User = require("./models/User");


router.get('/', function (req, res, next) {
    //req: request: du lieu gui len
    //res: respone: du lieu tra ve cho client
    User.find({}).then((users) => {
        res.render('showInfoUser', {title: 'Danh sách các User', users: users});
    })
});


module.exports = router;
