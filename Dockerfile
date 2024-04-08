# syntax=docker/dockerfile:1

# Stage 1: Build
# Start with a Node.js base image for building the Next.js app
FROM node:16-alpine AS builder

# Set working directory
WORKDIR /app

# Copy your project files into the Docker image
COPY . .

# Install dependencies, including the specific packages
RUN npm install && \
    npm install gray-matter remark remark-html date-fns

# Build your Next.js application
RUN npm run build

# Stage 2: Run
# Use a Node.js base image for the runtime environment
FROM node:16-alpine AS runner

WORKDIR /app

# Copy over the built artifacts from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]