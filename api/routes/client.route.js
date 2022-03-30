const express = require("express");
const router = express.Router();
const clientController = require("../controller/client.controller")
router.post('/create',(req,res)=>{
    clientController.create(req,res);
})
module.exports  = router;