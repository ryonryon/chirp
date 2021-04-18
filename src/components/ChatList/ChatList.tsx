import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import Chat from "../Chat";
import MyChat from "../MyChat";

export interface Props {
  myId: string;
  chats: {
    userId: string;
    sendAt: Date;
    avatarImg?: string;
    messaage: string;
  }[];
  style?: HTMLAttributes<HTMLElement>;
  className?: string;
}

export default function ChatList({ myId, chats, style, className }: Props) {
  return (
    <div style={style} className={clsx(`w-full`, className)}>
      {chats.map(({ userId, messaage, sendAt, avatarImg }, i) => (
        <div key={`chat-item-${userId}-index-${i}`} className={`m-2`}>
          {myId === userId ? (
            <MyChat message={messaage} sendAt={sendAt} />
          ) : (
            <Chat
              userId={userId}
              message={messaage}
              sendAt={sendAt}
              avatarImg={avatarImg}
            />
          )}
        </div>
      ))}
    </div>
  );
}
