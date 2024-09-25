import JsonInputBox from "./components/json-input-box";
import { TreeList } from "./components/tree-list";

export default function Home() {
  return (
    <div className="flex gap-20 justify-between">
      <JsonInputBox />
      <TreeList />
    </div>
  );
}
