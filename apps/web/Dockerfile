# Multi-stage Dockerfile for React SSR Web App

# Base stage
FROM node:18-alpine AS base
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/

# Development stage
FROM base AS development

# Install all dependencies
RUN npm ci

# Copy source code
COPY apps/web ./apps/web
COPY tsconfig.json ./
COPY .eslintrc.js ./
COPY .prettierrc ./

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Default command
CMD ["npm", "run", "dev"]

# Dependencies stage (for production)
FROM base AS dependencies

# Install production dependencies only
RUN npm ci --only=production && npm cache clean --force

# Build stage
FROM base AS build

# Install all dependencies
RUN npm ci

# Copy source code
COPY apps/web ./apps/web
COPY tsconfig.json ./

# Build the application
RUN cd apps/web && npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    libc6-compat \
    curl

# Create non-root user
RUN addgroup --system --gid 1001 react && \
    adduser --system --uid 1001 react

# Copy production dependencies
COPY --from=dependencies --chown=react:react /app/node_modules ./node_modules

# Copy built application
COPY --from=build --chown=react:react /app/apps/web/dist ./dist
COPY --from=build --chown=react:react /app/apps/web/package*.json ./

# Switch to non-root user
USER react

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000 || exit 1

# Production command
CMD ["npm", "start"]
