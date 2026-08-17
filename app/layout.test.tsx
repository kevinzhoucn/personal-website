import { describe, expect, it, vi } from "vitest"

vi.mock("next/font/google", () => ({
  Geist_Mono: () => ({ variable: "--font-mono" }),
  Outfit: () => ({ variable: "--font-sans" }),
  Oxanium: () => ({ variable: "--font-heading" }),
}))

import { metadata } from "@/app/layout"

describe("root layout metadata", () => {
  it("references the placeholder photographer name, not a real one", () => {
    expect(metadata.title).toContain("Your Name")
    expect(metadata.description).toContain("Your Name")
    expect(metadata.title).not.toContain("Jane Doe")
    expect(metadata.description).not.toContain("Jane Doe")
  })
})