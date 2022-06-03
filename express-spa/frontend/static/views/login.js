
import AbstractView from "./AbstractView.js";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
    <div id="wrap">
        <div id="formTag">
            <form id="login-form" class="hidden">
                <input required maxlength="15" type="text" placeholder="Please Enter your Id">
                <input required type="password" placeholder="Please Enter your Password">
                <button type="submit">Log In</button>
            </form>
        </div>
        <h1 id="greeting" class="hidden"></h1>
    </div>
        `;
    }

}
