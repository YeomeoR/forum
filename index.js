import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// routes
import postRoutes from './routes/posts.js'

const app = express();

//middleware

app.use(bodyparser.json({ limit: '30mb', extended: true }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.use('/posts', postRoutes)

//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://YeomeoR:Cocoa3123@cluster0.gxh3a.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))).catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);;