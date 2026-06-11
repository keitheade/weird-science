#!/bin/sh
set -e

if [ ! -f /app/data/weird-science.db ]; then
  echo "Initializing database..."
  npx prisma db push --schema=/app/prisma/schema.prisma
  npx tsx /app/prisma/seed.ts
fi

exec node server.js
