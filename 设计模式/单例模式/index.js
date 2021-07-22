// https://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html
/** 应用于弹框等 */
const singleton_v1 = {
  property1: "something",
  property2: "something else",
  method1: function () {
    console.log("hello world");
  },
};

const singleton_v2 = function () {
  /* 这里声明私有变量和方法 */
  let privateVariable = "something private";
  function showPrivate() {
    console.log(privateVariable);
  }
  /* 公有变量和方法（可以访问私有变量和方法） */
  return {
    publicMethod: showPrivate,
    publicVar: "the public can see this",
  };
};
var single_v2 = singleton_v2();
single_v2.publicMethod();
console.log(single_v2.publicVar);

/** 使用的时候才初始化 */
const singleton_v3 = (function () {
  let instance;
  function init() {
    return {
      publicMethod: function () {
        console.log("hello world");
      },
      publicProperty: "test",
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
singleton_v3.getInstance().publicMethod();
