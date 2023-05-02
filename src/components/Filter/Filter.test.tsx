import { screen } from "@testing-library/react";
import { today } from "../../constants/data-placeholder";
import { renderWithProvidersAndRouter } from "../../utils/test-utils";
import Filter from "./Filter";

beforeEach(() => {
  renderWithProvidersAndRouter(<Filter />);
});

describe("Flitrer component", () => {
  it("Should have initial selectors set as expected", () => {
    const dateSelect = screen.getByText(today);
    const timeSelect = screen.getByText("Любое время");
    const terminalSelect = screen.getByText("Все терминалы");
    const iqueryInput = screen.getByPlaceholderText(
      "Поиск по номеру рейса, городу и авиакомпании"
    );

    expect(dateSelect).toHaveValue(today);
    expect(timeSelect).toHaveValue("");
    expect(terminalSelect).toHaveValue("ALL");
    expect(iqueryInput).toHaveValue("");
  });
});
