import { QuartzTransformerPlugin } from "../types"

/**
 * Captures the raw Markdown source before any processing so components
 * (e.g. CopyMarkdown) can access it at render time via fileData.rawMarkdown.
 */
export const RawMarkdown: QuartzTransformerPlugin = () => ({
  name: "RawMarkdown",
  markdownPlugins() {
    return [
      () =>
        (_tree, file) => {
          file.data.rawMarkdown = String(file.value)
        },
    ]
  },
})

declare module "vfile" {
  interface DataMap {
    rawMarkdown: string
  }
}
