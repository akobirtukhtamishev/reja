console.log("Web serverni boshlash uchun 'npm start' buyrug'ini ishlating");
const express = require('express');
const app = express();
const http = require("http");

// malumot shartli ravishda 4 ta bosqishga bolinadi
// 1. (Kirish code) Expressga kirib kelayotgan malumotlarga bogliq bolganf kodlar yoziladi
app.use(express.static("public")); // browserdan kirib kelayotgan zaproslar uchun public folder ochiq ekanligini korsatadi
app.use(express.json());  // kirib kelayotgan json formatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({extended: true})); //agar buni yozmasak html formdan post qilingan narsalarni express qabul qilmaydi

// 2. (Session code)

// 3. (Views code) biz backendda html-front end yaratamiz buni uchun ejs dan foydalanamiz -> npm i ejs
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing code
app.get("/", function(req, res) {
    res.end("<h1>Hello World by a Ethan</h1>");
});

app.get("/gift", function(req, res) {
    res.end("<h1>siz sovgalar sahifasidaasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});