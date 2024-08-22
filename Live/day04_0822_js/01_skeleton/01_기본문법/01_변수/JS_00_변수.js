// 변수 (Variable)

/* 함수 스코프 */
// var
//var의 scope(범위)는?? 
//전역 또는 함수 범위이다. 
//함수 블록 밖에서 지정한 경우에는 전체 윈도우 상에서 사용 가능

// - 재 선언 가능, 재 할당 가능
// - 호이스팅(Hoisting) 특성이 있음
//호이스팅이 될때 선언만 되기 때문에 에러는 안나고 undefined만 된다. -> 
//하지만 아래에서 값을 입력한 부분은 위로 호이스팅 되지 않는다.

// console.log(vTest);

  // console.log(vTest);
  // var vTest = "hyunsu";

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  var greeter = "hey hi";
  var times = 4;
  var greeter = "hey rere";

  function hs () {
    //같은 이름으로 재선언도 가능
    //함수로 만든 경우에는 내부에서만 존재하므로, 밖에서 선언했을 경우에는 
    //이 경우에 var만 재선언이 가능하다! 많이쓰는 let, const의 경우에는 재선언은 안됨.
      var greeter = "say Hello instead"; 

  }
  hs()
  console.log(greeter) // "say Hello instead"

// var vTest = 10;
// 재할당이 가능함.
// console.log(vTest);


/* 블록 레벨 스코프 */
// let
// - 재 선언 불가, 재 할당 가능

// const
// - 재 선언 불가, 재 할당 불가
// - 대문자 SNAKE_CASE 사용
// - 선언시 값을 할당해줘야함
// - 상수로 사용


/* undefined */
// - 변수에 아무 값도 없어서 타입을 알 수 없는 경우


// $ _ 로 시작해도 괜찮다
// 대소문자를 구분
// JS 예약어 사용 x