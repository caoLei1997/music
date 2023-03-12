// 适配不同浏览器 js transform
let elementStyle:any = document.createElement("div").style;

interface TransformNames {
  webkit:string;
  Moz:string;
  O:string;
  ms:string;
  standard:string;
}

const vendor = (() => {
  const transformNames:TransformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "Transform",
  };

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style:any) {
  if (vendor === false) {
    return false;
  }
  if (vendor === "standard") {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
