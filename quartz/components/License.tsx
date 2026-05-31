import style from "./styles/license.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const License: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const license = (fileData.frontmatter as Record<string, unknown> | undefined)?.license as
    | string
    | undefined
  if (license !== "cc-by-4.0") return null

  const title = fileData.frontmatter?.title ?? fileData.slug?.split("/").pop() ?? "This artifact"

  return (
    <div class={classNames(displayClass, "page-license")}>
      <p class="page-license-preamble">
        <em>{title}</em> is licensed under a{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International License
        </a>
        . Feel free to use this content in any way allowed by the license, provided that you include
        the following attribution statement in your work:
      </p>
      <div class="page-license-attribution">
        <div class="page-license-icons">
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt=""
            class="page-license-icon"
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt=""
            class="page-license-icon"
          />
        </div>
        <p class="page-license-text">
          This work incorporates material from the{" "}
          <a href="https://github.com/phd20/rpg-resource-repository">RPG Resource Repository</a> by
          Kirk Wiebe of <a href="https://phd20.com">PhD20.com</a>, provided under the{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License
          </a>
          .
        </p>
      </div>
    </div>
  )
}

License.css = style

export default (() => License) satisfies QuartzComponentConstructor
