import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Board");
    }

    async getHtml() {
        return `
        <h1> Board </h1>
        <p> You are viewing the board page! </p>
        `;
    }

}