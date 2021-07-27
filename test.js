function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, delay * 1000);
  });
}
