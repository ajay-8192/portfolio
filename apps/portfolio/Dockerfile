# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY ../../package*.json ./
COPY ../../tsconfig.base.json ./
COPY ../../tsconfig.json ./
COPY ./ ./apps/portfolio
RUN npm ci
RUN npm run build --workspace=apps/portfolio

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/apps/portfolio/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 