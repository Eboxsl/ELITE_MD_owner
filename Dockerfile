# Use an official Node.js runtime as a parent image
FROM node:lts-buster

# Install additional dependencies
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package.json .

# Install Node.js dependencies including axios and yt-search
RUN npm install && npm install -g qrcode-terminal pm2 && npm install ytdl-core@latest

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
