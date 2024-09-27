interface TreeNode {
  label: string;
  value: string;
  children?: TreeNode[];
}

export default function convertToTreeData(
  obj: Record<string, any>
): TreeNode[] {
  function recursiveConvert(key: string | number, value: any): TreeNode {
    if (typeof value === "object" && value !== null) {
      const children = Array.isArray(value)
        ? value.map((item, index) => recursiveConvert(index, item))
        : Object.keys(value).map((k) => recursiveConvert(k, value[k]));

      return {
        label: String(key),
        value: String(key) + String((Math.random() * 10000).toFixed(5)),
        children: children,
      };
    } else {
      return {
        label: String(key),
        value: String(value) + String((Math.random() * 10000).toFixed(5)),
      };
    }
  }

  return Object.keys(obj).map((key) => recursiveConvert(key, obj[key]));
}
