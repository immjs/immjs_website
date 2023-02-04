import * as React from "react";

import { wrapPageElement } from "./src/wrappers/mdx";

import { Preconnect, Fonts } from "./src/components/Head";

export const onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
}) => {
  setHeadComponents([
    <Preconnect key="domain-preload" />,
    <Fonts key="font-preloader" />,
  ])
};

export { wrapPageElement };