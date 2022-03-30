const http = require('http');
const express = require("express");
const app = express();
const clientRouter = require("./routes/client.route");
const cors = require('cors');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientController = require("./controller/client.controller")
const path = require("path")
const port = 3100;
const dbUrl = "mongodb://localhost:27017/Client";

//connecton a la base de donné
    mongoose.connect(dbUrl)
    .then( ()=>{
        console.log('db is connecting');
    }
    )
//

/*On va utiliser router*/
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin:'*'})); // accepte tout connection
app.use('/user',clientRouter);
// on pourra gerer des demande dans /client et  client/suite
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/signup.html'));
})
server.listen(port);