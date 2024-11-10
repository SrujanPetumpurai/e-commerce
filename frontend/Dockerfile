# frontend/Dockerfile
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the port your frontend uses
EXPOSE 3000

# Command to run the frontend
CMD ["npm", "start"]
