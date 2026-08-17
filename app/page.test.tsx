import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt?: string }) =>
    `<img src="${src}" alt="${alt ?? ""}" />`,
}))

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: vi.fn() }),
}))

import Page from "@/app/page"

describe("portfolio page", () => {
  it("renders the placeholder photographer name", () => {
    const html = renderToStaticMarkup(<Page />)
    expect(html).toContain("Your Name")
    expect(html).not.toContain("Jane Doe")
  })

  it("renders the template email hello@example.com site-wide", () => {
    const html = renderToStaticMarkup(<Page />)
    expect(html).toContain("hello@example.com")
    expect(html).not.toContain("jane.doe@example.com")
  })
})