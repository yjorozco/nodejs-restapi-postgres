import express from 'express';
import indexRouter from './routes/index';

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(indexRouter);

app.listen(3000, ()=>{
    console.log("Server on port", 3000)
})