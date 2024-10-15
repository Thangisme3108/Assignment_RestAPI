var express = require('express');
var router = express.Router();

const {connect, Schema, model, Mongoose} = require('mongoose');
const {log} = require("debug");
const mongoose = require("mongoose");
//ket noi mongoose db
const mongoURI = 'mongodb+srv://thang02:88KexfMrRqaoZHDZ@cluster0.rcsp6.mongodb.net/';
connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Kết nối MongoDB thành công!")
}).catch((err => {
    console.log("Kết nối MongoDB thất bại", err);
}));

/* GET home page. */
router.get('/', function (req, res, next) {
    ComTam.find({}).then((comtams) => {
        res.render('index', {title: 'Danh sách các cơm tấm', comtams: comtams});
    })
});

    module.exports = router;

    const ComTamSchema = new Schema({
        tenMon: String,
        giaTien: Number,
        // soLuong: Number,
    })

    const ComTam = mongoose.model("ComTam", ComTamSchema);

    router.post('/chonComTam', function (req, res, next) {
        const tenMon = req.body.tenMon;
        const giaTien = req.body.giaTien;
        // const soLuong = req.body.soLuong;
        const newComTam = new ComTam({
            tenMon: tenMon,
            giaTien: giaTien,
            // soLuong: soLuong,
        })
        newComTam.save().then(() => {
            res.send('Thêm thành công')
        }).catch((error => {
            res.send(error);
        }))
    })

    router.get('/them', function (req, res, next) {
        res.render('chonComTam')
    })


    router.get('/DangNhap', function (req, res) {
        res.render('dangNhap', {title: 'Đăng nhập'});
    })

    const userSchema = new mongoose.Schema({
        email: String,
        name: String,
        password: String,
    })
    const User = mongoose.model('User', userSchema);
    router.post('/DangNhap', function (req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        const newUser = new User({
            email: email,
            name: name,
            password: password
        })
        newUser.save().then(() => {
            res.send("Đăng ký thành công");
        }).catch((error => {
            res.send(error)
        }))
    })
    router.get('/ChonComTam', function (req, res) {
        res.render('chonComTam', {title: 'Chọn cơm tấm'});
    })

    router.get('/DatComTam', function (req, res) {
        res.render('datComTam', {title: 'Đặt cơm tấm'});
    })

    router.get('/ChiTietDonHang', function (req, res) {
        res.render('chiTietDonHang', {title: 'Chi tiết đơn hàng'});
    })

