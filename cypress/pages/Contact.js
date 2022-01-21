/// <reference types="cypress" />

import { CONTACT_PAGE } from "../locators/index";

export class Contact {
    constructor(node) {
        this.node = node;
    }

    get dataPicker() {
        return cy.get(CONTACT_PAGE.dataPicker);
    }

    get startDate() {
        return cy.get(CONTACT_PAGE.startDate)
    }

    get endDate(){
        return cy.get(CONTACT_PAGE.endDate)
    }

    get nameField() {
        return cy.get(CONTACT_PAGE.name)
    }

    get sendBtnClick() {
        return cy.get(CONTACT_PAGE.sendBtn).click()
    }

    get nameAlertMessage() {
        return cy.get(CONTACT_PAGE.nameAlert)
    }

    get emailAlertMessage() {
        return cy.get(CONTACT_PAGE.emailAlert)
    }

    get commentAlertMessage() {
        return cy.get(CONTACT_PAGE.commentAlert)
    }

    get allAlertSelector() {
        return cy.get(CONTACT_PAGE.allAlertSelector)
    }

    get emailField() {
        return cy.get(CONTACT_PAGE.email)
    }

    get phoneField() {
        return cy.get(CONTACT_PAGE.phone)
    }

    get guestsAmount() {
        return cy.get(CONTACT_PAGE.guests)
    }

    get commentField() {
        return cy.get(CONTACT_PAGE.comment)
    }

    get alertAfterFormSending() {
        return cy.get(CONTACT_PAGE.error)
    }

    get phoneNumberIcon() {
        return cy.get(CONTACT_PAGE.phoneIcon)
    }

    get userImage() {
        return cy.get(CONTACT_PAGE.userImage)
    }

    get userFullName() {
        return cy.get(CONTACT_PAGE.userFullName)
    }

    get headerHomeBtn() {
        return cy.get(CONTACT_PAGE.homeBtn)
    }


}
