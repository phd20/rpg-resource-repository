document.addEventListener("nav", () => {
  const btn = document.querySelector<HTMLButtonElement>(".copy-markdown-btn")
  const source = document.querySelector<HTMLElement>(".copy-markdown-source")

  if (!btn || !source) return

  const label = btn.querySelector<HTMLElement>(".copy-markdown-label")

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(source.textContent ?? "")
      if (label) {
        label.textContent = "Copied!"
        btn.classList.add("copy-markdown-copied")
      }
      setTimeout(() => {
        if (label) {
          label.textContent = "Copy Markdown"
          btn.classList.remove("copy-markdown-copied")
        }
      }, 2000)
    } catch {
      // Clipboard API unavailable (e.g. non-HTTPS dev environment)
      if (label) label.textContent = "Copy failed"
    }
  }

  btn.addEventListener("click", handleClick)
  window.addCleanup(() => btn.removeEventListener("click", handleClick))
})
