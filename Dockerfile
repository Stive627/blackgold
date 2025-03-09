# Use Node.js official image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the Next.js development port
EXPOSE 3000

# Run the Next.js app in development mode
CMD ["npm", "run", "dev"]
