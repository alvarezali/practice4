import {HomeScreen} from "./screens/HomeScreen.js";
import {ProductScreen} from "./screens/ProductScreen.js";
import {ErrorScreen} from "./screens/Error404Screen.js";
import {parseUrlRequest} from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/id': ProductScreen

}

const router = ()=>{

    const parseUrl = parseUrlRequest();

    screen = (parseUrl.path ? `/${parseUrl.path}`: '/') +
             (parseUrl.id ? `/id` : '') +
             (parseUrl.action ? `/${parseUrl.action}` : '');
             
    const main = document.getElementById('main-container');

    main.innerHTML = routes[screen] ? routes[screen].render(): ErrorScreen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);