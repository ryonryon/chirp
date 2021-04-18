import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";
import UserCardList from "./UserCardList";

export default {
  title: "UserCardList",
};

export const example = () => {
  return (
    <UserCardList
      users={[
        {
          userId: "fjalekjfgaljlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: "18:01",
        },
        {
          userId: "fjalekjfgaljlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: "18:01",
        },
        {
          userId: "fjalekjfgaljlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: "18:01",
        },
        {
          userId: "fjalekjfgaljlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: "18:01",
        },
      ]}
      onClick={action("onClick")}
    />
  );
};
