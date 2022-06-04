/// <reference types="cypress" />

const hover = (subject) => {
  throwErrorIfMoreThanOneElement(subject);

  // cover two popular hover events
  performHover(subject[0], "mouseenter");
  performHover(subject[0], "mouseover");

  return subject[0];
};

const clearHover = (subject) => {
  throwErrorIfMoreThanOneElement(subject);
  performHover(subject[0], "mouseleave");
};

const performHover = (element, event) => {
  if (element.fireEvent) {
    element.fireEvent(`on${event}`);
  } else {
    const evt = new MouseEvent(event);
    element.dispatchEvent(evt);
  }
};

const throwErrorIfMoreThanOneElement = (subject) => {
  if (subject.length > 1) {
    throw Error(
      `More than one element found for specified selector: ${subject.selector}`
    );
  }
};

Cypress.Commands.add("hover", { prevSubject: true }, hover);
Cypress.Commands.add("clearHover", { prevSubject: true }, clearHover);
