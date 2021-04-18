import { action } from "@storybook/addon-actions";
import React from "react";
import TextField from "./TextField";

export default {
  title: "TextField",
};

export const example = () => {
  return (
    <TextField placeholder=" Enter a message" onEnter={action("onEnter")} />
  );
};
