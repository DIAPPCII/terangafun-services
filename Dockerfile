FROM node:19.3-slim

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY tsconfig*.json ./
COPY start-all-servers.js ./

# Install app dependencies
#RUN npm install -g @nestjs/cli
RUN npm install

# Bundle app source
COPY dist/apps .

# Creates a "dist" folder with the production build
#RUN npm build

# Start the server using the production build
CMD [ "node", "start-all-servers.js" ]