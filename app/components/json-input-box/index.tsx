"use client";

import { useState } from "react";
import { Paper, Stack, Button } from "@mantine/core";
import { useTreeContext } from "@/app/context/TreeContext";
import JsonInput from "./JsonInput";

export default function JsonInputBox() {
  const [jsonValue, setJsonValue] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(true);
  const { setTreeData } = useTreeContext();

  const handleJsonChange = (json: string) => {
    setJsonValue(json);
  };

  const handleValid = (valid: boolean) => {
    setValid(valid);
  };

  const handleExecute = () => {
    if (isValid) {
      setTreeData(jsonValue);
    }
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
          onValid={handleValid}
        />
        <Button onClick={handleExecute} disabled={!isValid}>
          Execute
        </Button>
      </Stack>
    </Paper>
  );
}
