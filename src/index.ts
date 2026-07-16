import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"

interface Options {
  favoriteNumber: number
}

const defaultOptions: Options = {
  favoriteNumber: 42,
}

const MyComponent: QuartzComponentConstructor<Options> = (userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    if (opts.favoriteNumber < 0) return null
    return "<p>My favourite number is {opts.favoriteNumber}</p>"
  }

  return Component
}

export default MyComponent
