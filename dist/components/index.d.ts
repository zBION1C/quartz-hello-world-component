import { QuartzComponent } from '@quartz-community/types';

interface ExampleComponentOptions {
    favouriteNumber: number;
}
declare const _default: (userOpts?: ExampleComponentOptions) => QuartzComponent;

export { _default as ExampleComponent, type ExampleComponentOptions };
