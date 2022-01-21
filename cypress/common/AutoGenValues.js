export class AutoGenValues {
	constructor(node) {
		this.node = node;
	}

	generateEmail() {
		const dayInt = `${Math.floor(100000 + Math.random() * 900000)}`;
		return `e2e.user+${dayInt}@gmail.com`;
	}

     generateRandomString() {
         let text = "";
         let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

         for (let i = 0; i < 9; i++)
             text += possible.charAt(Math.floor(Math.random() * possible.length));

         return text;
     }
}
