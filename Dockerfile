FROM node:19.3-slim

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig*.json ./

# Install app dependencies
#RUN npm install -g @nestjs/cli
RUN npm install


# Creates a "dist" folder with the production build
RUN npm run build:all