import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Register");
    }

    async getHtml() {
        return `
        <h1> Register </h1>
        <form>
            <label>    </label>
        </form>
        `;
    }

}
