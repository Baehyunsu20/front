// splice
// 배열의 특정위치에 요소를 추가하거나 삭제
// splice( index, 제거할 요소 개수, 배열에 추가될 요소 )


var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr[3]);
arr.splice(3, 2);
// 3번째 인덱스에서부터 2개 제거 4= arr[3]
console.log("4,5 삭제 될 것임",arr); // 

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 1, "a", "b");
// 2번째 인덱스에서 1개 제거 후 "a"와 "b"를 추가
console.log("3을 지우고 a,b 추가", arr); // 

