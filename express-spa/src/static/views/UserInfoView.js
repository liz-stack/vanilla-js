import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("UserInfo");
    }

    async getHtml() {
        return `
        <h1> UserInfo </h1>
        <form>
            <label>    </label>
        </form>
        `;
    }

}
