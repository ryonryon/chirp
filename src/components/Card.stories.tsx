import React from "react";
import Card from "./Card";

export default {
  title: "Card",
};

export const example = () => {
  return (
    <Card
      avatar={{
        src:
          "https://lh3.googleusercontent.com/ogw/ADGmqu_ygiQbIuaW37QcUrCERmUpmhLkuDyBoraUdeVH3Q=s32-c-mo",
        alt: "avatar image",
      }}
      title="Ryo Togashi"
      content="buy one get one"
      time="18:01"
    />
  );
};
