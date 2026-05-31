// @ts-ignore
import script from "./scripts/copyMarkdown.inline"
import style from "./styles/copyMarkdown.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CopyMarkdown: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  if (!fileData.rawMarkdown) return null

  return (
    <div class={classNames(displayClass, "copy-markdown")}>
      <pre class="copy-markdown-source" style="display:none">
        {fileData.rawMarkdown}
      </pre>
      <button class="copy-markdown-btn" aria-label="Copy page as Markdown">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
        <span class="copy-markdown-label">Copy Markdown</span>
      </button>
    </div>
  )
}

CopyMarkdown.afterDOMLoaded = script
CopyMarkdown.css = style

export default (() => CopyMarkdown) satisfies QuartzComponentConstructor
