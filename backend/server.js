const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connected successfully");
})

const articlesRouter = require('./routes/articles')

app.use('/articles', articlesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});