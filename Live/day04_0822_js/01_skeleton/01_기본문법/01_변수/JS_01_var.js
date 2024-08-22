// var
// 함수 스코프 //
// - 재 선언 가능, 재 할당 가능
// - 호이스팅(Hoisting) 특성이 있음

/* 코드를 작성해보세요. */

var number = 10;

function hs(){
  number = 20
  console.log("함수내부", number)
}

console.log("전역", number)
hs()
//hs 함수를 통해서 전역 변수 number를 재할당 했으므로, 10, 20, 20의 순서이다.
console.log("함수 재할당 후", number)


