describe("hover", () => {
  it("should attach itself to Cypress", () => {
    expect(cy).property("hover").to.be.a("Function");
  });

  context("popovers with listeners", () => {
    before(() => {
      cy.visit("./cypress/e2e/index.html");
      cy.get(".popover-contents").should("not.exist");
    });

    afterEach(() => {
      cy.get(".popover-contents").should("not.exist");
    });

    it("should hover over the popover and then stop hovering over it", () => {
      cy.get(".popover")
        .hover()
        .within(() => {
          cy.get(".popover-contents").contains("Hello World!");
        })
        .clearHover();
    });
  });
});
