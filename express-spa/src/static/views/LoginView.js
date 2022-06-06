
import AbstractView from "./AbstractView.js";
import { onLoginSubmit, onRegisterBtnClick } from "../js/controller/LoginController.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("로그인");
    }

    async getHtml() {
        return `
    <div class="container">
            <form id="login-form" class="hidden">
                <div class = "form-group">
                    <input required maxlength="15" type="text" id="id" placeholder="Please Enter your Id">
                    <div class="form-input-error-message"></div>
                </div>
                <div class = "form-group">
                    <input required type="password" id="password" placeholder="Please Enter your Password">
                    <div class="form-input-error-message"></div>
                </div>
                <div>
                    <button class ="form-button" type="submit" id="login-btn">Log In</button>
                    <button class ="form-button" type="submit" id="register-btn">Register</button>
                </div>
            </form>
    </div>
        `;
    }


    attachEvent() {
        const loginForm = document.querySelector("#login-form");
        const loginBtn = document.querySelector("#login-btn");
        const registerBtn = document.querySelector("#register-btn");
        const navBar = document.querySelector('nav');

        const HIDDEN_CLASSNAME = "hidden";

        navBar.classList.add(HIDDEN_CLASSNAME);

        const id = document.querySelector("#id");
        const password = document.querySelector("#password");

        loginBtn.addEventListener("click", (event) => {
            onLoginSubmit(event, id.value, password.value);
        });

        registerBtn.addEventListener("click", onRegisterBtnClick);

        loginForm.addEventListener('submit', (event) => {
            onLoginSubmit(event, id.value, password.value)
        })

    }


}