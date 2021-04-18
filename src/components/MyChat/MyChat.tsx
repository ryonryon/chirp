import React, { useMemo } from "react";
import formatTime from "../../utils/formatTime";

export interface Props {
  message: string;
  sendAt: Date;
}

export default function MyChat({ message, sendAt }: Props) {
  const _sendAt = useMemo(() => formatTime(sendAt), [sendAt]);

  return (
    <div className="flex flex-row-reverse items-end">
      <p className="inline-block bg-indigo-400 py-1 px-4 max-w-3xl rounded-lg ml-2 font-light">
        {message}
      </p>

      <span className="text-xs">{_sendAt}</span>
    </div>
  );
}
