const json = '{"a":"1", "b":2}';
/**
 * eval
 * 但是直接调用 eval 会存在安全问题，如果数据中可能不是 json 数据，而是可执行的 JavaScript 代码，
 * 那很可能会造成 XSS 攻击。因此，在调用 eval 之前，需要对数据进行校验。
 *  */
function jsonParse_v1(str) {
  return eval("(" + str + ")");
}
console.log(jsonParse_v1(json));

var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three =
  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

if (
  rx_one.test(
    json.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
  )
) {
  var obj = eval("(" + json + ")");
}

function jsonParse_v2(str) {
  return new Function("return " + str)();
}
console.log(jsonParse_v2(json));
