# Use Node.js 20
FROM node:20

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Build your app
RUN pnpm run build

# Expose port (change this if needed)
EXPOSE 3000

# Start the app
CMD ["pnpm", "run", "preview"]
