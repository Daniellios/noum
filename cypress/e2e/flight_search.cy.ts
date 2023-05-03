/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("Flight filter", () => {
  it("User can filter flights", () => {
    cy.visit("/departure");
    cy.get("[name=timeSpan]").select("00:00,01:00,02:00");

    const button = cy.get("button").contains("Показать рейсы на 02:00 - 04:00");

    button.click();
    button.should("contain", "Показать рейсы на 04:00 - 06:00");
    button.click();
    button.should("contain", "Показать рейсы на 06:00 - 08:00");

    cy.get("input").focus().type("Казан");

    cy.get("p").contains("Казан").closest("div").click();
    cy.get("p").contains("Казань").closest("div").click();

    cy.get("h1").should("contain", "Полет №");
  });
});
