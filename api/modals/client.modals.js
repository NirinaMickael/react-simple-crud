const {Schema,model} = require("mongoose");
let Client = new Schema({
    user : {
        username : String,
        password : String
    }
});
// ice user mon collerction
module.exports = model('user',Client);