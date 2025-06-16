FROM node:18

# Install MeCab
RUN apt-get update && \
    apt-get install -y mecab libmecab-dev mecab-ipadic-utf8 && \
    apt-get clean

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 9292

# Run the app
CMD [ "npm", "start" ]
