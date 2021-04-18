import clsx from "clsx";
import React, { HTMLAttributes } from "react";
import getRelativeDate from "../../utils/getRelativeDate";
import Chat from "../Chat";
import ChatTag from "../ChatTag";
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
    <div
      style={style}
      className={clsx(`w-full flex flex-col-reverse`, className)}
    >
      {chats.map(({ userId, messaage, sendAt, avatarImg }, i) => {
        const formatedLastSendAt =
          i !== 0 ? getRelativeDate(chats[i - 1].sendAt) : null;
        const formatedSendAt = getRelativeDate(sendAt);

        return (
          <div key={`chat-item-${userId}-index-${i}`} className={`m-2`}>
            {formatedLastSendAt !== formatedSendAt && (
              <ChatTag message={formatedSendAt} />
            )}

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
        );
      })}
    </div>
  );
}
