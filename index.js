const express = require ('express') ;
const fs = require ('fs') ;

const app = express();

app.get ('/pending_tasks', (req, res) => {

    fs.readFile(__dirname + '/' + "ptasks.json", 'utf-8', (err, data) => {
        if (err){
           return console.log("err")
        }
        res.send(data)
    } )
})

app.listen(3033, () => {
    console.log("Web server is running on Port 3033 ");
})
