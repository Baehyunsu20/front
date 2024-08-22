/* 문자열 (String) */
// “ ” 로 감싼다.
// ‘ ’ 로 감싼다.
// ` ` (backtick) 으로 감싼다. 
//    -> Template Literal (ES6)
//    -> 여러 줄 입력이 가능 
//      – 공백, 줄 넘김 유지 문자열 내 
//      - `${변수명}`을 이용하여 변수와 문자열을 결합
// UTF-16 형식


/* 코드를 작성해보세요. */

let msg0 = `자바스크립트 문자열 : msg0`
//let을 안붙여도 되는건가 -> 안붙이는 경우에는 전역변수로 선언이 된다. 
//var 같이 전역 변수의 성질을 갖지만,,,재선언은 안되는 성질을 가진다...
msg1 = `자바스크립트 문자열 : msg1`
msg2 = `자바스크립트 문자열 : msg2`

// let msg1 = "재선언"
//재선언은 안되지만 재할당은 가능한 let 변수로 자동인건가?
msg1 = "재할당"


let name = "hyunsu"
msg3 = `나의 이름은 ${name}입니다.(따옴표는 굳이 없어도 된다 ->  f-string 정도로 생각해)`

msg4 = `나의 이름은
"${name}"입니다.`

console.log("1 : ", msg1)
console.log("2 : ", msg2)
console.log("3 : ", msg3)
console.log("4 : ", msg4)