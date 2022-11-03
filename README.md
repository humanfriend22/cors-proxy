# Cors Proxy

[Render]: https://render.com

This is a simple cors proxy for development.

I host my proxy on [Render] as a `Web Service` and then link the `/health` endpoint to a cron job at [cron-job.org](https://cron-job.org)

### Hosting
1. Fork this repository
2. Create a new `Web Service` on [Render] with your fork. The defaults will work but I suggest changing the `region` to the closest one to you
3. Navigate to `{your service url}/health` to see if its online.