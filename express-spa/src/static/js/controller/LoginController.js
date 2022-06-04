import { navigateTo } from "../index.js";

function onRegisterBtnClick(event) {
    event.preventDefault();
    navigateTo(location.origin) + "/register";
}

function onLoginSubmit(event, id, pw) {
    event.preventDefault();

    const navBar = document.querySelector('nav');
    const HIDDEN_CLASSNAME = 'hidden';

    const loginPath = `${location.origin}/login`

    fetch(loginPath, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include", //cors 호출이라도 언제나 user credential 전송
        body: JSON.stringify({
            "id": id,
            "password": password
        })
    })
        .then((res) => {
            if (res.ok && res.status === 200) {
                const origin = location.origin;
                navigateTo(origin);
                navBar.classList.remove(HIDDEN_CLASSNAME);
                console.log("로그인!");
            }
            else {
                return res.json().then((msg) => {
                    alert(message.msg);
                    throw msg;
                })
            }
        })
        .catch((err) => {
            throw err;
        })
}

export { onRegisterBtnClick, onLoginSubmit }