// https://www.cnblogs.com/TomXu/archive/2012/02/23/2353389.html
/** 🌰1 */
const Car = (function () {
  const Car = function (model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  };
  return function (model, year, miles) {
    return new Car(model, year, miles);
  };
})();

/** 🌰2 */
const productManager = {};
productManager.createProductA = function () {
  console.log("productA");
};
productManager.createProductB = function () {
  console.log("productB");
};
productManager.factory = function (type) {
  return new productManager[type]();
};
productManager.factory("createProductA");

/** 🌰3 */
let page = {};
page.dom = page.dom || {};
page.dom.Text = function () {
  this.insert = function (where) {
    const txt = document.createTextNode(this.url);
    where.appendChild(txt);
  };
};
page.dom.Link = function () {
  this.insert = function (where) {
    const link = document.createElement("a");
    link.href = this.url;
    link.appendChild(document.createTextNode(this.url));
    where.appendChild(link);
  };
};

page.dom.Image = function () {
  this.insert = function (where) {
    const img = document.createElement("img");
    img.src = this.url;
    where.appendChild(img);
  };
};
page.dom.factory = function (type) {
  return new page.dom[type]();
};

const o = page.dom.factory("Link");
o.url = "http://www.cnblogs.com";
o.insert(document.body);
