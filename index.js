// For https://render.com
const PORT = process.env.RENDER ? (process.env.PORT || 10000) : 8080,
    REPO = 'https://github.com/' + (process.env.RENDER_GIT_REPO_SLUG || 'humanfriend22/cors-proxy');

const server = require('http').createServer(async (request, response) => {
    if (request.method !== 'GET') {
        response.writeHead(405);
        response.write('Method Not Allowed');
        response.end();
        return;
    }

    if (request.url === '/') {
        response.write(`A simple CORS proxy. See <a href="${REPO}">${REPO}</a>`);
        response.end();
        return;
    }

    if (request.url === '/health') {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
        });
        response.write('ok');
        response.end();
        return;
    }

    const params = new URLSearchParams(request.url.slice(2));

    const url = params.get('url'),
        type = params.get('type') || 'json';

    if (!url || url === '') {
        response.writeHead(400);
        response.write(JSON.stringify({
            code: 400,
            message: 'Please provide valid url',
        }));
        response.end();
        return;
    }

    if (type !== 'json' && type !== 'text') {
        response.writeHead(400);
        response.write(JSON.stringify({
            code: 400,
            message: 'Invalid type (json or text)',
        }));
        response.end();
        return;
    }

    if (url && url !== '') {
        const externalResponse = await fetch(url);
        const data = type === 'text' ? await externalResponse.text() : await externalResponse.json();
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': type === 'text' ? 'text/html; charset=utf-8' : 'application/json'
        });
        response.write(JSON.stringify(data));
        response.end();
        return;
    }

    console.error('Checks failed!');
    console.error(url);
    response.writeHead(500);
    response.end();
});

console.log('Server Created! See https://github.com/humanfriend22/cors-proxy for documentation.');

console.log('Listening on port ' + PORT);
server.listen(PORT);
