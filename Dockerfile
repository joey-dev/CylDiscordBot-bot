FROM node:16.14.2

WORKDIR /usr/src/app

#ADD . /usr/src/app

RUN chown -Rh node:node /usr/src/app

USER node



CMD [ "sh", "-c", "npm install && npm run start" ]
