console.log(People); // ReferenceError: Cannot access 'People' before initialization
class People {}
People(); // TypeError: Class constructor People cannot be invoked without 'new'

("use strict");

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var People = function People() {
  _classCallCheck(this, People);
};
