# Use the official Node.js image from the Docker Hub
FROM node:22

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application code to the container image
COPY . .

# Set environment variable for the port
ENV PORT=8080

# Expose the port the app runs on
EXPOSE $PORT

# Run the application
CMD ["node", "index.js"]