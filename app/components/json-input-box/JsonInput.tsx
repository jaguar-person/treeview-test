"use client";

import React, { useState } from "react";
import { Textarea, Text, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

interface JsonInputProps {
  label?: string;
  placeholder?: string;
  validationError?: string;
  formatOnBlur?: boolean;
  autosize?: boolean;
  minRows?: number;
  onChange: (jsonValue: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({
  label = "JSON Input",
  placeholder = "Paste your JSON here...",
  validationError = "Invalid JSON",
  formatOnBlur = false,
  autosize = true,
  minRows = 4,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validateJson = (value: string) => {
    try {
      const parsed = JSON.parse(value);
      setError(null);
      return JSON.stringify(parsed, null, 2);
    } catch (err) {
      setError(validationError);
      return value;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
    onChange(value);
  };

  const handleBlur = () => {
    if (formatOnBlur && !error) {
      const formatted = validateJson(inputValue);
      setInputValue(formatted);
    }
  };

  return (
    <div>
      {label && <Text>{label}</Text>}
      <Textarea
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        autosize={autosize}
        minRows={minRows}
        error={error}
      />
      {!!error && (
        <Notification color="red" icon={<IconX />}>
          {error}
        </Notification>
      )}
    </div>
  );
};

export default JsonInput;
