FROM node:8.12.0-alpine

WORKDIR /app
COPY . /app

RUN yarn add pm2 && yarn --production && yarn run link

EXPOSE 8080

CMD ["./node_modules/.bin/pm2-runtime", "start", "ecosystem.config.js"]
