FROM node:carbon

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "start"]