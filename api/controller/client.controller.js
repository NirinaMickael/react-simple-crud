const clients = require("../modals/client.modals");
let create = (req,res) => {
    let users = new clients(); 
    users.user.username = req.body.username; 
    users.user.password = req.body.password;
    users.save().then(() => {
        res.json({
            success: true,
            message: "User created successfully"
        }); 
    }).catch((err) => {
        res.json({
            success: false,
            err
        });
    });
}
module.exports=  {create};