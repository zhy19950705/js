async function ayncpool_es7(tasks = [], poolimit = 2) {
  const result = [];
  const excuting = [];
  for (let task of tasks) {
    let p = new Promise((resolve, reject) => {
      Promise.resolve(typeof task === "function" ? task() : "")
        .then((res) => {
          resolve(res);
          excuting.splice(excuting.indexOf(p), 1);
        })
        .catch(() => {
          resolve(res);
          excuting.splice(excuting.indexOf(p), 1);
        });
    });
    excuting.push(p);
    result.push(p);
    if (excuting.length >= poolimit) {
      await Promise.race(excuting);
    }
  }
  return Promise.all(result);
}
