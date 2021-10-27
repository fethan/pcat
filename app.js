const express = require("express");

const app = express();

app.use(express.static('public'));

const myLogger = (req, res, next) => {
    console.log("Middleware Log 1");
    next();
}

app.use(myLogger);

app.get("/", (req, res) => {
    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo description"
    };
    res.send(photo);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});