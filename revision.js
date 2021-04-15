const  express = require(`express`);
const mongoose = require(`mongoose`);
const port = 22001;
const app = express();
const ONLINE_DB = "mongodb+srv://orire:Horirenitemi@1@cluster0.1rbda.mongodb.net/moniesretryWrites=true&w=majority ";


mongoose.connect(ONLINE_DB,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(`/`, require(`./controller`));

app.listen(port, () =>{
    console.log(`server is connected to ${port}`);
}

);