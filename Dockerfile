<<<<<<< HEAD
# Use Node.js official image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./
=======
# Use the Node.js image
FROM node:19-alpine

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./
>>>>>>> e16e16cd0a59bff8be7181af9d115df13c7efb81

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

<<<<<<< HEAD
# Expose the Next.js development port
EXPOSE 3000

# Run the Next.js app in development mode
CMD ["npm", "run", "dev"]
=======
# Expose the port your app uses
EXPOSE 8080

# Run the application
CMD ["node", "app.js"]
>>>>>>> e16e16cd0a59bff8be7181af9d115df13c7efb81
