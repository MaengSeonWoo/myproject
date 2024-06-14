const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
    //res.clearCookie("account");
    req.session.destroy();
    res.send(200);
  });

  module.exports = router;