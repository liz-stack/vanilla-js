import LoginView from "../views/LoginView.js";
import BoardView from "../views/BoardView.js";
import NotFoundView from "../views/NotFoundView.js";
//import RegisterView from "../views/RegisterView.js";


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
    const routes = [
        { path: '/login', view: LoginView },
        { path: '/board', view: BoardView },
        // { path: '/userInfo', view: UserInfoView },
        // { path: '/register', view: RegisterView },
        // { path: '/write', view: WriteView },
        // { path: '/board/:id', view: BoardView },
        // { path: '/write/:id/modify', view: ModifyView }
    ];

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let matchedPath = potentialMatch.find((path) => path.result != null)

    if (!matchedPath) {
        matchedPath = {
            route: {
                path: location.pathname,
                view: NotFoundView
            },
            result: origin + location.pathname
        }
    }

    const view = new matchedPath.route.view(getParams(matchedPath))

    const app = document.querySelector("#app")
    app.innerHTML = await view.getHtml();

    view.attachEvent();

};

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });
    router();
});

export { navigateTo, router };