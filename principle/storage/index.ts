import CustomStorage from "./CustomStorage";
const customStorage = new CustomStorage({
  mode: "local",
  timeout: 3000,
  base: "zhy-",
  cacheSize: 3,
});

export default customStorage;
