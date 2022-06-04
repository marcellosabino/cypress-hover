/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    hover(): Chainable;
    clearHover(): Chainable;
  }
}
