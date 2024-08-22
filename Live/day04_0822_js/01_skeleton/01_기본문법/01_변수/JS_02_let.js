// let
// 블록 레벨 스코프 : 한 블럭 안에서 재할당은 가능하지만, 재선언은 불가능 
// 하지만 전역으로 선언한 변수를 함수 블럭 안에서는 지역적으로 재선언이 가능해보임.
// - 재 선언 불가, 재 할당 가능
// 하지만 함수 내에서는 재선언과 재할당 둘다 가능

/* 코드를 작성해보세요. */

let name = "초기값"

function change(){
  //재할당은 가능, 재선언도 가능한거아닌가..?
  //재선언이 가능하진만 block 내에서만 가능하다.

  // name = "함수 내 재할당"
  // console.log(name)

  // name = "함수 내 두번쨰 재할당"
  // console.log(name)

  let name = "함수 내 재선언"
  console.log(name)


}
//재할당의 경우에는 구분을 위해 가로선이 그어짐.
// name = "재선언"

console.log(name)
change()
console.log(name)