import React, { useMemo } from "react";
import formatTime from "../../utils/formatTime";

export interface Props {
  userId: string;
  message: string;
  sendAt: Date;
  avatarImg: string;
}

export default function Chat({ userId, message, sendAt, avatarImg }: Props) {
  const _sendAt = useMemo(() => formatTime(sendAt), [sendAt]);

  return (
    <div className="flex">
      <img
        src={avatarImg}
        alt={`avatar image sender id: ${userId}`}
        className="rounded-full w-10 h-10 mr-2"
      />

      <div className="flex items-end mt-2">
        <p className="inline-block bg-indigo-400 py-1 px-4 max-w-3xl rounded-lg mr-2 text-sm font-light">
          {message}
        </p>

        <span className="text-xs">{_sendAt}</span>
      </div>
    </div>
  );
}
