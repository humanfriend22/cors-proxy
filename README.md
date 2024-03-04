# Lightweight Cors Proxy

[Render]: https://render.com

This is a simple cors proxy for development.

I host my proxy on [Render] as a `Web Service`.

> DON'T USE THIS IN PRODUCTION!

### Usage
After getting the url from your deploy, pass your url into the `url` query parameter
```
https://myserver.host.com/?url={your api endpoint that returns JSON}
```

There isn't any support for headers or other data types like text as I didn't need it. Open an issue if you think that would be helpful in a lightweight proxy like this.

### Hosting
1. Fork this repository
2. Create a new `Web Service` on [Render] with your fork. The defaults will work but I suggest changing the `region` to the closest one to you
3. Navigate to `{your service url}/health` to see if its online.