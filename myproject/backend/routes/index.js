var express = require('express');
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express', username: '맹선우' });
  //res.redirect("/prod");
  //res.send("hello")
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
  //res.end()
  // const filepath = 'D:/upload/5dc4f2989b54f67ff4003a5203ad8ba0';  
  // const filename = 'img.png'
  // res.setHeader('Content-Disposition', `attachment; filename=${filename}`); // 이게 핵심 
  // res.sendFile(filepath);
});

router.get('/prod', function(req, res, next){
  let data= [{no:1, name:'키보드', price:1000},
              {no:2, name:'모니터', price:2000},
              {no:3, name:'본체', price:3000},
            ]
            res.render('productList', {list: data});
})

module.exports = router;
