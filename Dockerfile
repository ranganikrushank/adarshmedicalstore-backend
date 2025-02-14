# Use an official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Strapi project
COPY . .

# Expose Strapi port (needed for Render)
EXPOSE 1337

# Give permission to Strapi files
RUN chmod -R 777 /app/node_modules .cache && chmod +x /app/node_modules/.bin/strapi

# Start Strapi in production mode
CMD ["npm", "run", "start"]