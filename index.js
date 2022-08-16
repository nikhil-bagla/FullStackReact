const express=require('express');
const app=express();

//route handler
app.get('/',(req,res)=>{    //arrow functions are called automatically whenever a req is received 
    res.send({Hi :'there!'});
});


//environment variable
const PORT=process.env.PORT || 5000;  //for heroku to inject port number when app is executed by heroku
app.listen(PORT);  //express is telling node to listen at this port
console.log("It's running");

//localhost:5000