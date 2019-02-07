import { configure } from "@storybook/react";

function loadStories() {
  require("../src/components/story.js"); // 好きな場所のstoryをrequireできます。
}

configure(loadStories, module);
