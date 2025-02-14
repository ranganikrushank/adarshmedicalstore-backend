# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Strapi project
COPY . .

# Fix permissions to ensure the `strapi` command runs
RUN chmod -R 777 /app/node_modules .cache && chmod +x /app/node_modules/.bin/strapi

# Expose Strapi port
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]