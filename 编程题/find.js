function find(data) {
  return {
    data,
    where(match) {
      this.data = this.data.filter((item) => {
        return Object.entries(match).every(([key, value]) => {
          if (value instanceof RegExp) {
            return value.test(item[key]);
          }
          return value === item[key];
        });
      });
      return this;
    },
    sortBy(key, type) {
      this.data.sort((a, b) =>
        type !== "desc" ? a[key] - b[key] : b[key] - a[key]
      );
      return this;
    },
  };
}
const data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];
const result = find(data)
  .where({
    title: /\d$/,
  })
  .sortBy("userId", "asc");
console.log(result);
