FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x src/index.js

CMD ["node", "src/index.js"]
