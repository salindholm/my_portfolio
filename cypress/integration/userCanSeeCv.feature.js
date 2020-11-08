describe("User can see list of Cv", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays cv", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Experience");
      cy.get(".description").should("contain", "Project Manager at Egencia Sweden AB coordinating group travels for companies."
      );
    });
  });

  it("displays second project", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".header").should("contain", "Education");
      cy.get(".description").should("contain", "International Travel Consultant with IATA and UFTAA qualifications."
      );
    });
  });
})
