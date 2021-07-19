function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay * 1000);
  });
}
