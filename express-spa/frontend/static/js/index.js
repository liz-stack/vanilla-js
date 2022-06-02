import Dashboard from "../views/Dashboard.js";
import Board from "../views/Board.js";
import User from "../views/User.js";

/**
 * 
 * @param {*} url 
 */
const navigateTo = url => {
    history.pushState(null, null, url); //순서대로 인자로 보낼 데이터 객체, 바꿀 제목, 주소
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/boards", view: Board },
        { path: "/users", view: User }
    ];

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatch.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view);

};

//이전, 다음페이지 이동
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})
