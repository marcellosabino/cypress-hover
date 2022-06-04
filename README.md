# cypress-hover 🛸

Enable hover capabilities for Cypress 🛸 with zero dependencies! 💯

# Installation

```
npm install cypress-hover
```

# Usage
In your `cypress/support/e2e.js` or your `cypress/support/e2e.support.js` file add the following import:

```ts
import 'cypress-hover';
```

That's it! You're ready to use `cypress-hover`.

# Examples

```ts
cy.get("#popover")
  .hover()
  .within(() => {
    cy.get(".contents").contains("Hello world!");
  })
  // optionally, we can stop hovering over the element
  .clearHover();
```

## Gotchas

This only works with one element at a time, consider using `id`s or `.first() / .eq(x)` in Cypress.

# Happy Testing!
