/**
 * 对象拍平和展开
 */
const entry = {
  a: {
    b: {
      c: {
        d: "1",
      },
    },
    d: {
      e: "2",
    },
    e: {
      f: "3",
    },
  },
  b: {
    c: "2",
  },
};
/*
  const output = {
    'a.b.c.d': '1',
    'a.d.e': '2',
    'a.e.f': '3', 
    'b.c': '2'
  }
  */

function flatObj(entry) {
  const result = {};
  function dfs() {}
  dfs(entry);
}
flatObj();
