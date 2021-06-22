/**
 * 找出所有父级 id
 */
function findParentId(objs, childId) {
  const result = [];
  function dfs(objs, parentId) {
    if (!objs) return;
    for (let obj of objs) {
      if (obj.id === childId) {
        result.push(parentId);
        continue;
      }
      if (obj.children) {
        dfs(obj.children, obj.id);
      }
    }
  }
  dfs(objs, "");
  return result;
}

const objs = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
          },
          {
            id: 7,
          },
        ],
      },
      {
        id: 4,
      },
    ],
  },
  {
    id: 5,
    children: [
      {
        id: 6,
        children: [
          {
            id: 7,
          },
        ],
      },
    ],
  },
];
console.log(findParentId(objs, 7));
