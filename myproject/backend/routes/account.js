const express = require('express');
const router = express.Router();

router.get("/account", (req,res) => {
    //if(req.cookies && req.cookies.account){
        if(req.session.is_logined){
        const member = JSON.parse({userid:req.session.userid});
            return res.send(member)
    }
    res.send(401);
  })

  module.exports = router;