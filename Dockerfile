# Stage 1: Build the application
FROM alpine:latest AS builder

RUN apk add --no-cache nodejs npm && apk add --no-cache mysql-client

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM alpine:latest

RUN apk add --no-cache nodejs && apk add --no-cache mysql-client

WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "server.js"]
