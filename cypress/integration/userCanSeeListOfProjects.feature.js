describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays first project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Address Book");
      cy.get(".description").should("contain", "A digital address book!"
      );
    });
  });

  it("displays second project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Fizz Buzz");
      cy.get(".description").should("contain", "Fizz Buzz game!"
      );
    });
  });

  it("displays third project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "ATM");
      cy.get(".description").should("contain", "Digital ATM machine!"
      );
    });
  });
});
