const { route } = require("@hapi/hapi/lib/cors");

const routes = [
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            const {lang } = request.query;

            if(lang == 'id'){
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    }
];

module.exports = routes;