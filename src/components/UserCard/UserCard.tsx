import React, { MouseEventHandler, useMemo } from "react";
import UserCardType from "../../entities/UserCard";
import formatTime from "../../utils/formatTime";

export interface Props {
  userCard: UserCardType;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function UserCard({ userCard, onClick }: Props) {
  const time = useMemo(() => formatTime(userCard.time), [userCard.time]);

  return (
    <div
      className="container flex flex-nowrap cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-none flex items-center justify-center m-2.5">
        <img
          src={userCard.avatarImg}
          alt={`user avatar image id:${userCard.userId}`}
          className="rounded-full w-12 h-12"
        />
      </div>

      <div className="flex-grow my-2.5 flex flex-nowrap flex-col justify-center">
        <h3 className="text-sm">{userCard.title}</h3>

        <p className="text-xs font-light">{userCard.content}</p>
      </div>

      <div className="flex-none my-2.5">
        <span className="text-xs font-light">{time}</span>
      </div>
    </div>
  );
}
