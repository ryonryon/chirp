import React, { HTMLAttributes } from "react";
import UserCardType from "../../entities/UserCard";
import UserCard from "../UserCard";

export interface Props {
  users: UserCardType[];
  onClick?: (userId: string) => void;
  style?: HTMLAttributes<HTMLElement>;
  className?: string;
}

export default function UserCardList({ users, onClick, ...props }: Props) {
  return (
    <div {...props}>
      {users.map((user) => (
        <UserCard
          key={`user-card-list-item-${user.userId}`}
          userCard={user}
          onClick={() => onClick?.(user.userId)}
        />
      ))}
    </div>
  );
}
