import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();

// connect to mongodb
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute)
app.get("/api/products/:id", (req, res) => {
    const productID = req.params.id;
    res.send(data.products.find(x => x._id === productID));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({
            msg: "Product not found."
        })
    }

});

app.get("/api/products", (req, res) => {
    res.send(data.products)
});

// test brushcutters --------------------------
app.get("/api/brushcutters/:id", (req, res) => {
    const productID = req.params.id;
    res.send(data.brushcutters.find(x => x._id === productID));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({
            msg: "Product not found."
        })
    }

});

app.get("/api/brushcutters", (req, res) => {
    res.send(data.brushcutters)
});
// test brushcutters --------------------------


app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
});
