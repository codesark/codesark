FROM node:18.12-bullseye-slim as build

WORKDIR /usr/app

COPY package*.json ./
COPY package-lock.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build

FROM nginx:1.22.1
COPY --from=build /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
