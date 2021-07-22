function* foo() {
  let response1 = yield fetch("a");
  console.log(response1);
  let response2 = yield fetch("b");
  console.log(response2);
}

let gen = foo();
function getGenPromise(gen) {
  return gen.next().value;
}
getGenPromise(gen)
  .then((res) => {
    console.log(res);
    return getGenPromise(gen);
  })
  .then((res) => {
    console.log(res);
  });
