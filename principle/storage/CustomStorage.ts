import { canStringify } from "./utils";

type Mode = "session" | "local";
interface StorageBootstrapConfig {
  // 当前环境
  mode: Mode;
  /** 超时时间 */
  timeout: number;
  /** 不同项目区分开 */
  base: string;
  cacheSize: number;
}
interface StorageSaveFormat {
  timestamp: number;
  data: any;
}
class CustomStorage {
  private readStorage: Storage;
  private config: StorageBootstrapConfig;
  usage: number = 0;
  quota: number = 0;

  constructor(config: StorageBootstrapConfig) {
    if (!window) {
      throw new Error("当前环境非浏览器，无法消费全局window实例。");
    }
    if (!window.localStorage) {
      throw new Error("当前环境无法使用localStorage");
    }
    if (!window.sessionStorage) {
      throw new Error("当前环境无法使用sessionStorage");
    }
    switch (config.mode) {
      case "session":
        this.readStorage = window.sessionStorage;
        break;
      case "local":
        this.readStorage = window.localStorage;
        break;
      default:
        throw new Error("当前配置的mode未再配置区内，可以检查传入配置。");
    }
    this.config = {
      mode: config.mode,
      timeout: config.timeout || 7 * 24 * 3600 * 1000,
      base: config.base,
      cacheSize: config.cacheSize || 3 * 1024 * 1024,
    };
    this.estimate();
  }
  setItem(key: string, value: any) {
    try {
      if (canStringify(value)) {
        const savedData: StorageSaveFormat = {
          timestamp: Date.now(),
          data: value,
        };
        console.log("savedData", savedData);
        const data = JSON.stringify(savedData);
        this.judgeMemory(data);
        this.readStorage.setItem(key, data);
      } else {
        throw new Error(
          "需要存储的data不支持JSON.stringify方法，请检查当前数据"
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
  key(key: string) {
    return this.config.base + key;
  }
  getItem(key: string) {
    const content: StorageSaveFormat | null = JSON.parse(
      this.readStorage.getItem(this.key(key)) || ""
    );
    if (
      content?.timestamp &&
      Date.now() - content.timestamp >= this.config.timeout
    ) {
      this.removeItem(this.key(key));
      return null;
    }
    return content?.data || null;
  }
  /**
   * 判断是否存在该属性
   * @param key 需要判断的key
   */
  hasItem(key: string): boolean {
    return this.readStorage.hasOwnProperty(this.key(key)) || false;
  }
  removeItem(key: string) {
    if (this.hasItem(this.key(key))) {
      this.readStorage.removeItem(this.key(key));
    }
  }
  changeItem(key: string, onChange: (oldValue: any) => any, baseValue?: any) {
    const data = this.getItem(this.key(key));
    this.setItem(this.key(key), onChange(data || baseValue));
  }
  clearAll() {
    this.readStorage.clear();
  }
  /**
   * 获取所有key
   * @returns 回storage当中所有key集合
   */
  getKeys() {
    return Object.keys(this.readStorage || {});
  }
  /**
   * 获取所有value
   * @returns 所有数据集合
   */
  getValues() {
    return Object.values(this.readStorage || {});
  }
  on(fn: any) {
    window.addEventListener("storage", (e) => fn);
  }
  off(fn: any) {
    window.removeEventListener("storage", (e) => fn);
  }
  /** 获取数据大小 */
  getSize(str: string, charset?: any) {
    let total = 0,
      charCode,
      i,
      len;
    charset = charset ? charset.toLowerCase() : "";
    if (charset === "utf-16" || charset === "utf16") {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
        }
      }
    } else {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
          total += 1;
        } else if (charCode <= 0x07ff) {
          total += 2;
        } else if (charCode <= 0xffff) {
          total += 3;
        } else {
          total += 4;
        }
      }
    }
    return total;
  }
  /** 获取已使用空间 */
  getCacheSize() {
    let size = 0;
    const keys = this.getKeys();
    keys.forEach((key) => {
      const item = this.getItem(this.key(key));
      if (item?.timestamp) {
        size += this.getSize(item);
      }
    });
    return size;
  }
  /** 该Web API需要当前项目在https下。获取到的quota（存储总量）相对来说在3M左右，在开发场景下，这绝对是一个安全的内存范围。 */
  estimate() {
    if (navigator?.storage) {
      navigator.storage.estimate().then((estimate) => {
        this.usage = estimate.usage || 0;
        this.quota = estimate.quota || 0;
        console.log(this.usage, this.quota);
      });
    } else {
      this.usage = this.getCacheSize();
    }
  }
  /**
   * 容量清理，直到满足存储大小为止
   */
  judgeMemory(value: any) {
    if (this.getSize(value) + this.usage > this.config.cacheSize) {
      const storageList = this.getClearStorage();
      for (let { key, data } of storageList) {
        if (this.getSize(value) + this.usage < this.config.cacheSize) break;
        this.usage = this.usage - this.getSize(JSON.stringify(data));
        this.removeItem(key);
      }
    } else {
      this.usage += this.getSize(value);
    }
  }
  /** 获取当前清除存储空间，并且进行排序 */
  getClearStorage() {
    const keys = this.getKeys();
    const db: Array<{
      key: string;
      data: StorageSaveFormat;
    }> = [];
    keys.forEach((name) => {
      const key = this.key(name);
      const item = this.getItem(key);
      if (item.timestamp) {
        db.push({
          key,
          data: item,
        });
      }
    });
    return db.sort((a, b) => a.data.timestamp - b.data.timestamp);
  }
}
export default CustomStorage;
