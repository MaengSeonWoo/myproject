const express = require('express');
const router = express.Router();
const query = require("../mysql")

router.get("/", async(req,res) => {
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);
    
    if(!page){page = 1;}
    if(!pageUnit){pageUnit = 10;}

    let offset = (page-1) * pageUnit;

   let list = await query("boardList",[offset, pageUnit]);
   let count = await query("boardCount");
   count = count[0].cnt;
    res.send({list, count})
});

router.post("/", (req,res) => {
    query("boardInsert", req.body)
    .then(result => res.send(result))
});

router.put("/:no", (req,res) => {
    query("boardUpdate", req.body.param)
    .then(result => res.send(result))
});

router.delete("/:no", (req,res) => {
    query("boardDelete", req.params.id)
    .then(result => res.send(result))
});

module.exports = router;