const express = require("express");
const chats = require("../backend/data/data");
const dotenv = require("dotenv")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
connectDB();


const app = express();

app.use(express.json());  // to accept json data

app.get("/", (req, res) => {
    res.send("Api is running")
});

app.use('/api/user', userRoutes);
app.use("/api/chat", chatRoutes)
// app.use("/api/message", messageRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT

app.listen(PORT, console.log(`server Started on PORT ${PORT}`.yellow.bold));
