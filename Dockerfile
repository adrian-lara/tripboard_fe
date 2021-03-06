FROM node:9.5
MAINTAINER Adrian Lara - adrianblara@gmail.com

WORKDIR /user/src/app

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
