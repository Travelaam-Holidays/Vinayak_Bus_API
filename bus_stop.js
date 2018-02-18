



const mongoose = require('mongoose');

const bus_stop_schema = new mongoose.Schema({
   
     
        Stop_id : Number,
        Rout_id : Number,
        Name_eng : String,
        Name_hindi : String,
        Name_guj : String,
        Lattitude : Number,
        Longitude : Number,
   

},{ collection: 'bus_stop' });

module.exports = mongoose.model('bus_stop', bus_stop_schema);
