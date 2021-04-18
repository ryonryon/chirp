import clsx from "clsx";
import { join } from "node:path";
import React, { HTMLAttributes } from "react";

export interface Props {
  message: string;
  fullWidth?: boolean;
  style?: HTMLAttributes<HTMLElement>;
  className?: string;
}

export default function ChatListTag({
  message,
  fullWidth = false,
  style,
  className,
}: Props) {
  return (
    <div
      style={style}
      className={clsx(className, "w-full flex items-center justify-center")}
    >
      <div
        className={clsx(
          fullWidth ? "flex w-full" : "inline-flex px-4",
          "items-center justify-center rounded-full bg-gray-200 bg-opacity-60 opacity-60 text-sm font-light"
        )}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}
