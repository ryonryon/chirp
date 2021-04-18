import { boolean, text } from "@storybook/addon-knobs";
import React from "react";
import ChatTag from "./ChatTag";

export default {
  title: "ChatList/ChatTag",
};

export const example = () => {
  return (
    <ChatTag
      message={text("message", "2021/3/4")}
      fullWidth={boolean("fullWidth", false)}
    />
  );
};

export const today = () => {
  return <ChatTag message="Today" fullWidth={boolean("fullWidth", false)} />;
};

export const yesterday = () => {
  return (
    <ChatTag message="Yesterday" fullWidth={boolean("fullWidth", false)} />
  );
};

export const unreadMessagesBelow = () => {
  return <ChatTag message="unread messages below" fullWidth />;
};
