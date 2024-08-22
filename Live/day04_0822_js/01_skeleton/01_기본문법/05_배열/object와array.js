//object는 반복문에서 key값으로 들어간다.

// var foods ={k:"kebab", t:"taco", p :"pizza", y:"yogurt"}
// //k가 key값으로 들어간다.
// for(var k in foods){
//   console.log(`${k}: ${foods[k]}`)
// }

const foods =["kebab","taco","pizza","yogurt"]
for(const idx in foods){
  //idx를 숫자로 변형하기 위해서는 앞에 +를 붙여줄 수 있다.
  console.log(`${+idx+1} : ${foods[idx]}`)
}

