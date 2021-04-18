import { text } from "@storybook/addon-knobs";
import React from "react";
import ChatList from "./ChatList";

export default {
  title: "ChatList",
};

export const example = () => {
  return (
    <ChatList
      myId={text("myId", "dfjwlakfj34")}
      chats={[
        {
          userId: "dfjwlakfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "hey hey hey yo yo yo",
        },
        {
          userId: "dfjwlakdfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "Hey whats up?",
        },
        {
          userId: "dfjwdlakfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage:
            "btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great.",
        },
        {
          userId: "dfjwladkfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "yeah she is, right?",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "She is my classmate",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: new Date(),
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "I'll take her next meeting then!",
        },
      ]}
    />
  );
};
