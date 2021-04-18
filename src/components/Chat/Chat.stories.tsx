import { boolean, text } from "@storybook/addon-knobs";
import React from "react";
import Chat from "./Chat";

export default {
  title: "ChatList/Chat",
};

export const example = () => {
  return (
    <Chat
      userId="f2345tythgr56yhtgr5t"
      message={text(
        "text",
        "btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great. btw the blond girl looks great."
      )}
      sendAt={new Date()}
      avatarImg="https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100"
    />
  );
};
