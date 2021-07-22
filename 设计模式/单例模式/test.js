const singletonTester = (function () {
  function Singleton(args) {
    args = args || {};
    this.name = "SingletonTester";
    this.pointX = args.pointX || 6;
    this.pointY = args.pointY || 10;
  }

  let instance;
  let _static = {
    name: "SingletonTester",
    getInstance: function (args) {
      if (instance === undefined) {
        instance = new Singleton(args);
      }
      return instance;
    },
  };
  return _static;
})();

const singletonTest = singletonTester.getInstance({ pointX: 5 });
console.log(singletonTest.pointX);
