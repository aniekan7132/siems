# Development stage
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Expose port
EXPOSE ${VITE_PORT:-3001}

# Start development server
CMD ["sh", "-c", "yarn dev --host 0.0.0.0 --port ${VITE_PORT:-3001}"] 