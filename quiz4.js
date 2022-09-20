// //1. 문자열의 모든 캐릭터를 하나씩 출력하라
// //2. 사용자의 id를 잘라내어 각각의 id를 배열로 보관
// //3. 1초에 한번씩 시계를(날짜포함) 출력해보자

// // const text = "Hello world!!";
// // console.log(text.substring(0, 2));

// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// const array = ids.spilt(",");
// console.log(array);

// setInterval(() => {
//   const now = new Date();
//   console.log(now.toLocaleString("ko-KR"));
// }, 1000);

// 0부터 10이하까지의 숫자를 2배를 iterate 만들기
//0,1,2,3,4,...9
//0,2,4,6..18

//num의 숫자가 짝수이면 엄지척. 홀수이면 엄지다운 출력
// if이용 삼항조건 연산자 이용

// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5 순회하면서 숫자를 다 출력하고 싶음
// 5 순회하면서 숫자의 두배값을 다 출력하고 싶음

// const action = function (i) {
//   console.log(i);
//   console.log(2 * i);
// };

// function iterate(max, action) {
//   for (let i = 0; i < max; i++) {
//     action(i);
//   }
// }

// iterate(5, action);

// let num = 929;

// function solution(num) {
//   let changetoString = num.toString();
//   let max = changetoString.length;
//   let total = 0;
//   for (let i = max; 0 < i; i--) {
//     let sum = Math.floor(num / 10 ** (i - 1));
//     let a = num % 10 ** (i - 1);
//     num = a;
//     total += sum;
//   }
//   console.log(total);
// }

// solution(num);

// y = "A";
// var x = y;
// console.log(x + y);

// var a, b, c;

// (a = b = 3), (c = 4);
// console.log(a); // 3

// var x, y, z;

// x = ((y = 5), (z = 6));
// console.log(x); // 6 (아니 왜????)

// var x = 0; // x는 전역으로 선언되었고, 0으로 할당됩니다.

// console.log(typeof z); // undefined, z는 아직 존재하지 않습니다.

// function a() {
//   // a 함수를 호출했을 때,
//   var y = 2; // y는 함수 a에서 지역변수로 선언되었으며, 2로 할당됩니다.

//   console.log(x, y); // 0 2

//   function b() {
//     // b 함수를 호출하였을때,
//     x = 3; // 존재하는 전역 x값에 3을 할당, 새로운 전역 var 변수를 만들지 않습니다.
//     y = 4; // 존재하는 외부 y값에 4를 할당, 새로운 전역 var 변수를 만들지 않습니다.
//     z = 5; // 새로운 전역 z 변수를 생성하고 5를 할당 합니다.
//   } // (strict mode에서는 ReferenceError를 출력합니다.)

//   b(); // 호출되는 b는 전역 변수로 z를 생성합니다.
//   console.log(x, y, z); // 3 4 5
// }

// a(); // 호출되는 a는 또한 b를 호출합니다.
// console.log(x, z); // 3 5
// console.log(typeof y); // undefined y는 function a에서 지역 변수입니다.
// var x = 0;

// function f() {
//   var x = (y = 1); // x는 지역변수로 선언됩니다. y는 아닙니다!
// }
// f();

// console.log(x, y);

// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split("");
// console.log(words[3]);
// console.log(typeof words[3]);
// // expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]

// let n = 929;

// function solution(n) {
//   // 쉬운방법
//   return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
// }
// console.log(solution(n));

let sum = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log(sum);
