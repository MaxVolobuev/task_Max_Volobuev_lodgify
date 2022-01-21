import {HomePage} from "../pages/Home";
import {Pricing} from "../pages/Pricing";
import texts from "../texts/texts.json"
import {CheckPrice} from "../common/CheckPrice";
import {Contact} from "../pages/Contact";
import {AutoGenValues} from "../common/AutoGenValues";

describe("Lodgify contact page e2e tests", () => {
    const homePage = new HomePage();
    const pricing = new Pricing();
    const checkPrice = new CheckPrice();
    const contact = new Contact();
    const autoGeneration = new AutoGenValues();

    let allAlertMessages = [];
    let correctAlertMessages = ["Name is mandatory", "Email is mandatory", "Comment is mandatory"]

    beforeEach(()=> {
        cy.visit('/');
    })

    afterEach(() => {
        cy.clearCookies();
    });

    it('1. Open contact page then pricing page', () => {
        homePage.contactPage.click();
        contact.userImage.should("be.visible")
        contact.userFullName.should("have.text", texts.userFullName)
        contact.headerHomeBtn.click()
        homePage.pricingPage.click();
        cy.title().should('include', texts.pricingTitle);
    });

    it('2. Ensure that it possible select 50 rentals', () => {
        homePage.pricingPage.click();

        pricing.errorCatcher();

        //Ensure that yearly plan is active by style attribute value
        pricing.yearlyPlan.should("have.attr", "style", texts.yearlyPlanStyle)
        pricing.numberOfRental50.click()

        pricing.scrollPropPlanRentalAmount.should("have.value", 50)
    });

    it('3. Checking starter price with 50 rentals', () => {
        homePage.pricingPage.click();

        pricing.errorCatcher();

        //Ensure that yearly plan is active by style attribute value
        pricing.yearlyPlan.should("have.attr", "style", texts.yearlyPlanStyle)
        pricing.numberOfRental50.click()

        checkPrice.checkingPrice(pricing.starterPack, texts.starterPricesRental49USD, texts.usd)
        checkPrice.checkingPrice(pricing.professionalPack, texts.professionalPricesRental49USD, texts.usd)
        checkPrice.checkingPrice(pricing.ultimatePack, texts.ultimatePricesRental49USD, texts.usd)

    });

    it('4. Ensure that default currency is usd', () => {
        homePage.pricingPage.click();

        pricing.errorCatcher();
        checkPrice.checkingPrice(pricing.starterPack, texts.starterPricesRental10USD, texts.usd)
        pricing.priceCurrencySelector.should("have.value", texts.usd)
    });

    it("5. Check currency", ()=> {
        homePage.pricingPage.click();
        pricing.errorCatcher();
        checkPrice.checkingPrice(pricing.starterPack, texts.starterPricesRental10USD, texts.usd)
        checkPrice.checkingPrice(pricing.professionalPack, texts.professionalPricesRental10USD, texts.usd)
        checkPrice.checkingPrice(pricing.ultimatePack, texts.ultimatePricesRental10USD, texts.usd)
        pricing.priceCurrencySelector.select(texts["£ GBP"])
        checkPrice.checkingPrice(pricing.starterPack, texts.starterPricesRental10GBP, texts.gbp)
        checkPrice.checkingPrice(pricing.professionalPack, texts.professionalPricesRental10GBP, texts.gbp)
        checkPrice.checkingPrice(pricing.ultimatePack, texts.ultimatePricesRental10GBP, texts.gbp)
        pricing.priceCurrencySelector.select(texts["€ EUR"])
        checkPrice.checkingPrice(pricing.starterPack, texts.starterPricesRental10EUR, texts.eur)
        checkPrice.checkingPrice(pricing.professionalPack, texts.professionalPricesRental10EUR, texts.eur)
        checkPrice.checkingPrice(pricing.ultimatePack, texts.ultimatePricesRental10EUR, texts.eur)
    })

    it('6. Open contact page and send filled form (Form not ready and return Error)', () => {
        homePage.contactPage.click();
        contact.sendBtnClick

        //first ay how to compare alert messages
        contact.allAlertSelector.each(($value, index) => {
            allAlertMessages.push($value.text())
            expect(allAlertMessages[index]).equal(correctAlertMessages[index])
        })

       // or second way how to compare alerts
        contact.nameAlertMessage.should("have.text", texts.nameIsMandatory)
        contact.emailAlertMessage.should("have.text", texts.emailIsMandatory)
        contact.commentAlertMessage.should("have.text", texts.commentIsMandatory)

        contact.startDate.type('14/04/2022')
        contact.endDate.type('14/06/2022')
        contact.nameField.type(texts.customerFullName);
        contact.emailField.type(autoGeneration.generateEmail())
        contact.phoneField.type(texts.phone)
        contact.phoneNumberIcon
            .should("have.value", texts.UA)
            .should("include.text", texts.Ukraine)

        contact.guestsAmount.type('1')
        contact.commentField.type(texts.loremIpsum+' '+autoGeneration.generateRandomString())

        contact.sendBtnClick
        contact.alertAfterFormSending.should("have.text", texts.Error)
    });

    context('Lodgify contact page', () => {
        it('7. Should have the right title', () => {
            cy.visit('http://localhost:8080/Contact.html');
            cy.title().should('include', texts.contactTitle);
        });
    })
})