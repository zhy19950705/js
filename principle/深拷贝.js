function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    newObj[key] = typeof obj[key] === "object" ? deepCopy[obj[key]] : obj[key];
  }
  return newObj;
}

const isComplexDataType = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
function deepCopy(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj);
  if (obj.constructor === RegExp) return new RegExp(obj);
  if (hash.has(obj)) return has.get(obj);
  const cloneObj = Object.create(
    Reflect.getPrototypeOf(obj),
    Reflect.getOwnPropertyDescriptor(obj)
  );
  for (const key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj !== "function"
        ? deepCopy(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
}
