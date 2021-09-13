// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(function (j) {
//         console.log(j)
//     }, 1000, i)
// }

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

function func() {
  const guang = "guang";
  function func2() {
    const ssh = "ssh";
    function func3() {
      const suzhe = "suzhe";
      console.log(guang);
      console.log(ssh);
      console.log(suzhe);
    }
    return func3;
  }
  return func2;
}

const func2 = func();
const func3 = func2();
func3();
