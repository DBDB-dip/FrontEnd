var express = require('express');
var router = express.Router();

let UID = null;

//로그인 페이지 렌더링
router.get('/login', function(req, res, next) {
    //req : ~~한 요청이 app.js에서 들어옴
    //res : ~~한 응답을  보낸다.
    //next : 다음 미들웨어로 넘어감
    res.render('login', { title: 'Express' });
});


router.post('/login',function(req,res){
    const userId = req.body.userId;
    UID = userId;
});


//회원가입 페이지 렌더링
router.get('/register', function(req, res, next) {
    res.render('register');
});


//카드뽑기 페이지 렌더링
router.get('/card', function(req, res, next) {
    //카드 설명 데이터 받기
    const api_url = 'http://localhost:8080/tarot/${UID}';
    res.render('card'),{api_url};
});


//전문가 필터링 페이지 렌더링
router.get('/ExpertFilter', function(req, res, next) {
   
    res.render('ExpertFilter');
});

//전문가 리스트 페이지 렌더링
router.get('/ExpertList', function(req, res, next) {
    res.render('ExpertList');
});



router.get('/ExpertInfo', function(req, res, next) {
    res.render('ExpertInfo');
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

//회원정보 페이지 렌더링
router.get('/mypage', function(req, res, next) {
    res.render('mypage');
});

router.get('/memberDelete', function(req, res, next) {
    res.render('memberDelete');
});

router.get('/memberUpdate', function(req, res, next) {
    res.render('memberUpdate');
});

module.exports = router;