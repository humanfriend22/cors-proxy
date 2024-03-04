const express = require('express');

// Configuration
const PORT = process.env.NODE_ENV === 'production' ? (process.env.PORT || 10000) : 8080,
    REPO = 'https://github.com/' + (process.env.RENDER_GIT_REPO_SLUG || 'humanfriend22/cors-proxy');

// Initialize Express App
const app = express();

app.get('/', async (request, response) => {
    const { url } = request.query;

    if (!url) return response.redirect(REPO);

    try {
        if (url === '') {
            response.json({
                code: 400,
                message: 'ERR_BAD_REQUEST',
                url
            });
            return;
        }

        // The whole point of this proxy: CORS!
        response.setHeader('Access-Control-Allow-Origin', '*');

        response.json(
            await (await fetch(url)).json()
        );
    } catch (error) {
        // Filter Error Text
        const status = parseInt(error.message.replace('Request failed with status code ', ''));

        // Fallback Status Code
        const code = status || 400;

        response.status(status).json({
            code,
            message: error.code,
            url
        });
    };
});

// Health Endpoint
app.get('/health', (_, response) => {
    response.sendStatus(200);
});

app.listen(PORT);