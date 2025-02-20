# Use a Node.js image for building
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the project and build it
COPY . .
RUN yarn build

# Use Nginx to serve the built app
FROM nginx:alpine

# Copy the built frontend files to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx serves from
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
