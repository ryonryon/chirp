import { text } from "@storybook/addon-knobs";
import React from "react";
import ChatList from "./ChatList";

export default {
  title: "ChatList",
};

export const example = () => {
  const _today = new Date();
  const today = new Date(
    `${_today.getFullYear()}/${_today.getMonth() + 1}/${_today.getDate() - 1}`
  );
  const yesterday = new Date(
    `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() - 1}`
  );
  const twoDaysAgo = new Date(
    `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() - 2}`
  );
  const FourDaysAgo = new Date(
    `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() - 4}`
  );
  const tenDaysAgo = new Date(
    `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate() - 10}`
  );
  const sometimeAgo = new Date(
    `${today.getFullYear() - 1}/${today.getMonth() + 1}/${today.getDate() - 10}`
  );
  const sometimeAgo2 = new Date(
    `${today.getFullYear() - 2}/${today.getMonth() + 1}/${today.getDate() - 10}`
  );

  return (
    <ChatList
      myId={text("myId", "dfjwlakfj34")}
      chats={[
        {
          userId: "dfjwlakfj34",
          sendAt: today,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "I'll take her next meeting then!",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: yesterday,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "She is my classmate",
        },
        {
          userId: "dfjwladkfj34",
          sendAt: twoDaysAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "yeah she is, right?",
        },
        {
          userId: "dfjwdlakfj34",
          sendAt: FourDaysAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage:
            "btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great.",
        },
        {
          userId: "dfjwlakdfj34",
          sendAt: tenDaysAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "Hey whats up?",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: sometimeAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "hey hey hey yo yo yo",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: sometimeAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "I'm OK!",
        },
        {
          userId: "dfjwlakfj3dd4",
          sendAt: sometimeAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "not bad, what about you?",
        },
        {
          userId: "dfjwlakfj34",
          sendAt: sometimeAgo,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "what's up?",
        },
        {
          userId: "dfjwlakfj3dd4",
          sendAt: sometimeAgo2,
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          messaage: "hey hey hey yo yo yo",
        },
      ]}
    />
  );
};
