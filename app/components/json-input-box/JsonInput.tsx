"use client";

import React, { useState } from "react";
import { Textarea, Text, Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

interface JsonInputProps {
  label?: string;
  placeholder?: string;
  isInvalid?: boolean;
  validationError?: string;
  formatOnBlur?: boolean;
  autosize?: boolean;
  minRows?: number;
  onChange: (jsonValue: string) => void;
  onValid: (isValid: boolean) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({
  label = "JSON Input",
  placeholder = "Paste your JSON here...",
  validationError = "Invalid JSON",
  formatOnBlur = false,
  autosize = true,
  minRows = 4,
  onChange,
  onValid,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validateJson = (value: string) => {
    try {
      onValid(true);
      setError(null);
      if (value !== "") {
        const parsed = JSON.parse(value);
        return JSON.stringify(parsed, null, 2);
      } else {
        return JSON.stringify([], null, 2);
      }
    } catch (err) {
      onValid(false);
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
    if (formatOnBlur) {
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
