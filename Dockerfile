FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm ci

# Bundle app source

COPY . .

# Run the app
ENV NODE_ENV = production

EXPOSE 5500

CMD ["npm", "start"]




