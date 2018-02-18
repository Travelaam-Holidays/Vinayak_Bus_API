

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//mongoose.connect(process.env.MLAB);
const bus = require('./bus_stop');
//var port = process.env.PORT || 3000;
// db  = require('./config/db');
app.use(bodyParser.urlencoded({ extend: false }));  
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('App Successful listening on port 3000');
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Vinayak');


const cors = require('cors');
//const express = require('express');
//let app = express();
app.use(cors());
app.options('*', cors());

  app.get('/', (req, res) => {
   bus.find((err, bus) => {
     if (err)
            console.log("API runs" );
 return  res.json(bus);
    });
});

app.get('/:id', (req, res) => {
 // console.log('getting all bus');
 Stop_id: req.params.id
  bus.findOne({
    
    })
    .exec((err, bus) => {
      if(err) {
        res.send('error occured')
      } else {
        console.log(bus);
        res.json(bus);
        console.log("API runs" );
    }
})});

//app.listen(port);