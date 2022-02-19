FROM node:lts-alpine

RUN mkdir -p /home/node/web/node_modules && chown -R node:node /home

WORKDIR /home/node/web

COPY package.json yarn.* ./

USER node

RUN yarn

COPY . . 

EXPOSE 3000

ENTRYPOINT ["./init.sh"]