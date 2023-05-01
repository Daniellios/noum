import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../redux/store";
import { theme } from "../../styles/globalStyles";
import Navbar from "./Navbar";

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={["/departure"]}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </ThemeProvider>
    </MemoryRouter>
  );
});

describe("Navbar component", () => {
  it("Departure link is active", () => {
    const departureLink = screen.getByText("Вылет");

    expect(departureLink).toHaveAttribute("is_active", "true");
  });

  it("Navigation link changes style", () => {
    const arrivalLink = screen.getByText("Прилет");

    expect(arrivalLink).toHaveAttribute("is_active", "false");

    fireEvent.click(arrivalLink);

    expect(arrivalLink).toHaveAttribute("is_active", "true");
  });
});
