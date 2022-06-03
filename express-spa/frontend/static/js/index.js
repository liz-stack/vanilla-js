import Dashboard from "../views/Dashboard.js";
import Board from "../views/Board.js";
import Login from "../views/login.js";
//import Register from "../views/Register.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)))

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url); //순서대로 인자로 보낼 데이터 객체, 바꿀 제목, 주소
    router();
}

const router = async () => {
    console.log(pathToRegex("/boards/:id"))
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/boards", view: Board },
        { path: "/boards/:id", view: Board },
        //{ path: "/register", view: Register },
        { path: "/login", view: Login }
    ];

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatch.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match))

    document.querySelector("#app").innerHTML = await view.getHtml();

    /* 
        if (match.route.path === '/board/:id') {
            await view.getBoardDetail();
        }
     */
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
