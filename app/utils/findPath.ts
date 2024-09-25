import ITreeNodeData from "../types";

export default function findPath(
  value: string,
  tree: ITreeNodeData[],
  currentPath: string[] = []
): string[] | null {
  for (const node of tree) {
    const newPath = [...currentPath, node.label];
    if (node.value === value) {
      return newPath;
    }
    if (node.children) {
      const result = findPath(value, node.children, newPath);
      if (result) return result;
    }
  }
  return null;
}
