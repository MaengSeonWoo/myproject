const express = require('express');
const router = express.Router();
const query = require("../mysql")

router.get("/", async(req,res) => {
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);
    
    if(!page){page = 1;}
    if(!pageUnit){pageUnit = 10;}

    let offset = (page-1) * pageUnit;

   let list = await query("customerList",[offset, pageUnit]);
   let count = await query("customerCount");
   count = count[0].cnt;
    res.send({list, count})
});

router.post("/", (req,res) => {
    query("customerInsert", req.body)
    .then(result => res.send(result))
});

router.put("/:id", (req,res) => {
    query("customerUpdate", req.body.param)
    .then(result => res.send(result))
});

/* 
router.put("/:id", async (req,res) => {
    await query("customerUpdate", [req.body, req.params.id])
    res.send(result)
});
*/

router.delete("/:id", (req,res) => {
    query("customerDelete", req.params.id)
    .then(result => res.send(result))
});

module.exports = router;

/*
router.get("/", (req,res) => {
    res.send("고객 정보 조회 ")
});
router.post("/", (req,res) => {
    res.send("신규 고객 추가 ")
});
router.put("/", (req,res) => {
    res.send("고객 정보 수정 ")
});
router.delete("/", (req,res) => {
    res.send("고객 정보 삭제 ")
});

module.exports = router;*/