import { TrackCommon } from "@/pages/album/interface";

export const emptyFunc = () => {};

// 单位 万 亿 格式化数字
export const getCount = (count: number) => {
  if (count < 0) return 0;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

// 防抖
export const debounce = (func: () => void, delay: number) => {
  let timer: any;
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};

// 处理歌手列表拼接歌手名字
export const getName = (list: TrackCommon[]) => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

// 对象判空
export const isEmptyObject = (obj: any) =>
  !obj || Object.keys(obj).length === 0;
