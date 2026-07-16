import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types";

export interface ExampleComponentOptions {
  favouriteNumber: number;
}

const defaultOptions: ExampleComponentOptions = {
  favouriteNumber: 42,
};

export default ((userOpts?: ExampleComponentOptions) => {
  const Component: QuartzComponent = () => {
    const opts = { ...defaultOptions, ...userOpts };

    if (opts?.favouriteNumber < 0) return null;
    return <p>My favourite number is: {opts?.favouriteNumber}</p>;
  };

  return Component;
}) satisfies QuartzComponentConstructor;
