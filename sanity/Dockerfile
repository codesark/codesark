FROM --platform=$BUILDPLATFORM node:18.12-alpine
# FROM --platform=$BUILDPLATFORM node:18.12-alpine as build

ARG TARGETPLATFORM
ARG BUILDPLATFORM

RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build

CMD [ "npm", "start" ]