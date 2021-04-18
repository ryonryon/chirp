import { action } from "@storybook/addon-actions";
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
          userId: "fjalekjafgaljlartsjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: new Date(),
        },
        {
          userId: "fjalekjfsgaljlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: new Date(),
        },
        {
          userId: "fjalekjfgalfjlartjrtjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: new Date(),
        },
        {
          userId: "fjalekjfgaljlartjrftjl",
          avatarImg:
            "https://lh3.googleusercontent.com/a-/AOh14GhscYYoGxu2XxUviEBRbS09W18POIsnE2xzYj7PQg=s96-c-rg-br100",
          title: "Ryo Togashi",
          content: "buy one get one",
          time: new Date(),
        },
      ]}
      onClick={action("onClick")}
    />
  );
};
