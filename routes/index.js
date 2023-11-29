var express = require('express');
var router = express.Router();


//로그인 페이지 렌더링
router.get('/index', function(req, res, next) {
    //req : ~~한 요청이 app.js에서 들어옴
    //res : ~~한 응답을  보낸다.
    //next : 다음 미들웨어로 넘어감
    res.render('index', { title: 'Express' });
    
});

//로그인 데이터 전송.
router.post('/index', (req, res) => {
    const { Email, Password } = req.body; // 요청에서 데이터 추출

    // 데이터를 JSON 형태로 만들어 응답합니다.
    const info = {
        Email,
        Password
    };

    res.json(info); // JSON 형태로 응답
});


//회원가입 페이지 렌더링
router.get('/register', function(req, res, next) {
    res.render('register');
});

//회원가입 데이터 전송.
router.post('/register', (req, res) => {
    const { Email, Password, Name, Phone, Birth, Sex } = req.body; // 요청에서 데이터 추출

    // 데이터를 JSON 형태로 만들어 응답합니다.
    const register = {
        Email,
        Password,
        Name,
        Phone,
        Birth,
        Sex
    };

    res.json(register); // JSON 형태로 응답
});


//카드뽑기 페이지 렌더링
router.get('/card', function(req, res, next) {
    //카드 설명 데이터 받기
    
    res.render('card');
});


//전문가 필터링 페이지 렌더링
router.get('/ExpertFilter', function(req, res, next) {
    res.render('ExpertFilter');
});

//전문가 필터링 데이터 전송.
router.post('/ExpertFilter',function(req,res){
    const{region, expertise, maxPrice, minPrice} = req.body;
    res.json({region, expertise, maxPrice, minPrice});
});

//전문가 리스트 페이지 렌더링
router.get('/ExpertList', function(req, res, next) {
    res.render('ExpertList');
});

//전문가 예약 페이지 렌더링
router.get('/reservation', function(req, res, next) {
    res.render('reservation');
});

//예약 데이터 전송.
router.post('/reservation',function(req,res){
    const{date, time} = req.body;
    res.json({date, time});
});



/// 예약 정보 페이지 렌더링
router.get('/reserveInfo', function(req, res, next) {
    res.render('reserveInfo');
});


router.post('/reserveInfo',function(req,res){


}
);

module.exports = router;