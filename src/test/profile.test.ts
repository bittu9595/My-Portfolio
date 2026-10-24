import { describe, expect, it } from "vitest";
import { experience, profile, projects } from "@/lib/profile";

describe("Portfolio identity", () => {
  it("uses Pavan's name", () => expect(profile.name).toBe("Pavan Bhansali"));
  it("uses Pavan's senior engineering role", () => expect(profile.role).toBe("Senior Full Stack Engineer and Frontend Expert"));
  it("uses Pavan's email", () => expect(profile.email).toBe("pavanbhansali95@gmail.com"));
  it("uses Pavan's phone", () => expect(profile.phone).toBe("07861146413"));
  it("uses Pavan's LinkedIn", () => expect(profile.links.linkedin).toBe("https://www.linkedin.com/in/pavan-bhansali-682bb2128"));
  it("uses Pavan's GitHub", () => expect(profile.links.github).toBe("https://github.com/bittu9595"));
});

describe("Requested portfolio projects", () => {
  it("uses the supplied Elegance deployment", () => {
    expect(projects.find((project) => project.link === "https://github.com/bittu9595/TheElegenceApp")?.liveUrl).toBe("https://elegenceshop.vercel.app/");
  });
  it.each([
    "https://github.com/bittu9595/Plate-Lens-Food-Analyzer",
    "https://github.com/bittu9595/ceiling-grid-ui",
    "https://github.com/bittu9595/TheElegenceApp",
    "https://github.com/bittu9595/credit-card-app",
  ])("includes %s", (link) => {
    expect(projects.find((project) => project.link === link)).toBeDefined();
  });
});

describe("Experience", () => {
  it("lists British Petroleum via Infosys as the current role", () => {
    expect(experience[0]).toEqual({
      when: "2020 — now",
      what: "Senior Full Stack Engineer | Frontend Expert",
      where: "British Petroleum (via Infosys)",
    });
  });
  it("lists LTI Mindtree Ltd as the earlier role", () => {
    expect(experience[1]).toEqual({
      when: "2018 — 2020",
      what: "Full Stack Engineer",
      where: "LTI Mindtree Ltd",
    });
  });
});