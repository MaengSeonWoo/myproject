const express = require('express');
const router = express.Router();

const members = [
    { userid: "user1", userpw: "1111" },
    { userid: "user2", userpw: "2222" },
    { userid: "user3", userpw: "3333" },
  ];

  router.post("/login", (req,res) => {
    console.log(req.body)
    const userid = req.body.userid
    const userpw = req.body.userpw
    console.log(userid, userpw);
    const member = members.find(result => result.userid == userid &&
                                          result.userpw == userpw);
    if(member){
        // const options = {
        //     domain : "localhost",
        //     path : "/",
        //   //  maxAge : 10000,
        //     httpOnly:true
        //     }
        //     res.cookie("account", JSON.stringify(member),options)
        req.session.userid = userid; // 세션에 사용자 이메일 정보 저장
        req.session.is_logined = true; // 세션에 로그인 여부 저장
        req.session.save(err => { // 세션 저장
            if(err) throw err;
            res.send(member);// 로그인 후 홈화면으로 이동
            });
    }  
    else{
        res.send(401);
    }
  })
  

  module.exports = router;