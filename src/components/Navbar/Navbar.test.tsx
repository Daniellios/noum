import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithProvidersAndRouter } from "../../utils/test-utils";
import Navbar from "./Navbar";

beforeEach(() => {
  renderWithProvidersAndRouter(<Navbar />);
});

describe("Navbar component", () => {
  it("Departure link is active", () => {
    const departureLink = screen.getByText("Вылет");

    expect(departureLink).toHaveAttribute("is_active", "true");
  });

  it("Current active link changes", () => {
    const arrivalLink = screen.getByText("Прилет");

    expect(arrivalLink).toHaveAttribute("is_active", "false");

    fireEvent.click(arrivalLink);

    expect(arrivalLink).toHaveAttribute("is_active", "true");
  });
});
