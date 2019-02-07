import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
