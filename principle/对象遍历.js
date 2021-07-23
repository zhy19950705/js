const player = {
  name: "zhy",
  [Symbol("testSymbol")]: "1995/07/05",
};
Object.defineProperties(player, {
  testDefineProperty: {
    enumerable: false,
    value: true,
  },
  [Symbol("testSymbolDefine")]: {
    enumerable: false,
    value: false,
  },
});
Object.defineProperties(player.__proto__, {
  testProtoEnumerableTrue: {
    enumerable: true,
    value: true,
  },
  testProtoEnumerableFalse: {
    enumerable: false,
    value: false,
  },
  [Symbol("testProtoSymbolEnumerableTrue")]: {
    enumerable: true,
    value: true,
  },
  [Symbol("testProtoSymbolEnumerableFalse")]: {
    enumerable: false,
    value: false,
  },
});

for (const key in player) {
  if (Object.prototype.hasOwnProperty.call(player, key)) {
    console.log(key);
  }
}

const keys = Object.keys(player);
console.log("keys", keys);

const ownPropertyNames = Object.getOwnPropertyNames(player);
console.log("ownPropertyNames", ownPropertyNames);

const ownPropertySymbols = Object.getOwnPropertySymbols(player);
console.log("ownPropertySymbols", ownPropertySymbols);

const ownKeys = Reflect.ownKeys(player);
console.log("ownKeys", ownKeys);
