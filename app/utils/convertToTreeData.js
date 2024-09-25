export default function convertToTreeData(obj) {
  function recursiveConvert(key, value) {
    if (typeof value === "object" && value !== null) {
      const children = Array.isArray(value)
        ? value.map((item, index) => recursiveConvert(index, item))
        : Object.keys(value).map((k) => recursiveConvert(k, value[k]));
      return {
        label: key,
        value: String(key) + String(Math.random(10000)),
        children: children,
      };
    } else {
      return {
        label: Number.isNaN(Number(key)) ? key : "",
        value: String(value),
      };
    }
  }

  return Object.keys(obj).map((key) => recursiveConvert(key, obj[key]));
}
