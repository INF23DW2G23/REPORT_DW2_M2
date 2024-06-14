require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const associations = require("./models/associations");
const authenticateJWT = require('./middlewares/authenticateJWT');
const authRouter = require('./routes/AuthRouter');
const userController = require('./Controllers/UserController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
    }
};

connectToDatabase().then(() => {
    associations();
    sequelize.sync().then(() => {
        console.log("Database & tables created!");
    });
});

app.use('/api', authRouter);

// Public routes
app.get('/users', userController.list);
app.get('/user/:id', userController.getById);
app.post('/user', userController.create);

app.use(authenticateJWT);

// Protected routes
app.use("/", require("./routes/getUserRouter"));
app.use("/", require("./routes/PhoneRouter"));
app.use("/", require("./routes/UserRouter"));
app.use("/", require("./routes/CompanyRouter"));
app.use("/", require("./routes/AccessoriesRouter"));

app.get("/", (req, res) => {
    res.redirect("/docs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
