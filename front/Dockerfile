#prod
FROM node:18.15.0-alpine AS production

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

#dev
FROM node:18.15.0-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]