export const HOME_PAGE = {
    contactPage: "[href='contact.html']",
    pricingPage: "[href='pricing.html']",
};

export const PRICING_PAGE = {
    numberOfRentals25: "[style=\"margin-bottom: 19px;\"] > .slider-tick-container > [style=\"left: 25%;\"]",
    numberOfRentals50: "[style=\"margin-bottom: 19px;\"] > .slider-tick-container > [style=\"left: 50%;\"]",
    priceCurrencySelector: ".price-currency-select",
    yearlyPlan: ".nav-magic-line",
    rentalAmount: "#scroll-prop-plan"
}

export const CONTACT_PAGE = {
    dataPicker: ".DateRangePickerInput_calendarIcon",
    startDate: "#c245db8b-711a-4e6d-a1aa-0fedfcc589a2",
    endDate: "[id^=\"75e1dd12-75fb-4f91-9a17-a4ed50ddda5a\"]",
    name: ":nth-child(1) > :nth-child(1) > .ui > input",
    sendBtn: "[data-testid=form] > [data-testid=button]",
    nameAlert: ":nth-child(1) > :nth-child(1) > .input > .ui",
    emailAlert: ".eight > .input > .ui",
    commentAlert: ":nth-child(4) > .input > .ui",
    allAlertSelector: "[class=\"ui red pointing below label\"]",
    email: ".eight > .input > input",
    comment: ".input > textarea",
    phone: "[data-testid=phone-input]",
    guests: ".four > .ui > input",
    error: "[data-testid=form] > .error",
    phoneIcon: ".PhoneInputCountrySelect",
    userImage: "[data-testid=responsive-image-img]",
    userFullName: ".top > .flex-container > .header",
    homeBtn: "[href=\"/\"]",
}

export const PRICES = {
    starter: ".price-card-starter > .price-item > :nth-child(1)",
    professional: ":nth-child(2) > .price-item > :nth-child(1)",
    ultimate: ":nth-child(3) > .price-item > :nth-child(1)",
}