FROM node:16-alpine

WORKDIR /gomoku-client

RUN apk add --update python3 make g++

ADD ./package.json ./
ADD ./yarn.lock ./
ADD ./tsconfig.json ./
RUN yarn

ADD ./src ./src

CMD yarn start