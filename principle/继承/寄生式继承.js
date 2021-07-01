const parent = {
  name: "parent",
  ages: [1, 2],
};
function clone(origin) {
  const copy = Object.create(origin);
  copy.name = "copy";
  return copy;
}
