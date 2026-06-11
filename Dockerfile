FROM node:20-alpine AS base
RUN apk add --no-cache openssl libc6-compat

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p data
ENV DATABASE_URL="file:./data/weird-science.db"
RUN npx prisma generate
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_URL="file:/app/data/weird-science.db"
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
# Full node_modules for one-time DB init (prisma db push + tsx seed)
COPY --from=deps /app/node_modules /app/db-tools/node_modules
COPY --from=builder /app/package.json ./package.json
COPY scripts/docker-entrypoint.sh /app/docker-entrypoint.sh
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data && chmod +x /app/docker-entrypoint.sh
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["/app/docker-entrypoint.sh"]
