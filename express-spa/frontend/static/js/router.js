import Dashboard from "../views/Dashboard.js";
import Board from "../views/Board.js";
import Register from "../views/Register.js";

async function router() {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/boards", view: Board },
        { path: "/boards/:id", view: Board },
        { path: "/register", view: Register }
    ];

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {

        }
    });

    let match = routes
        .filter(route => location.pathname.match(pathToRegex(route.path)))
        .map(route => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        })[0];


    if (!match) {
        match = {
            route: routes[0],
            result: []
        }
    }

    const view = new match.route.view(getParams(match))
    const app = document.querySelector('#app')
    innerHTML = await view.getHtml();

    /* 
        if (match.route.path === '/board/:id') {
            await view.getBoardDetail();
        }
     */
}

