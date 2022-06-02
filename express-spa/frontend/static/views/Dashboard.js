import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1> Welcome Home </h1>
        <p> <a href = "/boards" data-link> 최근 게시물 확인 </p>
        `;
    }

}