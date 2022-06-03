import Dashboard from "./static/views/Dashboard.js";
import Board from "./static/views/Board.js";
import User from "./static/views/User.js";


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
        { path: "/boards/:id", view: BoardDetail },
        { path: "/users", view: User }
    ];

    //Test each route for potential match
    const potentialMatch = routes
        .filter(route => location.pathname.match(pathToRegex(route.path)))
        .map(route => {
            return {
                route: route,
                resul: location.pathname.match(pathToRegex(route.path))
            }
        });

    let match = potentialMatch.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view(getParams(match))

    document.querySelector("#app").innerHTML = await view.getHtml();

    if (match.route.path === '/board') {
        await view.getBoardList();
        await view.getPageList();
    }

    if (match.route.path === '/board/:id') {
        await view.getBoardDetail();
    }

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
