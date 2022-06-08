import AbstractView from "./AbstractView.js";

import { getBoardList } from "../js/controller/BoardController.js"
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('게시물 목록');
    }

    async getHtml() {
        return `
            <div class="title" id="div__board-list">
            </div>
        `;
    }

    async attachEvent() {
        const navBar = document.querySelector('nav');
        const HIDDEN_CLASS_NAME = 'hidden';
        const div__boarList = document.querySelector('#div__board-list');
        navBar.classList.remove(HIDDEN_CLASS_NAME);

        await getBoardList(div__boarList);

    }
}