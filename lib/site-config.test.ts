import { describe, expect, it } from "vitest"

import { SITE_EMAIL, SITE_LOCATION, SITE_NAME } from "@/lib/site-config"

describe("site config", () => {
  it("uses a placeholder photographer name (not a real one)", () => {
    expect(SITE_NAME).toBe("Your Name")
    expect(SITE_NAME).not.toBe("Jane Doe")
  })

  it("uses the template email hello@example.com", () => {
    expect(SITE_EMAIL).toBe("hello@example.com")
    expect(SITE_EMAIL).not.toBe("jane.doe@example.com")
  })

  it("keeps the placeholder location untouched", () => {
    expect(SITE_LOCATION).toBe("Portland, Oregon")
  })
})