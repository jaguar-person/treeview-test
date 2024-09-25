"use client";

import { useState } from "react";
import { Paper, Stack, Button } from "@mantine/core";

import { useTreeContext } from "@/app/context/TreeContext";

import JsonInput from "./JsonInput";

export default function JsonInputBox() {
  const [jsonValue, setJsonValue] = useState<string>("");
  const { setTreeData } = useTreeContext();

  const handleJsonChange = (json: string) => {
    setJsonValue(json);
  };
  const handleExecute = () => {
    console.log(jsonValue);
    setTreeData(jsonValue);
  };
  return (
    <Paper className="flex-grow m-4">
      <Stack gap={16}>
        <JsonInput
          label="Copy Json File"
          placeholder="json file for tree view"
          validationError="Invalid JSON"
          formatOnBlur
          autosize
          minRows={4}
          onChange={handleJsonChange}
        />
        <Button onClick={handleExecute}>Execute</Button>
      </Stack>
    </Paper>
  );
}
