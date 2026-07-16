import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import style from "./styles/example.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./scripts/example.inline.ts";

export interface ExampleComponentOptions {
  favouriteNumber: number;
}

const defaultOptions: ExampleComponentOptions = {
  favouriteNumber: 42,
}

export default ((userOpts?: ExampleComponentOptions) => {

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts}

    if (opts?.favouriteNumber < 0) return null;
    return <p>My favourite number is: {opts?.favouriteNumber}</p>
  };

  return Component;
}) satisfies QuartzComponentConstructor;
