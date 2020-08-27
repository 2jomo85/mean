// 설치한 express module 을 불러와서 변수에 담는다.
var express = require("express");
// express 를 실행해서 app object  를 초기화.
var app = express();

// ejs 를 사용하기 위해 express 의 view engine 에 ejs set
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// __dirname = node.js 에서 프로그램이 실행중인 파일의 위치를 나타내는 global variable

app.get("/hello", function (req, res) {
  // query 를 통해서 이름을 받는 코드. 모든 query들은 req.query 에 저장됨.
  res.render("hello", { name: req.query.nameQuery });
});

// route parameter 를 통해 이름을 받는 코드. 콜론(:) 으로 시작되는 route 은 해당 부분에 입력되는 route의 텍스트가 req.params 에 저장됨.
app.get("/hello/:nameParam", function (req, res) {
  res.render("hello", { name: req.params.nameParam });
});

// 사용할 포트 번호를 변수에 할당.
var port = 3000;
// post 변수를 이용해 3000번 퐅느에 node.js 서버를 연결.
app.listen(port, function () {
  // 서버 실행 시 콘솔창에 표시될 메시지.
  console.log("server on ! http://localhost:" + port);
});
