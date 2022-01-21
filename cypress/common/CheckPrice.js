export class CheckPrice {
	constructor(node) {
		this.node = node;
	}


    //expect(text.replace(/[^0-9,.,$,*]/g, "")).to.eq(price);

	checkingPrice(locator, price, currency) {
		locator.invoke("text").then(text => {
            let allPrices = text.replace(/[^0-9,.,$,£,€,*]/g, "")
            let onePrice;
            switch (currency) {
                case "usd":
                    onePrice = allPrices.substring(allPrices.lastIndexOf('$'))
                    break;
                case "gbp":
                     onePrice = allPrices.substring(allPrices.lastIndexOf('£'))
                    break;
                default:
                    onePrice = '€'+allPrices.split('€')[1]
            }
            			expect(onePrice).to.eq(price);
		});
	}
}
