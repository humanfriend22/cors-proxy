# Lightweight Cors Proxy

> DON'T USE THIS IN PRODUCTION!

[Render]: https://render.com

This is a simple cors proxy for development. I used to host it on [Render] but the cold starts were too slow so I Dockerized it: https://hub.docker.com/r/humanfriend22/cors-proxy

### Usage
The api accepts 2 query parameters at the root path:
- 'type': `json` or `text`
- `url`: The api endpoint.

There isn't any support for headers as I didn't need it. Open an issue if you think that would be helpful in a lightweight proxy like this.

### Hosting ([Render])
1. Fork this repository
2. Create a new `Web Service` on [Render] with your fork. The defaults will work but I suggest changing the `region` to the closest one to you
3. Navigate to `{your service url}/health` to see if its online.