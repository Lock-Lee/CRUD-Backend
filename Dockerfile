FROM node:18
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
EXPOSE 3000
CMD ["node", "./dist/app.js"]