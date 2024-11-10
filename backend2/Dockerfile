# backend2/Dockerfile
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install -g nodemon && npm install

# Copy the rest of the backend code
COPY . .

# Expose the port your backend uses
EXPOSE 5000

# Command to run the backend with nodemon
CMD ["nodemon", "index.js"]
