FROM --platform=$BUILDPLATFORM node:21-alpine AS builder

RUN apk add make g++ alpine-sdk python3 py3-pip
RUN npm i -g pnpm

WORKDIR /app

COPY . .
# Exclude packages/raycast -- just delete it...
RUN rm -rf packages/raycast
RUN pnpm install
RUN pnpm build:core

ENV TZ=Asia/Shanghai

EXPOSE 3000

ENTRYPOINT ["node", "--enable-source-maps", "./packages/core/dist/index.cjs"]