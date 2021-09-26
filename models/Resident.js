var mongoose = require('mongoose');

var ResidentSchema = new mongoose.Schema({
    id: String,
    address : String,
    numpeo: Number,
    detail_resID: String,
    detailres:[{
        id: String, 
        namepeo: String,
        age: Number,
        Covid_Status:String,
        residency_status:String,
        Vaccination_status:String
    }]
});
module.exports= mongoose.model('Resident',ResidentSchema);