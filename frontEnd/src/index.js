import {HomeScreen} from "./screens/HomeScreen.js";
import {ProductScreen} from "./screens/ProductScreen.js";
import {Error404Screen} from "./screens/Error404Screen.js";
import {parseUrlRequest} from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/id': ProductScreen

}

const router = async ()=>{

    const request = parseUrlRequest();

    const parseUrl = (request.path ? `/${request.path}`: '/') +
             (request.id ? `/id` : '') +
             (request.action ? `/${request.action}` : '');
                 
    const main = document.getElementById('main-container');

    screen = routes[parseUrl] ? routes[parseUrl]: Error404Screen;

    main.innerHTML = await screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

//This is just a change to test github