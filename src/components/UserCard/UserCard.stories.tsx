import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";
import UserCard from "./UserCard";

export default {
  title: "UserCard",
};

export const example = () => {
  return (
    <UserCard
      userCard={{
        userId: "fjalekjfgaljlartjrtjl",
        avatarImg:
          "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
        title: "Ryo Togashi",
        content: text("content", "buy one get one"),
        time: text("time", "18:01"),
      }}
      onClick={action("onClick")}
    />
  );
};
