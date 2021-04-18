import { text } from "@storybook/addon-knobs";
import React from "react";
import MyChat from "./MyChat";

export default {
  title: "ChatList/MyChat",
};

export const example = () => {
  return (
    <MyChat
      message={text(
        "text",
        "btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great."
      )}
      sendAt={new Date()}
    />
  );
};
