const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
const PORT = 3000;



app.get('/confg',(req,res)=>{
    res.status(200).send({
        "firebase": {
            "apiKey": "AIzaSyCL7lVEqUJzGqpfxq7XqMbSZBmxmqiFuaI",
            "authDomain": "expance-8de40.firebaseapp.com",
            "projectId": "expance-8de40",
            "storageBucket": "expance-8de40.appspot.com",
            "messagingSenderId": "27618328115"
          }
    })
});

app.listen(PORT,()=> console.log('listen on port '+ PORT))