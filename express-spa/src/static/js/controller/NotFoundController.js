import { navigateTo } from "../index.js";

function onHomeBtnClick(event) {
    event.preventDefault();
    // 홈 화면으로 이동하는 버튼
    navigateTo(location.origin);
}

function onPreviousBtnClick() {
    history.back();
}

export { onHomeBtnClick, onPreviousBtnClick };