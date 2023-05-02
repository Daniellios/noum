import { fireEvent, screen } from "@testing-library/react";
import { today, tomorrow } from "../../constants/data-placeholder";
import { renderWithProvidersAndRouter } from "../../utils/test-utils";
import Filter from "./Filter";

beforeEach(() => {
  renderWithProvidersAndRouter(<Filter />);
});

describe("Fliter component", () => {
  it("Should have initial selectors set as expected", () => {
    const dateSelect = screen.getByText(today);
    const timeSelect = screen.getByText("Любое время");
    const terminalSelect = screen.getByText("Все терминалы");
    const queryInput = screen.getByPlaceholderText(
      "Поиск по номеру рейса, городу и авиакомпании"
    );

    expect(dateSelect).toHaveValue(today);
    expect(timeSelect).toHaveValue("");
    expect(terminalSelect).toHaveValue("ALL");
    expect(queryInput).toHaveValue("");
  });

  it("Should change value on option select", () => {
    const dateSelect = screen.getByText(today);
    const timeSelect = screen.getByText("Любое время");
    const terminalSelect = screen.getByText("Все терминалы");
    const queryInput = screen.getByPlaceholderText(
      "Поиск по номеру рейса, городу и авиакомпании"
    );

    fireEvent.change(dateSelect, { target: { value: tomorrow } });
    fireEvent.change(timeSelect, { target: { value: "00:00,01:00,02:00" } });
    fireEvent.change(terminalSelect, { target: { value: "A" } });
    fireEvent.change(queryInput, { target: { value: "Казань" } });

    expect(dateSelect).toHaveValue(tomorrow);
    expect(timeSelect).toHaveValue("00:00,01:00,02:00");
    expect(terminalSelect).toHaveValue("A");
    expect(queryInput).toHaveValue("Казань");
  });
});
