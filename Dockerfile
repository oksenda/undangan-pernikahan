# Step 1: Base image Node.js
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source code
COPY . .

# Build Next.js project (untuk static export / production)
RUN npm run build

# Step 2: Production image
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json & node_modules dari builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npx", "next", "start", "-p", "3000"]
