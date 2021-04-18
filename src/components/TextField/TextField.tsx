import React, { ChangeEvent, KeyboardEvent, useState } from "react";

export interface Props {
  placeholder: string;
  onEnter?: (value: string) => void;
}

export default function TextField({ placeholder, onEnter = () => {} }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter") return;

    onEnter(value);
    setValue("");
  };

  return (
    <textarea
      rows={3}
      placeholder={placeholder}
      className="w-full focus:outline-none resize-none"
      value={value}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
}
