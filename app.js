require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const Product = require("./models/product");
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const products = await Product.find({});

    res.render("index", { products });
});

app.get("/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("product", { product });
});

const start = async () => {
    try {
        app.listen(3000, console.log("Server is running on port 3000"));
        await connectDB(process.env.MONGO_URI);
    } catch (err) {
        console.log(err);
    }
};
start();
