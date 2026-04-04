import express from "express";
import mcpRouter from "./routes/mcpRouter.js"
const app = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (req,res) =>{
    res.send("server is running");
})

app.use('/', mcpRouter);

app.use('/tools', mcpRouter);


app.listen(PORT, () => {
    console.log(`server is running on LocalHost${PORT}`)
})