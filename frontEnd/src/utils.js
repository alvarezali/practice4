const parseUrlRequest = ()=> {

    const url = window.location.hash.toLocaleLowerCase();

    const request = url.split('/');

    return {
        path: request[1],
        id: request[2],
        action: request[3]
    };
}

export {parseUrlRequest};