function logger2(store) {
  return function (next) {
    return function (action) {
      let result = next(action);
      console.log("logger2");
      return result;
    };
  };
}
