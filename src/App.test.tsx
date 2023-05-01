import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

// ARRANGE
// ACT
// EXPECT

describe("App", () => {
  it("Renders App component", () => {
    renderWithProviders(<App />);

    expect(screen.getByTitle("root"));
  });
});
