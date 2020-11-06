describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("to About tab", () => {
    cy.get("#about-tab").click();

    cy.get("#about-header").should("contain", "About");

    cy.get("#projects-header").should("not.exist");
    cy.get("#hello").should("not.exist");
    cy.get("#cv-header").should("not.exist");
    cy.get("#contact-header").should("not.exist");
  });

  it("to My Projects tab", () => {
    cy.get("#projects-tab").click();

    cy.get("#projects-header").should("contain", "Projects");

    cy.get("#about-header").should("not.exist");
    cy.get("#hello").should("not.exist");
    cy.get("#cv-header").should("not.exist");
    cy.get("#contact-header").should("not.exist");
  });

  it("to My CV tab", () => {
    cy.get("#cv-tab").click();

    cy.get("#cv-header").should("contain", "CV");

    cy.get("#about-header").should("not.exist");
    cy.get("#hello").should("not.exist");
    cy.get("#contact-header").should("not.exist");
    cy.get("#projects-header").should("not.exist");
  });

  it("to Contact tab", () => {
    cy.get("#contact-tab").click();

    cy.get("#contact-header").should("contain", "Contact");

    cy.get("#about-header").should("not.exist");
    cy.get("#hello").should("not.exist");
    cy.get("#cv-header").should("not.exist");
    cy.get("#projects-header").should("not.exist");
  });

  it("back to My Portfolio/Hello tab", () => {
    cy.get("#header").click();

    cy.get("#hello-header").should("contain", "Welcome to my portfolio!");

    cy.get("#projects-header").should("not.exist");
    cy.get("#about-header").should("not.exist");
    cy.get("#contact-header").should("not.exist");
    cy.get("#cv-header").should("not.exist");
  });
});