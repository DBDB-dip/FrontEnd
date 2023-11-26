var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    //req : ~~한 요청이 app.js에서 들어옴
    //res : ~~한 응답을  보낸다.
    //next : 다음 미들웨어로 넘어감
    

    res.render('index', { title: 'Express' });
    
});


router.get('/register', function(req, res, next) {
    res.render('register');
});


//로그인 데이터 전송 확인용.
// router.post('/',function(req,res){
//     const email = req.body.Email;
//     const password = req.body.Password;
//     console.log(email);
//     console.log(password);});






//회원가입 데이터 전송 확인용.
// router.post('/register', function(req, res) {
//     const email = req.body.Email;
//     const password = req.body.userPassword;
//     const name = req.body.Name;
//     const phone = req.body.Phone;
//     const birth = req.body.Birth;
//     const sex = req.body.sex;

//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Name:', name);
//     console.log('Phone:', phone);
//     console.log('Birth:', birth);
//     console.log('Sex:', sex);

//     res.render('register'); // 회원가입 페이지를 다시 렌더링
// });



module.exports = router;