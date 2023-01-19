FROM node:18.12-alpine
# FROM --platform=$BUILDPLATFORM node:18.12-alpine
# FROM --platform=$BUILDPLATFORM node:18.12-alpine as build

# ARG TARGETPLATFORM
# ARG BUILDPLATFORM

ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ARG NEXT_PUBLIC_SANITY_API_TOKEN
ARG NEXT_PUBLIC_BASE_URL 'https://savinaykumar.com'

ENV NEXT_PUBLIC_SANITY_PROJECT_ID $NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET $NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_SANITY_API_TOKEN $NEXT_PUBLIC_SANITY_API_TOKEN

RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM"

WORKDIR /usr/app

RUN npm install -g @sanity/cli

COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Build app
COPY . .
# RUN npm run build

CMD [ "npm", "run", "dev" ]

# FROM nginx:1.22.1
# COPY --from=build /usr/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
