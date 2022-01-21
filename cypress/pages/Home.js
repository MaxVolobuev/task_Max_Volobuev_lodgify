/// <reference types="cypress" />

import { HOME_PAGE } from "../locators/index";

export class HomePage {
    constructor(node) {
        this.node = node;
    }

    get contactPage() {
        return cy.get(HOME_PAGE.contactPage);
    }

    get pricingPage() {
        return cy.get(HOME_PAGE.pricingPage);
    }
}
