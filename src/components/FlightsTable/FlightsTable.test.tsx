import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../utils/test-utils";
import FlightsTable from "./FlightsTable";

beforeEach(() => {
  renderWithProvidersAndRouter(<FlightsTable />);
});

describe("Flight table component", () => {
  it("Should not contain h1 tag on initial render", () => {
    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });
});
