FROM oven/bun:1 AS builder
WORKDIR /app
COPY package*.json ./

RUN bun install
COPY . .

RUN bunx prisma generate
RUN bun run build

FROM node:22-alpine
WORKDIR /app

COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]