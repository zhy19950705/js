function render_v1(template, data) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
    return render_v1(template, data);
  }
  return template;
}

function render_v2(template, data) {
  const reg = /\{\{(\w+)\}\}/;
  while (reg.test(template)) {
    const name = reg.exec(template)[1];
    template = template.replace(reg, data[name]);
  }
  return template;
}

let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let person = {
  name: "布兰",
  age: 12,
};
console.log(render_v1(template, person)); // 我是布兰，年龄12，性别undefined
console.log(render_v2(template, person)); // 我是布兰，年龄12，性别undefined
