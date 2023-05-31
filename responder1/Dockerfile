FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install ws && \
    npm ci --production

COPY server.js ./

CMD ["node", "server.js"]
