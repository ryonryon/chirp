import React from "react";

export interface Props {
  avatar: {
    src: string;
    alt: string;
  };
  title: string;
  content?: string;
  time?: string;
}

export default function Card({ avatar, title, content, time }: Props) {
  return (
    <div className="container flex flex-nowrap">
      <div className="flex-none">
        <img src={avatar.src} alt={avatar.alt} className="rounded-none" />
      </div>

      <div className="flex-grow">
        <h3>{title}</h3>

        <p>{content}</p>
      </div>

      <div className="flex-none">
        <span>{time}</span>
      </div>
    </div>
  );
}
