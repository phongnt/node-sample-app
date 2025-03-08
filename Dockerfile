# Stage 1: Build the frontend assets using Node.js
FROM node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install dependencies (including build dependencies like Webpack)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Run the build step to bundle the frontend assets (this will output to dist/)
RUN npm run build

# Stage 2: Create the final image with only the necessary runtime dependencies
FROM node:22-slim

# Set the working directory inside the container
WORKDIR /app

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json /app/

# Install only runtime dependencies (no dev dependencies)
RUN npm install --only=production

# Install express if it's not included in the package.json (for simplicity)
# RUN npm install express --only=production

# Set environment variable for the port
ENV PORT=8080

# Expose the port the app runs on
EXPOSE $PORT

# Copy the Express app and serve the static files from the dist folder
COPY --from=build /app/index.js /app/

# Start the Express server
CMD ["npm", "start"]