FROM node:17-alpine3.14 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install -g @nestjs/cli

RUN npm install 

COPY . .

RUN npm run build

ENTRYPOINT ["node", "dist/main"]