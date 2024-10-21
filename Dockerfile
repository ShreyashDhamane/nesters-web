FROM node:20-alpine
WORKDIR /nesters/
COPY public/ /nesters/public
COPY src/ /nesters/src
COPY package.json /nesters/
COPY tsconfig.json /nesters/
RUN npm install
CMD [ "npm", "start" ]