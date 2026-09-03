console.log("Web serverni boshlash uchun 'npm start' buyrug'ini ishlating");
const express = require('express');
const app = express();

// MongoDB call - chaqirish
const db = require("./server").db();

// malumot shartli ravishda 4 ta bosqishga bolinadi
// 1. (Kirish code) Expressga kirib kelayotgan malumotlarga bogliq bolganf kodlar yoziladi
app.use(express.static("public")); // browserdan kirib kelayotgan zaproslar uchun public folder ochiq ekanligini korsatadi
app.use(express.json());  // kirib kelayotgan json formatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({extended: false})); //agar buni yozmasak html formdan post qilingan narsalarni express qabul qilmaydi

// 2. (Session code)

// 3. (Views code) biz backendda html-front end yaratamiz buni uchun ejs dan foydalanamiz -> npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing code
app.post("/create-item", (req, res) => {
        console.log('user entered /create-item');
    console.log({ ...req.body });
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) =>{
        if (err) {
            console.log(err);
            res.end("Something is odd");
        } else {
            res.end("saccessfully added");
        }
    });
});

app.get("/portfolio", (req, res) => {
    res.render("portfolio");
})

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans")
        .find() 
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong");
            } else {
                res.render("reja", {items: data});
            }
        })
});

app.get("/gift", function(req, res) {
    res.end("<h1>siz sovgalar sahifasidaasiz</h1>");
});

module.exports = app;