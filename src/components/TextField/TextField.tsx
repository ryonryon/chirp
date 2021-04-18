import React from "react";

export interface Props {
  placeholder: string;
}

export default function TextField({ placeholder }: Props) {
  return (
    <textarea
      rows={3}
      placeholder={placeholder}
      className="w-full focus:outline-none resize-none"
    />
  );
}
