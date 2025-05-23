FROM node:20-slim

WORKDIR /usr/src/app

ARG _NODE_ENV
ARG _MICROCMS_API
ARG _MICROCMS_SERVEICE_ID
ARG _BASE_URL
ARG _GA_MEASUREMENT_ID

COPY package*.json ./

RUN npm install --omit-dev

ENV NODE_ENV=$_NODE_ENV
ENV MICROCMS_API=$_MICROCMS_API
ENV MICROCMS_SERVEICE_ID=$_MICROCMS_SERVEICE_ID
ENV BASE_URL=$_BASE_URL
ENV GA_MEASUREMENT_ID=$_GA_MEASUREMENT_ID
ENV LANG C.UTF-8
ENV PORT 8080
ENV HOST 0.0.0.0

EXPOSE 8080

COPY . ./

RUN ["npm","run","build"]

CMD [ "node", ".output/server/index.mjs" ]

