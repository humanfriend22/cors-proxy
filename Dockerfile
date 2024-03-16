FROM node:20.11.1-bullseye-slim

WORKDIR /usr/src

COPY index.js .

EXPOSE 8080

CMD [ "node", "index.js" ]