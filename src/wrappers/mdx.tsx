import * as React from "react";
import type { PageProps, WrapPageElementBrowserArgs, WrapPageElementNodeArgs } from "gatsby";

import "../../static/styles.css";

export function wrapPageElement(args: WrapPageElementBrowserArgs | WrapPageElementNodeArgs): React.ReactElement {
  return (
    <main>
      {args.element}
    </main>
  );
}
