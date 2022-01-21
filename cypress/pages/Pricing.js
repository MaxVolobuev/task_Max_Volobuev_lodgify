/// <reference types="cypress" />

import {CONTACT_PAGE, PRICES, PRICING_PAGE} from "../locators/index";

export class Pricing {
    constructor(node) {
        this.node = node;
    }

    get numberOfRental25() {
        return cy.get(PRICING_PAGE.numberOfRentals25);
    }

    get numberOfRental50() {
        return cy.get(PRICING_PAGE.numberOfRentals50);
    }

    get starterPack() {
        return cy.get(PRICES.starter);
    }

    get professionalPack() {
        return cy.get(PRICES.professional)
    }

    get ultimatePack() {
        return cy.get(PRICES.ultimate)
    }

    get priceCurrencySelector() {
        return cy.get(PRICING_PAGE.priceCurrencySelector)
    }

    errorCatcher() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    get yearlyPlan() {
        return cy.get(PRICING_PAGE.yearlyPlan)
    }

    get scrollPropPlanRentalAmount() {
        return cy.get(PRICING_PAGE.rentalAmount)
    }
}
